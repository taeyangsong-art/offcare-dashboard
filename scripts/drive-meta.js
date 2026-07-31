/*
 * Phase 2 — Drive 링크 메타데이터 스캔 (파일은 내려받지 않는다 · Claude API 미사용 · 비용 0원)
 *
 *   $env:GDRIVE_CLIENT_ID="..."; $env:GDRIVE_CLIENT_SECRET="..."; $env:GDRIVE_REFRESH_TOKEN="..."
 *   node scripts/drive-meta.js                 # 전체 스캔 + 리포트
 *   node scripts/drive-meta.js --limit 20      # 앞 20건만 (연결 확인용)
 *   node scripts/drive-meta.js --json out.json # 결과를 파일로
 *
 * 답을 내는 질문:
 *   1) 131개 링크 중 이미지 / 엑셀 / PDF 비율은?
 *   2) 이 계정 하나로 몇 건이나 접근 가능한가? (→ 인증 방식 C 로 충분한지 판정)
 *   3) 실제 OCR 대상 장수와 월 비용은?
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const { GDRIVE_CLIENT_ID: CID, GDRIVE_CLIENT_SECRET: CSEC, GDRIVE_REFRESH_TOKEN: RTOK } = process.env;
const KRW = Number(process.env.KRW_PER_USD || 1380);

if (!CID || !CSEC || !RTOK) {
  console.error('✗ GDRIVE_CLIENT_ID / GDRIVE_CLIENT_SECRET / GDRIVE_REFRESH_TOKEN 이 필요합니다.\n' +
                '  먼저 node scripts/drive-auth.js 로 리프레시 토큰을 발급하세요.');
  process.exit(1);
}

async function accessToken() {
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: CID, client_secret: CSEC, refresh_token: RTOK, grant_type: 'refresh_token' }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(`토큰 갱신 실패 ${r.status}: ${JSON.stringify(j)}`);
  return j.access_token;
}

// menu-requests.js 에서 Drive 파일 ID 추출 (요청 날짜를 함께 보관 — 월별 집계용)
function collectIds() {
  const w = {};
  new Function('window', fs.readFileSync(path.join(ROOT, 'menu-requests.js'), 'utf8'))(w);
  const seen = new Map();
  for (const it of w.MENU_REQUESTS.items || []) {
    for (const u of it.drive || []) {
      const id = (String(u).match(/\/file\/d\/([\w-]+)/) || String(u).match(/[?&]id=([\w-]+)/) || [])[1];
      if (id && !seen.has(id)) seen.set(id, { id, date: it.date, store: it.store });
    }
  }
  return [...seen.values()];
}

const FIELDS = 'id,name,mimeType,size,trashed';
async function meta(token, id) {
  const url = `https://www.googleapis.com/drive/v3/files/${id}?fields=${FIELDS}&supportsAllDrives=true`;
  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (r.ok) return { ok: true, ...(await r.json()) };
  let detail = '';
  try { detail = (await r.json())?.error?.message || ''; } catch {}
  return { ok: false, status: r.status, detail };
}

const bucket = (m) => !m ? '기타'
  : m.startsWith('image/') ? '이미지'
  : /spreadsheet|excel|csv/.test(m) ? '엑셀/표'
  : m === 'application/pdf' ? 'PDF'
  : /document|word/.test(m) ? '문서'
  : m === 'application/vnd.google-apps.folder' ? '폴더' : '기타';

(async () => {
  const argv = process.argv.slice(2);
  const limit = argv.includes('--limit') ? parseInt(argv[argv.indexOf('--limit') + 1], 10) : Infinity;
  const jsonOut = argv.includes('--json') ? argv[argv.indexOf('--json') + 1] : null;

  const all = collectIds();
  const targets = all.slice(0, limit);
  console.log(`Drive 링크 ${all.length}건 (스캔 대상 ${targets.length}건) · 메타데이터만 조회, 파일은 내려받지 않습니다\n`);

  const token = await accessToken();
  const rows = [];
  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    const m = await meta(token, t.id);
    rows.push({ ...t, ...m });
    process.stdout.write(`\r  진행 ${i + 1}/${targets.length}`);
    await new Promise((r) => setTimeout(r, 60));   // Drive API rate 보호
  }
  console.log('\n');

  const okRows = rows.filter((r) => r.ok && !r.trashed);
  const fail = rows.filter((r) => !r.ok);
  const trashed = rows.filter((r) => r.ok && r.trashed);

  console.log('═'.repeat(70));
  console.log('  ① 접근성 — 이 계정 하나로 몇 건이나 읽히는가');
  console.log('═'.repeat(70));
  console.log(`  성공 ${okRows.length} · 휴지통 ${trashed.length} · 실패 ${fail.length}  (전체 ${rows.length})`);
  if (fail.length) {
    const byCode = {};
    fail.forEach((f) => { byCode[f.status] = (byCode[f.status] || 0) + 1; });
    console.log('  실패 상세:', Object.entries(byCode).map(([c, n]) => `${c} ${n}건`).join(' · '));
    console.log('  → 403/404 가 많으면 파일별 공유 범위가 제각각입니다. 서비스 계정 + 도메인 전체 위임(방식 B)이 필요합니다.');
  } else if (okRows.length) {
    console.log('  → 전부 접근됩니다. OAuth 단일 계정(방식 C)으로 충분합니다.');
  }

  console.log('\n' + '═'.repeat(70));
  console.log('  ② 파일 유형 분포');
  console.log('═'.repeat(70));
  const byType = {};
  okRows.forEach((r) => { const b = bucket(r.mimeType); (byType[b] = byType[b] || []).push(r); });
  for (const [b, list] of Object.entries(byType).sort((a, c) => c[1].length - a[1].length)) {
    const mb = list.reduce((a, r) => a + Number(r.size || 0), 0) / 1048576;
    console.log(`  ${b.padEnd(8)} ${String(list.length).padStart(4)}건  (${(list.length / okRows.length * 100).toFixed(0)}%)  합계 ${mb.toFixed(1)}MB`);
  }
  const imgs = byType['이미지'] || [];
  if (imgs.length) {
    const sizes = imgs.map((r) => Number(r.size || 0)).sort((a, b) => a - b);
    const md = sizes[Math.floor(sizes.length / 2)] / 1024;
    console.log(`\n  이미지 크기: 중앙값 ${md.toFixed(0)}KB · 최대 ${(sizes[sizes.length - 1] / 1048576).toFixed(1)}MB` +
                `  (10MB 초과 ${sizes.filter((s) => s > 10485760).length}건은 제외 대상)`);
  }

  console.log('\n' + '═'.repeat(70));
  console.log('  ③ OCR 대상 · 월 비용 확정');
  console.log('═'.repeat(70));
  const months = new Set(okRows.map((r) => (r.date || '').slice(0, 7))).size || 1;
  // --limit 으로 일부만 스캔했으면 표본 비율로 전체를 환산한다 (스캔한 수를 그대로 쓰면 과소 추정)
  const partial = targets.length < all.length;
  const scale = rows.length ? all.length / rows.length : 1;
  const imgTotal = imgs.length * scale;
  const perMonth = imgTotal / months;
  if (partial) {
    console.log(`  ⚠ 부분 스캔 (${rows.length}/${all.length}건) — 표본 비율로 환산한 추정치입니다. 확정하려면 --limit 없이 전체를 돌리세요.`);
    console.log(`  스캔분 이미지 ${imgs.length}/${okRows.length}건 (${(okRows.length ? imgs.length / okRows.length * 100 : 0).toFixed(0)}%)` +
                ` → 전체 ${all.length}건 환산 ≈ ${imgTotal.toFixed(0)}건`);
  }
  console.log(`  OCR 대상 이미지 ${imgTotal.toFixed(0)}건 / ${months}개월 → 월 ${perMonth.toFixed(0)}장`);
  const TOK = { img: 2500, prompt: 400, out: 1200 };
  const P = { 'Haiku 4.5': [1, 5], 'Sonnet 5(인트로)': [2, 10], 'Opus 5': [5, 25] };
  for (const [n, [pi, po]] of Object.entries(P)) {
    const per = ((TOK.img + TOK.prompt) / 1e6 * pi + TOK.out / 1e6 * po) * KRW;
    console.log(`    ${n.padEnd(18)} 장당 ${per.toFixed(1)}원 · 월 ${Math.round(per * perMonth).toLocaleString('ko-KR').padStart(7)}원 · 연 ${Math.round(per * perMonth * 12).toLocaleString('ko-KR')}원`);
  }

  if (jsonOut) {
    // 파일명·소유자 등은 저장하지 않고 집계에 필요한 필드만 남긴다
    fs.writeFileSync(jsonOut, JSON.stringify(rows.map((r) => ({
      id: r.id, date: r.date, ok: r.ok, status: r.status,
      type: r.ok ? bucket(r.mimeType) : null, mime: r.mimeType || null,
      size: r.size ? Number(r.size) : null, trashed: !!r.trashed,
    })), null, 1));
    console.log(`\n  → ${jsonOut} 저장 (집계 필드만)`);
  }
})().catch((e) => { console.error('\n✗ 오류:', e.message); process.exit(1); });
