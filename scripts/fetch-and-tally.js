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
  { id: 'C08740SFT1S', label: '메뉴등록',    defaultCat: 'menu',     forceCat: 'menu' },      // 공개 전용: 전부 메뉴등록(봇 접수 메시지 포함)
  { id: 'C0ASD02FFML', label: '배달요청',    defaultCat: 'delivery', forceCat: 'delivery' },  // 공개 전용: 전부 배달
  { id: 'C07B5E78J23', label: 'VOC',         type: 'voc' },                                   // 설문 응답(점수/업종/사유) 별도 파싱
];

const personMap = { '규빈':'김규빈','선유':'배선유','성현':'심성현','동욱':'김동욱','현기':'김현기','태양':'송태양','기범':'김기범','상원':'서상원','민석':'최민석' };
const catMap = { '원격온보딩':'onboarding', '원격as':'as', '원격명의변경':'transfer', '원격메뉴등록':'menu', '원격voc':'voc', '원격배달':'delivery' };

// VOC 저점 사유 자동분류 규칙 (label = 표시 카테고리, kw = 포함되면 그 카테고리로 분류). 순서대로 첫 매칭 우선.
const VOC_REASON_RULES = [
  { label:'사용중 오류가 자주 발생함',            kw:['오류','에러','렉','버그','튕','멈춤','먹통','안돼','안 돼','안됨','안 됨','재실행','재부팅','느리','지연','오작동'] },
  { label:'단말기 설치나 초기 과정이 어려움',      kw:['설치','초기','세팅','연동','연결','프린터','설정','장비'] },
  { label:'고객센터 연락이 매우 힘듦',            kw:['연락','전화','고객센터','상담','통화','응대','문의','콜'] },
  { label:'구매,계약과정에서 설명이 부족',        kw:['설명','계약','구매','안내','가입','상술'] },
  { label:'필요한 기능이 없거나 몰라서 불편',      kw:['기능','없','몰라','모르','불편','어렵','복잡'] },
  { label:'기타 이슈(정산/직원에 대한 불만/호영님출몰)', kw:['정산','직원','호영','불만','태도'] },
];
const VOC_REASON_ETC = '기타 이슈(정산/직원에 대한 불만/호영님출몰)';
function classifyReason(text){
  if(!text) return VOC_REASON_ETC;
  for(const r of VOC_REASON_RULES){ if(r.kw.some(k=>text.includes(k))) return r.label; }
  return VOC_REASON_ETC;
}

// VOC 업종 버킷 매핑 (원본 업종값 → 표시 버킷). 순서대로 첫 매칭 우선.
const VOC_INDUSTRY_RULES = [
  { label:'서비스[뷰티,헤어]', kw:['뷰티','헤어','미용','네일','피부','에스테틱','왁싱','반영구','바버','속눈썹','메이크업','태닝','이용'] },
  { label:'서비스[학원]',      kw:['학원','교습소','교육','공부방','과외','스터디','어학','음악','미술','태권도','피아노'] },
  { label:'카페',             kw:['카페','커피','디저트','브런치','베이커리','제과','빵','도넛','스무디'] },
  { label:'요식업',           kw:['음식','식당','요식','고기','치킨','분식','한식','중식','일식','양식','주점','술집','포차','횟집','뷔페','국밥','김밥','피자','버거','곱창','족발','보쌈','찜','국수','라멘','파스타','돈까스','포장마차','이자카야'] },
  { label:'서비스[체육]',      kw:['체육','헬스','필라테스','요가','골프','스포츠','피티','운동','클라이밍','수영','복싱'] },
  { label:'서비스[숙박]',      kw:['숙박','호텔','모텔','펜션','게스트','여관','민박','리조트'] },
  { label:'도소매',           kw:['도매','소매','판매','마트','편의점','슈퍼','상점','쇼핑','잡화','문구','의류','세탁'] },
];
function mapIndustry(raw){
  if(!raw) return '';
  for(const r of VOC_INDUSTRY_RULES){ if(r.kw.some(k=>raw.includes(k))) return r.label; }
  return '기타';
}
// 칭찬 판별 키워드 (원문에 포함되면 직원칭찬으로 적재)
const VOC_PRAISE_KW = ['친절','좋았','좋아요','좋습니','최고','감사','만족스','깔끔','빠르','세심','훌륭','신속','편리','도움','대박','꼼꼼','상냥'];
// 고점 기준 (만점)
const VOC_HIGH_INSTALL = 5;  // 구매설치 5 (만점)
const VOC_HIGH_NPS = 10;     // 추천의향 10 (만점)
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
    if (m.subtype && m.subtype !== 'bot_message') continue; // 봇 접수 메시지(메뉴채널)는 집계, 시스템 메시지는 제외
    const time = kstHM(m.ts);
    if (time > latest) latest = time;
    const names = (m.reactions || []).map(r => r.name);
    const text = m.text || '';
    let store = (((text.match(/상호\s*[:：]?\s*(.+)/) || [])[1]) || ((text.match(/매장명\s*[:：]?\s*(.+)/) || [])[1]) || '').trim().split('/')[0].trim();
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

