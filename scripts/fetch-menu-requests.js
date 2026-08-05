/*
 * 무인 자동 실행용: #oc팀_메뉴요청 채널의 최근 요청 글을 읽어 대시보드 '메뉴등록' 카테고리 데이터로 적재.
 * GitHub Actions 에서 주기 실행. 환경변수: SLACK_BOT_TOKEN (필수), MENU_REQ_DAYS(기본 7)
 * 실행: node scripts/fetch-menu-requests.js  →  menu-requests.js (window.MENU_REQUESTS) 갱신
 *
 * 룰 기반 파싱만 사용(LLM 불필요): 상호/사업자번호/연락처/POS/요청내용/이미지링크/처리상태(이모지).
 * 메뉴 항목의 세부 해석(가격표 초안)은 대시보드(브라우저)와 /메뉴판독 스킬에서 수행.
 */
const fs = require('fs');

// OCR(tesseract.js) 워커 오류는 워커 스레드에서 비동기로 튀어 try/catch를 벗어날 수 있음.
// 네트워크 실패 등으로 OCR이 죽더라도 메뉴 적재 자체는 멈추면 안 되므로, OCR 계열 오류만 조용히 흡수.
const isOcrErr = (e) => /traineddata|tesseract|worker|FetchError|ERR_/i.test(String((e && (e.message || e.name)) || e || ''));
process.on('unhandledRejection', (e) => { if (isOcrErr(e)) { console.log('OCR 경고(무시):', String(e && e.message || e).slice(0, 120)); } else { throw e; } });
process.on('uncaughtException', (e) => { if (isOcrErr(e)) { console.log('OCR 경고(무시):', String(e && e.message || e).slice(0, 120)); } else { console.error(e); process.exit(1); } });

const TOKEN = process.env.SLACK_BOT_TOKEN;
const OUT = 'menu-requests.js';
if (!TOKEN) { console.error('SLACK_BOT_TOKEN 환경변수가 필요합니다.'); process.exit(1); }

const CHANNEL = 'C08740SFT1S';                      // #oc팀_메뉴요청
const WORKSPACE = 'w1659946222-hxm266180.slack.com'; // 퍼머링크용
const DAYS = parseInt(process.env.MENU_REQ_DAYS || '30', 10);   // 매장조회(이력) 위해 30일 적재

const pad = (n) => String(n).padStart(2, '0');
const personMap = { '규빈': '김규빈', '선유': '배선유', '성현': '심성현', '동욱': '김동욱', '현기': '김현기', '태양': '송태양', '기범': '김기범', '상원': '서상원', '민석': '최민석', '경림': '고경림' };
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

