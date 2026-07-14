// Team shared store for game + VOC edits (concurrency-safe).
// POST {patch}: LockService + per-key merge (null value deletes the key).
// POST {game} : full overwrite, only when no patch (legacy compatible).

const SHEET_ID = '';

function store_() {
  const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('store');
  if (!sh) sh = ss.insertSheet('store');
  return sh;
}

function readBlob_() {
  const v = store_().getRange('A1').getValue();
  if (!v) return {};
  try { return JSON.parse(v); } catch (e) { return {}; }
}

function json_(obj) {
  const out = ContentService.createTextOutput(JSON.stringify(obj));
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}

function mergePatch_(base, patch) {
  base = base || {};
  for (const section in patch) {
    const pv = patch[section];
    if (pv && typeof pv === 'object' && !Array.isArray(pv)) {
      if (!base[section] || typeof base[section] !== 'object') base[section] = {};
      for (const key in pv) {
        if (pv[key] === null) delete base[section][key];
        else base[section][key] = pv[key];
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
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(15000);
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    let cur = readBlob_();
    if (body.patch) {
      cur = mergePatch_(cur, body.patch);
    } else if (body.game) {
      cur = body.game;
    }
    store_().getRange('A1').setValue(JSON.stringify(cur));
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
}
