/*
 * 무인 자동 실행용: 슬랙 API로 여러 채널의 오늘 메시지를 읽어 집계 → slack-data.js 갱신
 * GitHub Actions 에서 매일 실행. 환경변수: SLACK_BOT_TOKEN (필수), TALLY_DATE_OFFSET(0/-1)
 * 실행: node scripts/fetch-and-tally.js
 */
const fs = require('fs');

const TOKEN = process.env.SLACK_BOT_TOKEN;
const OUT = 'slack-data.js';
if (!TOKEN) { console.error('SLACK_BOT_TOKEN 환경변수가 필요합니다.'); process.exit(1); }

// 집계 대상 채널. defaultCat = 카테고리 이모지 없을 때 기본, forceCat = 전용채널이라 항상 그 카테고리로 집계(외주 제외)
const CHANNELS = [
  { id: 'C09HRUSG4TX', label: '원격 AS요청', defaultCat: 'as',       forceCat: null },        // 공개: 이모지로 AS/온보딩/외주 구분
  { id: 'C07CL4BV9QT', label: '명의변경',    defaultCat: 'transfer', forceCat: 'transfer' },  // 비공개 전용: 전부 명의변경
];

const personMap = { '규빈':'김규빈','선유':'배선유','성현':'심성현','동욱':'김동욱','현기':'김현기','태양':'송태양','기범':'김기범','상원':'서상원','민석':'최민석' };
const catMap = { '원격온보딩':'onboarding', '원격as':'as', '원격명의변경':'transfer', '원격메뉴등록':'menu', '원격voc':'voc', '원격배달':'delivery' };
const pad = n => String(n).padStart(2, '0');

// 집계 대상 날짜: TALLY_DATE_OFFSET (0=오늘, -1=어제). 새벽 최종집계는 -1 로 '전날' 마감.
const offset = parseInt(process.env.TALLY_DATE_OFFSET || '0', 10);
const now = new Date();
const kstNow = new Date(now.getTime() + 9 * 3600 * 1000);
const tgt = new Date(Date.UTC(kstNow.getUTCFullYear(), kstNow.getUTCMonth(), kstNow.getUTCDate() + offset));
const Y = tgt.getUTCFullYear(), M = tgt.getUTCMonth(), D = tgt.getUTCDate();
const targetDate = `${Y}-${pad(M + 1)}-${pad(D)}`;
const oldest = (Date.UTC(Y, M, D) - 9 * 3600 * 1000) / 1000;       // 대상일 00:00 KST
const latestBound = (Date.UTC(Y, M, D + 1) - 9 * 3600 * 1000) / 1000; // 다음날 00:00 KST (하루 경계 상한)

function kstHM(ts) {
  const d = new Date(parseFloat(ts) * 1000 + 9 * 3600 * 1000);
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}

async function fetchAll(channelId) {
  let cursor = '', msgs = [], guard = 0;
  do {
    const url = new URL('https://slack.com/api/conversations.history');
    url.searchParams.set('channel', channelId);
    url.searchParams.set('oldest', String(oldest));
    url.searchParams.set('latest', String(latestBound));
    url.searchParams.set('limit', '200');
    if (cursor) url.searchParams.set('cursor', cursor);
    const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
    const j = await res.json();
    if (!j.ok) throw new Error(j.error);
    msgs = msgs.concat(j.messages || []);
    cursor = (j.response_metadata && j.response_metadata.next_cursor) || '';
  } while (cursor && ++guard < 20);
  return msgs;
}

// 한 채널의 메시지를 공유 counts/pending 에 누적
function tallyInto(msgs, ch, counts, pending) {
  let completed = 0, externCount = 0, latest = '';
  for (const m of msgs) {
    if (m.subtype) continue;
    const time = kstHM(m.ts);
    if (time > latest) latest = time;
    const names = (m.reactions || []).map(r => r.name);
    const text = m.text || '';
    let store = ((text.match(/상호\s*[:：]?\s*(.+)/) || [])[1] || '').trim().split('/')[0].trim();
    if (store.length > 30) store = store.slice(0, 30);
    const biz = ((text.match(/사업자\s*번?호?\s*[:：]?\s*([\d\-]+)/) || [])[1] || '').replace(/-/g, '').trim();

    let emp = null;
    for (const n of names) { const pm = n.match(/^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/); if (pm) { emp = personMap[pm[1]]; break; } }
    let emojiCat = null;
    for (const n of names) { if (catMap[n]) { emojiCat = catMap[n]; break; } }
    const hasExtern = names.includes('원격외주');
    let confirmPerson = null;
    for (const n of names) { const cm = n.match(/^(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)(_확인.*)?$/); if (cm) { confirmPerson = personMap[cm[1]]; break; } }
    const has2ndAbsent = names.some(n => /2차.?부재/.test(n));
    const doer = emp || confirmPerson;

    if (hasExtern && doer) {                 // 외주 → 별도 집계
      const who = doer || '미지정';
      counts.extern = counts.extern || {};
      counts.extern[who] = (counts.extern[who] || 0) + 1; externCount++;
    } else if (emp) {                        // 완료 → 카테고리 집계 (전용채널은 forceCat)
      const catKey = ch.forceCat || emojiCat || ch.defaultCat;
      counts[catKey] = counts[catKey] || {};
      counts[catKey][emp] = (counts[catKey][emp] || 0) + 1; completed++;
    } else if (confirmPerson && !emojiCat && !hasExtern && !has2ndAbsent) {
      // 확인만 되고 완료·분류·2차부재가 아닌 건 → 확인필요 (카테고리 태그 부여)
      pending.push({ time, store, biz, handler: confirmPerson, cat: ch.forceCat || ch.defaultCat, reasons: ['확인 후 미완료'] });
    }
  }
  return { completed, externCount, latest };
}

(async () => {
  const counts = {}, pending = [];
  let completed = 0, externCount = 0, latest = '';
  for (const ch of CHANNELS) {
    let msgs;
    try { msgs = await fetchAll(ch.id); }
    catch (e) { console.error(`  ⚠ [${ch.label}] 읽기 실패(${e.message}) — 건너뜀 (봇 초대/권한 확인)`); continue; }
    const r = tallyInto(msgs, ch, counts, pending);
    completed += r.completed; externCount += r.externCount; if (r.latest > latest) latest = r.latest;
    console.log(`  [${ch.label}] 메시지 ${msgs.length}건`);
  }
  pending.sort((a, b) => (b.time || '').localeCompare(a.time || ''));
  console.log(`[${targetDate}] 완료 ${completed} · 확인필요 ${pending.length} · 외주 ${externCount}`);

  let data = { version: 0, days: {} };
  if (fs.existsSync(OUT)) {
    const win = {};
    try { new Function('window', fs.readFileSync(OUT, 'utf8'))(win); if (win.SLACK_DATA) data = win.SLACK_DATA; } catch (e) {}
  }
  data.days = data.days || {};
  data.days[targetDate] = { updatedAt: latest, counts, pending };
  data.version = (data.version || 0) + 1;
  const header = '/*\n * 슬랙 원격 처리 채널(AS요청·명의변경 등) 집계 데이터 (날짜별 누적)\n * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.\n */\n';
  fs.writeFileSync(OUT, header + 'window.SLACK_DATA = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
  console.log('✅ slack-data.js 갱신 (version=' + data.version + ', 누적: ' + Object.keys(data.days).join(', ') + ')');
})().catch(e => { console.error(e.message); process.exit(1); });
