/*
 * Drive 이미지 유형 분류 — OCR 실제 대상 장수를 확정한다.
 *
 * 메타데이터로는 "이미지"까지만 알 수 있고, 그게 메뉴판인지 배달앱용 상품사진인지는
 * 실제로 봐야 안다. 상품사진에 OCR 을 돌려봐야 나올 게 없으므로 대상에서 빼야 한다.
 *
 *   $env:GDRIVE_CLIENT_ID / GDRIVE_CLIENT_SECRET / GDRIVE_REFRESH_TOKEN
 *   $env:ANTHROPIC_API_KEY
 *   node ocr-eval\classify-images.js              # 전체 (캐시된 건 건너뜀)
 *   node ocr-eval\classify-images.js --limit 20   # 앞 20장만
 *   node ocr-eval\classify-images.js --model opus # 기본 sonnet
 *
 * 결과는 ocr-eval/classify-cache.json 에 누적 저장 — 재실행해도 중복 과금 없음.
 * 파일은 메모리로만 받고 디스크에 쓰지 않는다.
 */
const fs = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');

const ROOT = path.join(__dirname, '..');
const CACHE = path.join(__dirname, 'classify-cache.json');
const KRW = Number(process.env.KRW_PER_USD || 1380);
const { GDRIVE_CLIENT_ID: CID, GDRIVE_CLIENT_SECRET: CSEC, GDRIVE_REFRESH_TOKEN: RTOK } = process.env;

const MODELS = {
  haiku:  { id: 'claude-haiku-4-5', label: 'Haiku 4.5', in: 1, out: 5,  extra: {} },
  sonnet: { id: 'claude-sonnet-5',  label: 'Sonnet 5',  in: 2, out: 10, extra: { effort: 'low' } },
  opus:   { id: 'claude-opus-5',    label: 'Opus 5',    in: 5, out: 25, extra: { effort: 'low' } },
};

const missing = [];
if (!CID || !CSEC || !RTOK) missing.push('GDRIVE_CLIENT_ID / GDRIVE_CLIENT_SECRET / GDRIVE_REFRESH_TOKEN');
if (!process.env.ANTHROPIC_API_KEY) missing.push('ANTHROPIC_API_KEY');
if (missing.length) { console.error('✗ 환경변수가 필요합니다:\n  ' + missing.join('\n  ')); process.exit(1); }

const SCHEMA = {
  type: 'object',
  properties: {
    kind: {
      type: 'string',
      enum: ['menu_board', 'pos_screen', 'product_photo', 'document', 'other'],
      description: 'menu_board=종이/사진 메뉴판, pos_screen=POS 프로그램 화면 캡처, ' +
                   'product_photo=배달앱용 개별 상품 사진(메뉴 목록 아님), document=표·서식·영수증, other=그 외',
    },
    item_count: { type: 'integer', description: '읽어낼 수 있는 상품명+가격 쌍의 개수. 메뉴가 아니면 0.' },
    readable:   { type: 'boolean', description: '글자가 판독 가능한 수준인가 (흐림·잘림·너무 어두움이면 false)' },
  },
  required: ['kind', 'item_count', 'readable'],
  additionalProperties: false,
};

const PROMPT = `이 이미지가 어떤 종류인지 분류하세요. 메뉴를 추출하지는 말고 분류만 합니다.

- menu_board   : 여러 상품명과 가격이 나열된 메뉴판 (종이·현수막·사진 등)
- pos_screen   : POS 프로그램 화면 캡처 (상품 버튼 그리드)
- product_photo: 음식 한 접시나 상품 하나만 찍힌 사진. 배경 제거된 배달앱용 이미지 포함. 가격 목록 없음
- document     : 표·서식·영수증·엑셀 출력물
- other        : 위 어디에도 안 맞음

item_count 는 이 이미지에서 뽑아낼 수 있는 '상품명+가격' 쌍의 개수입니다.
메뉴가 아니면 0 을 넣으세요. 대략적인 수로 충분합니다.`;

// Google 은 401 본문의 error 코드로 원인을 구분해준다 — 그대로 노출해야 진단이 된다
const OAUTH_HINT = {
  invalid_client: 'GDRIVE_CLIENT_ID 또는 GDRIVE_CLIENT_SECRET 이 틀렸습니다. 값·따옴표를 확인하세요.',
  invalid_grant:  'GDRIVE_REFRESH_TOKEN 이 만료·폐기됐습니다. node scripts\\drive-auth.js 로 재발급하세요.',
  invalid_request: '필수 값이 빠졌습니다. 세 환경변수가 모두 설정됐는지 확인하세요.',
  unauthorized_client: 'OAuth 클라이언트 유형이 맞지 않습니다 (데스크톱 앱이어야 함).',
};
async function accessToken() {
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: CID, client_secret: CSEC, refresh_token: RTOK, grant_type: 'refresh_token' }),
  });
  let j = {};
  try { j = await r.json(); } catch (e) {}
  if (!r.ok) {
    const code = j.error || '?';
    throw new Error(`토큰 갱신 실패 ${r.status} (${code})` +
      `\n  ${OAUTH_HINT[code] || j.error_description || '원인 불명'}` +
      `\n  현재 값 길이 — CLIENT_ID ${CID.length}자 / SECRET ${CSEC.length}자 / REFRESH_TOKEN ${RTOK.length}자` +
      `\n  (정상 범위: ID 70자 안팎 · SECRET 35자 안팎 · TOKEN 100자 이상)`);
  }
  return j.access_token;
}

