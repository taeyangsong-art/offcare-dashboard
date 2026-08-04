/*
 * 원격 시트(Monthly 집계) → admin-data.js  생성
 *
 *   $env:GDRIVE_CLIENT_ID=... ; $env:GDRIVE_CLIENT_SECRET=... ; $env:GDRIVE_REFRESH_TOKEN=...
 *   node scripts/fetch-admin-sheet.js              # admin-data.js 갱신
 *   node scripts/fetch-admin-sheet.js --dry        # 파일을 쓰지 않고 파싱 결과만 출력
 *   node scripts/fetch-admin-sheet.js --tab 이름   # Monthly 탭 이름을 직접 지정
 *
 * 대시보드 '🔐 관리' 탭 중 월별 3종(근무일·1일평균 / 온보딩·AS / 온라인·오프라인)이 이 파일을 쓴다.
 * 시간대별·DRI·주야 비교는 slack-data.js(라이브)로 계산하므로 여기서 다루지 않는다.
 *
 * 왜 라벨로 찾는가: 시트는 사람이 계속 편집해서 행 번호가 바뀐다. A열 라벨을 기준으로
 * 행을 찾고, 찾은 행마다 '1월~12월' 헤더 열 위치에서만 값을 집는다(증감% 열은 건너뜀).
 */
const fs = require('fs');
const path = require('path');

const SHEET_ID = process.env.ADMIN_SHEET_ID || '1sqtw7J6wfTxe3PuHXURlYYem5O9vR_tvHKUXTYBjNX8';
const { GDRIVE_CLIENT_ID: CID, GDRIVE_CLIENT_SECRET: CSEC, GDRIVE_REFRESH_TOKEN: RTOK } = process.env;
const DRY = process.argv.includes('--dry');
const ARG = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const OUT = path.join(__dirname, '..', 'admin-data.js');

if (!CID || !CSEC || !RTOK) {
  console.error('✗ GDRIVE_CLIENT_ID / GDRIVE_CLIENT_SECRET / GDRIVE_REFRESH_TOKEN 이 필요합니다.');
  process.exit(1);
}

async function accessToken() {
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: CID, client_secret: CSEC, refresh_token: RTOK, grant_type: 'refresh_token' }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`토큰 갱신 실패 ${r.status}: ${j.error || ''} ${j.error_description || ''}`);
  return j.access_token;
}
async function api(url, tok) {
  const r = await fetch(url, { headers: { Authorization: `Bearer ${tok}` } });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) {
    const e = j.error || {};
    const hint = /SERVICE_DISABLED|has not been used/i.test(JSON.stringify(e))
      ? '\n  → Google Cloud Console 에서 "Google Sheets API" 를 사용 설정하세요.' : '';
    throw new Error(`${r.status} ${e.message || JSON.stringify(e).slice(0, 300)}${hint}`);
  }
  return j;
}

const norm = s => String(s == null ? '' : s).replace(/\s+/g, '').replace(/[()]/g, '');
const num = v => {
  if (v == null || v === '') return 0;
  if (typeof v === 'number') return Math.round(v);
  const n = Number(String(v).replace(/[,\s]/g, ''));
  return Number.isFinite(n) ? Math.round(n) : 0;
};

// A열에서 라벨과 일치하는 행 번호를 찾는다 (여러 개면 첫 번째)
function findRow(rows, labels, fromCol = 0, toCol = 3) {
  const want = labels.map(norm);
  for (let r = 0; r < rows.length; r++) {
    for (let c = fromCol; c <= toCol; c++) {
      if (want.includes(norm((rows[r] || [])[c]))) return r;
    }
  }
  return -1;
}
// '1월'~'12월' 헤더가 있는 열 인덱스 12개를 찾는다
function monthCols(rows) {
  for (let r = 0; r < Math.min(rows.length, 30); r++) {
    const row = rows[r] || [];
    const cols = [];
    for (let m = 1; m <= 12; m++) {
      const i = row.findIndex((c, ci) => ci > (cols[cols.length - 1] ?? -1) && norm(c) === `${m}월`);
      if (i < 0) break;
      cols.push(i);
    }
    if (cols.length === 12) return { headerRow: r, cols };
  }
  return null;
}
// 라벨 행 + 월 열 → 12개 값. 월 열 바로 그 칸이 비면 '건수/증감' 2열 구조로 보고 같은 칸을 그대로 쓴다
function pick(rows, rowIdx, cols) {
  if (rowIdx < 0) return null;
  const row = rows[rowIdx] || [];
  return cols.map(c => num(row[c]));
}

