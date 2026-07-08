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

// KST 기준 오늘 날짜와 자정 epoch
const now = new Date();
const kst = new Date(now.getTime() + 9 * 3600 * 1000);
const Y = kst.getUTCFullYear(), M = kst.getUTCMonth(), D = kst.getUTCDate();
const targetDate = `${Y}-${pad(M + 1)}-${pad(D)}`;
const oldest = (Date.UTC(Y, M, D) - 9 * 3600 * 1000) / 1000; // KST 자정 epoch(초)

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

    let emp = null;
    for (const n of names) { const pm = n.match(/^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/); if (pm) { emp = personMap[pm[1]]; break; } }
    let catKey = null, isExtern = false;
    for (const n of names) { if (catMap[n]) { catKey = catMap[n]; break; } }
    if (!catKey && names.includes('원격외주')) isExtern = true;
    if (!catKey && !isExtern && emp) catKey = 'as';
    const absentTags = names.filter(n => /부재/.test(n));
    const absent = absentTags.length > 0;

    if (isExtern && emp && !absent) { extern[emp] = (extern[emp] || 0) + 1; continue; }
    if (emp && catKey && !absent) {
      if (!counts[catKey]) counts[catKey] = {};
      counts[catKey][emp] = (counts[catKey][emp] || 0) + 1; completed++;
    } else {
      const reasons = [];
      if (absent) reasons.push(...absentTags.map(x => x.replace(/_/g, ' ')));
      if (!emp) reasons.push('담당자 미지정');
      else if (!catKey && !isExtern) reasons.push('카테고리 미지정');
      pending.push({ time, store, biz, handler: emp || '', reasons });
    }
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
