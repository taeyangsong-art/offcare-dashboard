/*
 * 🎮 원격 상점 + VOC 편집 등 팀 공유 저장소 — Google Apps Script 웹앱 (동시편집 안전 버전)
 *
 * 저장 구조: 셀 A1 에 하나의 JSON 블롭
 *   { _v:2, players:{emp:{...}}, vocEdit:{key:{...}}, vocPraise:{key:{...}}, vocComment:{mkey:"..."}, dutyOver:{key:"이름"} }
 *
 * 동시편집 안전:
 *   - POST { patch: {...} }  → LockService 로 잠근 뒤 기존 블롭에 patch만 병합(2단계 깊이, 값 null이면 삭제)
 *     → 서로 다른 항목을 동시에 고쳐도 덮어쓰이지 않음.
 *   - POST { game: {...} }   → (patch 없을 때만) 전체 덮어쓰기 (구버전 호환)
 *
 * ── 재배포 방법 ──
 * 1. 이 코드 전체를 기존 Apps Script 프로젝트에 붙여넣기(덮어쓰기) → 저장
 * 2. 오른쪽 위 [배포] → [배포 관리] → 기존 웹앱 항목의 ✏️(편집) → 버전 "새 버전" 선택 → [배포]
 *    (URL은 그대로 유지됩니다 — index.html 의 GAME_API 변경 불필요)
 */

const SHEET_ID = '';   // 비우면 이 스크립트에 연결된(컨테이너) 시트 사용

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
  var out = ContentService.createTextOutput(JSON.stringify(obj));
  out.setMimeType(ContentService.MimeType.JSON);
  return out;
}

// 2단계 깊이 병합: patch = { section: { key: value|null } }. value===null 이면 그 key 삭제.
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
    lock.waitLock(15000);   // 최대 15초 대기 (동시 요청 직렬화)
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    let cur = readBlob_();
    if (body.patch) {
      cur = mergePatch_(cur, body.patch);
    } else if (body.game) {
      cur = body.game;      // patch 없을 때만 전체 덮어쓰기 (구버전 호환)
    }
    store_().getRange('A1').setValue(JSON.stringify(cur));
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (e2) {}
  }
}
