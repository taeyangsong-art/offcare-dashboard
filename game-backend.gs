// Team shared store + per-employee PIN/OTP auth (concurrency safe).
// Data (A1): { _v, players, vocEdit, vocPraise, vocComment, dutyOver }
// Secrets (A2, NEVER returned by doGet): { pins:{emp:{hash,salt}}, otps:{emp:{code,exp}}, fails:{emp:{count,until}} }
//
// POST {patch}/{game} : save data (patch merge / full overwrite).
// GET  ?action=...     : auth (status/checkPin/sendOtp/setPin/setPinDirect).

var SHEET_ID = '';
var ADMIN_KEY = 'CHANGE_ME_1234';   // CHANGE THIS to your own secret. Used for admin PIN reset.

// Employee emails for OTP. Keys are \u escapes of the app names (pure ASCII, paste-proof).
// Fill the empty '' parts with each person's @ishopcare email.
var EMP_EMAIL = {
  '송태양': 'taeyang.song@ishopcare.co.kr',  // song tae-yang
  '김기범': '',  // gim gi-beom
  '서상원': '',  // seo sang-won
  '김규빈': '',  // gim gyu-bin
  '김동욱': '',  // gim dong-uk
  '김현기': '',  // gim hyeon-gi
  '배선유': '',  // bae seon-yu
  '최민석': '',  // choe min-seok
  '심성현': '',  // sim seong-hyeon
  '고경림': ''   // go gyeong-rim
};
function norm_(s) { try { return ('' + s).normalize('NFC'); } catch (x) { return '' + s; } }
function emailOf_(emp) {
  if (EMP_EMAIL[emp]) { return EMP_EMAIL[emp]; }
  var e = norm_(emp);
  for (var k in EMP_EMAIL) {
    if (norm_(k) === e && EMP_EMAIL[k]) { return EMP_EMAIL[k]; }
  }
  return '';
}

function store_() {
  var ss = null;
  if (SHEET_ID) {
    ss = SpreadsheetApp.openById(SHEET_ID);
  } else {
    var props = PropertiesService.getScriptProperties();
    var id = props.getProperty('STORE_SHEET_ID');
    if (id) {
      try { ss = SpreadsheetApp.openById(id); } catch (e) { ss = null; }
    }
    if (!ss) {
      try { ss = SpreadsheetApp.getActiveSpreadsheet(); } catch (e) { ss = null; }
    }
    if (!ss) {
      ss = SpreadsheetApp.create('offcare-dashboard-store');
      props.setProperty('STORE_SHEET_ID', ss.getId());
    } else if (!id) {
      try { props.setProperty('STORE_SHEET_ID', ss.getId()); } catch (e) {}
    }
  }
  var sh = ss.getSheetByName('store');
  if (!sh) { sh = ss.insertSheet('store'); }
  return sh;
}

function readBlob_() {
  var v = store_().getRange('A1').getValue();
  if (!v) { return {}; }
  try { return JSON.parse(v); } catch (e) { return {}; }
}
function readSecret_() {
  var v = store_().getRange('A2').getValue();
  if (!v) { return {}; }
  try { return JSON.parse(v); } catch (e) { return {}; }
}
function saveSecret_(s) { store_().getRange('A2').setValue(JSON.stringify(s)); }

function json_(obj) {
  var s = JSON.stringify(obj);
  var out = ContentService.createTextOutput(s);
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}

function sha_(str) {
  var raw = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, str, Utilities.Charset.UTF_8);
  var hex = '';
  for (var i = 0; i < raw.length; i++) {
    var b = (raw[i] + 256) % 256;
    hex += ('0' + b.toString(16)).slice(-2);
  }
  return hex;
}
function genCode_() { return ('000000' + Math.floor(Math.random() * 1000000)).slice(-6); }

// 필드 단위로 합칠 섹션.
// VOC 한 건에는 상태·처리내용·업종·저점사유가 같이 붙어 있어서, 두 사람이 같은 건의
// 다른 필드를 비슷한 시각에 고치는 일이 잦다. 키를 통째로 대입하면 나중 사람이 보낸
// 객체에 앞사람 필드가 없어서 앞사람 편집이 사라진다 → 여기서만 한 겹 더 들어가 합친다.
// (players 는 레코드 타임스탬프(_t) 최신 우선이라 통째 대입이 맞다 — 넣지 않는다)
var DEEP_MERGE = { vocEdit: true, vocPraise: true };