// 스레드 댓글 읽기 (요청사항이 댓글에 달리는 경우 대응). rate-limit 보호: 실행당 상한 + 변경 스레드만 호출.
const REPLY_FETCH_CAP = 80;
let replyFetched = 0;
async function fetchReplies(channelId, ts) {
  if (replyFetched >= REPLY_FETCH_CAP) return null;   // null = 상한 도달(캐시 유지)
  replyFetched++;
  const url = new URL('https://slack.com/api/conversations.replies');
  url.searchParams.set('channel', channelId);
  url.searchParams.set('ts', ts);
  url.searchParams.set('limit', '30');
  const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
  const j = await res.json();
  if (!j.ok) return [];
  return (j.messages || []).slice(1);   // [0]은 원글
}
const cleanReply = (t) => scrubPII(String(t || '')
  .replace(/<@[A-Z0-9]+(\|[^>]*)?>/g, '').replace(/<(https?:[^>|]+)(\|[^>]*)?>/g, '$1')
  .replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').trim().slice(0, 600));

// 슬랙 첨부파일 다운로드 — 대시보드에서 직접 받게 저장소(menu-files/)에 실어둠. 최근 FILE_DAYS만 유지(롤링).
const FILE_DIR = 'menu-files';
const FILE_DAYS = 7;                          // 파일 보관 기간(용량 관리) — 지나면 자동 삭제, 슬랙 원문 링크로 폴백
const FILE_MAX = 10 * 1024 * 1024;            // 10MB 초과 파일 제외
const FILE_PER_MSG = 6;
let fileDownloaded = 0;
const FILE_DL_CAP = 40;                       // 실행당 다운로드 상한(rate 보호) — 나머지는 다음 실행에서
async function downloadSlackFile(url, dest) {
  if (fileDownloaded >= FILE_DL_CAP) return false;
  try {
    const res = await fetch(url, { headers: { Authorization: 'Bearer ' + TOKEN } });
    if (!res.ok) return false;
    const buf = Buffer.from(await res.arrayBuffer());
    if (!buf.length || buf.length > FILE_MAX) return false;
    // 토큰 없이 접근 시 슬랙이 로그인 HTML을 주는 경우 방지
    if (buf.slice(0, 15).toString().toLowerCase().includes('<!doctype')) return false;
    fs.writeFileSync(dest, buf);
    fileDownloaded++;
    return true;
  } catch (e) { return false; }
}
function cleanupOldFiles(nowSec) {
  if (!fs.existsSync(FILE_DIR)) return 0;
  let removed = 0;
  for (const f of fs.readdirSync(FILE_DIR)) {
    const ts = parseFloat(String(f).split('-')[0].replace('_', '.'));
    if (ts && nowSec - ts > FILE_DAYS * 86400) { try { fs.unlinkSync(`${FILE_DIR}/${f}`); removed++; } catch (e) {} }
  }
  return removed;
}

// ─── 무료 OCR (Tesseract.js) ───────────────────────────────────────────────
// 다운로드된 이미지에서 메뉴 텍스트를 추출. 신규 이미지에만 1회 수행하고 결과는 att[].ocr 로 캐시.
// tesseract.js 미설치 환경(로컬 등)에서는 자동으로 건너뜀. 실패/상한은 비파괴적으로 처리.
const OCR_EXT = /\.(jpe?g|png|webp|bmp|gif)$/i;
const OCR_CAP = 12;                          // 실행당 신규 OCR 상한(런타임 보호) — 나머지는 다음 실행에서
let ocrDone = 0;
let _tess = null;                            // null=미초기화, 'FAIL'=엔진없음, 그 외=worker
async function getTess() {
  if (_tess === 'FAIL') return null;
  if (_tess) return _tess;
  try {
    const { createWorker } = require('tesseract.js');
    // 60초 내 초기화(traineddata 다운로드) 실패 시 OCR 포기 — 네트워크 지연으로 await가 무한 대기하는 것 방지
    _tess = await Promise.race([
      createWorker(['kor', 'eng']),   // 한글 + 숫자/영문(가격)
      new Promise((_, rej) => setTimeout(() => rej(new Error('OCR init timeout(60s)')), 60000)),
    ]);
    return _tess;
  } catch (e) { console.log('OCR 비활성:', e.message); _tess = 'FAIL'; return null; }
}
async function endTess() { if (_tess && _tess !== 'FAIL') { try { await _tess.terminate(); } catch (e) {} _tess = null; } }
// 판독 텍스트는 공개 저장소에 커밋된다 → 메뉴·가격이 아닌 개인 식별 번호는 지우고 저장한다.
// 가격(3~6자리, 콤마 포함)은 건드리지 않는 패턴만 사용.
function scrubPII(t) {
  return String(t || '')
    // 마스킹 토큰은 한글을 쓰지 않는다 — 브라우저의 ocrExtractMenu 가 한글 2자 이상을
    // 메뉴명으로 잡아 '번호 | ' 같은 가짜 행을 만들기 때문. '···' 는 이름·가격 어디에도 안 걸린다.
    .replace(/\b0\d{1,2}[-. ]?\d{3,4}[-. ]?\d{4}\b/g, '···')   // 전화·휴대폰
    .replace(/\b\d{3}[-. ]\d{2}[-. ]\d{5}\b/g, '···')          // 사업자번호 000-00-00000
    .replace(/\b\d{10,11}\b/g, '···')                          // 하이픈 없는 10~11자리
    .replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, '···');
}
function cleanOcr(t) {
  return String(t || '')
    .replace(/[ \t]+/g, ' ')
    .split('\n').map((l) => l.trim())
    .filter((l) => l && /[가-힣0-9]/.test(l))   // 한글/숫자 없는 잡음 줄 제거
    .join('\n').slice(0, 1500);
}
function cleanOcrSafe(t) {   // 저장용 — 개인정보 제거까지
  return scrubPII(cleanOcr(t));
}
// 반환: 문자열(빈 문자열 포함) → 캐시(재시도 안 함) · null → 상한/엔진없음(다음 실행 재시도)
async function ocrImage(dest) {
  if (ocrDone >= OCR_CAP) return null;
  const w = await getTess();
  if (!w) return null;
  try {
    const { data } = await w.recognize(dest);
    ocrDone++;
    return cleanOcrSafe(data.text);
  } catch (e) { ocrDone++; console.log('OCR 실패:', dest, e.message); return ''; }
}

