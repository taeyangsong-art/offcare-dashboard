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
 * 미설치건:
 *   같은 기간·같은 채널에서 TARGETS(기본 김봉수·최승훈·김규리) 가 올린 글을 작성자 기준으로 따로 모아
 *   같은 이모지 잣대로 마감 여부를 센다. 예약과는 모수가 다르고 일부만 겹친다.
 *   본문 필드에는 이름이 안 남아서 users.list 의 프로필 이름으로 가리고, 워크플로 글은 '요청자:' 줄을 본다.
 *
 * 출력:
 *   <OUT_DIR>/booking-report.html  공유용 페이지 (예약 + 미설치건)
 *   <OUT_DIR>/booking-report.csv   예약 엑셀용 (UTF-8 BOM — 한글 안 깨짐)
 *   <OUT_DIR>/nosetup-report.csv   미설치건 엑셀용
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

/* 미설치건 — 아래 세 분이 채널에 올려주는 건을 예약과 별개 모수로 따로 집계한다.
   본문 필드(상호/내용/노트)에는 이름이 안 남아서 '누가 올렸나'로 가린다.
   표시이름이 영문이거나 소속이 붙는 경우가 있어 프로필의 이름 필드를 전부 이어붙여 부분일치로 찾고,
   워크플로로 올라온 글은 작성자가 봇이라 본문의 '요청자:' 줄을 예비로 본다. */
let TARGETS = (process.env.TARGETS || '김봉수,최승훈,김규리').split(',').map(x => x.trim()).filter(Boolean);
const RE_REQUESTER = /요청자\s*[:：]\s*([가-힣]{2,4})/;
/* users:read 스코프가 없는 워크스페이스에서는 users.list 가 막혀 이름을 못 읽는다.
   그때는 슬랙 프로필의 '멤버 ID 복사'로 얻은 ID 를 직접 꽂는다.
   TARGET_IDS='U08BA4PDNLT=김봉수,U0XXXX=최승훈' 형식. */
/* 이 워크스페이스는 users:read 가 막혀 있어서 세 분의 멤버 ID 를 박아 둔다.
   (슬랙 프로필 → 더 보기 → 멤버 ID 복사. 사람이 바뀌면 여기만 고치면 된다) */
const DEFAULT_TARGET_IDS = 'U03SA42QD55=김봉수,U0BS7HSKJ65=최승훈,U0BAKTSNZ9P=김규리';
const TARGET_IDS = {};
(process.env.TARGET_IDS || DEFAULT_TARGET_IDS).split(',').map(x => x.trim()).filter(Boolean).forEach(pair => {
  const [id, name] = pair.split('=').map(y => (y || '').trim());
  if (id && name) TARGET_IDS[id] = name;
});
// ID 로만 지정한 사람도 집계 대상에 넣는다
for (const n of Object.values(TARGET_IDS)) if (!TARGETS.includes(n)) TARGETS.push(n);

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

/* 슬랙 사용자 ID → 이름. 미설치건 작성자를 가리려면 필요하다.
   users:read 스코프가 없어 실패하면 본문 '요청자:' 줄로만 찾고 리포트는 그대로 진행한다. */
let USERS_OK = false;   // users:read 스코프가 없으면 작성자 이름을 못 읽는다 — 리포트에 그대로 밝힌다
async function loadUsers() {
  const idx = {};   // id → { label, search }
  let cursor = '', guard = 0;
  try {
    do {
      const url = new URL('https://slack.com/api/users.list');
      url.searchParams.set('limit', '200');
      if (cursor) url.searchParams.set('cursor', cursor);
      const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
      const j = await res.json();
      if (!j.ok) throw new Error(j.error);
      for (const u of (j.members || [])) {
        const pr = u.profile || {};
        idx[u.id] = {
          label: pr.display_name || pr.real_name || u.real_name || u.name || u.id,
          search: [pr.display_name, pr.real_name, pr.real_name_normalized, u.real_name, u.name].filter(Boolean).join('|'),
        };
      }
      cursor = (j.response_metadata && j.response_metadata.next_cursor) || '';
    } while (cursor && ++guard < 20);
    USERS_OK = true;
  } catch (e) {
    console.error('  ⚠ users.list 실패 (' + e.message + ') — 미설치건은 본문 "요청자:" 줄로만 찾습니다.');
  }
  return idx;
}

