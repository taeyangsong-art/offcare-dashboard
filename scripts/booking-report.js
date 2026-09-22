/*
 * 예약 리포트 — 슬랙에 [예약]·(예약) 으로 올라온 요청의 실제 처리 이모지 분포를 집계한다.
 *
 * 왜 별도 스크립트인가:
 *   slack-data.js 로는 이 질문에 답할 수 없다.
 *   · req(내용) 필드는 '내용:' 줄만 140자까지 저장 → 메시지 앞머리의 [예약] 태그가 안 남는다
 *   · 2차부재는 fetch-and-tally.js 가 pending 에서 제외해 적재 자체를 안 한다
 *   그래서 슬랙 원문을 다시 읽어 태그와 리액션을 직접 대조한다.
 *
 * 실행:
 *   SLACK_BOT_TOKEN=xoxb-... node scripts/booking-report.js
 *   환경변수 FROM / TO 로 기간 지정 (기본 2026-08-01 ~ 2026-08-31)
 *   OUT_DIR 로 출력 폴더 지정 (기본 share)
 *
 * 출력:
 *   <OUT_DIR>/booking-report.html  공유용 페이지
 *   <OUT_DIR>/booking-report.csv   엑셀용 (UTF-8 BOM — 한글 안 깨짐)
 */
const fs = require('fs');
const path = require('path');

const TOKEN = process.env.SLACK_BOT_TOKEN;
if (!TOKEN) { console.error('SLACK_BOT_TOKEN 환경변수가 필요합니다.'); process.exit(1); }

const FROM = (process.env.FROM || '2026-08-01').trim();
const TO = (process.env.TO || '2026-08-31').trim();
const OUT_DIR = (process.env.OUT_DIR || 'share').trim();

// 집계 대상 채널 — fetch-and-tally.js 의 CHANNELS 와 같은 목록
const CHANNELS = [
  { id: 'C09HRUSG4TX', label: '원격 AS요청' },
  { id: 'C07CL4BV9QT', label: '명의변경' },
  { id: 'C08740SFT1S', label: '메뉴등록' },
  { id: 'C0ASD02FFML', label: '배달요청' },
];

// 이모지 규칙 — fetch-and-tally.js 와 동일하게 유지할 것
const personMap = { '규빈':'김규빈','선유':'배선유','성현':'심성현','동욱':'김동욱','현기':'김현기','태양':'송태양','기범':'김기범','상원':'서상원','민석':'최민석','경림':'고경림' };
const catMap = { '원격온보딩':'onboarding', '원격as':'as', '원격명의변경':'transfer', '원격메뉴등록':'menu', '원격voc':'voc', '원격배달':'delivery' };
const CAT_KO = { onboarding:'온보딩', as:'AS', transfer:'명의변경', menu:'메뉴등록', delivery:'배달', voc:'VOC' };
const NAMES = Object.keys(personMap).join('|');
const RE_EMP = new RegExp('^원격(' + NAMES + ')$');        // 원격XX (담당자/착수)
const RE_CONFIRM = new RegExp('^(' + NAMES + ')(_?확인.*)?$'); // XX확인 (옛 규칙 착수)

// [예약] · (예약) · （예약） — 대괄호/소괄호/전각괄호 모두 인정. 공백 허용.
const RE_BOOKING = /[\[\(（]\s*예약\s*[\]\)）]/;

const pad = n => String(n).padStart(2, '0');
const dateUTC = s => { const [y, m, d] = s.split('-').map(Number); return Date.UTC(y, m - 1, d); };
// 업무일 경계는 쓰지 않는다 — 달력 기준 8/1 00:00 ~ 8/31 23:59:59 KST (리포트는 달 단위가 읽기 쉽다)
const oldest = (dateUTC(FROM) - 9 * 3600 * 1000) / 1000;
const latest = (dateUTC(TO) + 86400000 - 9 * 3600 * 1000) / 1000;

function kstStamp(ts) {
  const d = new Date(parseFloat(ts) * 1000 + 9 * 3600 * 1000);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}

