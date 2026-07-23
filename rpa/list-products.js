// 토스플레이스 dashboard 에서 매장의 등록 상품 목록을 조회해 JSON으로 출력 (이미지↔상품 매칭용)
// 사용법: node rpa/list-products.js --biz <사업자번호> --store <상호명> [--out 파일.json]
const { chromium } = require('playwright');
const fs = require('fs');
const cfg = require('./config');

const arg = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i + 1] : d; };
const biz = (arg('--biz', '') || '').replace(/-/g, '').trim();
const store = arg('--store', '');
const outPath = arg('--out', '');
if (!biz || !store) { console.error('usage: node rpa/list-products.js --biz <사업자번호> --store <상호명> [--out 파일.json]'); process.exit(1); }
if (!fs.existsSync(cfg.authFile)) { console.error('❌ 로그인 세션 없음 — 먼저: node rpa/login.js'); process.exit(1); }

(async () => {
  const browser = await chromium.launch({ headless: true, channel: cfg.channel });
  const ctx = await browser.newContext({ storageState: cfg.authFile });
  const page = await ctx.newPage();
  page.setDefaultTimeout(cfg.timeout);
  const S = cfg.SELECTORS;
  try {
    await page.goto(cfg.baseUrl);
    await page.getByRole('listitem').filter({ hasText: cfg.orgText }).first().click({ timeout: 4000 }).catch(() => {});
    await page.waitForSelector(S.loggedIn);
    await page.click(S.popupDismiss, { timeout: 1500 }).catch(() => {});
    await page.click(S.merchantNav, { timeout: 3000 }).catch(() => {});
    await page.fill(S.merchantSearchInput, biz);
    await page.waitForTimeout(1200);
    const row = page.locator(`text=${store}`).first();
    await page.mouse.move(650, 430);
    for (let i = 0; i < 10; i++) {
      if ((await row.count()) > 0 && (await row.isVisible().catch(() => false))) break;
      await page.mouse.wheel(0, 700); await page.waitForTimeout(500);
    }
    await row.click({ force: true });
    await page.click(S.menuNav);
    await page.waitForTimeout(2000);

    // 상품 목록 스크레이핑 — 페이지네이션 순회 (페이지 번호 버튼 클릭)
    const seen = new Set(); const products = [];
    const scrape = async () => {
      const rows = await page.evaluate(() => {
        const out = [];
        for (const tr of document.querySelectorAll('tbody tr')) {
          const tds = tr.querySelectorAll('td');
          if (tds.length >= 2) {
            const name = (tds[1] && tds[1].innerText || tds[0].innerText || '').trim().split('\n')[0];
            const rowTxt = tr.innerText.replace(/\s+/g, ' ');
            const price = ((rowTxt.match(/([\d,]+)원/) || [])[1] || '').replace(/,/g, '');
            if (name) out.push({ name, price: price ? parseInt(price, 10) : null });
          }
        }
        return out;
      });
      for (const r of rows) { if (!seen.has(r.name)) { seen.add(r.name); products.push(r); } }
    };
    await scrape();
    // 페이지네이션: 결과 요약 텍스트에서 총 개수 파악 후 2,3,… 페이지 버튼 클릭 시도
    const totalTxt = await page.locator('text=/\\d+개의 결과/').first().innerText().catch(() => '');
    const total = parseInt((totalTxt.match(/(\d+)개의 결과/) || [])[1] || '0', 10);
    for (let p = 2; p <= 10 && products.length < total; p++) {
      const btn = page.locator(`button:has-text("${p}")`).last();
      if (!(await btn.count())) break;
      await btn.click({ timeout: 3000 }).catch(() => {});
      await page.waitForTimeout(1200);
      const before = products.length;
      await scrape();
      if (products.length === before) break;   // 더 못 읽으면 종료
    }

    const result = { biz, store, total: total || products.length, fetched: products.length, products };
    if (outPath) { fs.writeFileSync(outPath, JSON.stringify(result, null, 1), 'utf8'); console.log(`✅ ${outPath} 저장 (${products.length}/${result.total}개)`); }
    else console.log(JSON.stringify(result, null, 1));
  } catch (e) {
    console.error('❌', e.message); process.exitCode = 1;
  } finally { await browser.close(); }
})();