const field = (t, re) => ((t.match(re) || [])[1] || '').trim();

(async () => {
  const userIdx = await loadUsers();
  // 작성자 이름 — 사람이면 프로필 이름, 워크플로/봇이면 봇 이름. 원본 표에 그대로 보여준다.
  const authorOf = m => TARGET_IDS[m.user] || (userIdx[m.user] && userIdx[m.user].label)
    || m.username || (m.bot_profile && m.bot_profile.name) || '';
  // 세 분 중 누가 올린 건인가 — 프로필 이름 우선, 못 찾으면 본문 '요청자:' 줄
  const ownerOf = (m, text) => {
    if (TARGET_IDS[m.user]) return TARGET_IDS[m.user];        // 직접 꽂은 ID 가 가장 확실하다
    const s = (userIdx[m.user] && userIdx[m.user].search) || '';
    const byProfile = TARGETS.find(n => s.includes(n));
    if (byProfile) return byProfile;
    const q = text.match(RE_REQUESTER);
    return (q && TARGETS.includes(q[1])) ? q[1] : '';
  };

  const rows = [];       // [예약]·(예약) 표기 건
  const nsRows = [];     // 미설치건 — 세 분이 올린 건 (예약 표기와 무관. 둘 다인 건도 있다)
  const authorTally = {};// 진단용 — 기간 내 작성자별 글 수. 이름이 안 잡힐 때 로그에서 원인을 본다.
  const nameInText = {}; // 진단용 — 대상자 이름이 본문에 나오는 횟수와 표본
  const idTally = {};    // 진단용 — 사용자 ID 별 글 수. 이름을 못 읽을 때 ID 로 지목하기 위한 후보 목록.
  let sawUserProfile = false;   // conversations.history 가 프로필을 같이 주는지 확인
  const scanned = {};
  for (const ch of CHANNELS) {
    let msgs = [];
    try { msgs = await fetchRange(ch.id); }
    catch (e) { console.error(`  ⚠ [${ch.label}] 읽기 실패: ${e.message} — 건너뜀`); scanned[ch.label] = null; continue; }
    scanned[ch.label] = msgs.length;
    for (const m of msgs) {
      if (m.subtype && m.subtype !== 'bot_message') continue;
      const text = blocksText(m).replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
      const who = authorOf(m);
      const whoKey = who || '(알 수 없음)';
      authorTally[whoKey] = (authorTally[whoKey] || 0) + 1;
      // 작성자로 못 찾았을 때 대비 — 이름이 본문 어딘가에 나오는지, 어떤 모양으로 나오는지 표본을 남긴다
      if (m.user) idTally[m.user] = (idTally[m.user] || 0) + 1;
      if (m.user_profile) sawUserProfile = true;
      for (const t of TARGETS) if (text.includes(t)) {
        const b = nameInText[t] || (nameInText[t] = { n: 0, samples: [] });
        b.n++;
        if (b.samples.length < 3) b.samples.push(text.replace(/\s+/g, ' ').slice(0, 200));
      }
      const booked = RE_BOOKING.test(text);
      const owner = ownerOf(m, text);
      if (!booked && !owner) continue;

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

      const row = {
        ch: ch.label, stamp: kstStamp(m.ts), date: kstStamp(m.ts).slice(0, 10), store, biz, req,
        cat, catKo: cat ? CAT_KO[cat] : (extern ? '외주' : ''),
        emp: emp || '', abs1, abs2, dup, invalid,
        emojis: names.join(' '), who, owner, booked,
      };
      if (booked) rows.push(row);
      if (owner) nsRows.push(row);
    }
  }
  rows.sort((a, b) => a.stamp.localeCompare(b.stamp));
  nsRows.sort((a, b) => a.stamp.localeCompare(b.stamp));

  // ── 집계 ──
  const total = rows.length;
  const live = rows.filter(r => !r.dup && !r.invalid);          // 중복·잘못올린글 제외한 유효 모수
  const cnt = k => live.filter(k).length;
  // A. 마감 유형 — 서로 겹치지 않게 나눈다. 합 = 유효 모수. 미설치건에도 같은 잣대를 쓴다.
  const breakdown = list => {
    const c = k => list.filter(k).length;
    return [
      { key: 'onboarding', label: '온보딩으로 마감',   n: c(r => r.cat === 'onboarding') },
      { key: 'as',         label: 'AS로 마감',        n: c(r => r.cat === 'as') },
      { key: 'transfer',   label: '명의변경으로 마감',  n: c(r => r.cat === 'transfer') },
      { key: 'menu',       label: '메뉴등록으로 마감',  n: c(r => r.cat === 'menu') },
      { key: 'delivery',   label: '배달로 마감',       n: c(r => r.cat === 'delivery') },
      { key: 'extern',     label: '외주로 마감',       n: c(r => !r.cat && r.catKo === '외주') },
      { key: 'a2only',     label: '미마감 · 2차부재',  n: c(r => !r.cat && r.catKo !== '외주' && r.abs2) },
      { key: 'a1only',     label: '미마감 · 1차부재',  n: c(r => !r.cat && r.catKo !== '외주' && r.abs1) },
      { key: 'none',       label: '미마감 · 이모지 없음', n: c(r => !r.cat && r.catKo !== '외주' && !r.abs1 && !r.abs2) },
    ];
  };
  const stat = breakdown(live);
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

  // ── 미설치건 집계 — 세 분이 올린 건. 예약과 모수가 다르므로 처음부터 따로 센다. ──
  const nsLive = nsRows.filter(r => !r.dup && !r.invalid);
  const closed = r => !!r.cat || r.catKo === '외주';       // 카테고리 이모지가 찍혔으면 마감으로 본다
  const ns = {
    total: nsRows.length,
    rows: nsRows,
    live: nsLive,
    stat: breakdown(nsLive),
    booked: nsLive.filter(r => r.booked).length,           // 그중 [예약] 표기도 달린 건
    byCh: {}, byDate: {},
    people: TARGETS.map(name => {
      const L = nsLive.filter(r => r.owner === name);
      const done = L.filter(closed).length;
      return {
        name, n: L.length, raw: nsRows.filter(r => r.owner === name).length,
        onboarding: L.filter(r => r.cat === 'onboarding').length,
        as:         L.filter(r => r.cat === 'as').length,
        etc:        L.filter(r => closed(r) && r.cat !== 'onboarding' && r.cat !== 'as').length,
        abs2:       L.filter(r => !closed(r) && r.abs2).length,
        abs1:       L.filter(r => !closed(r) && r.abs1).length,
        none:       L.filter(r => !closed(r) && !r.abs1 && !r.abs2).length,
        booked:     L.filter(r => r.booked).length,
        done, open: L.length - done,
      };
    }),
  };
  nsLive.forEach(r => { ns.byCh[r.ch] = (ns.byCh[r.ch] || 0) + 1; ns.byDate[r.date] = (ns.byDate[r.date] || 0) + 1; });
  ns.statSum = ns.stat.reduce((a, s) => a + s.n, 0);
  ns.done = nsLive.filter(closed).length;
  ns.open = nsLive.length - ns.done;
  ns.unmatched = TARGETS.filter(n => !nsRows.some(r => r.owner === n));   // 한 건도 못 찾은 이름
  ns.authorTop = Object.entries(authorTally).sort((a, b) => b[1] - a[1]).slice(0, 15);
  ns.usersOk = USERS_OK;
  // ID 를 박아 둔 사람은 users:read 가 없어도 정확히 잡힌다. 경고는 그렇지 않은 이름에만 띄운다.
  ns.unresolved = USERS_OK ? [] : TARGETS.filter(n => !Object.values(TARGET_IDS).includes(n));
  ns.nameInText = nameInText;
  ns.idTop = Object.entries(idTally).sort((a, b) => b[1] - a[1]).slice(0, 25);
  ns.sawUserProfile = sawUserProfile;

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

  // ── 미설치건 ──
  console.log('\n── 미설치건 (' + TARGETS.join(' · ') + ') ──');
  // 표시이름이 실명과 다르면 조용히 0건이 나온다. 매번 작성자 목록을 찍어 눈으로 대조할 수 있게 한다.
  if (ns.unmatched.length) console.log('  ⚠ 한 건도 못 찾은 이름: ' + ns.unmatched.join(', '));
  console.log('  작성자 이름 읽기: ' + (ns.usersOk ? 'users.list 정상'
    : 'users.list 실패 (users:read 없음) — 멤버 ID 로 지목: ' + Object.keys(TARGET_IDS).length + '명'));
  console.log('  기간 내 작성자 상위 15명 (표기 대조용):');
  ns.authorTop.forEach(([n, c]) => console.log('    ' + String(c).padStart(4) + '  ' + n));
  if (!ns.usersOk) {
    console.log('  메시지에 user_profile 동봉 여부: ' + (ns.sawUserProfile ? '있음' : '없음'));
    console.log('  글 많은 사용자 ID 상위 25 (슬랙 프로필 → 멤버 ID 복사 로 대조):');
    ns.idTop.forEach(([id, c]) => console.log('    ' + String(c).padStart(4) + '  ' + id));
  }
  for (const t of TARGETS) {
    const b = ns.nameInText[t];
    if (!b) { console.log('  · ' + t + ' — 본문에도 한 번도 안 나옴'); continue; }
    console.log('  · ' + t + ' — 본문 등장 ' + b.n + '건. 표본:');
    b.samples.forEach(x => console.log('      ' + x));
  }
  console.log('  총 ' + ns.total + '건 → 유효 ' + ns.live.length + '건 · 마감 ' + ns.done
    + ' · 미마감 ' + ns.open + ' · 그중 [예약] 표기 ' + ns.booked + '건');
  console.log('  요청자      모수  온보딩    AS  기타마감  미마감   마감률');
  for (const p of ns.people) {
    console.log('  ' + p.name.padEnd(10) + String(p.n).padStart(4) + String(p.onboarding).padStart(7)
      + String(p.as).padStart(6) + String(p.etc).padStart(9) + String(p.open).padStart(8)
      + (p.n ? (p.done / p.n * 100).toFixed(1) + '%' : '-').padStart(9));
  }
  console.log('  채널별:', JSON.stringify(ns.byCh));

  // ── CSV (엑셀) ──
  const csvEsc = v => { const s = String(v == null ? '' : v); return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; };
  const head = ['일시', '채널', '작성자', '상호', '사업자번호', '카테고리 이모지', '담당자', '1차부재', '2차부재', '중복', '잘못올린글', '요청내용', '찍힌 이모지 전체'];
  const cells = r => [
    r.stamp, r.ch, r.who || '', r.store, r.biz, r.catKo, r.emp, r.abs1 ? 'O' : '', r.abs2 ? 'O' : '',
    r.dup ? 'O' : '', r.invalid ? 'O' : '', r.req, r.emojis,
  ];
  const csv = [head.join(',')].concat(rows.map(r => cells(r).map(csvEsc).join(','))).join('\r\n');
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'booking-report.csv'), '﻿' + csv, 'utf8');

  // 미설치건은 예약과 모수가 달라 파일을 나눈다. 맨 앞에 요청자(세 분) 열을 붙인다.
  const nsCsv = [['요청자'].concat(head).join(',')]
    .concat(nsRows.map(r => [r.owner].concat(cells(r)).map(csvEsc).join(','))).join('\r\n');
  fs.writeFileSync(path.join(OUT_DIR, 'nosetup-report.csv'), '\ufeff' + nsCsv, 'utf8');

  fs.writeFileSync(path.join(OUT_DIR, 'booking-report.html'),
    renderHtml({ FROM, TO, total, live, rows, stat, statSum, cross, byEmp, byDate, byCh, scanned, ns }), 'utf8');

  console.log(`\n✅ ${OUT_DIR}/booking-report.html · ${OUT_DIR}/booking-report.csv 생성 (${rows.length}행)`);
})().catch(e => { console.error(e.message); process.exit(1); });

