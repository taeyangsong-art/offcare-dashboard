// 여러 상품의 이미지를 한 번의 브라우저 세션으로 연속 등록한다.
//
// upload-menu.js 의 이미지 모드는 상품 하나당 프로세스를 새로 띄운다 →
// 로그인·조직선택·매장검색(약 15~20초)을 상품 수만큼 반복하게 된다.
// 여기서는 그 앞단을 한 번만 하고 상품 목록 ↔ 상세를 오가며 순회한다.
//
// 사용법:
//   node rpa/login.js                                   # 세션 만료 시
//   node rpa/upload-images-batch.js --biz 1078709701 --store "(주)아이샵케어(영수증 테스트)" \
//        --plan out/matches.json [--include-low] [--confirm]
//
// plan(JSON) 형식 — /이미지등록 스킬의 매칭 결과를 그대로 쓴다:
//   [ { "product": "현미바삭", "images": ["a.jpg"], "confidence": "high", "note": "" }, ... ]
//
// 기본 dry-run: 각 상품마다 이미지 첨부까지만 하고 [수정하기] 는 누르지 않는다.
// 창을 띄우기 싫으면(다른 업무 병행) HEADLESS=true 를 붙인다:
//   HEADLESS=true node rpa/upload-images-batch.js ... --confirm
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const cfg = require('./config');

// ── 인자 ──────────────────────────────────────────────────────────────────
const arg = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i + 1] : d; };
const has = (f) => process.argv.includes(f);
const biz = (arg('--biz', '') || '').replace(/-/g, '').trim();
const store = arg('--store', '');
const planPath = arg('--plan', '');
const includeLow = has('--include-low');
const confirm = has('--confirm') || cfg.dryRun === false;
const validateOnly = has('--validate-only');   // 브라우저를 켜지 않고 plan 만 점검

const usage = 'usage: node rpa/upload-images-batch.js --biz <사업자번호> --store <상호명> --plan <matches.json> [--include-low] [--confirm] [--validate-only]';
if (!biz || !store || !planPath) { console.error(usage); process.exit(1); }
if (!fs.existsSync(cfg.authFile)) { console.error('❌ 로그인 세션 없음 — 먼저 실행: node rpa/login.js'); process.exit(1); }
if (!fs.existsSync(planPath)) { console.error('❌ plan 파일 없음:', planPath); process.exit(1); }

// ── plan 검증 ──────────────────────────────────────────────────────────────
// 잘못된 매칭은 되돌리기가 번거롭다(이미 이미지가 있는 상품은 교체 미지원) →
// 브라우저를 켜기 전에 형식·중복·파일존재를 전부 걸러낸다.
let plan;
try { plan = JSON.parse(fs.readFileSync(planPath, 'utf8')); }
catch (e) { console.error('❌ plan JSON 파싱 실패:', e.message); process.exit(1); }
if (!Array.isArray(plan)) { console.error('❌ plan 은 배열이어야 합니다'); process.exit(1); }

const problems = [];
const seenProduct = new Map(), seenImage = new Map();
plan.forEach((e, i) => {
  const at = `plan[${i}]`;
  if (!e || typeof e.product !== 'string' || !e.product.trim()) { problems.push(`${at}: product 없음`); return; }
  const imgs = Array.isArray(e.images) ? e.images.filter(Boolean) : [];
  if (!imgs.length) { problems.push(`${at} (${e.product}): images 비어 있음`); return; }
  if (seenProduct.has(e.product)) problems.push(`${at}: 상품 '${e.product}' 가 ${seenProduct.get(e.product)} 와 중복`);
  else seenProduct.set(e.product, at);
  for (const im of imgs) {
    if (!fs.existsSync(im)) problems.push(`${at} (${e.product}): 이미지 없음 — ${im}`);
    if (seenImage.has(im)) problems.push(`${at}: 이미지 '${im}' 가 ${seenImage.get(im)} 에도 배정됨(한 사진이 두 상품에)`);
    else seenImage.set(im, at);
  }
  const c = String(e.confidence || 'low').toLowerCase();
  if (c !== 'high' && c !== 'low') problems.push(`${at} (${e.product}): confidence 는 high|low — 받은 값 '${e.confidence}'`);
});
if (problems.length) {
  console.error('❌ plan 에 문제가 있습니다 (브라우저를 켜지 않고 중단):');
  problems.forEach((p) => console.error('   - ' + p));
  process.exit(1);
}

const targets = plan.filter((e) => includeLow || String(e.confidence).toLowerCase() === 'high');
const deferred = plan.filter((e) => !targets.includes(e));

