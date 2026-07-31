/*
 * Google Drive 리프레시 토큰 1회 발급 (로컬에서 한 번만 실행)
 *
 *   set GDRIVE_CLIENT_ID=...        (PowerShell: $env:GDRIVE_CLIENT_ID="...")
 *   set GDRIVE_CLIENT_SECRET=...
 *   node scripts/drive-auth.js
 *
 * 브라우저 동의 후 출력되는 refresh_token 을 GitHub Secrets 의
 * GDRIVE_REFRESH_TOKEN 에 등록한다. 토큰은 화면에만 출력하고 파일로 저장하지 않는다.
 *
 * 사전 준비 (Google Cloud Console):
 *   1) 프로젝트 생성 → "Google Drive API" 사용 설정
 *   2) OAuth 동의 화면 → 사용자 유형 [내부(Internal)]  ← Testing 으로 두면 토큰이 7일마다 만료된다
 *   3) 사용자 인증 정보 → OAuth 클라이언트 ID → 애플리케이션 유형 [데스크톱 앱]
 */
const http = require('http');
const crypto = require('crypto');
const { exec } = require('child_process');

const CLIENT_ID = process.env.GDRIVE_CLIENT_ID;
const CLIENT_SECRET = process.env.GDRIVE_CLIENT_SECRET;
const SCOPE = 'https://www.googleapis.com/auth/drive.readonly';   // 읽기 전용 — 쓰기 권한은 요청하지 않는다

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('✗ GDRIVE_CLIENT_ID / GDRIVE_CLIENT_SECRET 환경변수가 필요합니다.');
  process.exit(1);
}

const state = crypto.randomBytes(16).toString('hex');

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname !== '/') { res.writeHead(404).end(); return; }

  const err = url.searchParams.get('error');
  const code = url.searchParams.get('code');
  if (err || !code || url.searchParams.get('state') !== state) {
    res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h2>인증 실패</h2><p>' + (err || 'code/state 불일치') + '</p>');
    console.error('✗ 인증 실패:', err || 'code/state 불일치');
    server.close(); process.exit(1);
  }

  const port = server.address().port;
  const body = new URLSearchParams({
    code, client_id: CLIENT_ID, client_secret: CLIENT_SECRET,
    redirect_uri: `http://localhost:${port}`, grant_type: 'authorization_code',
  });
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body,
  });
  const j = await r.json();

  res.writeHead(r.ok ? 200 : 400, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(r.ok
    ? '<h2>완료</h2><p>터미널로 돌아가 refresh_token 을 확인하세요. 이 창은 닫으셔도 됩니다.</p>'
    : '<h2>토큰 교환 실패</h2><pre>' + JSON.stringify(j) + '</pre>');

  if (!r.ok) { console.error('✗ 토큰 교환 실패:', j); server.close(); process.exit(1); }
  if (!j.refresh_token) {
    console.error('✗ refresh_token 이 없습니다. 이미 동의한 앱이면 Google 계정 → 보안 → 서드파티 액세스에서\n' +
                  '  해당 앱 권한을 제거한 뒤 다시 실행하세요.');
    server.close(); process.exit(1);
  }

  console.log('\n' + '='.repeat(70));
  console.log('  GDRIVE_REFRESH_TOKEN 을 GitHub Secrets 에 등록하세요');
  console.log('='.repeat(70));
  console.log('\n' + j.refresh_token + '\n');
  console.log('='.repeat(70));
  console.log('  주의: 이 값은 비밀번호와 같습니다. 채팅·이슈·커밋에 붙여넣지 마세요.');
  console.log('='.repeat(70));
  server.close(); process.exit(0);
});

server.listen(0, '127.0.0.1', () => {
  const port = server.address().port;
  const auth = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
    client_id: CLIENT_ID, redirect_uri: `http://localhost:${port}`, response_type: 'code',
    scope: SCOPE, access_type: 'offline', prompt: 'consent', state,
  });
  console.log('아래 주소를 브라우저에서 열어 회사 계정으로 동의하세요:\n');
  console.log('  ' + auth + '\n');
  console.log(`(로컬 ${port} 포트에서 응답 대기 중… Ctrl+C 로 취소)`);
  const open = process.platform === 'win32' ? `start "" "${auth}"`
             : process.platform === 'darwin' ? `open "${auth}"` : `xdg-open "${auth}"`;
  exec(open, () => {});
});
