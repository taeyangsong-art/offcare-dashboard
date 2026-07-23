// 토스플레이스 dashboard 에 메뉴(양식 엑셀) 또는 상품 이미지를 자동 업로드한다. 저장된 로그인 세션 재사용.
// 기본 dry-run: 최종 버튼(업로드/수정하기) 직전까지만 진행 + 스크린샷. --confirm 일 때만 실제 실행.
//
// 사용법:
//   node rpa/login.js                                            # 최초 1회 로그인(세션 저장)
//   [메뉴 일괄]   node rpa/upload-menu.js --biz 1078709701 --store "(주)아이샵케어(영수증 테스트)" --file out/양식.xlsx [--confirm]
//   [상품 이미지] node rpa/upload-menu.js --biz 1078709701 --store "(주)아이샵케어(영수증 테스트)" --product "현미바삭" --images a.jpg,b.jpg [--confirm]
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const cfg = require('./config');

// ── 인자 ──────────────────────────────────────────────────────────────────
const arg = (f, d) => { const i = process.argv.indexOf(f); return i > -1 ? process.argv[i + 1] : d; };
const has = (f) => process.argv.includes(f);
const biz = (arg('--biz', '') || '').replace(/-/g, '').trim();
const store = arg('--store', '');            // dashboard에 등록된 상호명 — 검색결과에서 이 텍스트를 클릭(오등록 방지)
const file = arg('--file', '');              // 메뉴 일괄 모드: 상품등록 양식 엑셀/CSV
const product = arg('--product', '');        // 이미지 모드: 이미지를 붙일 상품명
const images = (arg('--images', '') || '').split(',').map((s) => s.trim()).filter(Boolean);
const confirm = has('--confirm') || cfg.dryRun === false;

const usage = 'usage: node rpa/upload-menu.js --biz <사업자번호> --store <상호명> (--file <양식> | --product <상품명> --images <a,b>) [--confirm]';
if (!biz || !store) { console.error(usage); process.exit(1); }
const mode = file ? 'bulk' : (images.length && product) ? 'image' : null;
if (!mode) { console.error(usage + '\n  → --file(메뉴 일괄) 또는 --product+--images(상품 이미지) 중 하나를 지정'); process.exit(1); }
if (file && images.length) { console.error('❌ 한 번에 한 모드만: --file(메뉴) 와 --images(이미지)는 별도 실행하세요'); process.exit(1); }
if (!fs.existsSync(cfg.authFile)) { console.error('❌ 로그인 세션 없음 — 먼저 실행: node rpa/login.js'); process.exit(1); }
if (file && !fs.existsSync(file)) { console.error('❌ 양식 파일 없음:', file); process.exit(1); }
for (const im of images) if (!fs.existsSync(im)) { console.error('❌ 이미지 없음:', im); process.exit(1); }

// ── 스크린샷/단계 헬퍼 ──────────────────────────────────────────────────────
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const runDir = path.join(cfg.shotDir, `${biz}-${stamp}`);
fs.mkdirSync(runDir, { recursive: true });
let stepN = 0;
async function shot(page, label) {
  const name = `${String(stepN).padStart(2, '0')}-${String(label).replace(/[^\w가-힣-]/g, '_')}.png`;
  await page.screenshot({ path: path.join(runDir, name), fullPage: true }).catch(() => {});
}
async function step(page, name, fn) {
  stepN++;
  console.log(`\n[${stepN}] ${name} ...`);
  try { await fn(); await shot(page, name); console.log(`    ✓ ${name}`); }
  catch (e) { await shot(page, `ERROR-${name}`); throw new Error(`${name} 실패: ${e.message}`); }
}
const todo = (sel) => { if (typeof sel === 'string' && sel.startsWith('TODO')) throw new Error(`셀렉터 미설정(config.js SELECTORS): "${sel}"`); return sel; };
const isTodo = (sel) => typeof sel === 'string' && sel.startsWith('TODO');