if (validateOnly) {
  console.log(`✅ plan 형식 정상 — 총 ${plan.length}건`);
  console.log(`   등록 대상 ${targets.length}건${includeLow ? ' (--include-low 적용)' : ' (high 만)'}`);
  targets.forEach((e) => console.log(`     · ${e.product} ← ${e.images.join(', ')} [${e.confidence}]`));
  if (deferred.length) {
    console.log(`   검수보류 ${deferred.length}건 (low)`);
    deferred.forEach((e) => console.log(`     · ${e.product} ← ${e.images.join(', ')}${e.note ? ' — ' + e.note : ''}`));
  }
  process.exit(0);
}

if (!targets.length) {
  console.error(`❌ 등록 대상이 없습니다 (high ${plan.filter((e) => e.confidence === 'high').length}건, low ${plan.length - plan.filter((e) => e.confidence === 'high').length}건).`);
  console.error('   low 도 올리려면 --include-low 를 붙이세요. 다만 오등록은 수동 삭제해야 합니다.');
  process.exit(1);
}

// ── 스크린샷/리포트 ────────────────────────────────────────────────────────
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const runDir = path.join(cfg.shotDir, `batch-${biz}-${stamp}`);
fs.mkdirSync(runDir, { recursive: true });
const shot = async (page, label) => {
  const name = `${String(label).replace(/[^\w가-힣-]/g, '_')}.png`;
  await page.screenshot({ path: path.join(runDir, name), fullPage: true }).catch(() => {});
};

