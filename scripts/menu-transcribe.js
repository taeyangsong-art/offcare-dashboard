/*
 * 메뉴판독 변환기 (멀티 POS): 표준 메뉴 JSON → POS별 상품등록 양식 CSV + 웹 입력 체크리스트
 * 사용법:
 *   node scripts/menu-transcribe.js <요청JSON> [--pos 토스|퍼스트|오케이|스파로스] [--db menu-db.json] [--out out]
 *   (--pos 미지정 시 요청JSON의 "pos" 필드로 자동 판별)
 *
 * 요청 JSON 스키마 (Claude 비전이 이미지+요청문 판독해 생성):
 * {
 *   "store":"매장명", "biz":"사업자번호", "pos":"토스플레이스",
 *   "changes":[
 *     { "op":"add",    "cat":"식사", "name":"비비막국수", "price":9000 },
 *     { "op":"rename", "cat":"식사", "from":"막국수", "name":"물막국수", "price":9000 },
 *     { "op":"price",  "cat":"주류", "name":"생맥주", "price":5000 },
 *     { "op":"delete", "cat":"커피", "name":"핫" }
 *   ]
 * }
 * op: add(신규)·rename(이름변경)·price(가격수정)·delete(삭제)
 * cat: 스파로스는 "대>중>소" 형태로 계층 지정 가능(단일값이면 소분류로).
 *
 * 상품ID(매칭키): menu-db.json { "<사업자번호>": { "<메뉴명>": "<코드>" } }.
 *   변경/수정은 기존 상품명으로 코드를 찾아 POS별 매칭 컬럼에 채움. 없으면 ⚠️상품ID필요.
 */
const fs = require('fs');
const path = require('path');

