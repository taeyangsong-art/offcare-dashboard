/* 예약 리포트 → 외부 공유본
 *
 * share/booking-report.html 에서 원본 표(상호·사업자번호·요청내용)와 CSV 내려받기를 걷어내
 * 집계 수치만 남긴 share/booking-report-share.html 을 만든다. 링크를 밖으로 돌려도 되는 판.
 *
 *   node scripts/booking-share.js          (booking-report.js 끝에서도 자동 호출)
 */
const fs = require('fs');
const path = require('path');

const DEFAULT_DIR = path.join(__dirname, '..', 'share');

function toShare(html) {
  const out = html
    .replace(/\s*<details>[\s\S]*?<\/details>/g, '')                  // 원본 N건 보기
    .replace(/\s*<a class="btn"[^>]*download>[^<]*<\/a>/g, '')          // CSV 내려받기
    .replace(/\s*· scripts\/booking-report\.js/, '')
    .replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n<meta name="robots" content="noindex,nofollow">');
  if (/<details>|download>|사업자<\/th>/.test(out)) throw new Error('공유본에 원본 데이터가 남았습니다');
  return out;
}

function build(dir = DEFAULT_DIR) {
  const SRC = path.join(dir, 'booking-report.html');
  const OUT = path.join(dir, 'booking-report-share.html');
  fs.writeFileSync(OUT, toShare(fs.readFileSync(SRC, 'utf8')), 'utf8');
  console.log(`✅ ${path.relative(process.cwd(), OUT)} 생성 (원본 표·CSV 제외)`);
}

module.exports = { toShare, build };
if (require.main === module) build();
