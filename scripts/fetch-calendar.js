/*
 * 회사 구글 캘린더(비공개 iCal 주소) → calendar-data.js 동기화
 * 사용: GCAL_ICAL_URL 환경변수에 iCal 비공개 주소를 넣고 실행
 *   node scripts/fetch-calendar.js
 * 반복 일정(RRULE)은 조회 창(과거 30일~미래 150일) 내에서 펼쳐서 저장합니다.
 */
process.env.TZ = 'UTC'; // rrule 확장이 러너 로컬 타임존에 흔들리지 않도록 고정(반드시 Date 사용 전에)
const fs = require('fs');
const ical = require('node-ical');

const URL = process.env.GCAL_ICAL_URL;
const OUT = 'calendar-data.js';
const BACK_DAYS = 30, FWD_DAYS = 150;

if (!URL) { console.error('❌ GCAL_ICAL_URL 환경변수가 없습니다.'); process.exit(1); }

// KST(Asia/Seoul) 기준 날짜/시간 포맷
function kst(d) {
  const f = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul',
    year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
  const p = Object.fromEntries(f.formatToParts(d).map(x => [x.type, x.value]));
  return { date: `${p.year}-${p.month}-${p.day}`, time: `${p.hour}:${p.minute}` };
}
// 종일 일정은 UTC 날짜 구성요소를 그대로 사용(타임존 이동 방지)
function utcDate(d) {
  return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`;
}

(async () => {
  const now = new Date();
  const winStart = new Date(now.getTime() - BACK_DAYS * 864e5);
  const winEnd = new Date(now.getTime() + FWD_DAYS * 864e5);

  const res = await fetch(URL);
  if (!res.ok) { console.error('❌ iCal 요청 실패:', res.status, res.statusText); process.exit(1); }
  const text = await res.text();
  const data = ical.sync.parseICS(text);

  const days = {};
  const push = (date, obj) => { (days[date] = days[date] || []).push(obj); };

  function addInstance(summary, start, end, allDay) {
    const title = (summary == null ? '(제목 없음)' : String(summary)).trim() || '(제목 없음)';
    if (allDay) {
      let s = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
      let e = end ? new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate())) : new Date(s.getTime() + 864e5);
      if (e <= s) e = new Date(s.getTime() + 864e5); // DTEND는 배타적 → 최소 하루
      for (let d = new Date(s); d < e; d = new Date(d.getTime() + 864e5)) {
        if (d < winStart || d > winEnd) continue;
        push(utcDate(d), { title, time: '', allDay: true });
      }
    } else {
      if (start < winStart || start > winEnd) return;
      const a = kst(start), b = end ? kst(end) : null;
      const time = b && b.time !== a.time ? `${a.time}~${b.time}` : a.time;
      push(a.date, { title, time, allDay: false });
    }
  }

  let masters = 0, instances = 0;
  for (const key of Object.keys(data)) {
    const ev = data[key];
    if (!ev || ev.type !== 'VEVENT') continue;
    masters++;
    const allDay = ev.datetype === 'date';

    if (ev.rrule) {
      // 시간은 마스터에서 취함(KST는 DST 없음 → 회차마다 벽시계 시간 동일).
      // 날짜는 rrule 회차의 UTC 날짜(=의도한 KST 날짜)를 사용 → tzid/UTC dtstart 모두 안전.
      const title = (ev.summary == null ? '(제목 없음)' : String(ev.summary)).trim() || '(제목 없음)';
      const sK = kst(ev.start), eK = ev.end ? kst(ev.end) : null;
      const timeStr = allDay ? '' : (eK && eK.time !== sK.time ? `${sK.time}~${eK.time}` : sK.time);
      const spanDays = allDay && ev.end
        ? Math.max(1, Math.round((Date.UTC(ev.end.getUTCFullYear(), ev.end.getUTCMonth(), ev.end.getUTCDate())
            - Date.UTC(ev.start.getUTCFullYear(), ev.start.getUTCMonth(), ev.start.getUTCDate())) / 864e5))
        : 1;
      const ex = {};
      if (ev.exdate) for (const ek of Object.keys(ev.exdate)) { try { ex[utcDate(new Date(ev.exdate[ek]))] = true; } catch (e) {} }
      let occ = [];
      try { occ = ev.rrule.between(winStart, winEnd, true); } catch (e) { occ = []; }
      for (const oc of occ) {
        const dk = utcDate(oc);
        if (ex[dk]) continue;
        if (ev.recurrences && ev.recurrences[dk]) {           // 개별 수정된 인스턴스(시간 변경 등)
          const r = ev.recurrences[dk];
          addInstance(r.summary || ev.summary, r.start, r.end, r.datetype === 'date');
        } else if (allDay) {
          for (let i = 0; i < spanDays; i++) push(utcDate(new Date(oc.getTime() + i * 864e5)), { title, time: '', allDay: true });
        } else {
          push(dk, { title, time: timeStr, allDay: false });
        }
        instances++;
      }
    } else {
      addInstance(ev.summary, ev.start, ev.end, allDay);
      instances++;
    }
  }

  for (const d of Object.keys(days)) days[d].sort((a, b) => (a.time || '').localeCompare(b.time || ''));

  // 이전 버전 로드 → 내용 동일하면 갱신 생략(불필요 커밋 방지)
  let prevVer = 0, prevDays = '{}';
  if (fs.existsSync(OUT)) {
    try { const w = {}; new Function('window', fs.readFileSync(OUT, 'utf8'))(w); if (w.GCAL_DATA) { prevVer = w.GCAL_DATA.version || 0; prevDays = JSON.stringify(w.GCAL_DATA.days || {}); } } catch (e) {}
  }
  const newDays = JSON.stringify(days);
  if (newDays === prevDays) { console.log('변경 없음 — 갱신 생략'); return; }

  const u = kst(new Date());
  const out = { version: prevVer + 1, updatedAt: `${u.date} ${u.time}`, days };
  const header = '/*\n * 회사 구글 캘린더(iCal) 동기화 데이터 — gcal-sync 워크플로가 자동 생성/갱신합니다.\n */\n';
  fs.writeFileSync(OUT, header + 'window.GCAL_DATA = ' + JSON.stringify(out, null, 2) + ';\n', 'utf8');
  console.log(`✅ ${OUT} 갱신: 마스터 ${masters}건 → 인스턴스 ${instances}건, ${Object.keys(days).length}일치, version=${out.version}`);
})().catch(e => { console.error('❌ 오류:', e); process.exit(1); });