function mergePatch_(base, patch) {
  if (!base) { base = {}; }
  for (var section in patch) {
    var pv = patch[section];
    if (pv && typeof pv === 'object' && !(pv instanceof Array)) {
      if (!base[section] || typeof base[section] !== 'object') { base[section] = {}; }
      for (var key in pv) {
        var val = pv[key];
        // null = 키 삭제(구 클라이언트 호환). 신 클라이언트는 ''(묘비)를 보낸다 —
        // 키를 지우면 그 항목을 아직 들고 있는 다른 브라우저가 '나만 가진 값'으로 보고
        // 되돌려 올려서 삭제가 부활한다.
        if (val === null) { delete base[section][key]; continue; }
        var cur = base[section][key];
        if (DEEP_MERGE[section] &&
            val && typeof val === 'object' && !(val instanceof Array) &&
            cur && typeof cur === 'object' && !(cur instanceof Array)) {
          for (var f in val) {
            if (val[f] === null) { delete cur[f]; }   // 그 필드만 지우라는 표시
            else { cur[f] = val[f]; }
          }
        } else {
          base[section][key] = val;
        }
      }
    } else {
      base[section] = pv;
    }
  }
  return base;
}

// 변경 감지용 리비전. 쓰기(doPost)가 일어날 때마다 1씩 증가한다.
// 시트가 아니라 ScriptProperties 에 두는 이유: 50KB 블롭을 읽고 파싱할 필요 없이
// 숫자 하나만 돌려줘서, 클라이언트가 짧은 주기로 찔러봐도 부담이 없게 하려고.
var REV_KEY = 'STORE_REV';
function readRev_() {
  var v = PropertiesService.getScriptProperties().getProperty(REV_KEY);
  var n = parseInt(v, 10);
  return isNaN(n) ? 0 : n;
}
function bumpRev_() {
  var props = PropertiesService.getScriptProperties();
  var n = readRev_() + 1;
  props.setProperty(REV_KEY, String(n));
  return n;
}

function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    // 경량 변경 확인 — 시트를 건드리지 않고 리비전 숫자만 반환(응답 수십 바이트).
    if (p.action === 'rev') { return json_({ ok: true, rev: readRev_() }); }
    if (p.action) { return handleAuth_(p); }
    // rev 를 블롭보다 '먼저' 읽는다. 반대 순서면 두 읽기 사이에 들어온 쓰기를
    // 클라이언트가 이미 받은 것으로 착각해 그 변경을 영영 놓친다.
    var rev = readRev_();
    return json_({ game: readBlob_(), rev: rev });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    var raw = '{}';
    if (e && e.postData && e.postData.contents) { raw = e.postData.contents; }
    var body = JSON.parse(raw);
    var cur = readBlob_();
    if (body.patch) { cur = mergePatch_(cur, body.patch); }
    else if (body.game) { cur = body.game; }
    store_().getRange('A1').setValue(JSON.stringify(cur));
    var rev = bumpRev_();                 // 락 안에서 증가 → 다른 클라이언트가 다음 rev 조회 때 감지
    return json_({ ok: true, rev: rev });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
}

