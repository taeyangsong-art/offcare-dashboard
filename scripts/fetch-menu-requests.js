/*
 * 무인 자동 실행용: #oc팀_메뉴요청 채널의 최근 요청 글을 읽어 대시보드 '메뉴등록' 카테고리 데이터로 적재.
 * GitHub Actions 에서 주기 실행. 환경변수: SLACK_BOT_TOKEN (필수), MENU_REQ_DAYS(기본 7)
 * 실행: node scripts/fetch-menu-requests.js  →  menu-requests.js (window.MENU_REQUESTS) 갱신
 *
 * 룰 기반 파싱만 사용(LLM 불필요): 상호/사업자번호/연락처/POS/요청내용/이미지링크/처리상태(이모지).
 * 메뉴 항목의 세부 해석(가격표 초안)은 대시보드(브라우저)와 /메뉴판독 스킬에서 수행.
 */
const fs = require('fs');

const TOKEN = process.env.SLACK_BOT_TOKEN;
const OUT = 'menu-requests.js';
if (!TOKEN) { console.error('SLACK_BOT_TOKEN 환경변수가 필요합니다.'); process.exit(1); }

const CHANNEL = 'C08740SFT1S';                      // #oc팀_메뉴요청
const WORKSPACE = 'w1659946222-hxm266180.slack.com'; // 퍼머링크용
const DAYS = parseInt(process.env.MENU_REQ_DAYS || '7', 10);

const pad = (n) => String(n).padStart(2, '0');
const personMap = { '규빈': '김규빈', '선유': '배선유', '성현': '심성현', '동욱': '김동욱', '현기': '김현기', '태양': '송태양', '기범': '김기범', '상원': '서상원', '민석': '최민석' };
const NAMES = Object.keys(personMap).join('|');
const kstHM = (ts) => { const d = new Date(parseFloat(ts) * 1000 + 9 * 3600 * 1000); return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`; };
const kstDate = (ts) => { const d = new Date(parseFloat(ts) * 1000 + 9 * 3600 * 1000); return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`; };

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

// 텍스트에서 POS 종류 추정
function detectPos(text) {
  const t = (text || '').toLowerCase();
  if (/토스|toss/.test(t)) return '토스포스';
  if (/퍼스트|first|kpn/.test(t)) return '퍼스트포스';
  if (/오케이|okpos/.test(t)) return '오케이포스';
  if (/스파로스|sparos|spharos/.test(t)) return '스파로스포스';
  if (/포스\s*[:：]\s*그\s*외|기타\s*포스/.test(t)) return '기타';
  return '';
}

