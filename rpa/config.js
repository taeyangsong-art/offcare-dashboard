// 토플파 RPA 설정. 실제 셀렉터는 SELECTORS 에 채운다 (npx playwright codegen 로 캡처 권장).
const path = require('path');

module.exports = {
  baseUrl: process.env.TOPLPA_URL || 'https://dashboard.tossplace.com/home',   // 2026-07-22 사이트 변경 (구: partners.tossplace.com)
  orgText: process.env.TOPLPA_ORG || '(주)아이샵케어',    // 로그인 직후 조직(워크스페이스) 선택 화면에서 클릭할 조직명(부분 일치)
  authFile: path.join(__dirname, '.auth', 'state.json'), // 로그인 세션(민감) → .gitignore
  shotDir: path.join(__dirname, 'shots'),                 // 단계별 스크린샷
  headless: process.env.HEADLESS === 'true',              // 기본 headed(관찰). 안정화 후 headless.
  channel: process.env.PW_CHANNEL || 'chrome',            // 설치된 Chrome 사용(사내망 chromium 다운로드 차단 우회). Edge면 'msedge'.
  dryRun: process.env.DRY_RUN !== 'false',                // 기본 true — 최종 '등록' 클릭 생략(반자동)
  slowMo: Number(process.env.SLOWMO || 250),              // 사람처럼 천천히(봇탐지 완화)
  timeout: Number(process.env.TIMEOUT || 30000),

  // ── 실제 codegen 기록(2026-07-22, dashboard.tossplace.com)으로 확정한 셀렉터 ──
  SELECTORS: {
    // 로그인/조직선택 완료 판정 — 홈의 '매장' 탭
    loggedIn: 'role=tab[name="매장"]',

    // 공지/프로모션 팝업 닫기 (있을 때만 — 구 사이트 유산, 신 사이트에서도 무해)
    popupDismiss: 'role=button[name="오늘 안 보기"]',

    // 매장 탭 → '검색하기'에 사업자번호 입력(자동 필터) → 상호명 텍스트 클릭
    merchantNav: 'role=tab[name="매장"]',
    merchantSearchInput: 'role=searchbox[name="검색하기"]',
    merchantResultRow: (biz, store) => `text=${store}`,    // --store 인자 필수(오등록 방지)

    // 매장 상세 → 상품 관리
    menuNav: 'role=menuitem[name="매장 상품 관리"]',

    // 엑셀 일괄 추가: 더보기 → '엑셀로 일괄 추가' → 파일 → 업로드
    moreBtn: 'role=button[name="더보기"]',
    bulkRegisterOpen: 'text=엑셀로 일괄 추가',
    bulkFilePicker: 'role=button[name="클릭 하거나 파일 끌어서 업로드 하세요"]',   // 안내 영역(클릭 불필요 — input에 직접 주입)
    bulkFileInput: 'input[type="file"]',
    bulkSubmit: 'role=button[name="업로드"]',              // 파일 업로드 실행 버튼 (기록으로 확인)
    bulkResult: 'TODO 업로드 후 성공 표시/후속 확인단계 — 최초 --confirm 실행 스크린샷에서 확인 (미설정 시 3초 대기)',

    // 상품 이미지 등록 — 상품 상세(이름 클릭)에서 이미지 주입 후 '수정하기' 저장 (상품 단위)
    productByName: (name) => `text=${name}`,               // 상품 목록에서 상품명 클릭
    imageFileInput: '#uploadFilesByInput',                 // 상품 상세의 이미지 파일 input (id 확정)
    imageSubmit: 'role=button[name="수정하기"]',           // 저장 버튼 (기록으로 확인)
    imageResult: 'TODO 저장 성공 표시 — 최초 --confirm 실행에서 확인 (미설정 시 3초 대기)',
  },
};