(async () => {
  const tok = await accessToken();
  const meta = await api(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?fields=properties.title,sheets(properties(title))`, tok);
  const titles = meta.sheets.map(s => s.properties.title);
  console.error(`📄 ${meta.properties.title}\n   탭: ${titles.join(' | ')}`);

  const want = ARG('--tab');
  // Monthly 표가 있을 법한 탭을 우선 훑는다
  const order = want ? [want] : titles.slice().sort((a, b) => (/month/i.test(b) ? 1 : 0) - (/month/i.test(a) ? 1 : 0));

  let found = null;
  for (const t of order) {
    const vr = await api(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(`'${t}'!A1:BZ200`)}?valueRenderOption=UNFORMATTED_VALUE`, tok);
    const rows = vr.values || [];
    const mc = monthCols(rows);
    if (!mc) continue;
    const rTotal = findRow(rows, ['원격인입건수', '총건수']);
    if (rTotal < 0) continue;
    found = { tab: t, rows, ...mc };
    break;
  }
  if (!found) { console.error('✗ 1월~12월 헤더와 "원격 인입 건수" 행을 가진 탭을 찾지 못했습니다. --tab 으로 지정해 보세요.'); process.exit(1); }

  const { tab, rows, cols, headerRow } = found;
  console.error(`\n✅ '${tab}' 탭 사용 (헤더 ${headerRow + 1}행, 월 열 ${cols.join(',')})`);

  const R = (labels) => pick(rows, findRow(rows, labels), cols);
  const monthly = {
    total:      R(['원격인입건수', '총건수']),
    online:     R(['온라인']),
    offline:    R(['오프라인']),
    onboarding: R(['온보딩']),
    as:         R(['AS', 'A/S']),
    extinstall: R(['외주설치']),
    transfer:   R(['명의변경']),
    voc:        R(['VOC']),
    menu:       R(['메뉴등록']),
    absent:     R(['부재']),
    delivery:   R(['배달']),
    processed:  R(['실처리건수']),
    workdays:   R(['근무일수']),
    perDay:     R(['1일평균']),
  };

  // 검산 — 유형별 합이 '실 처리 건수' 와 맞는지. 라벨/열이 밀리면 여기서 드러난다
  const partKeys = ['onboarding', 'as', 'extinstall', 'transfer', 'voc', 'menu', 'absent', 'delivery'];
  const warns = [];
  if (monthly.processed) {
    for (let m = 0; m < 12; m++) {
      const sum = partKeys.reduce((a, k) => a + ((monthly[k] || [])[m] || 0), 0);
      const got = monthly.processed[m] || 0;
      if (got && Math.abs(sum - got) > 1) warns.push(`${m + 1}월: 유형별 합 ${sum} ≠ 실 처리 ${got} (차 ${sum - got})`);
    }
  }
  for (const [k, v] of Object.entries(monthly)) if (v === null) warns.push(`'${k}' 행을 찾지 못함 → 빈 배열로 둠`);

  const missing = Object.entries(monthly).filter(([, v]) => v === null).map(([k]) => k);
  for (const k of missing) monthly[k] = [];

  const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ');
  const body = `/*
 * 🔐 관리(파트리더) 탭의 월별 집계 — 원격 시트에서 자동 생성.
 * scripts/fetch-admin-sheet.js 가 갱신하므로 직접 고치지 마세요.
 * 출처 탭: ${tab}
 */
window.ADMIN_DATA = ${JSON.stringify({ updatedAt: stamp, sourceTab: tab, monthly }, null, 1)};
`;

  console.error('\n월별 파싱 결과');
  for (const [k, v] of Object.entries(monthly)) {
    if (!v.length) { console.error(`  ${k.padEnd(11)} —`); continue; }
    console.error(`  ${k.padEnd(11)} ${v.map(n => String(n).padStart(5)).join('')}  합 ${v.reduce((a, b) => a + b, 0).toLocaleString()}`);
  }
  if (warns.length) { console.error('\n⚠️ 검산 경고'); warns.forEach(w => console.error('  · ' + w)); }
  else console.error('\n✅ 검산 통과 — 유형별 합 = 실 처리 건수');

  if (DRY) { console.error('\n(--dry: 파일을 쓰지 않았습니다)'); return; }
  fs.writeFileSync(OUT, body);
  console.error(`\n✅ ${path.relative(process.cwd(), OUT)} 저장 (${(body.length / 1024).toFixed(1)}KB)`);
})().catch(e => {
  const cause = e.cause ? ` · 원인: ${e.cause.code || e.cause.message}` : '';
  console.error('✗', e.message + cause);
  process.exit(1);
});
