// Team shared store + per-employee PIN/OTP auth (concurrency safe).
// Data (A1): { _v, players, vocEdit, vocPraise, vocComment, dutyOver }
// Secrets (A2, NEVER returned by doGet): { pins:{emp:{hash,salt}}, otps:{emp:{code,exp}}, fails:{emp:{count,until}} }
//
// POST {patch}/{game} : save data (patch merge / full overwrite).
// GET  ?action=...     : auth (status/checkPin/sendOtp/setPin/setPinDirect).

var SHEET_ID = '';

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
  var ss;
  if (SHEET_ID) { ss = SpreadsheetApp.openById(SHEET_ID); }
  else { ss = SpreadsheetApp.getActiveSpreadsheet(); }
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
  var p = (e && e.parameter) || {};
  if (p.action) { return handleAuth_(p); }
  return json_({ game: readBlob_() });
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

  return json_({ ok: false, error: 'unknown_action' });
}
