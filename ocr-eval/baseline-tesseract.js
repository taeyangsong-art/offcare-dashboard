/*
 * 무료 baseline — menu-requests.js 에 이미 캐시된 tesseract.js OCR 결과를 정답과 대조한다.
 * API 키 불필요. 실행: node ocr-eval/baseline-tesseract.js
 */
const fs = require('fs');
const path = require('path');
const { scoreRawText } = require('./score');

const ROOT = path.join(__dirname, '..');
const GT = JSON.parse(fs.readFileSync(path.join(__dirname, 'ground-truth.json'), 'utf8'));

// menu-requests.js 는 window 전역에 붙는 브라우저 데이터 파일 → 샌드박스에 담아 로드
const w = {};
new Function('window', fs.readFileSync(path.join(ROOT, 'menu-requests.js'), 'utf8'))(w);
const DATA = w.MENU_REQUESTS;

// 첨부 트리를 재귀 탐색해 { 파일명 → ocr 텍스트 } 로 모은다
const ocrByFile = {};
(function walk(node) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) return node.forEach(walk);
  if (typeof node.ocr === 'string' && node.ocr.trim()) {
    const name = path.basename(String(node.path || node.file || node.name || ''));
    if (name) ocrByFile[name] = node.ocr;
  }
  for (const k in node) walk(node[k]);
})(DATA);

console.log('═'.repeat(72));
console.log('  무료 baseline — tesseract.js (현재 운영 중)');
console.log('═'.repeat(72));

let tTruth = 0, tHit = 0;
for (const img of GT.images) {
  const text = ocrByFile[img.file];
  if (!text) { console.log(`\n▣ ${img.file} (${img.tab}) — 캐시된 OCR 없음, 건너뜀`); continue; }
  const s = scoreRawText(img.items, text);
  tTruth += s.truthN; tHit += s.exact;
  console.log(`\n▣ ${img.file} · ${img.tab}`);
  console.log(`   상품명 인식 ${s.exact}/${s.truthN}  (${(s.recall * 100).toFixed(0)}%)`);
  if (s.missed.length) console.log(`   놓침: ${s.missed.join(', ')}`);
}

console.log('\n' + '─'.repeat(72));
console.log(`  합계  상품명 인식 ${tHit}/${tTruth}  (${(tTruth ? tHit / tTruth * 100 : 0).toFixed(1)}%)  · 비용 0원`);
console.log('─'.repeat(72));
console.log('\n※ 가격 대응은 채점하지 않은, tesseract 에 유리한 상한값이다.');
console.log('   실제로는 상품명과 가격을 짝지어야 하므로 사용 가능한 정확도는 이보다 낮다.');