// ── POS별 양식 설정 (실제 4개 엑셀 양식 헤더/예시행 기반) ──────────────────
const POS = {
  토스플레이스: {
    aliases: ['토스', '토스포스', 'tossplace', 'toss'],
    cols: ['상품 ID','상품이름','카테고리','가격 타입 (고정가격 or 시가)','기본가격 (원)','세금','재고관리','현재수량 (개)','바코드','키오스크/테이블∙픽업오더 노출','키오스크/테이블∙픽업오더 상품이름','키오스크/테이블∙픽업오더 상품설명','제조사','상품코드'],
    idCol: '상품 ID', emitHeader: true, confirmed: true, defaults: {},
    fields: (c) => ({ '상품이름': c.name, '카테고리': c.cat, '기본가격 (원)': c.price ?? '' }),
  },
  퍼스트포스: {
    aliases: ['퍼스트', 'first', 'firstpos', 'kpn', 'kpn first'],
    cols: ['상품코드','상품명','상품명(영문)','판매가관리구분','바코드','대분류','거래처','원가','판매상품여부','판매가','과세여부','ERP매핑코드','주문상품구분','주문단위','입수','재고단위','재고관리여부','안전재고','초기재고','원산지','마일리지적립여부','KIOSK상품여부','상품상태','상품설명표기여부','상품설명','상품설명(영문)','터치키표기여부','비고'],
    idCol: '상품코드', emitHeader: true, confirmed: true,   // 팀 확정 간주(실제 성공파일 확보 시 defaults 재점검 권장)
    defaults: { '주문단위': '낱개', '재고관리여부': 'Yes', 'KIOSK상품여부': 'No' },
    fields: (c) => ({ '상품명': c.name, '대분류': c.cat, '판매가': c.price ?? '' }),
  },
  오케이포스: {
    aliases: ['오케이', 'okpos', 'ok', '오케이포스'],
    cols: ['상품명','대분류','거래처','주문상품구분','판매상품여부','가격관리구분','판매단가','원산지','주문단위구분','최소주문수량','매핑상품코드','바코드','과세여부','재고관리','원가','안전재고','초기재고','모바일주문구분','키오스크주문구분','품목','비고','주방프린터01 (주방)'],
    idCol: '매핑상품코드', emitHeader: true, confirmed: true,   // 실제 성공파일(네투메뉴등록.ods)로 검증
    // 참고: 원산지는 실제 성공파일에서 '원산지명' 플레이스홀더 그대로 채워짐(사실상 필수) → 필요시 실제 원산지로 교체.
    //       거래처는 비워도 업로드 성공. 매장에 주방프린터가 2·3개면 해당 열은 수동 추가 필요.
    defaults: { '거래처': '', '주문상품구분': '사입상품', '판매상품여부': 'Yes', '가격관리구분': '정가상품', '원산지': '원산지명', '원가': '0', '주문단위구분': '낱개', '최소주문수량': '1', '과세여부': 'Yes', '재고관리': 'Yes', '안전재고': '0', '초기재고': '0', '모바일주문구분': '일반/POS', '키오스크주문구분': '먹고가기/포장', '주방프린터01 (주방)': 'Yes' },
    fields: (c) => ({ '상품명': c.name, '대분류': c.cat, '판매단가': c.price ?? '' }),
  },
  스파로스포스: {
    aliases: ['스파로스', 'sparos', 'spharos'],
    cols: ['설명','상품바코드','대분류','중분류','소분류','상품명','영수증명','판매단가','경감세율판매단가','상품타입','과세구분','사용여부','원가','경감세율여부','공급가','상품유형','할인여부','싯가여부','ERP상품코드','위해 상품','옵션','옵션그룹','봉사료','봉사료율','속성그룹','재고관리','규격(재고단위)','중량단위','상품중량','원산지','입수단위','입수수량','적정재고','초기재고','상품추가정보','한글상품표시명','영문상품표시명','일문상품표시명','중문_간체상품표시명','중문_번체상품표시명'],
    idCol: 'ERP상품코드', emitHeader: false, confirmed: true,   // 팀 확정 간주 · ⚠️ 데이터는 공식양식 4행부터 → 데이터행만 생성
    pasteNote: '스파로스는 공식 양식의 4번째 행부터 데이터로 인식합니다. 생성된 데이터 행을 공식 양식 4행부터 붙여넣으세요(1~3행 헤더/안내/예시 보존).',
    defaults: { '상품타입': '일반상품', '과세구분': '과세', '사용여부': '정상', '상품유형': '일반매출', '할인여부': 'Y', '싯가여부': 'N', '위해 상품': 'N', '봉사료': 'N', '봉사료율': '0', '재고관리': '사용', '규격(재고단위)': 'EA', '원산지': '국내', '입수단위': 'EA', '입수수량': '1', '적정재고': '0', '초기재고': '0' },
    fields: (c) => {
      const parts = String(c.cat || '').split(/[>\/]/).map(s => s.trim()).filter(Boolean);
      const [대, 중, 소] = parts.length >= 3 ? parts : parts.length === 2 ? ['', parts[0], parts[1]] : ['', '', parts[0] || ''];
      return { '대분류': 대, '중분류': 중, '소분류': 소, '상품명': c.name, '영수증명': c.name, '판매단가': c.price ?? '' };
    },
  },
};
function resolvePos(name) {
  const n = String(name || '').toLowerCase().replace(/\s/g, '');
  for (const [key, cfg] of Object.entries(POS)) {
    if (key.toLowerCase() === n || cfg.aliases.some(a => n.includes(a.toLowerCase().replace(/\s/g, '')))) return { key, cfg };
  }
  return null;
}

// ── 인자 ──────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const flag = (f, def) => { const i = args.indexOf(f); return i > -1 ? args[i + 1] : def; };
const dbPath = flag('--db', 'menu-db.json');
const outDir = flag('--out', 'out');
const posArg = flag('--pos', null);
const consumed = new Set([dbPath, outDir, posArg].filter(Boolean));
const jsonFile = args.find(a => !a.startsWith('--') && !consumed.has(a));
if (!jsonFile) { console.error('usage: node menu-transcribe.js <요청JSON> [--pos 토스|퍼스트|오케이|스파로스] [--db menu-db.json] [--out out]'); process.exit(1); }

const req = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
const resolved = resolvePos(posArg || req.pos);
if (!resolved) { console.error('❌ POS 판별 실패. --pos 로 지정: 토스 | 퍼스트 | 오케이 | 스파로스 (요청 pos="' + (req.pos || '') + '")'); process.exit(1); }
const { key: posKey, cfg } = resolved;

let db = {};
if (fs.existsSync(dbPath)) { try { db = JSON.parse(fs.readFileSync(dbPath, 'utf8')); } catch (e) {} }
const storeDb = db[req.biz] || {};