// ─── Google Drive 링크 이미지 수집 ─────────────────────────────────────────
// 메뉴 이미지는 슬랙 직접 첨부보다 Drive 링크로 들어오는 쪽이 많다. 접근 가능한 파일만
// 내려받아 슬랙 첨부와 똑같이 OCR 대상에 넣는다.
// GDRIVE_* 시크릿이 없거나 권한이 없으면 조용히 건너뛴다 — 적재 자체는 절대 멈추지 않는다.
// 차단(403 cannotDownloadFile)은 blocked 로 표시만 하고 매 실행 재시도한다(권한이 풀리면 자동 복구).
// ⚠️ 이 저장소는 공개(public)다. Drive 이미지는 고객 소유 파일이고 파일명에 개인 이름이
// 섞여 들어오므로(예: "IMG_5886 - OOO.png") 저장소에 커밋하지 않는다.
// → OS 임시 디렉터리에 받아 OCR 만 하고 즉시 삭제하고, 남기는 건 판독 텍스트뿐이다.
//   파일명도 저장하지 않는다(대시보드는 기존 drive[] 링크로 원본을 연다).
const os = require('os');
const DRIVE_TMP = fs.mkdtempSync(require('path').join(os.tmpdir(), 'menu-drive-'));
const DRIVE_DL_CAP = 20;                      // 실행당 신규 다운로드 상한
const DRIVE_PER_MSG = 6;
const DRIVE_IMG = /^image\/(jpe?g|png|webp|bmp|gif)$/i;
let driveDownloaded = 0, driveBlocked = 0;
let _dtok = null;                             // null=미시도, 'FAIL'=사용불가, 문자열=access token
async function driveToken() {
  if (_dtok === 'FAIL') return null;
  if (_dtok) return _dtok;
  const { GDRIVE_CLIENT_ID: id, GDRIVE_CLIENT_SECRET: sec, GDRIVE_REFRESH_TOKEN: rt } = process.env;
  if (!id || !sec || !rt) { console.log('Drive 비활성: GDRIVE_* 환경변수 없음'); _dtok = 'FAIL'; return null; }
  try {
    const r = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ client_id: id, client_secret: sec, refresh_token: rt, grant_type: 'refresh_token' }),
    });
    const j = await r.json();
    if (!j.access_token) throw new Error(j.error_description || j.error || 'no access_token');
    _dtok = j.access_token;
    return _dtok;
  } catch (e) { console.log('Drive 비활성:', e.message); _dtok = 'FAIL'; return null; }
}
const driveIdsOf = (links) => [...new Set(links
  .map((u) => (String(u).match(/\/file\/d\/([\w-]+)/) || String(u).match(/[?&]id=([\w-]+)/) || [])[1])
  .filter(Boolean))];
