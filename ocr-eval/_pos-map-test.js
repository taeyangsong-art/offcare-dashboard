/* 실제 매장 엑셀(사랑빵 관악점) → 그리드 → 토스플레이스 CSV 까지 그대로 태워 확인 */
const fs = require('fs'), zlib = require('zlib');
const XLSX_FILE = process.argv[2];

// index.html 에서 추출기·그리드파서·POS 매핑을 떼어온다
const html = fs.readFileSync('index.html', 'utf8');
const L = html.split('\n');
const from = (pred) => L.findIndex(pred);
const src = [
  L.slice(from((l) => l.startsWith('const FMT_HINT')), from((l) => l.startsWith('let menuregSel='))).join('\n'),
  L.slice(from((l) => l.startsWith('const MR_OPEN=')), from((l) => l.startsWith('async function menuregGen'))).join('\n'),
  L.slice(from((l) => l.startsWith('const MENUREG_HEAD')), from((l) => l.startsWith('async function menuregXlUpload'))).join('\n'),
].join('\n');
// CSV 출력은 코드에서 제거됐다(POS 가 xlsx 만 받음) — 검증 표시용으로만 테스트에서 만든다
const menuregCsvCell = (v) => { v = (v == null ? '' : String(v)); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };

// 그리드는 DOM 대신 문자열로
let GRID = '';
global.document = { getElementById: () => ({ get value() { return GRID; } }) };
// eval 안의 const 는 밖에서 안 보이므로 전역으로 내보낸다
eval(src + '\nglobal.MENUREG_POS=MENUREG_POS; global.menuregXlExtract=menuregXlExtract;'
         + ' global.menuregParseGrid=menuregParseGrid;');

// ── xlsx 읽기(라이브러리 없이) ──
function unzip(buf) {
  const out = {}; let eo = -1;
  for (let i = buf.length - 22; i >= 0; i--) if (buf.readUInt32LE(i) === 0x06054b50) { eo = i; break; }
  const n = buf.readUInt16LE(eo + 10); let p = buf.readUInt32LE(eo + 16);
  for (let i = 0; i < n; i++) {
    const method = buf.readUInt16LE(p + 10), csize = buf.readUInt32LE(p + 20);
    const nlen = buf.readUInt16LE(p + 28), elen = buf.readUInt16LE(p + 30), clen = buf.readUInt16LE(p + 32);
    const lho = buf.readUInt32LE(p + 42);
    const name = buf.slice(p + 46, p + 46 + nlen).toString('utf8');
    p += 46 + nlen + elen + clen;
    const lnlen = buf.readUInt16LE(lho + 26), lelen = buf.readUInt16LE(lho + 28);
    const start = lho + 30 + lnlen + lelen, raw = buf.slice(start, start + csize);
    out[name] = method === 0 ? raw : zlib.inflateRawSync(raw);
  }
  return out;
}
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#10;/g, '\n');
const z = unzip(fs.readFileSync(XLSX_FILE));
const ss = [];
if (z['xl/sharedStrings.xml']) for (const m of z['xl/sharedStrings.xml'].toString('utf8').matchAll(/<si>([\s\S]*?)<\/si>/g))
  ss.push(dec([...m[1].matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((x) => x[1]).join('')));
const colIdx = (ref) => { let n = 0; for (const ch of ref.replace(/\d/g, '')) n = n * 26 + (ch.charCodeAt(0) - 64); return n - 1; };
const rows = [];
for (const rm of z['xl/worksheets/sheet1.xml'].toString('utf8').matchAll(/<row[^>]*>([\s\S]*?)<\/row>/g)) {
  const arr = [];
  for (const cm of rm[1].matchAll(/<c r="([A-Z]+\d+)"([^>]*)>([\s\S]*?)<\/c>/g)) {
    const v = (cm[3].match(/<v>([\s\S]*?)<\/v>/) || [])[1];
    const inl = (cm[3].match(/<is>[\s\S]*?<t[^>]*>([\s\S]*?)<\/t>/) || [])[1];
    arr[colIdx(cm[1])] = inl !== undefined ? dec(inl) : (/t="s"/.test(cm[2]) ? (ss[+v] || '') : (v === undefined ? '' : v));
  }
  rows.push(arr);
}
console.log(`엑셀 ${rows.length}행 읽음`);

// ── 추출 → 그리드 ──
const lines = menuregXlExtract(rows);
console.log(`추출 ${lines.length}개\n`);
console.log('■ 그리드 앞 4줄 (분류 | 상품명 | 가격 | 바코드 | 제조사 | 상품코드 | 재고)');
lines.slice(0, 4).forEach((l) => console.log('   ' + l));

GRID = lines.join('\n');
const parsed = menuregParseGrid();
console.log(`\n■ 그리드 파싱 ${parsed.length}행 · 첫 행: ${JSON.stringify(parsed[0])}`);

// ── 토스플레이스 CSV ──
const P = MENUREG_POS[0];
const head = P.cols;
const csvRow = (r) => { const o = Object.assign({}, P.defaults || {}, P.row(r)); return head.map((c) => menuregCsvCell(o[c] === undefined ? '' : o[c])).join(','); };
console.log('\n■ 토스플레이스 CSV');
console.log('   ' + head.join(','));
parsed.slice(0, 4).forEach((r) => console.log('   ' + csvRow(r)));

// 검증
const bad = parsed.filter((r) => !r.bar || !r.maker).length;
console.log(`\n바코드·제조사 둘 다 채워진 행: ${parsed.length - bad}/${parsed.length}`);
const cats = [...new Set(parsed.map((r) => r.cat))];
console.log(`카테고리 값: ${cats.slice(0, 5).join(' , ')}${cats.length > 5 ? ' …' : ''}`);
console.log(`'제조사:' 가 카테고리에 섞였나: ${cats.some((c) => /제조사/.test(c)) ? '❌ 있음' : '✅ 없음'}`);
