#!/usr/bin/env node
/*
 * ============================================================
 *  방문설치 채널 → visit-data.js
 * ============================================================
 *  슬랙 #ishopcare_new_방문설치 의 워크플로우 글을 읽어 방문 건으로 적재한다.
 *  프랜차이즈 대시보드가 이 파일을 읽어 상호명으로 브랜드를 가르고
 *  각 브랜드의 '현장방문' 에 넣는다(브랜드 판별은 대시보드와 같은 모듈 사용).
 *
 *    node scripts/fetch-visits.js
 *    VISIT_FROM=2026-07-01 node scripts/fetch-visits.js    # 과거 재수집
 *
 *  ── slack-data.js 를 안 건드리는 이유 ────────────────────────
 *  원격파트 대시보드(index.html)가 같은 파일을 읽는다. 거기에 새 분류를
 *  끼워 넣으면 사내 집계 숫자가 흔들린다. 그래서 별도 파일로 뺀다.
 *
 *  ── 워크플로우 글 형식 ──────────────────────────────────────
 *    방문 설치 요청
 *    ID: 14041
 *    설치구분: 기타          ← 설치 / AS / 기타
 *    요청일시: 2026-09-02 18:54
 *    상호명: 컴포즈커피 수원인계점
 *    사업자번호: 5218102386
 *    방문일자: 2026-09-04
 *    ...
 *  스레드 댓글에 '설치 담당 배정 : -> 공명현', 'YYYY-MM-DD [N회차]' 가 붙는다.
 * ============================================================
 */
const fs   = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT  = path.join(ROOT, 'visit-data.js');
const CHANNEL = process.env.VISIT_CHANNEL || 'C0B2XSJ08UA';   // ishopcare_new_방문설치

/* ── 파싱 (슬랙 없이도 단위 검증할 수 있게 순수 함수로 둔다) ── */

