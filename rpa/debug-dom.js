// 일회성 진단: 상품 수정 화면의 input/button/upload 요소 구조를 덤프 (이미지 셀렉터 확정용)
const { chromium } = require('playwright');
const cfg = require('./config');
const biz = process.argv[2] || '1078709701';
const store = process.argv[3] || '(주)아이샵케어(영수증 테스트)';
const product = process.argv[4] || '양념바른치킨';

(async () => {
  const browser = await chromium.launch({ headless: true, channel: cfg.channel });
  const ctx = await browser.newContext({ storageState: cfg.authFile });
  const page = await ctx.newPage();
  page.setDefaultTimeout(cfg.timeout);
  await page.goto(cfg.baseUrl);
  await page.getByRole('listitem').filter({ hasText: cfg.orgText }).first().click({ timeout: 4000 }).catch(() => {});
  await page.waitForSelector(cfg.SELECTORS.loggedIn);
  const dismiss = async () => { await page.click(cfg.SELECTORS.popupDismiss, { timeout: 1500 }).catch(() => {}); };
  await dismiss();
  await page.click(cfg.SELECTORS.merchantNav, { timeout: 3000 }).catch(() => {});   // '매장' 탭은 기본 활성 — 실패해도 무방
  await page.fill(cfg.SELECTORS.merchantSearchInput, biz);
  await dismiss();
  await page.waitForTimeout(1200);
  await page.locator(`text=${store}`).first().click({ force: true });
  await page.click(cfg.SELECTORS.menuNav);
  await page.locator(`text=${product}`).first().click();
  await page.waitForTimeout(2000);

  const info = await page.evaluate(() => {
    const vis = (el) => { const s = getComputedStyle(el); return s.display !== 'none' && s.visibility !== 'hidden'; };
    return {
      inputs: [...document.querySelectorAll('input')].map(i => ({ type: i.type, id: i.id || null, accept: i.accept || null, visible: vis(i) })),
      buttons: [...document.querySelectorAll('button')].slice(0, 40).map(b => ({ text: (b.textContent || '').trim().slice(0, 25), aria: b.getAttribute('aria-label'), visible: vis(b) })),
      sections: document.querySelectorAll('section').length,
      uploadLike: [...document.querySelectorAll('[id*="upload" i], [class*="upload" i], [class*="image" i], [class*="photo" i]')].slice(0, 6)
        .map(e => ({ tag: e.tagName, id: e.id || null, cls: String(e.className).slice(0, 60), html: e.outerHTML.slice(0, 220) })),
    };
  });
  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})();
