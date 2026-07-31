/*
 * 채점 유틸 — 정답(ground-truth.json) 대비 추출 결과를 비교한다.
 * compare.js(Claude API)와 baseline-tesseract.js(무료 OCR) 양쪽에서 공용으로 쓴다.
 */
const norm = (s) => String(s == null ? '' : s).replace(/\s+/g, '').trim();
const normPrice = (p) => {
  if (p == null) return null;
  const n = parseInt(String(p).replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
};

/**
 * 구조화 추출 결과 채점 — (상품명, 가격) 쌍의 정확 일치.
 * @param {{name:string, price:number}[]} truth
 * @param {{name:string, price:number}[]} got
 */
function scorePairs(truth, got) {
  const key = (x) => `${norm(x.name)}|${normPrice(x.price)}`;
  const T = truth.map(key);
  const G = (got || []).map(key);
  const pool = [...T];
  let hit = 0;
  for (const g of G) {
    const i = pool.indexOf(g);
    if (i >= 0) { hit++; pool.splice(i, 1); }
  }
  // 이름만 맞고 가격이 틀린 건 별도 집계 — 어디서 깨지는지 보려고
  const truthNames = truth.map((x) => norm(x.name));
  const namePool = [...truthNames];
  let nameHit = 0;
  for (const g of got || []) {
    const i = namePool.indexOf(norm(g.name));
    if (i >= 0) { nameHit++; namePool.splice(i, 1); }
  }
  const precision = G.length ? hit / G.length : 0;
  const recall = T.length ? hit / T.length : 0;
  return {
    truthN: T.length, gotN: G.length,
    exact: hit, nameOnly: nameHit,
    precision, recall,
    f1: precision + recall ? (2 * precision * recall) / (precision + recall) : 0,
    missed: truth.filter((x) => !(got || []).some((g) => key(g) === key(x))).map((x) => `${x.name} ${x.price}`),
    spurious: (got || []).filter((g) => !truth.some((x) => key(x) === key(g))).map((g) => `${g.name} ${g.price}`),
  };
}

/**
 * 원시 텍스트(tesseract) 채점 — 구조가 없으므로 '정답 상품명이 텍스트에 그대로 등장하는가'로 본다.
 * 구조화 추출보다 후한 기준(가격 대응은 보지 않음)이라, 이 점수는 tesseract에 유리한 상한값이다.
 */
function scoreRawText(truth, text) {
  const flat = norm(text);
  const hits = truth.filter((x) => flat.includes(norm(x.name)));
  return {
    truthN: truth.length,
    exact: hits.length,
    recall: truth.length ? hits.length / truth.length : 0,
    missed: truth.filter((x) => !flat.includes(norm(x.name))).map((x) => x.name),
  };
}

module.exports = { scorePairs, scoreRawText, norm, normPrice };
