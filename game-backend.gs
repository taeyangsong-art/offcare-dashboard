// Team shared store for game + VOC edits (concurrency safe).
// POST {patch}: LockService + per-key merge (null value deletes the key).
// POST {game} : full overwrite, only when no patch (legacy compatible).

var SHEET_ID = '';

function store_() {
  var ss;
  if (SHEET_ID) {
    ss = SpreadsheetApp.openById(SHEET_ID);
  } else {
    ss = SpreadsheetApp.getActiveSpreadsheet();
  }
  var sh = ss.getSheetByName('store');
  if (!sh) {
    sh = ss.insertSheet('store');
  }
  return sh;
}

function readBlob_() {
  var v = store_().getRange('A1').getValue();
  if (!v) {
    return {};
  }
  try {
    return JSON.parse(v);
  } catch (e) {
    return {};
  }
}

function json_(obj) {
  var s = JSON.stringify(obj);
  var out = ContentService.createTextOutput(s);
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}

function mergePatch_(base, patch) {
  if (!base) {
    base = {};
  }
  for (var section in patch) {
    var pv = patch[section];
    if (pv && typeof pv === 'object' && !(pv instanceof Array)) {
      if (!base[section] || typeof base[section] !== 'object') {
        base[section] = {};
      }
      for (var key in pv) {
        if (pv[key] === null) {
          delete base[section][key];
        } else {
          base[section][key] = pv[key];
        }
      }
    } else {
      base[section] = pv;
    }
  }
  return base;
}

function doGet() {
  return json_({ game: readBlob_() });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    var raw = '{}';
    if (e && e.postData && e.postData.contents) {
      raw = e.postData.contents;
    }
    var body = JSON.parse(raw);
    var cur = readBlob_();
    if (body.patch) {
      cur = mergePatch_(cur, body.patch);
    } else if (body.game) {
      cur = body.game;
    }
    var s = JSON.stringify(cur);
    store_().getRange('A1').setValue(s);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try {
      lock.releaseLock();
    } catch (e2) {
    }
  }
}