// ── 변환 ──────────────────────────────────────────────────────────────────
const OPLABEL = { add: '신규', rename: '이름변경', price: '가격수정', delete: '삭제' };
const csvCell = (v) => { v = (v == null ? '' : String(v)); return /[",\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
const csvRow = (vals) => vals.map(csvCell).join(',');

const uploadRows = [], checklist = [], warns = [], reviewItems = [];
// 전체판독 모드: req.menu(카테고리>항목)가 오면 전부 신규(add)로 펼침. 기존 req.changes(diff) 모드와 호환.
const changes = req.changes || (req.menu || []).flatMap(cat =>
  (cat.items || []).map(it => ({ op: 'add', cat: cat.name || cat.cat, name: it.name, price: it.price, options: it.options, confidence: it.confidence, note: it.note })));
for (const c of changes) {
  const label = OPLABEL[c.op] || c.op;
  const matchName = c.op === 'rename' ? (c.from || c.name) : c.name;
  let id = '';
  if (c.op !== 'add') { id = storeDb[matchName] || ''; if (!id) warns.push(`${label}: '${matchName}' 상품ID(${cfg.idCol}) 미보유 → 포스 상품목록 export 필요`); }

  // 신뢰도/검수 — 가격 미판독 또는 저신뢰(confidence≠high)면 검수 대상. 추정 금지: 가격 없으면 양식에서 제외.
  const priceMissing = c.op !== 'delete' && (c.price == null || c.price === '');
  const lowConf = c.confidence && c.confidence !== 'high';
  const reviewTag = priceMissing ? '⚠️가격확인' : lowConf ? '⚠️판독확인' : '';
  if (reviewTag) reviewItems.push(`${c.name}${c.cat ? ' (' + c.cat + ')' : ''} — ${priceMissing ? '가격 미판독' : (c.note || '판독 애매')}`);

  if (c.op !== 'delete' && !priceMissing) {      // 삭제·가격미판독은 양식 제외 → 체크리스트에만
    const rowObj = { ...cfg.defaults, ...cfg.fields(c) };
    rowObj[cfg.idCol] = c.op === 'add' ? '' : (id || '⚠️상품ID필요');
    uploadRows.push(csvRow(cfg.cols.map(h => rowObj[h] ?? '')));
  }
  const base = c.op === 'rename' ? `${c.from} → ${c.name}` : c.op === 'add' ? '신규 추가' : c.op === 'delete' ? '삭제(포스에서 처리)' : `가격 → ${c.price}`;
  checklist.push({ 작업: label, 카테고리: c.cat || '', 메뉴명: c.name, 가격: c.price ?? '', 신뢰도: c.confidence || '-', 검수: reviewTag, [cfg.idCol]: c.op === 'add' ? '(신규)' : (id || '⚠️필요'), 비고: c.note ? `${base} · ${c.note}` : base });
}

// ── 출력 ──────────────────────────────────────────────────────────────────
fs.mkdirSync(outDir, { recursive: true });
const safe = (req.store || 'store').replace(/[\\/:*?"<>|]/g, '_');
const header = cfg.emitHeader ? csvRow(cfg.cols) + '\n' : '';
const uploadCsv = '﻿' + header + uploadRows.join('\n') + '\n';
const clCols = ['작업', '카테고리', '메뉴명', '가격', '신뢰도', '검수', cfg.idCol, '비고'];
const checklistCsv = '﻿' + csvRow(clCols) + '\n' + checklist.map(r => csvRow(clCols.map(k => r[k] ?? ''))).join('\n') + '\n';
const upPath = path.join(outDir, `${posKey}_업로드_${safe}.csv`);
const clPath = path.join(outDir, `웹입력_체크리스트_${safe}.csv`);
fs.writeFileSync(upPath, uploadCsv, 'utf8');
fs.writeFileSync(clPath, checklistCsv, 'utf8');

console.log(`\n=== 메뉴판독: ${req.store} (${req.biz}) · POS=${posKey} ${cfg.confirmed ? '' : '(값형식 추정 — 실제 샘플로 검증 권장)'} ===`);
console.log(`작업 ${checklist.length}건 · 양식행 ${uploadRows.length}건 · 검수필요 ${reviewItems.length}건 · 상품ID경고 ${warns.length}건 · 매칭키=${cfg.idCol}`);
console.log('\n[웹 입력 체크리스트]'); console.table(checklist);
console.log(`[① ${posKey} 양식]  ${upPath}`);
console.log(`[② 웹 체크리스트]   ${clPath}`);
if (cfg.pasteNote) console.log('※ ' + cfg.pasteNote);
if (reviewItems.length) { console.log(`\n🔎 검수 필요 ${reviewItems.length}건 (양식 제외됐거나 판독 애매 — 사진과 대조 후 수동 처리):`); reviewItems.forEach(r => console.log('  - ' + r)); }
if (warns.length) { console.log('\n⚠️ 상품ID 필요(변경·수정 완전자동화 전제):'); warns.forEach(w => console.log('  - ' + w)); }