function handleAuth_(p) {
  var emp = norm_(p.emp || '');
  var action = p.action;

  if (action === 'status') {
    var s0 = readSecret_();
    var pins0 = s0.pins || {};
    return json_({ ok: true, hasPin: !!pins0[emp], hasEmail: !!emailOf_(emp), got: emp });
  }

  if (action === 'checkPin') {
    var lock1 = LockService.getScriptLock();
    try {
      lock1.waitLock(10000);
      var sec = readSecret_();
      sec.pins = sec.pins || {}; sec.fails = sec.fails || {};
      var f = sec.fails[emp];
      if (f && f.until && f.until <= Date.now()) { delete sec.fails[emp]; f = null; }
      if (f && f.until && f.until > Date.now()) { saveSecret_(sec); return json_({ ok: false, locked: true }); }
      var pin = sec.pins[emp];
      if (!pin) { return json_({ ok: false, error: 'no_pin' }); }
      var ok = (sha_(String(p.pin) + pin.salt) === pin.hash);
      if (ok) { delete sec.fails[emp]; }
      else { var cnt = (f ? f.count : 0) + 1; sec.fails[emp] = { count: cnt, until: cnt >= 5 ? Date.now() + 600000 : 0 }; }
      saveSecret_(sec);
      return json_({ ok: ok, locked: false });
    } finally { try { lock1.releaseLock(); } catch (e) {} }
  }

  if (action === 'sendOtp') {
    var email = emailOf_(emp);
    if (!email) { return json_({ ok: false, error: 'no_email' }); }
    var lock2 = LockService.getScriptLock();
    try {
      lock2.waitLock(10000);
      var sec2 = readSecret_(); sec2.otps = sec2.otps || {};
      var code = genCode_();
      sec2.otps[emp] = { code: code, exp: Date.now() + 600000 };
      saveSecret_(sec2);
      MailApp.sendEmail(email, '[Offcare 원격상점] 인증코드', emp + ' auth code: ' + code + '\n10 min valid. Ignore if not requested.');
      return json_({ ok: true, sent: true });
    } finally { try { lock2.releaseLock(); } catch (e) {} }
  }

  if (action === 'setPin' || action === 'setPinDirect') {
    var lock3 = LockService.getScriptLock();
    try {
      lock3.waitLock(10000);
      var sec3 = readSecret_(); sec3.pins = sec3.pins || {}; sec3.otps = sec3.otps || {}; sec3.fails = sec3.fails || {};
      if (action === 'setPinDirect') {
        if (sec3.pins[emp]) { return json_({ ok: false, error: 'pin_exists' }); }
      } else {
        var o = sec3.otps[emp];
        if (!o || o.code !== String(p.otp) || Date.now() > o.exp) { return json_({ ok: false, error: 'bad_otp' }); }
        delete sec3.otps[emp];
      }
      var pinStr = String(p.pin || '');
      if (pinStr.length < 4) { return json_({ ok: false, error: 'short_pin' }); }
      var salt = sha_(emp + Date.now() + Math.random());
      sec3.pins[emp] = { hash: sha_(pinStr + salt), salt: salt };
      delete sec3.fails[emp];
      saveSecret_(sec3);
      return json_({ ok: true });
    } finally { try { lock3.releaseLock(); } catch (e) {} }
  }

  if (action === 'clearPin') {
    if (String(p.key) !== ADMIN_KEY) { return json_({ ok: false, error: 'bad_key' }); }
    var lock4 = LockService.getScriptLock();
    try {
      lock4.waitLock(10000);
      var sec4 = readSecret_(); sec4.pins = sec4.pins || {}; sec4.fails = sec4.fails || {};
      delete sec4.pins[emp]; delete sec4.fails[emp];
      saveSecret_(sec4);
      return json_({ ok: true });
    } finally { try { lock4.releaseLock(); } catch (e) {} }
  }

  return json_({ ok: false, error: 'unknown_action' });
}

/* =========================================================================
 * 슬랙 새 글 감지 → GitHub 워크플로 즉시 실행 (1분 시간 트리거)
 *
 * 왜 필요한가: 워크플로 cron 은 '*​/10' 인데 GitHub 무료 러너가 예약 실행을
 * 건너뛰어 실제로는 15분마다만 돈다(커밋 시각이 정확히 :00/:15/:30/:45 격자).
 * 집계 작업 자체는 ~30초라, 느린 건 처리가 아니라 '시작을 기다리는 시간'이다.
 * → 1분마다 슬랙만 훑어보고 새 글이 있으면 repository_dispatch 로 즉시 깨운다.
 *
 * 설치(편집기에서 1회): installSlackWatchTrigger() 실행
 * 필요한 스크립트 속성: SLACK_BOT_TOKEN, GITHUB_TOKEN
 * 동작 확인: testSlackWatch() 실행 후 실행 로그 확인
 * ========================================================================= */

// 감시 대상 채널. 워크플로는 실행될 때마다 '모든' 채널을 다시 집계하므로,
// 여기 두 채널만 봐도 나머지(명의변경·배달·VOC)까지 같이 최신화된다.
// 더 넣고 싶으면 추가하면 되지만, 채널 하나당 1분마다 UrlFetch 가 한 번 더 나간다.
var WATCH_CHANNELS = [
  { id: 'C08740SFT1S', name: '메뉴요청' },
  { id: 'C09HRUSG4TX', name: 'AS요청' }
];
var GH_REPO = 'taeyangsong-art/offcare-dashboard';
var GH_EVENT = 'slack-new-message';      // 워크플로의 repository_dispatch types 와 일치해야 함
var WATCH_HOURS = { from: 9, to: 23 };   // KST 업무시간 밖에는 트리거 실행시간을 쓰지 않는다

function prop_(k) { return PropertiesService.getScriptProperties().getProperty(k) || ''; }

// 최근 글 + 최근 스레드 댓글까지 반영한 채널 지문.
// conversations.history 는 스레드 댓글이 달려도 새 항목을 만들지 않으므로,
// 부모 글의 latest_reply 까지 지문에 넣어야 '댓글로 들어온 요청'도 감지된다.
function channelSignature_(chId, token) {
  var url = 'https://slack.com/api/conversations.history?channel=' + chId + '&limit=10';
  var res = UrlFetchApp.fetch(url, {
    headers: { Authorization: 'Bearer ' + token },
    muteHttpExceptions: true
  });
  var j = JSON.parse(res.getContentText());
  if (!j.ok) { throw new Error('slack: ' + j.error); }
  var msgs = j.messages || [];
  var parts = [];
  for (var i = 0; i < msgs.length; i++) {
    parts.push(msgs[i].ts + ':' + (msgs[i].latest_reply || ''));
  }
  return parts.join(',');
}