(async () => {
  console.log(`\n=== 상품 이미지 일괄 등록 · 사업자 ${biz} · ${store}`);
  console.log(`    대상 ${targets.length}건${deferred.length ? ` · 검수보류 ${deferred.length}건(low)` : ''} · ${confirm ? '⚠️ 실제 실행' : 'DRY-RUN'} · ${cfg.headless ? 'headless(창 없음)' : 'headed(창 표시)'}`);

  const browser = await chromium.launch({ headless: cfg.headless, slowMo: cfg.slowMo, channel: cfg.channel });
  const ctx = await browser.newContext({ storageState: cfg.authFile });
  const page = await ctx.newPage();
  page.setDefaultTimeout(cfg.timeout);
  const S = cfg.SELECTORS;
  const dismissPopup = async () => { await page.click(S.popupDismiss, { timeout: 1500 }).catch(() => {}); };

  const results = [];
  const t0 = Date.now();

  // 매장 상품 목록까지 진입 — 배치 전체에서 한 번만 하면 되지만,
  // 상품 저장 후 화면이 어디로 가는지 확정적이지 않아 복구용으로도 쓴다.
  async function gotoProductList() {
    await page.goto(cfg.baseUrl);
    await page.getByRole('listitem').filter({ hasText: cfg.orgText }).first().click({ timeout: 4000 }).catch(() => {});
    await page.waitForSelector(S.loggedIn, { timeout: cfg.timeout })
      .catch(() => { throw new Error('로그인 세션 만료 추정 → node rpa/login.js 재실행'); });
    await dismissPopup();

    await page.click(S.merchantNav);
    await page.fill(S.merchantSearchInput, biz);
    await dismissPopup();
    await page.waitForTimeout(1200);
    const row = page.locator(S.merchantResultRow(biz, store)).first();
    let found = false;
    await page.mouse.move(650, 430);
    for (let i = 0; i < 10; i++) {
      if ((await row.count()) > 0 && (await row.isVisible().catch(() => false))) { found = true; break; }
      await page.mouse.wheel(0, 700);
      await page.waitForTimeout(500);
    }
    if (!found) throw new Error(`검색결과에서 상호 '${store}' 를 찾지 못함 — 등록 상호명과 일치하는지 확인`);
    await row.click({ force: true });
    await page.click(S.menuNav);
    await page.waitForTimeout(800);
  }

  // 상품 목록 화면인지 확인. 저장 후 어디로 튀는지 사이트마다 달라 매번 확인하고, 아니면 다시 들어간다.
  async function ensureProductList() {
    const ok = await page.locator(S.moreBtn).first().isVisible({ timeout: 4000 }).catch(() => false);
    if (ok) return;
    console.log('    (상품 목록 화면이 아님 — 다시 진입)');
    await gotoProductList();
  }

  async function handleOne(entry, idx) {
    const tag = `${idx + 1}/${targets.length} ${entry.product}`;
    const files = entry.images.map((p) => path.resolve(p));
    const rec = { product: entry.product, images: entry.images, confidence: entry.confidence, note: entry.note || '' };

    await ensureProductList();

    const item = page.locator(S.productByName(entry.product)).first();
    if (!(await item.count())) throw new Error(`상품 목록에서 '${entry.product}' 를 찾지 못함 — 등록된 상품명과 정확히 일치해야 합니다`);
    await item.click();
    await page.waitForTimeout(600);

    // 이미 이미지가 있으면 플레이스홀더 대신 썸네일+X 가 뜬다 → 교체는 미지원이라 건너뛴다.
    const hasThumb = await page.locator('section').filter({ hasText: '상품 정보' })
      .locator('img').first().isVisible({ timeout: 2000 }).catch(() => false);
    if (hasThumb) { rec.status = 'skipped'; rec.reason = '이미 이미지가 있는 상품(교체 미지원)'; return rec; }

    const addBtn = page.locator('section').filter({ hasText: '상품 정보' }).getByRole('button').first();
    const chooserP = page.waitForEvent('filechooser', { timeout: 6000 }).catch(() => null);
    await addBtn.click();
    const chooser = await chooserP;
    if (chooser) await chooser.setFiles(files);
    else await page.setInputFiles(S.imageFileInput, files, { timeout: 6000 });
    await page.waitForTimeout(1500);

    if (confirm) {
      await page.click(S.imageSubmit);
      await page.waitForTimeout(3000);
      await shot(page, `${String(idx + 1).padStart(2, '0')}-${entry.product}-저장완료`);
      rec.status = 'uploaded';
    } else {
      await shot(page, `${String(idx + 1).padStart(2, '0')}-${entry.product}-저장직전`);
      rec.status = 'dry-run';
      await page.goBack().catch(() => {});   // 저장하지 않고 빠져나옴(첨부 취소)
      await page.waitForTimeout(600);
    }
    console.log(`    ✓ ${tag} — ${rec.status}`);
    return rec;
  }

  try {
    await gotoProductList();
    console.log(`\n매장 진입 완료 (${Math.round((Date.now() - t0) / 1000)}초). 상품 순회 시작 — 이 앞단은 배치 전체에서 한 번만 합니다.\n`);

    for (let i = 0; i < targets.length; i++) {
      const entry = targets[i];
      try {
        results.push(await handleOne(entry, i));
      } catch (e) {
        // 한 상품이 실패해도 나머지는 계속 — 실패 지점 스크린샷을 남긴다.
        console.log(`    ✗ ${i + 1}/${targets.length} ${entry.product} — 실패: ${e.message}`);
        await shot(page, `${String(i + 1).padStart(2, '0')}-${entry.product}-ERROR`);
        results.push({ product: entry.product, images: entry.images, confidence: entry.confidence, status: 'failed', reason: e.message });
      }
    }
  } catch (e) {
    console.error('\n❌ 배치 중단:', e.message);
    await shot(page, 'FATAL');
    process.exitCode = 1;
  } finally {
    const done = results.filter((r) => r.status === 'uploaded').length;
    const dry = results.filter((r) => r.status === 'dry-run').length;
    const skip = results.filter((r) => r.status === 'skipped').length;
    const fail = results.filter((r) => r.status === 'failed').length;

    const report = {
      biz, store, at: new Date().toISOString(), mode: confirm ? 'confirm' : 'dry-run',
      elapsedSec: Math.round((Date.now() - t0) / 1000),
      summary: { uploaded: done, dryRun: dry, skipped: skip, failed: fail, deferredLow: deferred.length },
      results,
      deferred: deferred.map((e) => ({ product: e.product, images: e.images, confidence: e.confidence, note: e.note || '' })),
    };
    fs.writeFileSync(path.join(runDir, 'report.json'), JSON.stringify(report, null, 2));

    console.log('\n──────── 결과 ────────');
    if (confirm) console.log(`  ✅ 등록      ${done}건`);
    else console.log(`  🟡 DRY-RUN   ${dry}건 (저장 안 함 — 스크린샷 검수 후 --confirm 으로 재실행)`);
    if (skip) console.log(`  ⏭️  스킵      ${skip}건 (이미 이미지 있음)`);
    if (fail) console.log(`  ❌ 실패      ${fail}건`);
    if (deferred.length) console.log(`  🔍 검수보류  ${deferred.length}건 (low — 담당자 확인 후 --include-low)`);
    results.filter((r) => r.status === 'failed' || r.status === 'skipped')
      .forEach((r) => console.log(`     · ${r.product}: ${r.reason}`));
    console.log(`  소요 ${report.elapsedSec}초 · 스크린샷·리포트 → ${runDir}`);

    await browser.close();
  }
})();