// 메시지의 blocks까지 모두 훑어 텍스트 재구성 (봇 리치 메시지 대응)
function collectText(node, out) {
  if (!node) return;
  if (Array.isArray(node)) { for (const n of node) collectText(n, out); return; }
  if (typeof node === 'object') {
    if (typeof node.text === 'string') out.push(node.text);
    for (const k in node) { const val = node[k]; if (val && typeof val === 'object') collectText(val, out); }
  }
}
function blocksText(m) {
  const out = [m.text || ''];
  collectText(m.blocks, out);
  collectText(m.attachments, out);
  return out.join('\n');
}

// VOC 설문 응답 파싱 → 점수/업종/저점사유 집계
function tallyVoc(msgs, voc) {
  for (const m of msgs) {
    if (m.subtype && m.subtype !== 'bot_message') continue;
    let text = blocksText(m).replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
    if (!/merchant_service_feedback|서비스 피드백/.test(text)) continue; // 설문 응답만
    const time = kstHM(m.ts);
    if (time > voc.latest) voc.latest = time;

    // 문항(*...*) → 답변(> ...) 페어링
    const qa = []; let curQ = null, curA = [];
    for (let ln of text.split('\n')) {
      ln = ln.trim();
      const qm = ln.match(/^\*(.+?)\*$/);
      if (qm) { if (curQ !== null) qa.push([curQ, curA.join(' ').trim()]); curQ = qm[1].trim(); curA = []; continue; }
      const am = ln.match(/^>\s*(.+)/);
      if (am && curQ !== null) curA.push(am[1].trim());
    }
    if (curQ !== null) qa.push([curQ, curA.join(' ').trim()]);

    let install = NaN, installReason = '', nps = NaN, npsReason = '', industry = '';
    for (let i = 0; i < qa.length; i++) {
      const q = qa[i][0], a = qa[i][1];
      if (/구매설치 경험/.test(q)) { install = parseFloat(a); if (qa[i+1] && /이유/.test(qa[i+1][0])) installReason = qa[i+1][1]; }
      else if (/추천할 의향이 얼마나/.test(q)) { nps = parseFloat(a); if (qa[i+1] && /이유/.test(qa[i+1][0])) npsReason = qa[i+1][1]; }
      else if (/업종을 선택/.test(q)) { industry = a; }
    }
    const attr = (name) => { const mm = text.match(new RegExp('\\*' + name + '\\*\\s*\\n\\s*([^\\n]+)')); return mm ? mm[1].trim() : ''; };
    const store = attr('매장명'), storeId = attr('매장ID'), tenure = attr('수집 유형'), van = attr('밴');

    // 리액션에서 담당 직원(원격OOO 또는 OOO_확인) 추출
    const names = (m.reactions || []).map(r => r.name);
    let praiseEmp = null;
    for (const nm of names) { const pm = nm.match(/^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/); if (pm) { praiseEmp = personMap[pm[1]]; break; } const cm = nm.match(/^(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)(_확인.*)?$/); if (cm) { praiseEmp = personMap[cm[1]]; break; } }
    const allAns = qa.map(x => x[1]).join(' ');
    const hasPraiseWord = VOC_PRAISE_KW.some(k => allAns.includes(k));

    voc.responses++;
    const indBucket = mapIndustry(industry);       // 원본 업종 → 7개 버킷(+기타)
    if (indBucket) voc.byIndustry[indBucket] = (voc.byIndustry[indBucket] || 0) + 1;
    const reasons = [];
    if (!isNaN(install)) { voc.install.count++; voc.installDist[install] = (voc.installDist[install] || 0) + 1; if (install <= 2) { voc.install.low++; const c = classifyReason(installReason); voc.reasonCounts[c] = (voc.reasonCounts[c] || 0) + 1; reasons.push({ q: '구매설치', score: install, text: installReason, cat: c }); } else if (install >= VOC_HIGH_INSTALL) voc.high.install++; }
    if (!isNaN(nps))     { voc.nps.count++; voc.npsDist[nps] = (voc.npsDist[nps] || 0) + 1;             if (nps <= 5)     { voc.nps.low++;     const c = classifyReason(npsReason);     voc.reasonCounts[c] = (voc.reasonCounts[c] || 0) + 1; reasons.push({ q: '추천의향', score: nps, text: npsReason, cat: c }); } else if (nps >= VOC_HIGH_NPS) voc.high.nps++; }
    const isLow = reasons.length > 0;
    if (tenure) { if (!voc.byTenure[tenure]) voc.byTenure[tenure] = { total: 0, low: 0 }; voc.byTenure[tenure].total++; if (isLow) voc.byTenure[tenure].low++; }
    if (van)    { if (!voc.byVan[van])       voc.byVan[van]       = { total: 0, low: 0 }; voc.byVan[van].total++;       if (isLow) voc.byVan[van].low++; }
    if (reasons.length) voc.alerts.push({ time, store, storeId, industry, indBucket, install: isNaN(install) ? null : install, nps: isNaN(nps) ? null : nps, reasons });

    // 칭찬 적재: 저점(reasons)이 아니면서 담당자확인 리액션 또는 칭찬 문구가 있는 건만 (저점 처리건은 제외)
    if (!reasons.length && (praiseEmp || hasPraiseWord)) {
      const ptext = (installReason + ' ' + npsReason).trim() || allAns.slice(0, 100);
      voc.praises.push({ time, store, storeId, indBucket, emp: praiseEmp || '', install: isNaN(install) ? null : install, nps: isNaN(nps) ? null : nps, text: ptext, byReaction: !!praiseEmp });
    }
  }
}

