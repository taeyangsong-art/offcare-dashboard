// 최초 1회 실행: 브라우저를 띄워 사람이 직접 로그인(2FA 포함)한 뒤 세션을 저장한다.
// 이후 upload-menu.js 가 이 세션을 재사용해 무인 실행한다. (자격증명은 코드에 넣지 않음)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const cfg = require('./config');

(async () => {
  fs.mkdirSync(path.dirname(cfg.authFile), { recursive: true });
  const browser = await chromium.launch({ headless: false, slowMo: cfg.slowMo, channel: cfg.channel });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();
  await page.goto(cfg.baseUrl);

  console.log('\n👉 열린 브라우저에서 직접 로그인하세요 (2FA 포함).');
  console.log('   로그인/가맹점 목록이 보이면 이 터미널에서 Enter 를 누르세요.\n');
  await new Promise((res) => process.stdin.once('data', res));

  await ctx.storageState({ path: cfg.authFile });
  console.log('✅ 세션 저장 완료 →', cfg.authFile);
  console.log('   (이 파일은 로그인 상태를 담고 있으니 절대 커밋/공유 금지)');
  await browser.close();
  process.exit(0);
})();
