/*
 * Claude 모델별 POS 메뉴 판독 정확도 · 비용 비교
 *
 *   npm i @anthropic-ai/sdk
 *   export ANTHROPIC_API_KEY=sk-ant-...      (Windows PowerShell: $env:ANTHROPIC_API_KEY="sk-ant-...")
 *   node ocr-eval/compare.js                 # 전체 모델 1회씩
 *   node ocr-eval/compare.js --runs 3        # 모델당 3회 (일관성 확인)
 *   node ocr-eval/compare.js --models haiku  # 특정 모델만
 *
 * 결과: 정확도(정확일치 F1) · 토큰 · 원화 비용 · 응답시간
 */
const fs = require('fs');
const path = require('path');
const Anthropic = require('@anthropic-ai/sdk');
const { scorePairs } = require('./score');

const ROOT = path.join(__dirname, '..');
const GT = JSON.parse(fs.readFileSync(path.join(__dirname, 'ground-truth.json'), 'utf8'));
const KRW = Number(process.env.KRW_PER_USD || 1380);   // 환율은 변동 — 환경변수로 덮어쓸 것

if (!process.env.ANTHROPIC_API_KEY) {
  console.error('✗ ANTHROPIC_API_KEY 가 없습니다.\n' +
    '  console.anthropic.com → API Keys 에서 발급 후 환경변수로 설정하세요.\n' +
    '  PowerShell: $env:ANTHROPIC_API_KEY="sk-ant-..."');
  process.exit(1);
}

// ── 모델별 설정 ───────────────────────────────────────────────────────────
// Haiku 4.5 는 effort / adaptive thinking 을 지원하지 않는다 (보내면 400).
// Sonnet 5 · Opus 5 는 thinking 이 기본 ON 이라, OCR 같은 인식 작업에는
// effort:"low" 로 낮춰 비용을 억제한다 (thinking 을 끄는 것보다 권장되는 방식).
const MODELS = {
  haiku:  { id: 'claude-haiku-4-5', label: 'Haiku 4.5',  in: 1, out: 5,  extra: {} },
  sonnet: { id: 'claude-sonnet-5',  label: 'Sonnet 5',   in: 2, out: 10, // 인트로 단가(~2026-08-31), 이후 3/15
            extra: { thinking: { type: 'adaptive' }, effort: 'low' } },
  opus:   { id: 'claude-opus-5',    label: 'Opus 5',     in: 5, out: 25,
            extra: { thinking: { type: 'adaptive' }, effort: 'low' } },
};

const SCHEMA = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name:  { type: 'string',  description: '상품 버튼에 적힌 상품명. 화면 표기 그대로.' },
          price: { type: 'integer', description: '상품명 바로 아래 표시된 가격. 콤마 없는 정수.' },
        },
        required: ['name', 'price'],
        additionalProperties: false,
      },
    },
  },
  required: ['items'],
  additionalProperties: false,
};

const PROMPT = `이 이미지는 POS 프로그램 화면 캡처입니다. 오른쪽 상품 그리드에서 등록된 상품만 추출하세요.

규칙:
- 각 상품 버튼은 위에 상품명, 아래에 가격이 표시됩니다. 이 쌍만 추출합니다.
- 상품명은 화면에 보이는 표기 그대로 적습니다. 맞춤법을 고치지 마세요.
- 상품명이 두 줄로 줄바꿈된 경우 공백 없이 이어붙입니다.
- 가격은 콤마를 빼고 정수로 적습니다.
- 아래 항목은 상품이 아니므로 제외합니다:
  상단 카테고리 탭(메뉴·식사류·추가메뉴·주류·음료수), 결제 버튼(카드결제·현금결제·주문완료),
  기능 버튼(지정취소·전체취소·할인·TAKEOUT·서비스·회원카드·할인취소·전달사항·환전·부가기능·상품권·종료),
  좌측 주문 내역·숫자 키패드·금액 표시 영역, 빈 버튼.
- 상품이 하나도 없으면 빈 배열을 반환합니다.`;

const MEDIA = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };

async function runOne(client, model, img) {
  const file = path.join(ROOT, 'menu-files', img.file);
  const data = fs.readFileSync(file).toString('base64');
  const body = {
    model: model.id,
    max_tokens: 4096,
    output_config: { format: { type: 'json_schema', schema: SCHEMA } },
    messages: [{
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: MEDIA[path.extname(img.file).toLowerCase()], data } },
        { type: 'text', text: PROMPT },
      ],
    }],
  };
  if (model.extra.thinking) body.thinking = model.extra.thinking;
  if (model.extra.effort) body.output_config.effort = model.extra.effort;

  const t0 = Date.now();
  const res = await client.messages.create(body);
  const ms = Date.now() - t0;

  if (res.stop_reason === 'refusal') throw new Error(`refusal (${res.stop_details?.category || '?'})`);
  const text = res.content.find((b) => b.type === 'text')?.text || '{}';
  let parsed;
  try { parsed = JSON.parse(text); } catch { throw new Error('JSON 파싱 실패: ' + text.slice(0, 120)); }

  const u = res.usage;
  const inTok = (u.input_tokens || 0) + (u.cache_read_input_tokens || 0) + (u.cache_creation_input_tokens || 0);
  const usd = inTok / 1e6 * model.in + (u.output_tokens || 0) / 1e6 * model.out;
  return { items: parsed.items || [], inTok, outTok: u.output_tokens || 0, usd, ms, stop: res.stop_reason };
}