// 반환: {name, mimeType, size} · null=조회 실패
async function driveMeta(id, tok) {
  try {
    const r = await fetch(`https://www.googleapis.com/drive/v3/files/${id}?fields=name,mimeType,size&supportsAllDrives=true`,
      { headers: { Authorization: 'Bearer ' + tok } });
    return r.ok ? await r.json() : null;
  } catch (e) { return null; }
}
// 반환: true=저장됨 · 'blocked'=권한 차단 · false=그 외 실패
async function driveDownload(id, dest, tok) {
  if (driveDownloaded >= DRIVE_DL_CAP) return false;
  try {
    const r = await fetch(`https://www.googleapis.com/drive/v3/files/${id}?alt=media&supportsAllDrives=true`,
      { headers: { Authorization: 'Bearer ' + tok } });
    if (r.status === 403) return 'blocked';
    if (!r.ok) return false;
    const buf = Buffer.from(await r.arrayBuffer());
    if (!buf.length || buf.length > FILE_MAX) return false;
    fs.writeFileSync(dest, buf);
    driveDownloaded++;
    return true;
  } catch (e) { return false; }
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
  fs.mkdirSync(FILE_DIR, { recursive: true });
  const removedFiles = cleanupOldFiles(nowSec);
  if (removedFiles) console.log(`오래된 첨부 ${removedFiles}개 정리 (보관 ${FILE_DAYS}일)`);

  // 이전 적재분 캐시 (댓글 재호출 방지: reply_count·latest_reply 동일하면 재사용)
  const prevMap = {};
  if (fs.existsSync(OUT)) { const w = {}; try { new Function('window', fs.readFileSync(OUT, 'utf8'))(w); for (const it of ((w.MENU_REQUESTS || {}).items || [])) prevMap[it.ts] = it; } catch (e) {} }

  const items = [];
  for (const m of msgs) {
    if (m.subtype && m.subtype !== 'bot_message') continue;   // 시스템 메시지 제외(봇 접수글은 포함)
    const text = (m.text || '').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');

    let store = (((text.match(/(?:상호|매장명)\s*[:：]?\s*(.+)/) || [])[1]) || '').trim().split('/')[0].trim();
    if (store.length > 40) store = store.slice(0, 40);
    const biz = ((text.match(/사업자\s*번?호?\s*[:：]?\s*([\d\-]+)/) || [])[1] || '').replace(/-/g, '').trim();
    if (!store && !biz) continue;                             // 상호·사업자 없는 글(사진 릴레이 등)은 요청으로 안 봄

    // ⚠️ 연락처는 적재하지 않는다 — 이 저장소는 public 이라 menu-requests.js 가
    // raw.githubusercontent.com 으로 그대로 공개된다. 번호가 필요하면 '💬 슬랙 원문'에서 본다.
    // 요청 본문: '메뉴 수정' 또는 '내용' 필드부터 끝까지(다음 라벨 전까지 자르지 않고 원문 유지 — 브라우저에서 초안 파싱)
    // 본문에도 연락처가 섞여 들어오므로 scrubPII 를 통과시킨 뒤 적재한다(가격은 안 건드림)
    const content = scrubPII(((text.match(/(?:메뉴\s*수정|내용)\s*[:：]?\s*([\s\S]+?)(?:\n-\s*(?:특이사항|포스|대표자|이미지)\s*[:：]|$)/) || [])[1] || '').trim().slice(0, 1200));
    const special = scrubPII(((text.match(/특이사항\s*[:：]?\s*(.+)/) || [])[1] || '').trim().slice(0, 200));
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

    // 첨부파일 — 최근 FILE_DAYS 이내 건만 저장소에 다운로드해 대시보드 직접 다운로드 지원
    const att = [];
    if ((m.files || []).length && nowSec - parseFloat(m.ts) <= FILE_DAYS * 86400) {
      let fi = 0;
      for (const f of m.files.slice(0, FILE_PER_MSG)) {
        const ext = (String(f.name || '').match(/\.[A-Za-z0-9]{1,6}$/) || ['.' + (f.filetype || 'bin')])[0];
        const dest = `${FILE_DIR}/${String(m.ts).replace('.', '_')}-${fi}${ext.toLowerCase()}`;
        fi++;
        const ok = fs.existsSync(dest) || ((f.size || 0) <= FILE_MAX && f.url_private_download && await downloadSlackFile(f.url_private_download, dest));
        if (ok) {
          const a = { name: String(f.name || '첨부').slice(0, 40), path: dest };
          if (OCR_EXT.test(dest)) {
            const prevA = ((prevMap[m.ts] || {}).att || []).find((x) => x.path === dest);
            if (prevA && 'ocr' in prevA) a.ocr = prevA.ocr;        // 캐시 재사용(빈 문자열도 재사용 → 재시도 폭주 방지)
            else { const t = await ocrImage(dest); if (t !== null) a.ocr = t; }   // null(상한/엔진없음)은 캐시 안 함 → 다음 실행 재시도
          }
          att.push(a);
        }
      }
    }

    // Drive 링크 이미지 — 접근 가능한 것만 내려받아 슬랙 첨부와 동일하게 OCR.
    // 판독 결과(ocr)는 파일이 롤링 삭제돼도 계속 재사용하고, 차단분은 매 실행 재시도한다.
    const datt = [];
    if (driveLinks.length && nowSec - parseFloat(m.ts) <= FILE_DAYS * 86400) {
      const tok = await driveToken();
      if (tok) {
        const prevD = ((prevMap[m.ts] || {}).datt) || [];
        let di = 0;
        for (const id of driveIdsOf(driveLinks).slice(0, DRIVE_PER_MSG)) {
          const p = prevD.find((x) => x.id === id) || {};
          if ('ocr' in p) { datt.push({ id, ocr: p.ocr }); continue; }     // 판독 완료분은 영구 재사용
          di++;

          const meta = await driveMeta(id, tok);
          if (!meta) continue;
          if (!DRIVE_IMG.test(String(meta.mimeType || ''))) continue;      // 이미지 아닌 링크(PDF·엑셀)는 대상 아님
          if (Number(meta.size || 0) > FILE_MAX) continue;

          // 임시 파일로만 받는다 — 저장소에는 이미지도 파일명도 남기지 않는다
          const ext = (String(meta.mimeType).split('/')[1] || 'jpg').replace('jpeg', 'jpg');
          const tmp = `${DRIVE_TMP}/${id}.${ext}`;
          const got = await driveDownload(id, tmp, tok);
          if (got === 'blocked') { datt.push({ id, blocked: true }); driveBlocked++; continue; }
          if (!got) continue;
          try {
            const t = await ocrImage(tmp);
            if (t !== null) datt.push({ id, ocr: t });                     // null(상한/엔진없음)은 다음 실행 재시도
          } finally { try { fs.unlinkSync(tmp); } catch (e) {} }
        }
      }
    }

    // 스레드 댓글 — 요청사항이 댓글에 달리는 케이스. 원글 작성자 댓글 위주(봇 접수글은 사람 댓글 전부).
    const rc = m.reply_count || 0, lr = m.latest_reply || '';
    let replies = [];
    if (rc > 0) {
      const prev = prevMap[m.ts];
      if (prev && prev.rc === rc && prev.lr === lr) replies = prev.replies || [];   // 변경 없음 → 캐시
      else {
        const raw = await fetchReplies(CHANNEL, m.ts);
        if (raw === null) replies = (prev && prev.replies) || [];                   // 상한 도달 → 기존 유지
        else replies = raw
          .filter((r) => !r.bot_id && r.subtype !== 'bot_message' && (r.text || '').trim())
          .filter((r) => (m.user ? r.user === m.user : true))                       // 원글 작성자 댓글만(봇 원글은 전부)
          .map((r) => cleanReply(r.text)).filter(Boolean).slice(0, 8);
      }
    }

    items.push({
      ts: m.ts, date: kstDate(m.ts), time: kstHM(m.ts),
      store, biz, pos, content, special,
      drive: driveLinks, files: fileCnt, att, datt, replies, rc, lr,
      status, handler: handler || confirmer || null,
      link: `https://${WORKSPACE}/archives/${CHANNEL}/p${String(m.ts).replace('.', '')}`,
    });
  }
  items.sort((a, b) => parseFloat(b.ts) - parseFloat(a.ts));
  const capped = items.slice(0, 800);

  // 기존 파일과 내용 동일하면 rewrite 생략(불필요한 커밋 방지) · version 승계
  let version = 0, prevItems = null;
  if (fs.existsSync(OUT)) { const w = {}; try { new Function('window', fs.readFileSync(OUT, 'utf8'))(w); if (w.MENU_REQUESTS) { version = w.MENU_REQUESTS.version || 0; prevItems = JSON.stringify(w.MENU_REQUESTS.items || []); } } catch (e) {} }
  if (prevItems !== null && prevItems === JSON.stringify(capped)) {
    console.log('변경 없음 — 파일 갱신 생략');
    await endTess();
    try { fs.rmSync(DRIVE_TMP, { recursive: true, force: true }); } catch (e) {}
    process.exit(0);
  }
  const kst = new Date(Date.now() + 9 * 3600 * 1000);
  const data = {
    version: version + 1,
    updatedAt: `${kst.getUTCFullYear()}-${pad(kst.getUTCMonth() + 1)}-${pad(kst.getUTCDate())} ${pad(kst.getUTCHours())}:${pad(kst.getUTCMinutes())}`,
    days: DAYS, items: capped,
  };
  const header = '/*\n * 슬랙 #oc팀_메뉴요청 최근 요청 적재 (대시보드 메뉴등록 카테고리용)\n * scripts/fetch-menu-requests.js 가 GitHub Actions에서 주기 갱신합니다.\n */\n';
  fs.writeFileSync(OUT, header + 'window.MENU_REQUESTS = ' + JSON.stringify(data, null, 1) + ';\n', 'utf8');
  const byStatus = capped.reduce((a, i) => { a[i.status] = (a[i.status] || 0) + 1; return a; }, {});
  if (ocrDone) console.log(`🔎 신규 이미지 OCR ${ocrDone}건 판독`);
  if (driveDownloaded || driveBlocked) console.log(`🖼 Drive 이미지 ${driveDownloaded}건 판독${driveBlocked ? ` · 권한차단 ${driveBlocked}건(권한 풀리면 자동 복구)` : ''} — 이미지 파일은 저장소에 남기지 않음`);
  try { fs.rmSync(DRIVE_TMP, { recursive: true, force: true }); } catch (e) {}
  await endTess();
  console.log(`✅ ${OUT} 갱신: 요청 ${capped.length}건 (완료 ${byStatus.done || 0} · 확인중 ${byStatus.confirm || 0} · 대기 ${byStatus.wait || 0} · 중복 ${byStatus.dup || 0}) v${data.version}`);
  process.exit(0);   // 좀비 워커가 남아 프로세스가 안 끝나는 것 방지(모든 쓰기는 동기 완료됨)
})();