// ── 메인 ────────────────────────────────────────────────────────────────────
(async () => {
  console.log(`\n=== dashboard 업로드 · ${mode === 'bulk' ? '메뉴 일괄' : `상품 이미지(${product})`} · 사업자 ${biz} · ${confirm ? '실제 실행' : 'DRY-RUN'} ===`);
  const browser = await chromium.launch({ headless: cfg.headless, slowMo: cfg.slowMo, channel: cfg.channel });
  const ctx = await browser.newContext({ storageState: cfg.authFile });
  const page = await ctx.newPage();
  page.setDefaultTimeout(cfg.timeout);
  const S = cfg.SELECTORS;
  const dismissPopup = async () => { await page.click(S.popupDismiss, { timeout: 1500 }).catch(() => {}); };

  try {
    await step(page, '홈 진입·세션/조직 확인', async () => {
      await page.goto(cfg.baseUrl);
      // 로그인 직후 조직(워크스페이스) 선택 화면이 뜨면 선택
      await page.getByRole('listitem').filter({ hasText: cfg.orgText }).first().click({ timeout: 4000 }).catch(() => {});
      await page.waitForSelector(todo(S.loggedIn), { timeout: cfg.timeout })
        .catch(() => { throw new Error('로그인 세션 만료 추정 → node rpa/login.js 재실행'); });
      await dismissPopup();
    });

    await step(page, `매장 검색·선택 (${biz} · ${store})`, async () => {
      await page.click(todo(S.merchantNav));
      await page.fill(todo(S.merchantSearchInput), biz);   // 입력만으로 자동 필터링
      await dismissPopup();
      await page.waitForTimeout(1200);
      // 같은 사업자번호에 매장 여러 개 가능 → 보일 때까지 본문 스크롤 탐색
      const row = page.locator(todo(S.merchantResultRow(biz, store))).first();
      let found = false;
      await page.mouse.move(650, 430);
      for (let i = 0; i < 10; i++) {
        if ((await row.count()) > 0 && (await row.isVisible().catch(() => false))) { found = true; break; }
        await page.mouse.wheel(0, 700);
        await page.waitForTimeout(500);
      }
      if (!found) throw new Error(`검색결과에서 상호 '${store}' 를 찾지 못함 — 등록 상호명과 일치하는지 확인`);
      await row.click({ force: true });   // 간헐적 토스트/오버레이가 클릭을 가로채는 경우 대비(가시성은 위에서 확인됨)
    });

    await step(page, '매장 상품 관리 진입', async () => {
      await page.click(todo(S.menuNav));
    });

    if (mode === 'bulk') {
      await step(page, '더보기 → 엑셀로 일괄 추가', async () => {
        await page.click(todo(S.moreBtn));
        await page.click(todo(S.bulkRegisterOpen));
      });
      await step(page, `양식 파일 첨부 (${path.basename(file)})`, async () => {
        await page.setInputFiles(todo(S.bulkFileInput), path.resolve(file));
      });
      if (confirm) {
        await step(page, '업로드 실행', async () => {
          await page.click(todo(S.bulkSubmit));
          if (!isTodo(S.bulkResult)) await page.waitForSelector(S.bulkResult, { timeout: cfg.timeout });
          else await page.waitForTimeout(3000);
        });
        console.log('\n✅ 업로드 완료. 결과 스크린샷 →', runDir);
      } else {
        stepN++; await shot(page, '검수대기_업로드직전');
        console.log('\n🟡 DRY-RUN — [업로드] 는 실행하지 않았습니다. 스크린샷 검수 후 --confirm 으로 재실행하세요.');
        console.log('   검수 스크린샷 →', runDir);
      }
    } else { // mode === 'image'
      await step(page, `상품 상세 진입 (${product})`, async () => {
        await page.locator(todo(S.productByName(product))).first().click();
      });
      await step(page, `이미지 첨부 (${images.length}장)`, async () => {
        // 이미지 file input은 평소 DOM에 없고, '상품 정보' 섹션의 이미지 플레이스홀더(텍스트 없는 첫 버튼)를
        // 클릭해야 나타나거나 네이티브 파일선택창(filechooser)이 뜬다 → 두 경우 모두 대응.
        // (이미 이미지가 있는 상품은 썸네일+X — 교체 자동화는 추후 지원)
        const files = images.map((p) => path.resolve(p));
        const addBtn = page.locator('section').filter({ hasText: '상품 정보' }).getByRole('button').first();
        const chooserP = page.waitForEvent('filechooser', { timeout: 6000 }).catch(() => null);
        await addBtn.click();
        const chooser = await chooserP;
        if (chooser) await chooser.setFiles(files);                                   // 네이티브 파일선택창 경로
        else await page.setInputFiles(todo(S.imageFileInput), files, { timeout: 6000 }); // 동적 input 경로
        await page.waitForTimeout(1500);   // 미리보기 반영 대기
      });
      if (confirm) {
        await step(page, '수정하기(저장) 실행', async () => {
          await page.click(todo(S.imageSubmit));
          if (!isTodo(S.imageResult)) await page.waitForSelector(S.imageResult, { timeout: cfg.timeout });
          else await page.waitForTimeout(3000);
        });
        console.log('\n✅ 이미지 저장 완료. 결과 스크린샷 →', runDir);
      } else {
        stepN++; await shot(page, '검수대기_저장직전');
        console.log('\n🟡 DRY-RUN — [수정하기] 는 실행하지 않았습니다. 스크린샷 검수 후 --confirm 으로 재실행하세요.');
        console.log('   검수 스크린샷 →', runDir);
      }
    }
  } catch (e) {
    console.error('\n❌', e.message);
    console.error('   실패 지점 스크린샷 →', runDir);
    process.exitCode = 1;
  } finally {
    if (!cfg.headless) {
      console.log('\n   브라우저를 열어뒀습니다. 확인 후 이 터미널에서 Enter 를 누르면 닫습니다.');
      await new Promise((r) => process.stdin.once('data', r));
    }
    await browser.close();
  }
})();