(async () => {
  const argv = process.argv.slice(2);
  const runs = Math.max(1, parseInt((argv[argv.indexOf('--runs') + 1]) || '1', 10) || 1);
  const pick = argv.includes('--models')
    ? argv[argv.indexOf('--models') + 1].split(',').map((s) => s.trim())
    : Object.keys(MODELS);

  const client = new Anthropic();
  const totals = {};

  for (const key of pick) {
    const model = MODELS[key];
    if (!model) { console.error(`알 수 없는 모델: ${key} (가능: ${Object.keys(MODELS).join(', ')})`); continue; }
    console.log('\n' + '═'.repeat(74));
    console.log(`  ${model.label}  (${model.id})`);
    console.log('═'.repeat(74));

    const agg = { exact: 0, truth: 0, got: 0, usd: 0, ms: 0, calls: 0, inTok: 0, outTok: 0, fail: 0 };
    for (const img of GT.images) {
      for (let r = 0; r < runs; r++) {
        let out;
        try { out = await runOne(client, model, img); }
        catch (e) { agg.fail++; console.log(`\n▣ ${img.tab}${runs > 1 ? ` #${r + 1}` : ''} — 실패: ${e.message}`); continue; }
        const s = scorePairs(img.items, out.items);
        agg.exact += s.exact; agg.truth += s.truthN; agg.got += s.gotN;
        agg.usd += out.usd; agg.ms += out.ms; agg.calls++;
        agg.inTok += out.inTok; agg.outTok += out.outTok;

        console.log(`\n▣ ${img.tab}${runs > 1 ? ` #${r + 1}` : ''}  정확일치 ${s.exact}/${s.truthN}` +
          `  (P ${(s.precision * 100).toFixed(0)}% / R ${(s.recall * 100).toFixed(0)}% / F1 ${(s.f1 * 100).toFixed(0)}%)` +
          `  ${out.inTok}+${out.outTok}tok  ${(out.usd * KRW).toFixed(1)}원  ${(out.ms / 1000).toFixed(1)}s`);
        if (s.nameOnly > s.exact) console.log(`   상품명만 맞고 가격 틀림: ${s.nameOnly - s.exact}건`);
        if (s.missed.length)   console.log(`   놓침:   ${s.missed.join(' / ')}`);
        if (s.spurious.length) console.log(`   군더더기: ${s.spurious.join(' / ')}`);
      }
    }
    const P = agg.got ? agg.exact / agg.got : 0, R = agg.truth ? agg.exact / agg.truth : 0;
    totals[model.label] = {
      f1: P + R ? 2 * P * R / (P + R) : 0, exact: agg.exact, truth: agg.truth,
      krwPerImg: agg.calls ? agg.usd * KRW / agg.calls : 0,
      sPerImg: agg.calls ? agg.ms / 1000 / agg.calls : 0,
      tok: agg.calls ? `${Math.round(agg.inTok / agg.calls)}+${Math.round(agg.outTok / agg.calls)}` : '-',
      fail: agg.fail,
    };
  }

  console.log('\n\n' + '═'.repeat(74));
  console.log('  종합  (정답 21개 항목 · tesseract baseline 47.6% / 0원)');
  console.log('═'.repeat(74));
  console.log('  모델'.padEnd(14) + '정확일치'.padStart(10) + 'F1'.padStart(8) +
              '장당비용'.padStart(12) + '장당시간'.padStart(11) + '토큰(평균)'.padStart(14) + '실패'.padStart(6));
  for (const [name, t] of Object.entries(totals)) {
    console.log('  ' + name.padEnd(12) +
      `${t.exact}/${t.truth}`.padStart(10) +
      `${(t.f1 * 100).toFixed(1)}%`.padStart(8) +
      `${t.krwPerImg.toFixed(1)}원`.padStart(12) +
      `${t.sPerImg.toFixed(1)}s`.padStart(11) +
      t.tok.padStart(14) +
      String(t.fail).padStart(6));
  }
  const monthly = 900;
  console.log(`\n  월 ${monthly}장(하루 30장) 환산:`);
  for (const [name, t] of Object.entries(totals)) {
    const m = t.krwPerImg * monthly;
    console.log(`    ${name.padEnd(12)} ${Math.round(m).toLocaleString('ko-KR').padStart(9)}원   (배치 API 50% 적용 시 ${Math.round(m / 2).toLocaleString('ko-KR')}원)`);
  }
  console.log(`\n  ※ 환율 ${KRW}원/USD 가정 · Sonnet 5 는 인트로 단가($2/$10, ~2026-08-31) 기준`);
})().catch((e) => { console.error('\n✗ 실행 오류:', e.message); process.exit(1); });
