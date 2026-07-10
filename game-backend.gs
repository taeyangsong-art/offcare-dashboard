/*
 * 🎮 원격 상점 게임 데이터 저장소 — Google Apps Script 웹앱 (팀 공유 백엔드)
 *
 * ── 배포 방법 (한 번만) ──
 * 1. https://script.google.com → 새 프로젝트
 * 2. 이 코드 전체를 붙여넣기 → 저장
 * 3. (선택) 상단 SHEET_ID 에 저장용 구글시트 ID를 넣거나, 비워두면 이 스크립트에 새 시트가 자동 연결됨
 *    - 시트 없이 시작하려면: 먼저 https://sheets.new 로 빈 시트 만들고, 주소의 /d/여기ID/ 부분을 SHEET_ID에 붙여넣기
 * 4. 오른쪽 위 [배포] → [새 배포] → 유형 톱니 → [웹 앱]
 *    - 설명: 아무거나 / 실행: 나(본인) / 액세스 권한: "모든 사용자"
 * 5. [배포] → 권한 승인 → 나오는 "웹 앱 URL"(https://script.google.com/macros/s/..../exec) 복사
 * 6. 그 URL을 index.html 의  const GAME_API = "";  안에 붙여넣기 → 커밋/배포
 *    → 이제 팀 전원이 같은 코인·아이템·착장을 공유합니다.
 */

const SHEET_ID = '';   // 비우면 이 스크립트에 연결된(컨테이너) 시트 사용. 특정 시트 쓰려면 시트 ID 입력

function store_() {
  const ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName('store');
  if (!sh) sh = ss.insertSheet('store');
  return sh;
}

function doGet() {
  const val = store_().getRange('A1').getValue();
  const game = val ? JSON.parse(val) : {};
  return ContentService.createTextOutput(JSON.stringify({ game: game }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (body.game) store_().getRange('A1').setValue(JSON.stringify(body.game));
    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