/* 슬랙 마크업을 사람이 읽는 형태로 */
function unmark(s){
  return String(s == null ? '' : s)
    .replace(/<@[^>|]+\|([^>]+)>/g, '@$1')            // <@U1|홍길동> → @홍길동
    .replace(/<#[^>|]+\|([^>]+)>/g, '#$1')
    .replace(/<(https?:[^>|]+)\|([^>]+)>/g, '$2')     // 링크는 라벨만
    .replace(/<(https?:[^>|]+)>/g, '$1')
    .replace(/[*`]/g, '');
}

/* '키: 값' 줄을 모아 객체로. 값 안의 콜론(18:54)이 깨지지 않도록 첫 콜론만 자른다 */
function parseFields(text){
  const out = {};
  for(const line of unmark(text).split('\n')){
    const m = line.match(/^\s*([^:\n]{1,24}?)\s*:\s*(.*)$/);
    if(!m) continue;
    const k = m[1].trim();
    if(!k) continue;
    if(out[k] === undefined) out[k] = m[2].trim();     // 같은 키가 또 나오면 첫 값 유지
  }
  return out;
}

const isBlank = v => !v || ['-', '없음', 'N/A', 'na'].includes(String(v).trim());
const ymd = v => { const m = String(v || '').match(/(\d{4})-(\d{2})-(\d{2})/); return m ? m[0] : ''; };
const hm  = v => { const m = String(v || '').match(/(\d{1,2}):(\d{2})/);
                   return m ? String(+m[1]).padStart(2, '0') + ':' + m[2] : ''; };

/* 설치구분 정규화 — 워크플로우 선택지가 조금씩 달라도 셋 중 하나로 모은다 */
function normKind(v){
  /* 'A/S', 'a-s' 처럼 구분자가 끼어도 같게 보이도록 공백·기호를 먼저 턴다 */
  const s = String(v || '').replace(/[\s/._-]/g, '');
  if(!s) return '기타';
  if(/as/i.test(s) || s.includes('에이에스')) return 'AS';
  if(s.includes('설치') || s.includes('신규')) return '설치';
  return '기타';
}

/* 스레드 댓글에서 담당자·방문 회차를 건진다 */
function parseThread(replies){
  let assignee = '', rounds = 0, roundDates = [];
  for(const r of (replies || [])){
    const t = unmark(r.text || '');
    const a = t.match(/설치\s*담당\s*배정\s*:?\s*(.*)/);
    if(a){
      /* '이전 -> 새사람' 형태면 화살표 뒤가 최종 담당자 */
      const v = a[1].split('->').pop().replace(/\s*by\s+.*$/i, '').trim();
      if(v) assignee = v;
    }
    for(const m of t.matchAll(/(\d{4}-\d{2}-\d{2})\s*\[(\d+)\s*회차\]/g)){
      roundDates.push(m[1]);
      rounds = Math.max(rounds, +m[2]);
    }
  }
  return { assignee, rounds, roundDates };
}

/* 워크플로우 글 1건 → 방문 레코드. 형식이 아니면 null */
function toRecord(text, replies, todayYmd){
  const f = parseFields(text);
  const store = f['상호명'];
  if(!store || isBlank(store)) return null;          // 상호명이 없으면 브랜드를 가를 수 없다

  const reqDate = ymd(f['요청일시']);
  const visitDate = ymd(f['방문일자']);
  const th = parseThread(replies);

  /* 대시보드는 '인입' 기준으로 집계한다 — 날짜는 요청일시를 쓰고,
     방문일자는 상세에 보여준다. 요청일시가 없으면 방문일자로 대체. */
  const date = reqDate || visitDate;
  if(!date) return null;

  let status = 'hold';                                // 방문일자 미정
  if(visitDate) status = visitDate <= todayYmd ? 'done' : 'pending';

  return {
    id      : (f['ID'] || '').trim(),
    date    : date,
    time    : hm(f['요청일시']),
    store   : String(store).trim(),
    biz     : String(f['사업자번호'] || '').replace(/\D/g, ''),
    kind    : normKind(f['설치구분']),
    status  : status,
    visitDate: visitDate,
    region  : isBlank(f['수도권/지방 구분']) ? '' : f['수도권/지방 구분'],
    route   : isBlank(f['판매경로'])   ? '' : f['판매경로'],
    addr    : isBlank(f['주소지'])     ? '' : f['주소지'],
    van     : isBlank(f['VAN'])        ? '' : f['VAN'],
    equip   : isBlank(f['설치장비'])   ? '' : f['설치장비'],
    ship    : isBlank(f['택배발송일']) ? '' : ymd(f['택배발송일']),
    delivery: isBlank(f['배달4사 계약여부']) ? '' : f['배달4사 계약여부'],
    requester: String(f['요청자'] || '').replace(/^@/, '').replace(/\(.*\)$/, '').trim(),
    assignee : th.assignee,
    rounds   : th.rounds,
    roundDates: th.roundDates,
  };
}

module.exports = { parseFields, toRecord, normKind, parseThread, unmark };

/* ── 여기부터는 실행용 (슬랙 토큰 필요) ────────────────────── */
if(require.main !== module) return;

const TOKEN = process.env.SLACK_BOT_TOKEN;
if(!TOKEN){ console.error('SLACK_BOT_TOKEN 환경변수가 필요합니다.'); process.exit(1); }

const FROM = process.env.VISIT_FROM || '2026-07-01';
const oldest = Math.floor(new Date(FROM + 'T00:00:00+09:00').getTime() / 1000);
const TODAY = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);   // KST

async function slack(method, params){
  const url = new URL('https://slack.com/api/' + method);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
  const j = await res.json().catch(() => ({}));
  if(!j.ok) throw new Error(method + ': ' + (j.error || 'unknown'));
  return j;
}

async function history(){
  let cursor = '', out = [], guard = 0;
  do {
    const p = { channel: CHANNEL, oldest: String(oldest), limit: '200' };
    if(cursor) p.cursor = cursor;
    const j = await slack('conversations.history', p);
    out = out.concat(j.messages || []);
    cursor = (j.response_metadata && j.response_metadata.next_cursor) || '';
  } while(cursor && ++guard < 30);
  return out;
}

/* 스레드는 담당자·회차 때문에 읽는다. 실패해도 본체는 살린다 */
let replyCalls = 0;
const MAX_REPLIES = +(process.env.VISIT_MAX_REPLIES || 400);
async function replies(ts){
  if(replyCalls >= MAX_REPLIES) return [];
  replyCalls++;
  try {
    const j = await slack('conversations.replies', { channel: CHANNEL, ts: ts, limit: '50' });
    return (j.messages || []).slice(1);
  } catch(e){ return []; }
}

(async () => {
  const msgs = await history();
  const recs = [];
  const seen = new Set();
  let skipped = 0;

  for(const m of msgs){
    if(m.subtype && m.subtype !== 'bot_message') continue;
    const text = m.text || (m.attachments || []).map(a => a.text || '').join('\n');
    if(!/상호명\s*:/.test(unmark(text))){ skipped++; continue; }
    const th = m.thread_ts && m.reply_count ? await replies(m.thread_ts) : [];
    const r = toRecord(text, th, TODAY);
    if(!r){ skipped++; continue; }
    /* 같은 요청이 여러 번 올라오면 ID 로 한 건으로 본다 */
    const key = r.id || (r.store + '|' + r.date + '|' + r.time);
    if(seen.has(key)) continue;
    seen.add(key);
    recs.push(r);
  }

  recs.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  const stamp = new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 16).replace('T', ' ');
  const body = recs.map(r => '  ' + JSON.stringify(r) + ',').join('\n');
  const out =
`/*
 * 방문설치 채널(#ishopcare_new_방문설치) 적재 — 자동 생성 파일
 * 직접 수정하지 마세요. scripts/fetch-visits.js 가 덮어씁니다.
 * 갱신: ${stamp} KST · ${recs.length}건 (${FROM} 이후)
 */
window.VISIT_DATA = {
  updatedAt: '${stamp}',
  records: [
${body}
  ],
};
`;

  /* 시각만 바뀌었으면 파일을 건드리지 않는다 — CI 가 자주 도는데 커밋이 쌓인다 */
  const NOSTAMP = s => s.split('\r').join('')
    .replace(/갱신: [^\n]*\n/, '갱신: -\n')
    .replace(/updatedAt: '[^']*'/, "updatedAt: '-'");
  const prev = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : '';
  const byKind = {};
  recs.forEach(r => byKind[r.kind] = (byKind[r.kind] || 0) + 1);

  if(prev && NOSTAMP(prev) === NOSTAMP(out)){
    console.log('변경  없음 — 파일 유지 (' + recs.length + '건)');
    return;
  }
  fs.writeFileSync(OUT, out, 'utf8');
  console.log('적재  ' + recs.length + '건  ' + JSON.stringify(byKind));
  console.log('제외  형식 불일치 ' + skipped + '건 · 스레드 조회 ' + replyCalls + '회');
  console.log('생성  ' + path.relative(ROOT, OUT));
})().catch(e => { console.error('실패:', e.message); process.exit(1); });