function collectText(arr, out) {
  if (!Array.isArray(arr)) return;
  for (const b of arr) {
    if (!b || typeof b !== 'object') continue;
    if (typeof b.text === 'string') out.push(b.text);
    else if (b.text && typeof b.text.text === 'string') out.push(b.text.text);
    for (const k of ['elements', 'fields', 'blocks', 'attachments']) if (b[k]) collectText(b[k], out);
  }
}
function blocksText(m) {
  const out = [m.text || ''];
  collectText(m.blocks, out);
  collectText(m.attachments, out);
  return out.join('\n');
}

async function fetchRange(channelId) {
  let cursor = '', msgs = [], guard = 0;
  do {
    const url = new URL('https://slack.com/api/conversations.history');
    url.searchParams.set('channel', channelId);
    url.searchParams.set('oldest', String(oldest));
    url.searchParams.set('latest', String(latest));
    url.searchParams.set('limit', '200');
    if (cursor) url.searchParams.set('cursor', cursor);
    const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
    const j = await res.json();
    if (!j.ok) throw new Error(channelId + ': ' + j.error);
    msgs = msgs.concat(j.messages || []);
    cursor = (j.response_metadata && j.response_metadata.next_cursor) || '';
  } while (cursor && ++guard < 60);
  return msgs;
}

const field = (t, re) => ((t.match(re) || [])[1] || '').trim();