function watchSlackAndDispatch() {
  var props = PropertiesService.getScriptProperties();
  var hour = parseInt(Utilities.formatDate(new Date(), 'Asia/Seoul', 'H'), 10);
  if (hour < WATCH_HOURS.from || hour >= WATCH_HOURS.to) { return; }   // 업무시간 밖

  var token = prop_('SLACK_BOT_TOKEN');
  if (!token) { console.log('SLACK_BOT_TOKEN 스크립트 속성이 없습니다.'); return; }

  var changed = [];
  for (var i = 0; i < WATCH_CHANNELS.length; i++) {
    var ch = WATCH_CHANNELS[i];
    var key = 'WATCH_SIG_' + ch.id;
    try {
      var sig = channelSignature_(ch.id, token);
      var prev = props.getProperty(key);
      props.setProperty(key, sig);
      if (prev === null) { continue; }            // 최초 실행 — 기준값만 잡고 넘어감
      if (prev !== sig) { changed.push(ch.name); }
    } catch (e) {
      console.log('채널 확인 실패(' + ch.name + '): ' + e);   // 한 채널이 죽어도 나머지는 계속
    }
  }
  if (!changed.length) { return; }

  // 실행이 겹쳐 몰리는 것 방지. 워크플로 쪽 concurrency 로도 직렬화되지만 여기서 한 번 더 거른다.
  var last = parseInt(props.getProperty('WATCH_LAST_DISPATCH') || '0', 10);
  if (Date.now() - last < 55000) { console.log('직전 실행과 너무 가까움 — 건너뜀'); return; }

  if (dispatchGithub_(changed)) {
    props.setProperty('WATCH_LAST_DISPATCH', String(Date.now()));
  }
}

function dispatchGithub_(reasons) {
  var tok = prop_('GITHUB_TOKEN');
  if (!tok) { console.log('GITHUB_TOKEN 스크립트 속성이 없습니다.'); return false; }
  var res = UrlFetchApp.fetch('https://api.github.com/repos/' + GH_REPO + '/dispatches', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + tok,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    payload: JSON.stringify({ event_type: GH_EVENT, client_payload: { reason: reasons.join(',') } }),
    muteHttpExceptions: true
  });
  var code = res.getResponseCode();
  if (code === 204) { console.log('워크플로 실행 요청 성공 — ' + reasons.join(',')); return true; }
  console.log('워크플로 실행 요청 실패 ' + code + ': ' + res.getContentText().slice(0, 200));
  return false;
}

// --- 편집기에서 직접 실행하는 도우미들 ---

// 1분 트리거 설치(중복 방지를 위해 기존 것 제거 후 재설치)
function installSlackWatchTrigger() {
  var ts = ScriptApp.getProjectTriggers();
  for (var i = 0; i < ts.length; i++) {
    if (ts[i].getHandlerFunction() === 'watchSlackAndDispatch') { ScriptApp.deleteTrigger(ts[i]); }
  }
  ScriptApp.newTrigger('watchSlackAndDispatch').timeBased().everyMinutes(1).create();
  console.log('1분 트리거를 설치했습니다.');
}

function removeSlackWatchTrigger() {
  var ts = ScriptApp.getProjectTriggers(), n = 0;
  for (var i = 0; i < ts.length; i++) {
    if (ts[i].getHandlerFunction() === 'watchSlackAndDispatch') { ScriptApp.deleteTrigger(ts[i]); n++; }
  }
  console.log('트리거 ' + n + '개를 제거했습니다.');
}

// 설정이 맞는지 점검 — 실제 dispatch 는 하지 않고 상태만 찍는다
function testSlackWatch() {
  var token = prop_('SLACK_BOT_TOKEN');
  console.log('SLACK_BOT_TOKEN: ' + (token ? '있음' : '없음 ❌'));
  console.log('GITHUB_TOKEN: ' + (prop_('GITHUB_TOKEN') ? '있음' : '없음 ❌'));
  if (!token) { return; }
  for (var i = 0; i < WATCH_CHANNELS.length; i++) {
    var ch = WATCH_CHANNELS[i];
    try {
      var sig = channelSignature_(ch.id, token);
      var prev = PropertiesService.getScriptProperties().getProperty('WATCH_SIG_' + ch.id);
      console.log(ch.name + ': 읽기 성공 · 최근글 ' + sig.split(',').length + '건 · 저장된 기준값 ' + (prev === null ? '없음(다음 실행에서 생성)' : '있음'));
    } catch (e) {
      console.log(ch.name + ': 읽기 실패 ❌ ' + e + '  (봇이 채널에 초대돼 있는지 확인)');
    }
  }
}