/* ── 공유용 페이지 ──
 * 집주인 디자인 규칙(Apple 계열): 강조색 하나(#0066cc), 장식용 그림자·그라데이션 없음,
 * 본문 17px/400, 헤드라인 600, 섹션 구분은 배경색 전환으로만. */
function renderHtml(d) {
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const N = d.live.length || 1;
  const pct = n => (n / N * 100).toFixed(1);
  const pctOf = (n, t) => (t ? n / t * 100 : 0).toFixed(1);   // 미설치건은 모수가 달라 분모를 받는다
  const ns = d.ns || { total: 0, rows: [], live: [], stat: [], people: [], byCh: {}, statSum: 0, done: 0, open: 0, booked: 0 };
  const nsNames = ns.people.map(p => p.name).join(' · ');
  // 한 건에 찍힌 이모지를 태그로 — 예약 원본표와 미설치 원본표가 같은 표기를 쓰도록 함수로 뺀다
  const tags = r => `${r.catKo ? `<span class="tag on">${esc(r.catKo)}</span>` : ''}${r.abs2 ? '<span class="tag warn">2차부재</span>' : ''}${r.abs1 ? '<span class="tag">1차부재</span>' : ''}${r.dup ? '<span class="tag">중복</span>' : ''}${r.invalid ? '<span class="tag">잘못올린글</span>' : ''}${!r.catKo && !r.abs1 && !r.abs2 && !r.dup && !r.invalid ? '<span class="tag">없음</span>' : ''}`;
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
          <thead><tr><th>일시</th><th>상호</th><th>사업자</th><th>이모지</th><th>담당</th><th>올린사람</th><th>요청내용</th></tr></thead>
          <tbody>${d.rows.map(r => `<tr>
            <td>${esc(r.stamp.slice(5))}</td>
            <td>${esc(r.store || '-')}</td>
            <td>${esc(r.biz || '-')}</td>
            <td>${tags(r)}</td>
            <td>${esc(r.emp || '-')}</td>
            <td>${esc(r.who || '-')}</td>
            <td>${esc(r.req || '-')}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </details>
    <a class="btn" href="booking-report.csv" download>엑셀(CSV) 내려받기</a>
  </div>
</section>

<section class="tint">
  <div class="wrap">
    <h2>미설치건은 어떻게 처리되고 있나</h2>
    <div class="lead" style="font-size:19px"><strong>${esc(nsNames)}</strong> 세 분이 올려주시는 건입니다.
      위 예약 집계와는 <strong>모수가 다릅니다</strong> — 같은 기간·같은 채널에서 <strong>올린 사람</strong> 기준으로 추려
      처리 이모지를 똑같은 잣대로 대조했습니다.</div>
${ns.unresolved && ns.unresolved.length ? `
    <div style="background:#fdecec;color:#b3261e;border-radius:12px;padding:16px 18px;margin-top:24px;font-size:16px;line-height:1.6">
      ⚠ <strong>${esc(ns.unresolved.join(' · '))}</strong> 은(는) 글쓴이를 가려내지 못했습니다.
      슬랙 앱에 <strong>users:read</strong> 권한이 없어, 멤버 ID 를 지정하지 않은 사람은 본문에
      <strong>'요청자:'</strong> 줄이 적힌 글만 잡힙니다 — 실제보다 적게 나옵니다.</div>
` : ''}
${ns.live.length === 0 ? `
    <div class="note" style="font-size:17px;margin-top:28px">기간 내에 세 분이 올린 글을 찾지 못했습니다.
      슬랙 표시이름이 실명과 달라 못 찾았을 수 있습니다 — 워크플로 실행 로그의 <strong>작성자 상위 15명</strong> 목록과
      대조해 <code>TARGETS</code> 를 맞춰 주세요.</div>
` : `
    <div class="keys" style="margin-top:36px">
      <div class="key"><div class="kl">미설치건 모수</div>
        <div class="kn">${ns.live.length.toLocaleString()}<span style="font-size:20px;font-weight:400">건</span></div>
        <div class="kp">올라온 글 ${ns.total.toLocaleString()}건 중 유효</div>
        <div class="kbar"><i style="width:100%"></i></div></div>
      <div class="key"><div class="kl">마감됨 (카테고리 이모지)</div>
        <div class="kn">${ns.done.toLocaleString()}<span style="font-size:20px;font-weight:400">건</span></div>
        <div class="kp">${pctOf(ns.done, ns.live.length)}%</div>
        <div class="kbar"><i style="width:${pctOf(ns.done, ns.live.length)}%"></i></div></div>
      <div class="key"><div class="kl">미마감</div>
        <div class="kn">${ns.open.toLocaleString()}<span style="font-size:20px;font-weight:400">건</span></div>
        <div class="kp">${pctOf(ns.open, ns.live.length)}%</div>
        <div class="kbar"><i style="width:${pctOf(ns.open, ns.live.length)}%"></i></div></div>
    </div>

    <h2 style="margin-top:56px;font-size:21px">요청자별</h2>
    <div style="font-size:14px;color:var(--ink-48)">세 분이 각각 몇 건을 올렸고, 그게 무엇으로 마감됐는지입니다.</div>
    <div class="tbl-scroll">
      <table>
        <thead><tr><th>요청자</th><th class="n">모수</th><th class="n">온보딩 마감</th><th class="n">AS 마감</th>
          <th class="n">기타 마감</th><th class="n">미마감</th><th class="n">마감률</th><th>미마감 내역</th></tr></thead>
        <tbody>${ns.people.map(p => `<tr>
          <td>${esc(p.name)}</td>
          <td class="n">${p.n.toLocaleString()}</td>
          <td class="n">${p.onboarding}</td>
          <td class="n">${p.as}</td>
          <td class="n">${p.etc}</td>
          <td class="n">${p.open}</td>
          <td class="n">${p.n ? pctOf(p.done, p.n) + '%' : '—'}</td>
          <td>${[['2차부재', p.abs2, 'warn'], ['1차부재', p.abs1, ''], ['이모지 없음', p.none, '']]
            .filter(x => x[1]).map(x => `<span class="tag ${x[2]}">${x[0]} ${x[1]}</span>`).join(' ') || '—'}</td>
        </tr>`).join('')}
        <tr><td style="font-weight:600">합계</td>
          <td class="n" style="font-weight:600">${ns.live.length.toLocaleString()}</td>
          <td class="n">${ns.people.reduce((a, p) => a + p.onboarding, 0)}</td>
          <td class="n">${ns.people.reduce((a, p) => a + p.as, 0)}</td>
          <td class="n">${ns.people.reduce((a, p) => a + p.etc, 0)}</td>
          <td class="n">${ns.open}</td>
          <td class="n" style="font-weight:600">${pctOf(ns.done, ns.live.length)}%</td>
          <td></td></tr></tbody>
      </table>
    </div>

    <h2 style="margin-top:56px;font-size:21px">마감 유형</h2>
    <div style="font-size:14px;color:var(--ink-48)">위 예약 표(A)와 같은 배타 분류입니다. 합이 미설치건 모수와 같습니다.</div>
    <table>
      <thead><tr><th>구분</th><th class="n">건수</th><th class="n">비중</th><th style="width:38%"></th></tr></thead>
      <tbody>${ns.stat.map(s => `<tr>
        <td>${esc(s.label)}</td>
        <td class="n">${s.n.toLocaleString()}</td>
        <td class="n">${pctOf(s.n, ns.live.length)}%</td>
        <td><span class="bar" style="width:${pctOf(s.n, ns.live.length) * 2.6}px"></span></td>
      </tr>`).join('')}
      <tr><td style="font-weight:600">합계</td><td class="n" style="font-weight:600">${ns.statSum.toLocaleString()}</td>
        <td class="n" style="font-weight:600">${ns.statSum === ns.live.length ? '모수와 일치' : '불일치'}</td><td></td></tr></tbody>
    </table>

    <div class="note">채널 분포 ${Object.entries(ns.byCh).sort((a, b) => b[1] - a[1])
        .map(([c, n]) => `<span class="tag">${esc(c)} ${n}</span>`).join(' ') || '—'}<br>
      이 중 <strong>[예약]</strong> 표기가 함께 달린 건은 ${ns.booked}건입니다 — 그만큼 위 예약 집계와 겹칩니다.
      중복·잘못 올린 글 ${(ns.total - ns.live.length).toLocaleString()}건은 모수에서 뺐습니다.</div>

    <details>
      <summary>미설치건 ${ns.rows.length}건 원본 보기</summary>
      <div class="tbl-scroll">
        <table>
          <thead><tr><th>일시</th><th>요청자</th><th>채널</th><th>상호</th><th>사업자</th><th>이모지</th><th>담당</th><th>요청내용</th></tr></thead>
          <tbody>${ns.rows.map(r => `<tr>
            <td>${esc(r.stamp.slice(5))}</td>
            <td>${esc(r.owner)}</td>
            <td>${esc(r.ch)}</td>
            <td>${esc(r.store || '-')}</td>
            <td>${esc(r.biz || '-')}</td>
            <td>${tags(r)}</td>
            <td>${esc(r.emp || '-')}</td>
            <td>${esc(r.req || '-')}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </details>
    <a class="btn" href="nosetup-report.csv" download>미설치건 엑셀(CSV) 내려받기</a>
`}
  </div>
</section>

<section>
  <div class="wrap">
    <h2>읽는 방법</h2>
    <div class="note" style="font-size:17px;color:var(--ink-80);line-height:1.6">
      · 모수는 <strong>메시지 원문</strong>에서 <strong>[예약]</strong>·<strong>(예약)</strong> 표기를 찾은 것입니다.
        대시보드 집계 데이터에는 이 태그가 남지 않아(요청 '내용' 줄만 140자까지 저장) 슬랙을 다시 읽었습니다.<br>
      · <strong>2차부재</strong>는 대시보드에 아예 적재되지 않습니다. 이 리포트에서만 볼 수 있는 수치입니다.<br>
      · 이모지가 하나도 없는 건은 <strong>이모지 없음(미처리)</strong> 으로 따로 셌습니다.<br>
      · <strong>미설치건</strong>은 [예약] 표기와 무관하게 <strong>${esc(nsNames)}</strong> 세 분이 올린 글을
        작성자(슬랙 멤버 ID) 기준으로 추린 것입니다. 예약 집계와 모수가 다르고, 일부는 서로 겹칩니다(겹친 건 ${ns.booked}건).
        마감 여부는 카테고리 이모지(원격온보딩·원격as·원격명의변경·원격메뉴등록·원격배달·원격외주)가 찍혔는지로 판단했습니다.
    </div>
    <div class="meta">생성 ${esc(new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 16).replace('T', ' '))} KST
      · scripts/booking-report.js</div>
  </div>
</section>

</body></html>`;
}