(async () => {
  const rows = [];
  const scanned = {};
  for (const ch of CHANNELS) {
    let msgs = [];
    try { msgs = await fetchRange(ch.id); }
    catch (e) { console.error(`  ⚠ [${ch.label}] 읽기 실패: ${e.message} — 건너뜀`); scanned[ch.label] = null; continue; }
    scanned[ch.label] = msgs.length;
    for (const m of msgs) {
      if (m.subtype && m.subtype !== 'bot_message') continue;
      const text = blocksText(m).replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
      if (!RE_BOOKING.test(text)) continue;

      const names = (m.reactions || []).map(r => r.name);
      let cat = null;
      for (const n of names) if (catMap[n]) { cat = catMap[n]; break; }
      let emp = null;
      for (const n of names) { const p = n.match(RE_EMP); if (p) { emp = personMap[p[1]]; break; } }
      if (!emp) for (const n of names) { const c = n.match(RE_CONFIRM); if (c) { emp = personMap[c[1]]; break; } }

      const abs2 = names.some(n => /2차.?부재/.test(n));
      const abs1 = !abs2 && names.some(n => /부재/.test(n));
      const extern = names.includes('원격외주');
      const dup = names.some(n => /중복/.test(n));
      const invalid = names.includes('x');

      let store = (field(text, /상호\s*[:：]?\s*(.+)/) || field(text, /매장명\s*[:：]?\s*(.+)/)).split('/')[0].trim().slice(0, 40);
      const biz = field(text, /사업자\s*번?호?\s*[:：]?\s*([\d\-]+)/).replace(/-/g, '');
      const req = field(text, /내용\s*[:：]?\s*(.+)/).slice(0, 120);

      rows.push({
        ch: ch.label, stamp: kstStamp(m.ts), date: kstStamp(m.ts).slice(0, 10), store, biz, req,
        cat, catKo: cat ? CAT_KO[cat] : (extern ? '외주' : ''),
        emp: emp || '', abs1, abs2, dup, invalid,
        emojis: names.join(' '),
      });
    }
  }
  rows.sort((a, b) => a.stamp.localeCompare(b.stamp));

  // ── 집계 ──
  const total = rows.length;
  const live = rows.filter(r => !r.dup && !r.invalid);          // 중복·잘못올린글 제외한 유효 모수
  const cnt = k => live.filter(k).length;
  // A. 마감 유형 — 서로 겹치지 않게 나눈다. 합 = 유효 모수.
  const stat = [
    { key: 'onboarding', label: '온보딩으로 마감',   n: cnt(r => r.cat === 'onboarding') },
    { key: 'as',         label: 'AS로 마감',        n: cnt(r => r.cat === 'as') },
    { key: 'transfer',   label: '명의변경으로 마감',  n: cnt(r => r.cat === 'transfer') },
    { key: 'menu',       label: '메뉴등록으로 마감',  n: cnt(r => r.cat === 'menu') },
    { key: 'delivery',   label: '배달로 마감',       n: cnt(r => r.cat === 'delivery') },
    { key: 'extern',     label: '외주로 마감',       n: cnt(r => !r.cat && r.catKo === '외주') },
    { key: 'a2only',     label: '미마감 · 2차부재',  n: cnt(r => !r.cat && r.catKo !== '외주' && r.abs2) },
    { key: 'a1only',     label: '미마감 · 1차부재',  n: cnt(r => !r.cat && r.catKo !== '외주' && r.abs1) },
    { key: 'none',       label: '미마감 · 이모지 없음', n: cnt(r => !r.cat && r.catKo !== '외주' && !r.abs1 && !r.abs2) },
  ];
  const statSum = stat.reduce((a, s) => a + s.n, 0);
  // B. 부재 동반 — A 와 교차한다(카테고리 이모지와 부재가 한 건에 같이 찍히는 경우).
  const cross = [
    { label: '2차부재 (전체)', n: cnt(r => r.abs2),
      detail: [['마감 안 됨', cnt(r => r.abs2 && !r.cat)], ['AS 마감', cnt(r => r.abs2 && r.cat === 'as')], ['온보딩 마감', cnt(r => r.abs2 && r.cat === 'onboarding')]] },
    { label: '1차부재 (전체)', n: cnt(r => r.abs1),
      detail: [['마감 안 됨', cnt(r => r.abs1 && !r.cat)], ['AS 마감', cnt(r => r.abs1 && r.cat === 'as')], ['온보딩 마감', cnt(r => r.abs1 && r.cat === 'onboarding')]] },
  ];
  const byEmp = {};  live.forEach(r => { const e = r.emp || '미지정'; byEmp[e] = (byEmp[e] || 0) + 1; });
  const byDate = {}; live.forEach(r => { byDate[r.date] = (byDate[r.date] || 0) + 1; });
  const byCh = {};   live.forEach(r => { byCh[r.ch] = (byCh[r.ch] || 0) + 1; });

  // ── 콘솔 요약 ──
  console.log(`\n예약 리포트 · ${FROM} ~ ${TO}`);
  console.log('읽은 메시지:', Object.entries(scanned).map(([k, v]) => `${k} ${v === null ? '실패' : v + '건'}`).join(' · '));
  console.log(`\n[예약]/(예약) 총 ${total}건  →  유효 모수 ${live.length}건 (중복 ${rows.filter(r => r.dup).length} · 잘못올린글 ${rows.filter(r => r.invalid).length} 제외)\n`);
  console.log('  [A] 마감 유형 (배타 분류)   건수    비중');
  console.log('  ' + '-'.repeat(40));
  for (const s of stat) {
    const p = live.length ? (s.n / live.length * 100).toFixed(1) : '0.0';
    console.log('  ' + s.label.padEnd(22) + String(s.n).padStart(4) + String(p + '%').padStart(9));
  }
  console.log('  ' + '합계'.padEnd(22) + String(statSum).padStart(4) + '   ' + (statSum === live.length ? '모수와 일치' : '⚠ 모수 ' + live.length + ' 와 불일치'));
  console.log();
  console.log('  [B] 부재 동반 (A 와 교차)');
  for (const c of cross) console.log('  ' + c.label.padEnd(22) + String(c.n).padStart(4) + '   → ' + c.detail.filter(d => d[1]).map(d => d[0] + ' ' + d[1]).join(' · '));
  console.log('\n채널별:', JSON.stringify(byCh));
  console.log('담당자별:', JSON.stringify(byEmp));

  // ── CSV (엑셀) ──
  const csvEsc = v => { const s = String(v == null ? '' : v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const head = ['일시', '채널', '상호', '사업자번호', '카테고리 이모지', '담당자', '1차부재', '2차부재', '중복', '잘못올린글', '요청내용', '찍힌 이모지 전체'];
  const csv = [head.join(',')].concat(rows.map(r => [
    r.stamp, r.ch, r.store, r.biz, r.catKo, r.emp, r.abs1 ? 'O' : '', r.abs2 ? 'O' : '',
    r.dup ? 'O' : '', r.invalid ? 'O' : '', r.req, r.emojis,
  ].map(csvEsc).join(','))).join('\r\n');
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'booking-report.csv'), '﻿' + csv, 'utf8');

  fs.writeFileSync(path.join(OUT_DIR, 'booking-report.html'),
    renderHtml({ FROM, TO, total, live, rows, stat, statSum, cross, byEmp, byDate, byCh, scanned }), 'utf8');

  console.log(`\n✅ ${OUT_DIR}/booking-report.html · ${OUT_DIR}/booking-report.csv 생성 (${rows.length}행)`);
})().catch(e => { console.error(e.message); process.exit(1); });