function driveIds() {
  const w = {};
  new Function('window', fs.readFileSync(path.join(ROOT, 'menu-requests.js'), 'utf8'))(w);
  const seen = new Map();
  for (const it of w.MENU_REQUESTS.items || []) {
    for (const u of it.drive || []) {
      const id = (String(u).match(/\/file\/d\/([\w-]+)/) || String(u).match(/[?&]id=([\w-]+)/) || [])[1];
      if (id && !seen.has(id)) seen.set(id, { id, date: it.date });
    }
  }
  return [...seen.values()];
}

// canDownload 를 함께 받아온다 — 소유자가 뷰어 다운로드를 막아둔 파일은 받아봐야 403 이므로 미리 걸러낸다
async function meta(token, id) {
  const r = await fetch(`https://www.googleapis.com/drive/v3/files/${id}` +
    `?fields=id,mimeType,size,trashed,capabilities(canDownload)&supportsAllDrives=true`,
    { headers: { Authorization: `Bearer ${token}` } });
  return r.ok ? r.json() : null;
}

// 403 사유별 대응:
//   cannotDownloadAbusiveFile → acknowledgeAbuse=true 로 재시도하면 받아진다
//   그 외(insufficientFilePermissions 등) → 소유자가 뷰어 다운로드를 막아둔 것
async function download(token, id, ack) {
  const url = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&supportsAllDrives=true`
            + (ack ? '&acknowledgeAbuse=true' : '');
  const r = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
  if (r.ok) return Buffer.from(await r.arrayBuffer()).toString('base64');   // 메모리에만 — 디스크 미기록
  let reason = '', msg = '';
  try { const j = await r.json(); reason = j?.error?.errors?.[0]?.reason || ''; msg = j?.error?.message || ''; } catch (e) {}
  if (r.status === 403 && reason === 'cannotDownloadAbusiveFile' && !ack) return download(token, id, true);
  throw new Error(`다운로드 실패 ${r.status}${reason ? ' ' + reason : ''}${msg ? ' — ' + msg.slice(0, 80) : ''}`);
}

(async () => {
  const argv = process.argv.slice(2);
  const limit = argv.includes('--limit') ? parseInt(argv[argv.indexOf('--limit') + 1], 10) : Infinity;
  const model = MODELS[argv.includes('--model') ? argv[argv.indexOf('--model') + 1] : 'sonnet'];
  if (!model) { console.error('알 수 없는 모델. 가능: ' + Object.keys(MODELS).join(', ')); process.exit(1); }

  const cache = fs.existsSync(CACHE) ? JSON.parse(fs.readFileSync(CACHE, 'utf8')) : {};
  const client = new Anthropic();
  const token = await accessToken();
  const all = driveIds();

  console.log(`Drive 링크 ${all.length}건 · 모델 ${model.label} · 캐시 ${Object.keys(cache).length}건 보유\n`);

  // 1) 이미지 + 다운로드 가능한 것만 골라낸다
  const imgs = []; let blocked = 0;
  for (let i = 0; i < all.length; i++) {
    process.stdout.write(`\r  메타 조회 ${i + 1}/${all.length}`);
    if (cache[all[i].id]) { imgs.push(all[i]); continue; }       // 캐시된 건 재조회 불필요
    const m = await meta(token, all[i].id);
    if (!m || m.trashed || !String(m.mimeType).startsWith('image/')) { await new Promise((r) => setTimeout(r, 50)); continue; }
    if (m.capabilities && m.capabilities.canDownload === false) { blocked++; await new Promise((r) => setTimeout(r, 50)); continue; }
    imgs.push({ ...all[i], size: Number(m.size || 0), mime: m.mimeType });
    await new Promise((r) => setTimeout(r, 50));
  }
  const targets = imgs.filter((x) => !cache[x.id]).slice(0, limit);
  console.log(`\n  다운로드 가능한 이미지 ${imgs.length}건 · 권한 차단 ${blocked}건 제외 · 이번에 분류할 신규 ${targets.length}건\n`);

  // 2) 분류
  let usd = 0, fail = 0;
  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    process.stdout.write(`\r  분류 ${i + 1}/${targets.length}`);
    try {
      const data = await download(token, t.id);
      // media_type 은 반드시 실제 파일 형식과 일치해야 한다 — 틀리면 400 이 난다
      const ALLOWED = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      const mime = ALLOWED.includes(t.mime) ? t.mime : 'image/jpeg';
      if (!ALLOWED.includes(t.mime)) throw new Error(`지원하지 않는 형식 ${t.mime}`);
      const body = {
        model: model.id, max_tokens: 512,
        output_config: { format: { type: 'json_schema', schema: SCHEMA } },
        messages: [{ role: 'user', content: [
          { type: 'image', source: { type: 'base64', media_type: mime, data } },
          { type: 'text', text: PROMPT },
        ] }],
      };
      if (model.extra.effort) body.output_config.effort = model.extra.effort;
      const res = await client.messages.create(body);
      if (res.stop_reason === 'refusal') throw new Error('refusal');
      const out = JSON.parse(res.content.find((b) => b.type === 'text').text);
      const u = res.usage;
      const inTok = (u.input_tokens || 0) + (u.cache_read_input_tokens || 0) + (u.cache_creation_input_tokens || 0);
      usd += inTok / 1e6 * model.in + (u.output_tokens || 0) / 1e6 * model.out;
      cache[t.id] = { ...out, date: t.date, size: t.size, inTok, outTok: u.output_tokens || 0, model: model.id };
    } catch (e) {
      fail++; cache[t.id] = { kind: 'ERROR', err: String(e.message).slice(0, 160), date: t.date };
    }
    fs.writeFileSync(CACHE, JSON.stringify(cache, null, 1));      // 중단돼도 진행분 보존
  }
  if (targets.length) console.log(`\n  분류 비용 ${(usd * KRW).toFixed(0)}원 · 실패 ${fail}건\n`);

  // 3) 집계
  const rows = imgs.map((x) => cache[x.id]).filter(Boolean).filter((r) => r.kind !== 'ERROR');
  const by = {};
  rows.forEach((r) => { (by[r.kind] = by[r.kind] || []).push(r); });
  const LABEL = { menu_board: '메뉴판', pos_screen: 'POS 화면', product_photo: '상품사진', document: '문서·표', other: '기타' };
  const OCR_KINDS = ['menu_board', 'pos_screen'];

  console.log('═'.repeat(70));
  console.log('  이미지 유형 분포');
  console.log('═'.repeat(70));
  for (const [k, l] of Object.entries(by).sort((a, b) => b[1].length - a[1].length)) {
    const isTarget = OCR_KINDS.includes(k);
    console.log(`  ${(LABEL[k] || k).padEnd(9)} ${String(l.length).padStart(3)}건  ${String(Math.round(l.length / rows.length * 100)).padStart(3)}%` +
                `   ${isTarget ? '← OCR 대상' : ''}`);
  }
  const targetsN = rows.filter((r) => OCR_KINDS.includes(r.kind));
  const unreadable = targetsN.filter((r) => !r.readable).length;
  const avgItems = targetsN.length ? targetsN.reduce((a, r) => a + (r.item_count || 0), 0) / targetsN.length : 0;

  console.log('\n' + '═'.repeat(70));
  console.log('  OCR 대상 확정');
  console.log('═'.repeat(70));
  console.log(`  분류 완료 ${rows.length}건 중 OCR 대상 ${targetsN.length}건 (${(targetsN.length / rows.length * 100).toFixed(0)}%)`);
  console.log(`  판독 불가(흐림·잘림) ${unreadable}건 → 실질 대상 ${targetsN.length - unreadable}건`);
  console.log(`  메뉴 항목 평균 ${avgItems.toFixed(1)}개/장 → 출력 토큰 약 ${Math.round(avgItems * 18)}tok/장 추정`);

  // 4) 비용 재산출 (실측 토큰 기반)
  const avgIn = targetsN.length ? targetsN.reduce((a, r) => a + (r.inTok || 0), 0) / targetsN.length : 1700;
  const outTok = Math.max(120, avgItems * 18);
  const monthly = targetsN.length - unreadable;
  console.log('\n' + '═'.repeat(70));
  console.log(`  월 비용 재산출 (실측 입력 ${Math.round(avgIn)}tok + 출력 ${Math.round(outTok)}tok · 월 ${monthly}장)`);
  console.log('═'.repeat(70));
  for (const [k, m] of Object.entries(MODELS)) {
    const per = (avgIn / 1e6 * m.in + outTok / 1e6 * m.out) * KRW;
    console.log(`  ${m.label.padEnd(12)} 장당 ${per.toFixed(1)}원 · 월 ${Math.round(per * monthly).toLocaleString('ko-KR').padStart(6)}원 · 연 ${Math.round(per * monthly * 12).toLocaleString('ko-KR').padStart(7)}원`);
  }
  console.log(`\n  ※ PDF 11건은 별도 (페이지 수만큼 가산)`);
})().catch((e) => { console.error('\n✗ 오류:', e.message); process.exit(1); });
