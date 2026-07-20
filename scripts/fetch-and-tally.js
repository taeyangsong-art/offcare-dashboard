/*
 * 무인 자동 실행용: 슬랙 API로 여러 채널의 오늘 메시지를 읽어 집계 → slack-data.js 갱신
 * GitHub Actions 에서 매일 실행. 환경변수: SLACK_BOT_TOKEN (필수), TALLY_DATE_OFFSET(0/-1)
 * 실행: node scripts/fetch-and-tally.js
 */
const fs = require('fs');

const TOKEN = process.env.SLACK_BOT_TOKEN;
const OUT = 'slack-data.js';
if (!TOKEN) { console.error('SLACK_BOT_TOKEN 환경변수가 필요합니다.'); process.exit(1); }

// 집계 대상 채널. defaultCat = 카테고리 이모지 없을 때 기본(AS채널만),
// requireCat=true = 해당 카테고리 이모지가 찍힌 것만 집계(원격as가 찍히면 AS로 집계, 무이모지는 미집계)
const CHANNELS = [
  { id: 'C09HRUSG4TX', label: '원격 AS요청', defaultCat: 'as' },                              // 공개: 이모지로 AS/온보딩/외주 구분, 무이모지→AS
  { id: 'C07CL4BV9QT', label: '명의변경',    defaultCat: 'transfer', requireCat: true },      // 원격명의변경 이모지가 찍힌 것만(원격as→AS)
  { id: 'C08740SFT1S', label: '메뉴등록',    defaultCat: 'menu',     requireCat: true },      // 원격메뉴등록 이모지가 찍힌 것만(원격as→AS)
  { id: 'C0ASD02FFML', label: '배달요청',    defaultCat: 'delivery', requireCat: true },      // 원격배달 이모지가 찍힌 것만(원격as→AS)
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
// 칭찬 판별 키워드 — 직원/응대(원격지원) 관련만 적재 (제품 일반칭찬 제외)
const VOC_PRAISE_KW = ['친절','응대','영상통화','화상통화','전화','설명','신속','대응','사용법','상담','도움','세심','꼼꼼','안내','알려주','알려 주','가르쳐','자세히','차근차근','정성','기사님','기사분','직원','담당자','원격지원','케어','챙겨','상냥'];
// 고점 기준 (만점)
const VOC_HIGH_INSTALL = 5;  // 구매설치 5 (만점)
const VOC_HIGH_NPS = 10;     // 추천의향 10 (만점)
// '확인 후 미완료' 유예: 확인 이모지 뒤에도 완료/카테고리 이모지가 안 찍힌 채 이 시간이 지나야 미처리로 적재.
// (슬랙 API가 이모지 시각을 안 주므로 메시지 게시 시각 기준 경과시간으로 근사)
const CONFIRM_GRACE_SEC = 3600; // 1시간
const RESP_DELAY_MIN = 30;      // 응대 지연 기준: 첫 확인까지 30분 초과 시 '지연'
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
const todayKstDate = `${kstNow.getUTCFullYear()}-${pad(kstNow.getUTCMonth() + 1)}-${pad(kstNow.getUTCDate())}`;  // 완료 처리된 '오늘' 날짜

// 날짜 유틸 (YYYY-MM-DD ↔ KST 하루 경계)
function dateUTC(s) { const [y, mo, da] = s.split('-').map(Number); return Date.UTC(y, mo - 1, da); }
function boundsOf(s) { const t = dateUTC(s); return { oldest: (t - 9 * 3600 * 1000) / 1000, latestBound: (t + 86400000 - 9 * 3600 * 1000) / 1000 }; }
function dateList(fromS, toS) { const out = []; for (let t = dateUTC(fromS), e = dateUTC(toS); t <= e; t += 86400000) { const d = new Date(t); out.push(`${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`); } return out; }

// 백필: BACKFILL_FROM=YYYY-MM-DD 지정 시 그 날부터 오늘까지 모든 카테고리를 날짜별로 다시 적재 (일회성)
const backfillFrom = (process.env.BACKFILL_FROM || '').trim();
// VOC 롤링 재집계 시작일 = min(오늘-14일, 백필시작일). 과거 설문에 뒤늦게 '확인+완료' 이모지 찍히면 반영.
const VOC_LOOKBACK = 30;
const defMinObj = new Date(Date.UTC(Y, M, D - VOC_LOOKBACK));
const defMin = `${defMinObj.getUTCFullYear()}-${pad(defMinObj.getUTCMonth() + 1)}-${pad(defMinObj.getUTCDate())}`;
const minDate = (backfillFrom && backfillFrom < defMin) ? backfillFrom : defMin;
const oldestWide = boundsOf(minDate).oldest;

function kstHM(ts) {
  const d = new Date(parseFloat(ts) * 1000 + 9 * 3600 * 1000);
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
}
function kstDate(ts) {
  const d = new Date(parseFloat(ts) * 1000 + 9 * 3600 * 1000);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}
function freshVoc() {
  return { responses: 0, install: { count: 0, low: 0 }, nps: { count: 0, low: 0 }, high: { install: 0, nps: 0 }, npsDist: {}, installDist: {}, byIndustry: {}, byTenure: {}, byVan: {}, reasonCounts: {}, alerts: [], praises: [], latest: '' };
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

// 지정 기간(oldest~latest) 메시지 전체 읽기 (VOC 롤링 재집계용)
async function fetchAllRange(channelId, oldestTs, latestTs) {
  let cursor = '', msgs = [], guard = 0;
  do {
    const url = new URL('https://slack.com/api/conversations.history');
    url.searchParams.set('channel', channelId);
    url.searchParams.set('oldest', String(oldestTs));
    url.searchParams.set('latest', String(latestTs));
    url.searchParams.set('limit', '200');
    if (cursor) url.searchParams.set('cursor', cursor);
    const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
    const j = await res.json();
    if (!j.ok) throw new Error(j.error);
    msgs = msgs.concat(j.messages || []);
    cursor = (j.response_metadata && j.response_metadata.next_cursor) || '';
  } while (cursor && ++guard < 40);
  return msgs;
}

// 스레드 답글 읽기 (VOC 처리내용 자동 수집용). rate-limit/scope 문제로 실패해도 절대 throw하지 않음.
let repliesFetched = 0, repliesWarned = false;
// 과도한 API 호출/rate-limit 방지 상한 (업무 처리내역 + VOC 공용).
// 일회성 백필은 과거 전체 이력의 note를 한 번에 채워야 하므로 크게, 평시 롤링은 보수적으로.
const MAX_REPLY_FETCH = backfillFrom ? 3000 : 500;
async function fetchReplies(channelId, ts) {
  if (repliesFetched >= MAX_REPLY_FETCH) {
    if (!repliesWarned) { console.log(`  (처리내용 자동수집 상한 ${MAX_REPLY_FETCH}건 도달 — 이후 생략)`); repliesWarned = true; }
    return [];
  }
  repliesFetched++;
  try {
    const url = new URL('https://slack.com/api/conversations.replies');
    url.searchParams.set('channel', channelId);
    url.searchParams.set('ts', ts);
    url.searchParams.set('limit', '50');
    const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
    if (!res.ok) return [];                       // 429 등 HTTP 오류
    const j = await res.json().catch(() => ({})); // JSON 파싱 실패 방어
    if (!j.ok) return [];                          // missing_scope 등
    return (j.messages || []).slice(1); // 첫 메시지(부모=설문)는 제외
  } catch (e) { return []; }
}
// 처리내용 텍스트 정리(멘션/URL/마크다운 제거 후 요약 길이로 컷)
function cleanNote(s) {
  return (s || '')
    .replace(/<https?:\/\/[^>|]+(?:\|[^>]+)?>/g, '')   // slack 링크
    .replace(/https?:\/\/\S+/g, '')                     // 맨 URL
    .replace(/<@[^>]+>/g, '').replace(/<#[^>]+>/g, '')  // 멘션
    .replace(/[*_>`~]/g, '').replace(/:[a-z0-9_+\-]+:/gi, '')
    .replace(/\s+/g, ' ').trim().slice(0, 200);
}

// 한 채널의 메시지를 공유 counts/pending/done 에 누적
async function tallyInto(msgs, ch, counts, pending, done, opts) {
  done = done || [];
  const priorNotes = (opts && opts.priorNotes) || {};   // 이전 실행에서 이미 수집한 처리내역(재호출 방지)
  // 스레드 처리내역 수집: 이미 있으면 재사용, 없고 답글 있으면 첫 답글들 텍스트를 정리해 저장
  async function grabNote(m, catKey, time, store, biz) {
    const key = time + '|' + store + '|' + biz + '|' + catKey;
    if (priorNotes[key]) return priorNotes[key];
    if ((m.reply_count || 0) > 0 && ch.id) {
      const reps = await fetchReplies(ch.id, m.ts);
      // blocksText는 m.text와 m.blocks의 동일 내용을 둘 다 담아 문구가 중복됨 → 답글별 동일 줄 제거
      const txt = reps.map(r => [...new Set(blocksText(r).split('\n').map(x => x.trim()).filter(Boolean))].join(' ')).join(' / ');
      return cleanNote(txt);
    }
    return '';
  }
  let completed = 0, externCount = 0, dup = 0, latest = '';
  for (const m of msgs) {
    if (m.subtype && m.subtype !== 'bot_message') continue; // 봇 접수 메시지(메뉴채널)는 집계, 시스템 메시지는 제외
    const time = kstHM(m.ts);
    if (time > latest) latest = time;
    const names = (m.reactions || []).map(r => r.name);
    const text = m.text || '';
    let store = (((text.match(/상호\s*[:：]?\s*(.+)/) || [])[1]) || ((text.match(/매장명\s*[:：]?\s*(.+)/) || [])[1]) || '').trim().split('/')[0].trim();
    if (store.length > 30) store = store.slice(0, 30);
    const biz = ((text.match(/사업자\s*번?호?\s*[:：]?\s*([\d\-]+)/) || [])[1] || '').replace(/-/g, '').trim();
    const req = ((text.match(/내용\s*[:：]?\s*(.+)/) || [])[1] || '').trim().slice(0, 140);   // 요청 '내용' 필드(문제 유형 분류용)

    let emp = null;
    for (const n of names) { const pm = n.match(/^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/); if (pm) { emp = personMap[pm[1]]; break; } }
    let emojiCat = null;
    for (const n of names) { if (catMap[n] && catMap[n] !== 'voc') { emojiCat = catMap[n]; break; } }  // 원격voc는 업무 카테고리로 안 씀(설문 VOC로 별도 집계)
    const hasVocTag = names.includes('원격voc');
    const hasExtern = names.includes('원격외주');
    let confirmPerson = null;
    for (const n of names) { const cm = n.match(/^(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)(_확인.*)?$/); if (cm) { confirmPerson = personMap[cm[1]]; break; } }
    const hasAbsent = names.some(n => /부재/.test(n));                       // 1차/2차 부재
    const absTag = names.some(n => /2차.?부재/.test(n)) ? '2차 부재' : '1차 부재';
    const hasDup = names.some(n => /중복/.test(n));                          // 팀이 '진짜 중복'에만 찍는 표시
    const hasX = names.includes('x');                                        // ❌ = 잘못 올린 글 표시
    const invalidPost = hasX && !!confirmPerson;                             // 확인 + X → 잘못 올린 글 → 부재/미처리 제외
    const doer = emp || confirmPerson;
    const ageSec = now.getTime() / 1000 - parseFloat(m.ts || '0');   // 메시지 게시 후 경과(초) — 확인/부재 유예 판정용

    if (hasDup) { dup++; continue; }         // 중복 이모지 → 집계 제외 (재처리는 중복 표시 없으니 별개 건으로 정상 집계됨)
    if (hasVocTag && !emojiCat) { continue; }   // 원격voc만 찍힌 순수 VOC 참조 → 업무 집계 제외(설문 VOC로만 관리)

    // requireCat 채널(명의변경/메뉴등록/배달)은 카테고리 이모지가 찍힌 것만 집계 → 카테고리는 항상 emojiCat이 결정.
    // (예: 명의변경 채널에 원격as가 찍히면 AS로 집계, 원격명의변경이 찍혀야 명의변경으로 집계)
    if (hasExtern && doer) {                 // 외주 → 별도 집계
      const who = doer || '미지정';
      counts.extern = counts.extern || {};
      counts.extern[who] = (counts.extern[who] || 0) + 1; externCount++;
      done.push({ time, store, biz, cat: 'extern', emp: who, req, note: await grabNote(m, 'extern', time, store, biz) });
    } else if (emojiCat || (emp && !ch.requireCat)) {   // 카테고리 이모지 있음, 또는 AS채널에서 완료담당자만(→defaultCat). requireCat 채널은 이모지 필수
      const catKey = emojiCat || ch.defaultCat;
      const who = emp || confirmPerson || '미지정';
      counts[catKey] = counts[catKey] || {};
      counts[catKey][who] = (counts[catKey][who] || 0) + 1; completed++;
      done.push({ time, store, biz, cat: catKey, emp: who, req, note: await grabNote(m, catKey, time, store, biz) });
    } else if (hasAbsent && !invalidPost) {  // 완료·카테고리 이모지 없이 '부재만' (확인+X 잘못올린글 제외)
      // 2차부재(재부재=연락 불가)는 확인필요에서 제외, 1차부재만 — 그것도 1시간 지나야 확인필요로 적재
      if (absTag !== '2차 부재' && ageSec >= CONFIRM_GRACE_SEC) pending.push({ time, store, biz, handler: doer || '미지정', cat: ch.defaultCat, reasons: [absTag] });
    } else if (confirmPerson && !invalidPost) { // 확인만 찍힘 → 1시간 지나면 '확인 후 미완료' (확인+X 잘못올린글 제외)
      if (ageSec >= CONFIRM_GRACE_SEC) pending.push({ time, store, biz, handler: confirmPerson, cat: ch.defaultCat, reasons: ['확인 후 미완료'] });
    }
  }
  return { completed, externCount, dup, latest };
}

// ── 폴링식 응답시간 추적 ──
// 슬랙이 이모지(확인) 찍힌 시각을 안 주므로, 10분마다 도는 이 집계가 스냅샷을 비교해 근사:
//  · 확인 이모지 없는 요청 → watch에 담고 매 실행 lastSeen 갱신
//  · 이전에 watch에 있던(=확인 없던) 요청에 확인이 붙으면 → 응답시각 ≈ (lastSeen, now) 중간값 → 응답분 확정
//  · 처음 볼 때 이미 확인됨(측정 불가)·2일 넘게 무응답 → 제외  ⇒ 자연히 '배포 이후' 건만 측정 (해상도 ±폴링간격)
function trackResp(data, msgs, ch) {
  data.resp = data.resp || { watch: {}, days: {} };
  const W = data.resp.watch, DD = data.resp.days;
  const nowSec = now.getTime() / 1000;
  for (const m of msgs) {
    if (m.subtype && m.subtype !== 'bot_message') continue;
    const key = m.ts, postSec = parseFloat(m.ts || '0');
    if (!postSec) continue;
    const names = (m.reactions || []).map(r => r.name);
    if (names.some(n => /중복/.test(n)) || names.includes('x')) { delete W[key]; continue; }   // 중복·X(잘못올린글) → 표본 제외
    const hasCat = names.some(n => catMap[n] && catMap[n] !== 'voc');
    const hasEmp = names.some(n => /^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/.test(n));
    const hasConfirm = names.some(n => /^(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)(_확인.*)?$/.test(n));
    const hasExtern = names.includes('원격외주');
    const responded = hasCat || hasEmp || hasConfirm || hasExtern;   // 담당자가 손댐(확인/완료/카테고리/외주)
    if (responded) {
      if (W[key]) {                                    // 직전 실행까지 '확인 없음' → 이번에 확인됨 = 측정 가능
        // 카테고리 판정(tallyInto 규칙). 응답시간은 '순수 AS' 적재 → 명변·메뉴등록·배달은 제외.
        let emojiCat = null;
        for (const n of names) { if (catMap[n] && catMap[n] !== 'voc') { emojiCat = catMap[n]; break; } }
        const catKey = names.includes('원격외주') ? 'extern' : (emojiCat || (ch && ch.defaultCat) || 'as');
        if (catKey === 'transfer' || catKey === 'menu' || catKey === 'delivery') { delete W[key]; continue; }
        const mid = (W[key].lastSeen + nowSec) / 2;    // 확인은 (lastSeen, now) 사이에 발생 → 중간값 추정
        const respMin = Math.max(0, (mid - postSec) / 60);
        const day = kstDate(m.ts);
        DD[day] = DD[day] || { cnt: 0, sumMin: 0, over: 0, items: [] };
        DD[day].items = DD[day].items || [];
        DD[day].cnt++; DD[day].sumMin += respMin; if (respMin > RESP_DELAY_MIN) DD[day].over++;
        // 건별 상세(올라온시간·응답분·상호·담당·카테고리) 저장 — 상세 모달용
        const text = m.text || '';
        let store = (((text.match(/상호\s*[:：]?\s*(.+)/) || [])[1]) || ((text.match(/매장명\s*[:：]?\s*(.+)/) || [])[1]) || '').trim().split('/')[0].trim();
        if (store.length > 30) store = store.slice(0, 30);
        const biz = ((text.match(/사업자\s*번?호?\s*[:：]?\s*([\d\-]+)/) || [])[1] || '').replace(/-/g, '').trim();
        let who = '';
        for (const n of names) { const pm = n.match(/^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/); if (pm) { who = personMap[pm[1]]; break; } }
        if (!who) for (const n of names) { const cm = n.match(/^(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)(_확인.*)?$/); if (cm) { who = personMap[cm[1]]; break; } }
        DD[day].items.push({ hm: kstHM(m.ts), min: Math.round(respMin * 10) / 10, store, biz, who, cat: catKey });
        delete W[key];
      }
      // 처음 볼 때 이미 확인됨 → 언제 찍혔는지 알 수 없어 제외
    } else {
      W[key] = { post: key, lastSeen: nowSec };        // 관찰중(매 실행 lastSeen 갱신)
    }
  }
  for (const k in W) { if (nowSec - parseFloat(W[k].post) > 2 * 86400) delete W[k]; }   // 무응답 2일 경과 정리
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
// opts = { dayDate: 이 메시지들의 날짜(YYYY-MM-DD), todayKstDate, priorMap: {key:{doneDate,autoNote}}, noteSince: ts }
async function tallyVoc(msgs, voc, channelId, opts) {
  opts = opts || {};
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

    // VOC 담당자 = '원격voc' 이모지 + '원격OOO'(완료 담당자)가 둘 다 찍힌 경우 그 사람 (설문 적재는 점수대로 유지, 담당자만 이 기준)
    const names = (m.reactions || []).map(r => r.name);
    // 🆕 VOC 처리완료 = OOO_확인_(담당 확인) + 완료완료(완료=아이샵케어 VOC체크) 두 개
    const hasVocTag = names.includes('원격voc');
    const hasIshop = names.includes('완료완료');
    let confirmP = null, remoteP = null;
    for (const nm of names) {
      let mm;
      if (!confirmP && (mm = nm.match(/^(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)_?확인_?$/))) confirmP = personMap[mm[1]];
      if (!remoteP  && (mm = nm.match(/^원격(규빈|선유|성현|동욱|현기|태양|기범|상원|민석)$/)))     remoteP = personMap[mm[1]];
    }
    const autoDone = !!confirmP && hasIshop;                     // 확인 + 아이샵케어 VOC체크(ishopcare)
    const handler = confirmP || remoteP || '';
    // 담당자(emp): 처리완료면 handler, 아니면 구방식(원격voc+원격OOO) 호환
    const empVal = autoDone ? handler : ((hasVocTag && remoteP) ? remoteP : '');
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
    if (reasons.length) {
      const key = (opts.dayDate || '') + '|' + (storeId || '') + '|' + time;   // 대시보드 vocKey와 동일 규칙
      const prior = (opts.priorMap || {})[key] || {};
      // 처리내용 자동 수집: 스레드 답글 텍스트를 정리해서 기입 (이전에 수집한 값이 있으면 재사용 → 안정성·API 절약)
      let autoNote = prior.autoNote || '';
      if (!autoNote && (m.reply_count || 0) > 0 && channelId && (!opts.noteSince || parseFloat(m.ts) >= opts.noteSince)) {
        const reps = await fetchReplies(channelId, m.ts);
        autoNote = cleanNote(reps.map(r => blocksText(r)).join(' / '));
      }
      // 완료일 = 최초로 완료 감지한 날(오늘). 한 번 기록되면 유지 → 이후엔 완료한 날짜대로 일별 분산.
      // (첫 집계 때는 그동안 밀린 완료건이 한 번 '오늘'로 몰릴 수 있음)
      const doneDate = empVal ? (prior.doneDate || opts.todayKstDate || '') : '';
      voc.alerts.push({ time, store, storeId, industry, indBucket, install: isNaN(install) ? null : install, nps: isNaN(nps) ? null : nps, reasons,
        emp: empVal,
        autoStatus: autoDone ? '처리완료' : '', autoEmp: autoDone ? handler : '', autoNote, doneDate });
    }

    // 칭찬/일반 응답 적재: 저점이 아니면서 처리(담당자) 또는 칭찬 문구가 있는 건 (emp 있으면 '처리'로 집계됨)
    if (!reasons.length && (empVal || hasPraiseWord)) {
      const pkey = (opts.dayDate || '') + '|' + (storeId || '') + '|' + time;
      const pprior = (opts.priorMap || {})[pkey] || {};
      const pdoneDate = empVal ? (pprior.doneDate || opts.todayKstDate || '') : '';
      const ptext = (installReason + ' ' + npsReason).trim() || allAns.slice(0, 100);
      voc.praises.push({ time, store, storeId, indBucket, emp: empVal, install: isNaN(install) ? null : install, nps: isNaN(nps) ? null : nps, text: ptext, byReaction: !!empVal, doneDate: pdoneDate });
    }
  }
}

(async () => {
  const vocCh = CHANNELS.find(c => c.type === 'voc');
  const workChs = CHANNELS.filter(c => c.type !== 'voc');

  // 기존 데이터 로드
  let data = { version: 0, days: {} };
  if (fs.existsSync(OUT)) {
    const win = {};
    try { new Function('window', fs.readFileSync(OUT, 'utf8'))(win); if (win.SLACK_DATA) data = win.SLACK_DATA; } catch (e) {}
  }
  data.days = data.days || {};

  // ===== 업무 채널 집계 (백필이면 BACKFILL_FROM~오늘, 아니면 최근 3일 롤링) =====
  // 최근 3일을 매번 다시 훑어, 어제/그제 건에 나중에 찍힌 중복·완료·부재 변경도 반영.
  const wdStartObj = new Date(Date.UTC(Y, M, D - 2));
  const wdStart = `${wdStartObj.getUTCFullYear()}-${pad(wdStartObj.getUTCMonth() + 1)}-${pad(wdStartObj.getUTCDate())}`;
  const workDates = backfillFrom ? dateList(backfillFrom, targetDate) : dateList(wdStart, targetDate);
  if (backfillFrom) console.log(`[백필] ${backfillFrom} ~ ${targetDate} (${workDates.length}일) 재집계`);
  // 처리내역(note) 수집은 MAX_REPLY_FETCH 상한을 공유하므로, 최신 날짜부터 처리해
  // 사람들이 가장 많이 보는 '오늘' 건의 note가 상한 소진 전에 먼저 채워지도록 한다.
  for (const dstr of [...workDates].reverse()) {
    const b = boundsOf(dstr);
    const counts = {}, pending = [], done = [];
    // 이전 실행에서 수집한 처리내역 보존(재호출 방지) — done 항목 key: time|store|biz|cat
    const priorNotes = {};
    for (const it of (((data.days[dstr] || {}).done) || [])) { if (it.note) priorNotes[it.time + '|' + it.store + '|' + it.biz + '|' + it.cat] = it.note; }
    let completed = 0, externCount = 0, dupTotal = 0, latest = '';
    for (const ch of workChs) {
      let msgs;
      try { msgs = await fetchAllRange(ch.id, b.oldest, b.latestBound); }
      catch (e) { console.error(`  ⚠ [${ch.label} ${dstr}] 읽기 실패(${e.message}) — 건너뜀`); continue; }
      const r = await tallyInto(msgs, ch, counts, pending, done, { priorNotes });
      if (dstr === targetDate) trackResp(data, msgs, ch);   // 오늘 인입 건만 응답시간 폴링 추적
      completed += r.completed; externCount += r.externCount; dupTotal += r.dup; if (r.latest > latest) latest = r.latest;
    }
    pending.sort((a, b) => (b.time || '').localeCompare(a.time || ''));
    done.sort((a, b) => (b.time || '').localeCompare(a.time || ''));
    const de = data.days[dstr] || {};
    de.counts = counts; de.pending = pending; de.done = done;
    if (latest && latest > (de.updatedAt || '')) de.updatedAt = latest;
    if (!de.updatedAt) de.updatedAt = latest || '';
    data.days[dstr] = de;
    console.log(`  [업무 ${dstr}] 완료 ${completed} · 확인필요 ${pending.length} · 외주 ${externCount} · 중복제외 ${dupTotal}`);
  }

  // ===== VOC 롤링 재집계 (minDate~오늘) — 과거 설문도 오늘 '확인+완료' 찍히면 오늘 완료로 반영 =====
  let vocDaysTouched = 0, vocResTotal = 0;
  if (vocCh) {
    // 이전 완료일/처리내용 보존용 맵 (완료일은 최초 완료된 날 유지)
    const priorMap = {};
    for (const d in data.days) { const vv = data.days[d].voc; if (!vv) continue; for (const a of [...(vv.alerts || []), ...(vv.praises || [])]) { const k = d + '|' + (a.storeId || '') + '|' + (a.time || ''); priorMap[k] = { doneDate: a.doneDate || '', autoNote: a.autoNote || '' }; } }
    let wide = [];
    try { wide = await fetchAllRange(vocCh.id, oldestWide, latestBound); }
    catch (e) { console.error(`  ⚠ [VOC] 기간 읽기 실패(${e.message}) — VOC 재집계 생략`); }
    const byDate = {};
    for (const m of wide) { if (m.subtype && m.subtype !== 'bot_message') continue; const d = kstDate(m.ts); if (d < minDate) continue; (byDate[d] = byDate[d] || []).push(m); }
    for (const d of Object.keys(byDate).sort()) {
      const vagg = freshVoc();
      try { await tallyVoc(byDate[d], vagg, vocCh.id, { dayDate: d, todayKstDate, priorMap, noteSince: oldestWide }); }
      catch (e) { console.error(`  ⚠ [VOC ${d}] 파싱 실패(${e.message}) — 이 날짜 건너뜀`); continue; }
      if (vagg.responses > 0) {
        const vlatest = vagg.latest; delete vagg.latest;
        const de = data.days[d] || { updatedAt: '', counts: {}, pending: [] };
        de.voc = vagg;
        if (d === targetDate && vlatest && vlatest > (de.updatedAt || '')) de.updatedAt = vlatest;
        data.days[d] = de;
        vocDaysTouched++; vocResTotal += vagg.responses;
      }
    }
  }

  console.log(`[완료] 업무 ${workDates.length}일 · VOC ${vocResTotal}응답/${vocDaysTouched}일 재집계`);
  data.version = (data.version || 0) + 1;
  const header = '/*\n * 슬랙 원격 처리 채널(AS요청·명의변경 등) 집계 데이터 (날짜별 누적)\n * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.\n */\n';
  fs.writeFileSync(OUT, header + 'window.SLACK_DATA = ' + JSON.stringify(data, null, 2) + ';\n', 'utf8');
  console.log('✅ slack-data.js 갱신 (version=' + data.version + ', 누적: ' + Object.keys(data.days).join(', ') + ')');
})().catch(e => { console.error(e.message); process.exit(1); });
