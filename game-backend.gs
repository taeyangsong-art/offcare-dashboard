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
  '심성현': ''   // sim seong-hyeon
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

function mergePatch_(base, patch) {
  if (!base) { base = {}; }
  for (var section in patch) {
    var pv = patch[section];
    if (pv && typeof pv === 'object' && !(pv instanceof Array)) {
      if (!base[section] || typeof base[section] !== 'object') { base[section] = {}; }
      for (var key in pv) {
        if (pv[key] === null) { delete base[section][key]; }
        else { base[section][key] = pv[key]; }
      }
    } else {
      base[section] = pv;
    }
  }
  return base;
}

function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    if (p.action === 'aiComment') { return aiComment_(p); }   // AI 코멘트 프록시(키는 Script Property)
    if (p.action) { return handleAuth_(p); }
    return json_({ game: readBlob_() });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// ===== AI 코멘트 프록시 =====
// Script Properties에 AI_API_KEY(Anthropic) 필요. 선택: AI_MODEL(기본 claude-haiku-4-5-20251001)
function aiComment_(p) {
  try {
    var props = PropertiesService.getScriptProperties();
    var key = props.getProperty('AI_API_KEY');
    if (!key) { return json_({ ok: false, error: 'no_ai_key' }); }
    var model = props.getProperty('AI_MODEL') || 'claude-haiku-4-5-20251001';
    var kind = p.kind || '항목';
    var summary = p.summary || '';
    var prompt = 'VOC 저점(고객 불만) 인입의 ' + kind + '별 통계입니다. 아래는 각 ' + kind
      + '의 이번 달 건수/비중과 전월 대비 순위·비중 변화입니다.\n\n' + summary
      + '\n\n이 데이터를 바탕으로 팀 먼슬리 발표에 넣을 한국어 코멘트를 2~3문장으로 작성하세요. '
      + '1위 항목, 눈에 띄는 증가/감소, 신규 유입을 짚고 간단한 원인 추정과 액션 제안을 담되, '
      + '주어진 수치 외에 숫자를 지어내지 말고 과장 없이 담백하게 쓰세요.';
    var payload = { model: model, max_tokens: 400, messages: [{ role: 'user', content: prompt }] };
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
      method: 'post', contentType: 'application/json',
      headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify(payload), muteHttpExceptions: true
    });
    var code = res.getResponseCode();
    var data = JSON.parse(res.getContentText());
    if (code >= 300) { return json_({ ok: false, error: 'api_' + code, detail: (data.error && data.error.message) || '' }); }
    var text = '';
    if (data.content) { for (var i = 0; i < data.content.length; i++) { if (data.content[i].type === 'text') text += data.content[i].text; } }
    return json_({ ok: true, text: text });
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
    return json_({ ok: true });
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
