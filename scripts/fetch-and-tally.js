/*
 * 무인 자동 실행용: 슬랙 API로 직접 오늘 메시지를 읽어 집계 → slack-data.js 갱신
 * GitHub Actions 에서 매일 실행. 환경변수: SLACK_BOT_TOKEN (필수), SLACK_CHANNEL(선택)
 * 실행: node scripts/fetch-and-tally.js
 */
const fs = require('fs');

const TOKEN = process.env.SLACK_BOT_TOKEN;
const CHANNEL = process.env.SLACK_CHANNEL || 'C09HRUSG4TX'; // #0_원격_as_요청
const OUT = 'slack-data.js';
if (!TOKEN) { console.error('SLACK_BOT_TOKEN 환경변수가 필요합니다.'); process.exit(1); }

const personMap = { '규빈':'김규빈','선유':'배선유','성현':'심성현','동욱':'김동욱','현기':'김현기','태양':'송태양','기범':'김기범','상원':'서상원','민석':'최민석' };
const catMap = { '원격온보딩':'onboarding', '원격as':'as', '원격명의변경':'transfer', '원격메뉴등록':'menu', '원격voc':'voc', '원격배달':'delivery' };
const pad = n => String(n).padStart(2, '0');

// 집계 대상 날짜: TALLY_DATE_OFFSET (0=오늘, -1=어제) 기준. 새벽 최종집계는 -1 로 '전날'을 마감.
const offset = parseInt(process.env.TALLY_DATE_OFFSET || '0', 10);
const now = new Date();
const kstNow = new Date(now.getTime() + 9 * 3600 * 1000);
const tgt = new Date(Date.UTC(kstNow.getUTCFullYear(), kstNow.getUTCMonth(), kstNow.getUTCDate() + offset));
const Y = tgt.getUTCFullYear(), M = tgt.getUTCMonth(), D = tgt.getUTCDate();
const targetDate = `${Y}-${pad(M + 1)}-${pad(D)}`;
const oldest = (Date.UTC(Y, M, D) - 9 * 3600 * 1000) / 1000;       // 대상일 00:00 KST
const latest = (Date.UTC(Y, M, D + 1) - 9 * 3600 * 1000) / 1000;   // 다음날 00:00 KST (하루 경계 상한)

function kstHM(ts) {
  const d = new Date(parseFloat(ts) * 1000 + 9 * 3600 * 1000);
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}

async function fetchAll() {
  let cursor = '', msgs = [], guard = 0;
  do {
    const url = new URL('https://slack.com/api/conversations.history');
    url.searchParams.set('channel', CHANNEL);
    url.searchParams.set('oldest', String(oldest));
    url.searchParams.set('latest', String(latest)); // 하루 경계 상한 → 자정 넘어 실행해도 그날치만 집계
    url.searchParams.set('limit', '200');
    if (cursor) url.searchParams.set('cursor', cursor);
    const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
    const j = await res.json();
    if (!j.ok) throw new Error('Slack API error: ' + j.error);
    msgs = msgs.concat(j.messages || []);
    cursor = (j.response_metadata && j.response_metadata.next_cursor) || '';
  } while (cursor && ++guard < 20);
  return msgs;
}

function tally(msgs) {
  const counts = {}, pending = [], extern = {};
  let completed = 0, latest = '';
  for (const m of msgs) {
    if (m.subtype) continue; // 시스템 메시지 제외
    const time = kstHM(m.ts);
    if (time > latest) latest = time;
    const names = (m.reactions || []).map(r => r.name);
    const text = m.text || '';
    let store = ((text.match(/상호\s*[:：]\s*(.+)/) || [])[1] || '').trim().split('/')[0].trim();
    if (store.length > 30) store = store.slice(0, 30);
    const biz = ((text.match(/사업자\s*번?호?\s*[:：]\s*([\d\-]+)/) || [])[1] || '').replace(/-/g, '').trim();

    // 완료 담당자 (원격OOO)
    let emp = null;
    for (const n of names) { const pm = n.match(/^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/); if (pm) { emp = personMap[pm[1]]; break; } }
    // 카테고리 이모지
    let catKey = null;
    for (const n of names) { if (catMap[n]) { catKey = catMap[n]; break; } }
    const isExtern = !catKey && names.includes('원격외주');
    if (!catKey && !isExtern && emp) catKey = 'as'; // 완료 담당자 있고 카테고리 없으면 기본 AS
    // 확인 담당자 (OOO_확인) — 예: 태양_확인 → 송태양
    let confirmPerson = null;
    for (const n of names) { const cm = n.match(/^(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)(_확인.*)?$/); if (cm) { confirmPerson = personMap[cm[1]]; break; } }
    const has2ndAbsent = names.some(n => /2차.?부재/.test(n)); // 2차부재는 확인필요에서 제외

    if (emp && catKey) {                 // 완료 → 집계
      if (!counts[catKey]) counts[catKey] = {};
      counts[catKey][emp] = (counts[catKey][emp] || 0) + 1; completed++;
    } else if (emp && isExtern) {         // 외주 완료
      extern[emp] = (extern[emp] || 0) + 1;
    } else if (confirmPerson && !emp && !catKey && !isExtern && !has2ndAbsent) {
      // 확인(OOO_확인)만 되고 완료(원격OOO)·분류(카테고리)가 안 됐고 2차부재가 아닌 건만 확인필요로 적재
      pending.push({ time, store, biz, handler: confirmPerson, reasons: ['확인 후 미완료'] });
    }
    // 그 외(무반응 / 부재만 / 이미 분류됨) → 적재하지 않음
  }
  pending.sort((a, b) => (b.time || '').localeCompare(a.time || ''));
  return { counts, pending, extern, completed, latest };
}

(async () => {
  const msgs = await fetchAll();
  const { counts, pending, extern, completed, latest } = tally(msgs);
  console.log(`[${targetDate}] 메시지 ${msgs.length} · 완료 ${completed} · 확인필요 ${pending.length} · 외주 ${Object.values(extern).reduce((a,b)=>a+b,0)}`);

  let data = { version: 0, days: {} };
  if (fs.existsSync(OUT)) {
    const win = {};
    try { new Function('window', fs.readFileSync(OUT, 'utf8'))(win); if (win.SLACK_DATA) data = win.SLACK_DATA; } catch (e) {}
  }
  data.days = data.days || {};
  data.days[targetDate] = { updatedAt: latest, counts, pending };
  data.version = (data.version || 0) + 1;
  const header = '/*\n * 슬랙 #0_원격_as_요청 채널 집계 데이터 (날짜별 누적)\n * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.\n */\n';
  fs.writeFileSync(OUT, header + 'window.SLACK_DATA = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
  console.log('✅ slack-data.js 갱신 (version=' + data.version + ', 누적: ' + Object.keys(data.days).join(', ') + ')');
})().catch(e => { console.error(e.message); process.exit(1); });