/* ── 공유용 페이지 ──
 * 집주인 디자인 규칙(Apple 계열): 강조색 하나(#0066cc), 장식용 그림자·그라데이션 없음,
 * 본문 17px/400, 헤드라인 600, 섹션 구분은 배경색 전환으로만. */
function renderHtml(d) {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const N = d.live.length || 1;
  const pct = n => (n / N * 100).toFixed(1);
  const key = [
    d.stat.find(s => s.key === 'onboarding'),
    d.stat.find(s => s.key === 'as'),
    { label: '2차부재 (전체)', n: d.cross[0].n },
  ];
  const maxDay = Math.max(1, ...Object.values(d.byDate));
  const days = Object.keys(d.byDate).sort();

  return `<!DOCTYPE html>
<html lang="ko"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>예약 요청 분석 · ${esc(d.FROM)} ~ ${esc(d.TO)}</title>
<style>
  :root{ --accent:#0066cc; --ink:#1d1d1f; --ink-80:#333; --ink-48:#7a7a7a;
    --parchment:#f5f5f7; --hair:#e0e0e0; --dark:#272729; }
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Inter','Pretendard',sans-serif;
    color:var(--ink); background:#fff; font-size:17px; line-height:1.47; letter-spacing:-0.374px;
    -webkit-font-smoothing:antialiased}
  .wrap{max-width:980px; margin:0 auto; padding:0 24px}
  section{padding:80px 0}
  section.tint{background:var(--parchment)}
  section.dark{background:var(--dark); color:#fff}
  h1{font-size:40px; font-weight:600; line-height:1.10; letter-spacing:-0.28px}
  h2{font-size:28px; font-weight:600; line-height:1.14; letter-spacing:-0.2px; margin-bottom:12px}
  .lead{font-size:21px; font-weight:400; color:var(--ink-80); margin-top:16px}
  .dark .lead{color:#ccc}
  .meta{font-size:14px; color:var(--ink-48); margin-top:24px}
  .dark .meta{color:#ccc}

  /* 모수 */
  .hero-n{font-size:72px; font-weight:600; letter-spacing:-1px; line-height:1; margin-top:8px}
  .hero-sub{font-size:17px; color:var(--ink-48); margin-top:12px}

  /* 핵심 3지표 */
  .keys{display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:48px}
  .key{border:1px solid var(--hair); border-radius:16px; padding:24px; background:#fff}
  .key .kl{font-size:14px; color:var(--ink-48)}
  .key .kn{font-size:40px; font-weight:600; letter-spacing:-0.4px; margin-top:8px}
  .key .kp{font-size:17px; color:var(--accent); font-weight:600; margin-top:4px}
  .key .kbar{height:4px; background:var(--hair); border-radius:2px; margin-top:16px; overflow:hidden}
  .key .kbar i{display:block; height:100%; background:var(--accent)}

  table{width:100%; border-collapse:collapse; font-size:17px; margin-top:24px}
  th{text-align:left; font-weight:600; font-size:14px; color:var(--ink-48);
    padding:12px 14px; border-bottom:1px solid var(--hair)}
  td{padding:12px 14px; border-bottom:1px solid rgba(0,0,0,.04); vertical-align:top}
  td.n,th.n{text-align:right; font-variant-numeric:tabular-nums}
  tr:last-child td{border-bottom:none}
  .bar{display:inline-block; height:8px; background:var(--accent); border-radius:4px; vertical-align:middle}

  .note{font-size:14px; color:var(--ink-48); margin-top:20px; line-height:1.6}
  .dark .note{color:#ccc}
  a{color:var(--accent); text-decoration:none}
  .dark a{color:#2997ff}
  .btn{display:inline-block; font-size:15px; font-weight:400; color:#fff; background:var(--accent);
    border-radius:980px; padding:11px 22px; margin-top:24px}
  .btn:active{transform:scale(0.95)}
  details{margin-top:24px}
  summary{cursor:pointer; font-size:17px; color:var(--accent); font-weight:600}
  .tbl-scroll{overflow-x:auto; margin-top:20px}
  .tbl-scroll table{font-size:14px; min-width:860px}
  .tbl-scroll td{padding:9px 12px}
  .tag{display:inline-block; font-size:12px; font-weight:600; padding:2px 9px; border-radius:980px;
    background:var(--parchment); color:var(--ink-80)}
  .tag.on{background:#e8f1fd; color:var(--accent)}
  .tag.warn{background:#fdecec; color:#b3261e}
  @media(max-width:720px){ .keys{grid-template-columns:1fr} h1{font-size:32px} section{padding:56px 0} }
</style></head><body>

<section>
  <div class="wrap">
    <h1>예약 요청은 어떻게 처리되고 있나</h1>
    <div class="lead">슬랙에 <strong>[예약]</strong> · <strong>(예약)</strong> 으로 올라온 요청이
      실제로 어떤 이모지로 마감됐는지 원문을 다시 읽어 대조했습니다.</div>
    <div class="meta">집계 기간 ${esc(d.FROM)} ~ ${esc(d.TO)} · 채널 ${Object.keys(d.scanned).length}개
      · 읽은 메시지 ${Object.values(d.scanned).filter(v => v !== null).reduce((a, b) => a + b, 0).toLocaleString()}건</div>
  </div>
</section>

<section class="dark">
  <div class="wrap">
    <div style="font-size:17px;color:#ccc">예약 요청 모수</div>
    <div class="hero-n">${d.live.length.toLocaleString()}<span style="font-size:32px;font-weight:400">건</span></div>
    <div class="lead">기간 내 <strong>[예약]</strong>·<strong>(예약)</strong> 표기 요청 ${d.total.toLocaleString()}건 중
      중복·잘못 올린 글을 뺀 유효 건수입니다.</div>
  </div>
</section>

<section>
  <div class="wrap">
    <h2>모수 대비 실제 처리 이모지</h2>
    <div style="font-size:17px;color:var(--ink-80)">예약으로 접수됐지만 마감은 다른 유형으로 찍힙니다. 그 비중입니다.</div>
    <div class="keys">
      ${key.map(s => `<div class="key">
        <div class="kl">${esc(s.label)}</div>
        <div class="kn">${s.n.toLocaleString()}<span style="font-size:20px;font-weight:400">건</span></div>
        <div class="kp">${pct(s.n)}%</div>
        <div class="kbar"><i style="width:${Math.min(100, pct(s.n))}%"></i></div>
      </div>`).join('')}
    </div>

    <h2 style="margin-top:56px;font-size:21px">A. 마감 유형</h2>
    <div style="font-size:14px;color:var(--ink-48)">서로 겹치지 않게 나눈 분류입니다. 합이 모수와 같습니다.</div>
    <table>
      <thead><tr><th>구분</th><th class="n">건수</th><th class="n">비중</th><th style="width:38%"></th></tr></thead>
      <tbody>${d.stat.map(s => `<tr>
        <td>${esc(s.label)}</td>
        <td class="n">${s.n.toLocaleString()}</td>
        <td class="n">${pct(s.n)}%</td>
        <td><span class="bar" style="width:${Math.max(0, pct(s.n)) * 2.6}px"></span></td>
      </tr>`).join('')}
      <tr><td style="font-weight:600">합계</td><td class="n" style="font-weight:600">${d.statSum.toLocaleString()}</td>
        <td class="n" style="font-weight:600">${d.statSum === d.live.length ? '모수와 일치' : '불일치'}</td><td></td></tr></tbody>
    </table>

    <h2 style="margin-top:56px;font-size:21px">B. 부재 동반</h2>
    <div style="font-size:14px;color:var(--ink-48)">부재 이모지는 카테고리 이모지와 <strong>한 건에 같이</strong> 찍힙니다.
      그래서 A 와 겹치고, A 의 합에는 포함되지 않습니다.</div>
    <table>
      <thead><tr><th>구분</th><th class="n">건수</th><th class="n">비중</th><th>내역</th></tr></thead>
      <tbody>${d.cross.map(c => `<tr>
        <td>${esc(c.label)}</td>
        <td class="n">${c.n.toLocaleString()}</td>
        <td class="n">${pct(c.n)}%</td>
        <td>${c.detail.filter(x => x[1]).map(x => `<span class="tag">${esc(x[0])} ${x[1]}</span>`).join(' ') || '—'}</td>
      </tr>`).join('')}</tbody>
    </table>
    <div class="note">카테고리 이모지는 한 건에 하나만 인정합니다(먼저 발견된 것). 부재는 2차부재를 1차부재보다
      우선해 세어 둘이 겹쳐 잡히지 않습니다.</div>
  </div>
</section>

<section class="tint">
  <div class="wrap">
    <h2>담당자별</h2>
    <table>
      <thead><tr><th>담당자</th><th class="n">건수</th><th class="n">비중</th></tr></thead>
      <tbody>${Object.entries(d.byEmp).sort((a, b) => b[1] - a[1]).map(([e, n]) => `<tr>
        <td>${esc(e)}</td><td class="n">${n}</td><td class="n">${pct(n)}%</td></tr>`).join('')}</tbody>
    </table>
    ${Object.keys(d.byCh).length > 1 ? `<h2 style="margin-top:56px">채널별</h2>
    <table><thead><tr><th>채널</th><th class="n">건수</th></tr></thead>
      <tbody>${Object.entries(d.byCh).sort((a, b) => b[1] - a[1]).map(([c, n]) => `<tr><td>${esc(c)}</td><td class="n">${n}</td></tr>`).join('')}</tbody>
    </table>` : ''}
  </div>
</section>

<section>
  <div class="wrap">
    <h2>일별 인입</h2>
    <table>
      <thead><tr><th>날짜</th><th class="n">건수</th><th style="width:60%"></th></tr></thead>
      <tbody>${days.map(dt => `<tr><td>${esc(dt.slice(5).replace('-', '/'))}</td>
        <td class="n">${d.byDate[dt]}</td>
        <td><span class="bar" style="width:${d.byDate[dt] / maxDay * 100}%"></span></td></tr>`).join('')}</tbody>
    </table>

    <details>
      <summary>전체 ${d.rows.length}건 원본 보기</summary>
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>일시</th><th>상호</th><th>사업자</th><th>이모지</th><th>담당</th><th>요청내용</th></tr></thead>
          <tbody>${d.rows.map(r => `<tr>
            <td>${esc(r.stamp.slice(5))}</td>
            <td>${esc(r.store || '-')}</td>
            <td>${esc(r.biz || '-')}</td>
            <td>${r.catKo ? `<span class="tag on">${esc(r.catKo)}</span>` : ''}${r.abs2 ? '<span class="tag warn">2차부재</span>' : ''}${r.abs1 ? '<span class="tag">1차부재</span>' : ''}${r.dup ? '<span class="tag">중복</span>' : ''}${r.invalid ? '<span class="tag">잘못올린글</span>' : ''}${!r.catKo && !r.abs1 && !r.abs2 && !r.dup && !r.invalid ? '<span class="tag">없음</span>' : ''}</td>
            <td>${esc(r.emp || '-')}</td>
            <td>${esc(r.req || '-')}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </details>
    <a class="btn" href="booking-report.csv" download>엑셀(CSV) 내려받기</a>
  </div>
</section>

<section class="tint">
  <div class="wrap">
    <h2>읽는 방법</h2>
    <div class="note" style="font-size:17px;color:var(--ink-80);line-height:1.6">
      · 모수는 <strong>메시지 원문</strong>에서 <strong>[예약]</strong>·<strong>(예약)</strong> 표기를 찾은 것입니다.
        대시보드 집계 데이터에는 이 태그가 남지 않아(요청 '내용' 줄만 140자까지 저장) 슬랙을 다시 읽었습니다.<br>
      · <strong>2차부재</strong>는 대시보드에 아예 적재되지 않습니다. 이 리포트에서만 볼 수 있는 수치입니다.<br>
      · 이모지가 하나도 없는 건은 <strong>이모지 없음(미처리)</strong> 으로 따로 셌습니다.
    </div>
    <div class="meta">생성 ${esc(new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 16).replace('T', ' '))} KST
      · scripts/booking-report.js</div>
  </div>
</section>

</body></html>`;
}