(async () => {
  const counts = {}, pending = [];
  let completed = 0, externCount = 0, latest = '';
  const voc = { responses: 0, install: { count: 0, low: 0 }, nps: { count: 0, low: 0 }, high: { install: 0, nps: 0 }, npsDist: {}, installDist: {}, byIndustry: {}, byTenure: {}, byVan: {}, reasonCounts: {}, alerts: [], praises: [], latest: '' };
  let hasVoc = false;
  for (const ch of CHANNELS) {
    let msgs;
    try { msgs = await fetchAll(ch.id); }
    catch (e) { console.error(`  ⚠ [${ch.label}] 읽기 실패(${e.message}) — 건너뜀 (봇 초대/권한 확인)`); continue; }
    if (ch.type === 'voc') {
      tallyVoc(msgs, voc); hasVoc = true;
      console.log(`  [${ch.label}] 응답 ${voc.responses} · 구매설치저점 ${voc.install.low} · NPS저점 ${voc.nps.low}`);
    } else {
      const r = tallyInto(msgs, ch, counts, pending);
      completed += r.completed; externCount += r.externCount; if (r.latest > latest) latest = r.latest;
      console.log(`  [${ch.label}] 메시지 ${msgs.length}건`);
    }
  }
  pending.sort((a, b) => (b.time || '').localeCompare(a.time || ''));
  if (voc.latest > latest) latest = voc.latest;
  console.log(`[${targetDate}] 완료 ${completed} · 확인필요 ${pending.length} · 외주 ${externCount} · VOC응답 ${voc.responses}`);

  let data = { version: 0, days: {} };
  if (fs.existsSync(OUT)) {
    const win = {};
    try { new Function('window', fs.readFileSync(OUT, 'utf8'))(win); if (win.SLACK_DATA) data = win.SLACK_DATA; } catch (e) {}
  }
  data.days = data.days || {};
  const dayEntry = { updatedAt: latest, counts, pending };
  if (hasVoc && voc.responses > 0) { delete voc.latest; dayEntry.voc = voc; }
  data.days[targetDate] = dayEntry;
  data.version = (data.version || 0) + 1;
  const header = '/*\n * 슬랙 원격 처리 채널(AS요청·명의변경 등) 집계 데이터 (날짜별 누적)\n * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.\n */\n';
  fs.writeFileSync(OUT, header + 'window.SLACK_DATA = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
  console.log('✅ slack-data.js 갱신 (version=' + data.version + ', 누적: ' + Object.keys(data.days).join(', ') + ')');
})().catch(e => { console.error(e.message); process.exit(1); });
