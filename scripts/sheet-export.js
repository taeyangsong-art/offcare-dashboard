/*
 * 구글 시트 탭 목록 조회 + 탭별 값 내보내기 (읽기 전용)
 *
 *   node scripts/sheet-export.js <spreadsheetId>                   # 탭 목록
 *   node scripts/sheet-export.js <spreadsheetId> --tab "Monthly"   # 한 탭을 TSV 로 표준출력
 *   node scripts/sheet-export.js <spreadsheetId> --json out.json   # 전 탭 값을 JSON 으로
 *
 * Sheets API 를 쓰지만 스코프는 drive.readonly 로 충분하다(읽기 메서드가 허용).
 * Drive 의 xlsx 내보내기는 10MB 제한에 걸려 이 시트에는 쓸 수 없다.
 */
const fs = require('fs');

const { GDRIVE_CLIENT_ID: CID, GDRIVE_CLIENT_SECRET: CSEC, GDRIVE_REFRESH_TOKEN: RTOK } = process.env;
if (!CID || !CSEC || !RTOK) {
  console.error('✗ GDRIVE_CLIENT_ID / GDRIVE_CLIENT_SECRET / GDRIVE_REFRESH_TOKEN 이 필요합니다.');
  process.exit(1);
}

const SID = process.argv[2];
if (!SID) { console.error('✗ 스프레드시트 ID 를 인자로 주세요.'); process.exit(1); }
const ARG = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const TAB = ARG('--tab'), JSON_OUT = ARG('--json');
const MAXR = Number(ARG('--rows') || 200), MAXC = ARG('--cols') || 'BZ';

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
    const err = j.error || {};
    // Sheets API 미사용 설정이면 콘솔에서 한 번 켜야 한다 — 원인을 그대로 노출한다
    const hint = /SERVICE_DISABLED|has not been used/i.test(JSON.stringify(err))
      ? '\n  → Google Cloud Console 에서 "Google Sheets API" 를 사용 설정하세요.' : '';
    throw new Error(`${r.status} ${err.message || JSON.stringify(err).slice(0, 300)}${hint}`);
  }
  return j;
}

const enc = encodeURIComponent;

(async () => {
  const tok = await accessToken();
  const meta = await api(`https://sheets.googleapis.com/v4/spreadsheets/${SID}?fields=properties.title,sheets(properties(sheetId,title,gridProperties(rowCount,columnCount)))`, tok);
  console.error(`📄 ${meta.properties.title}`);
  const tabs = meta.sheets.map(s => s.properties);

  if (!TAB && !JSON_OUT) {
    console.error(`\n탭 ${tabs.length}개:`);
    tabs.forEach(t => console.error(`  gid=${String(t.sheetId).padEnd(12)} ${t.title}   (${t.gridProperties.rowCount}행 × ${t.gridProperties.columnCount}열)`));
    return;
  }

  const want = TAB ? tabs.filter(t => t.title === TAB) : tabs;
  if (TAB && !want.length) { console.error(`✗ '${TAB}' 탭이 없습니다. 인자 없이 실행해 목록을 확인하세요.`); process.exit(1); }

  // 서식이 아닌 원값(UNFORMATTED_VALUE)으로 받는다 — 증감%·천단위 콤마 때문에 문자열로 오면 계산이 안 된다
  const ranges = want.map(t => `ranges=${enc(`'${t.title}'!A1:${MAXC}${MAXR}`)}`).join('&');
  const vals = await api(`https://sheets.googleapis.com/v4/spreadsheets/${SID}/values:batchGet?${ranges}&valueRenderOption=UNFORMATTED_VALUE&dateTimeRenderOption=FORMATTED_STRING`, tok);

  const out = {};
  vals.valueRanges.forEach((vr, i) => { out[want[i].title] = vr.values || []; });

  if (JSON_OUT) {
    fs.writeFileSync(JSON_OUT, JSON.stringify(out, null, 1));
    console.error(`\n✅ ${JSON_OUT} 저장 — 탭 ${Object.keys(out).length}개`);
  } else {
    for (const row of out[TAB]) process.stdout.write(row.map(c => (c === null || c === undefined) ? '' : String(c)).join('\t') + '\n');
  }
})().catch(e => {
  const cause = e.cause ? ` · 원인: ${e.cause.code || e.cause.message}` : '';
  console.error('✗', e.message + cause);
  process.exit(1);
});