(async () => {
  const nowSec = Date.now() / 1000;
  const oldest = nowSec - DAYS * 86400;
  const msgs = await fetchAllRange(CHANNEL, oldest, nowSec);
  console.log(`메뉴요청 채널 메시지 ${msgs.length}건 (최근 ${DAYS}일)`);

  const items = [];
  for (const m of msgs) {
    if (m.subtype && m.subtype !== 'bot_message') continue;   // 시스템 메시지 제외(봇 접수글은 포함)
    const text = (m.text || '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');

    let store = (((text.match(/(?:상호|매장명)\s*[:：]?\s*(.+)/) || [])[1]) || '').trim().split('/')[0].trim();
    if (store.length > 40) store = store.slice(0, 40);
    const biz = ((text.match(/사업자\s*번?호?\s*[:：]?\s*([\d\-]+)/) || [])[1] || '').replace(/-/g, '').trim();
    if (!store && !biz) continue;                             // 상호·사업자 없는 글(사진 릴레이 등)은 요청으로 안 봄

    const phone = ((text.match(/(?:휴대폰|핸드폰\s*번호|대표자\s*전화번호|연락처)\s*[:：]?\s*([\d\-\s]+)/) || [])[1] || '').trim();
    // 요청 본문: '메뉴 수정' 또는 '내용' 필드부터 끝까지(다음 라벨 전까지 자르지 않고 원문 유지 — 브라우저에서 초안 파싱)
    const content = ((text.match(/(?:메뉴\s*수정|내용)\s*[:：]?\s*([\s\S]+?)(?:\n-\s*(?:특이사항|포스|대표자|이미지)\s*[:：]|$)/) || [])[1] || '').trim().slice(0, 1200);
    const special = ((text.match(/특이사항\s*[:：]?\s*(.+)/) || [])[1] || '').trim().slice(0, 200);
    const posText = ((text.match(/포스\s*[:：]?\s*(.+)/) || [])[1] || '');
    const pos = detectPos(posText) || detectPos(text);
    const driveLinks = [...text.matchAll(/https?:\/\/drive\.google\.com\/[^\s>|,]+/g)].map((x) => x[0]);
    const fileCnt = (m.files || []).length;

    // 처리 상태 (이모지): 완료(원격OOO) > 중복 > 확인중(OOO확인) > 대기
    const names = (m.reactions || []).map((r) => r.name);
    let handler = null, confirmer = null;
    for (const n of names) { const pm = n.match(new RegExp('^원격(' + NAMES + ')$')); if (pm) { handler = personMap[pm[1]]; break; } }
    for (const n of names) { const cm = n.match(new RegExp('^(' + NAMES + ')_?확인.*$')); if (cm) { confirmer = personMap[cm[1]]; break; } }
    const isDup = names.some((n) => /^중복/.test(n));
    const status = handler ? 'done' : isDup ? 'dup' : confirmer ? 'confirm' : 'wait';

    items.push({
      ts: m.ts, date: kstDate(m.ts), time: kstHM(m.ts),
      store, biz, phone, pos, content, special,
      drive: driveLinks, files: fileCnt,
      status, handler: handler || confirmer || null,
      link: `https://${WORKSPACE}/archives/${CHANNEL}/p${String(m.ts).replace('.', '')}`,
    });
  }
  items.sort((a, b) => parseFloat(b.ts) - parseFloat(a.ts));
  const capped = items.slice(0, 400);

  // 기존 파일과 내용 동일하면 rewrite 생략(불필요한 커밋 방지) · version 승계
  let version = 0, prevItems = null;
  if (fs.existsSync(OUT)) { const w = {}; try { new Function('window', fs.readFileSync(OUT, 'utf8'))(w); if (w.MENU_REQUESTS) { version = w.MENU_REQUESTS.version || 0; prevItems = JSON.stringify(w.MENU_REQUESTS.items || []); } } catch (e) {} }
  if (prevItems !== null && prevItems === JSON.stringify(capped)) { console.log('변경 없음 — 파일 갱신 생략'); return; }
  const kst = new Date(Date.now() + 9 * 3600 * 1000);
  const data = {
    version: version + 1,
    updatedAt: `${kst.getUTCFullYear()}-${pad(kst.getUTCMonth() + 1)}-${pad(kst.getUTCDate())} ${pad(kst.getUTCHours())}:${pad(kst.getUTCMinutes())}`,
    days: DAYS, items: capped,
  };
  const header = '/*\n * 슬랙 #oc팀_메뉴요청 최근 요청 적재 (대시보드 메뉴등록 카테고리용)\n * scripts/fetch-menu-requests.js 가 GitHub Actions에서 주기 갱신합니다.\n */\n';
  fs.writeFileSync(OUT, header + 'window.MENU_REQUESTS = ' + JSON.stringify(data, null, 1) + ';\n', 'utf8');
  const byStatus = capped.reduce((a, i) => { a[i.status] = (a[i.status] || 0) + 1; return a; }, {});
  console.log(`✅ ${OUT} 갱신: 요청 ${capped.length}건 (완료 ${byStatus.done || 0} · 확인중 ${byStatus.confirm || 0} · 대기 ${byStatus.wait || 0} · 중복 ${byStatus.dup || 0}) v${data.version}`);
})();
