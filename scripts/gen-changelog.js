/*
 * 커밋 메시지 → 대시보드 업데이트 내역(changelog.js) 자동 생성.
 * GitHub Actions(changelog.yml)에서 push마다 실행. 잡음 커밋(자동 갱신/백필/merge 등)은 제외.
 * 출력: window.CHANGELOG = [{d, k, t}] (최신순, 최대 40개)
 */
const { execFileSync } = require('child_process');
const fs = require('fs');

const SEP = '\x1f';   // 구분자 (커밋 메시지에 안 나타남) — 셸 파이프 문제 회피
let raw = '';
try { raw = execFileSync('git', ['log', '--date=short', '--format=%ad' + SEP + '%s', '-120'], { encoding: 'utf8' }); }
catch (e) { console.error('git log 실패:', e.message); process.exit(0); }

// 제외할 커밋(자동/잡음)
const SKIP = /^(chore|docs|merge|revert)\b|자동 갱신|자동 반영|자동 동기화|캘린더 동기화|백필|재집계|changelog/i;

function categorize(msg) {
  if (/추가|신규|생성|만들|도입/.test(msg)) return 'add';
  if (/수정|고침|버그|오류|fix|픽스|복구|막음|방지|해결|잘림|안보|가독성/.test(msg)) return 'fix';
  return 'imp';
}

const entries = [];
for (const line of raw.split('\n')) {
  if (!line.trim()) continue;
  const i = line.indexOf(SEP);
  if (i < 0) continue;
  const d = line.slice(0, i).trim();
  let t = line.slice(i + 1).trim();
  if (!t || SKIP.test(t)) continue;
  // 제목만 (콜론 뒤 상세가 너무 길면 앞부분 유지), Co-Authored 등 제거는 %s라 불필요
  t = t.replace(/\s*\(#\d+\)\s*$/, '').trim();
  entries.push({ d, k: categorize(t), t });
  if (entries.length >= 40) break;
}

fs.writeFileSync('changelog.js', 'window.CHANGELOG = ' + JSON.stringify(entries) + ';\n', 'utf8');
console.log('✅ changelog.js 생성: ' + entries.length + '개 항목');
