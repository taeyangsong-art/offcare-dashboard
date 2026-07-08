# 원격파트 대시보드 — 호스팅 + 완전 자동화 셋업 가이드

대시보드를 인터넷에 올리고(GitHub Pages), 매일 슬랙 채널을 자동 집계(GitHub Actions)하는 방법입니다.
아래 **① 호스팅**과 **② 자동화**를 한 번만 세팅하면, 이후엔 PC를 꺼도 매일 자동으로 갱신됩니다.

---

## ① 호스팅 (GitHub Pages) — 약 2분

1. 브라우저에서 저장소 열기: https://github.com/taeyangsong-art/test
2. 상단 **Settings** → 왼쪽 메뉴 **Pages**
3. **Build and deployment** → Source: **Deploy from a branch**
4. Branch: **main** / 폴더: **/ (root)** → **Save**
5. 1~2분 뒤 새로고침하면 상단에 공개 주소가 뜹니다:
   **https://taeyangsong-art.github.io/test/**

> ⚠️ 저장소가 **공개(public)** 라 소스가 노출됩니다. 로그인 비번(`시프티`)이 소스에서 보이므로, 강한 보안이 필요하면 저장소를 private로 바꾸고(단, private Pages는 유료 플랜 필요) 별도 로그인 방식을 논의하세요.

---

## ② 매일 자동 집계 (GitHub Actions + 슬랙 봇 토큰)

### A. 슬랙 봇 토큰 만들기 (한 번만)
1. https://api.slack.com/apps → **Create New App** → **From scratch**
   - App Name: `원격집계봇` / 워크스페이스: iShopCare 선택
2. 왼쪽 **OAuth & Permissions** → **Scopes → Bot Token Scopes** 에 추가:
   - `channels:history` (공개 채널 읽기)
   - `channels:read`
   - (채널이 비공개면 `groups:history`, `groups:read` 도 추가)
3. 상단 **Install to Workspace** → 허용 → **Bot User OAuth Token**(`xoxb-...`) 복사
4. 슬랙에서 `#0_원격_as_요청` 채널에 이 봇을 초대: 채널에서 `/invite @원격집계봇`

### B. 토큰을 GitHub에 비밀로 등록
1. 저장소 → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret**
   - Name: `SLACK_BOT_TOKEN`
   - Secret: 위에서 복사한 `xoxb-...` 붙여넣기 → **Add secret**

### C. Actions 켜고 테스트
1. 저장소 → **Actions** 탭 → (처음이면) 워크플로 사용 허용
2. 왼쪽 **daily-slack-tally** 선택 → **Run workflow** 버튼으로 즉시 1회 테스트
3. 성공하면 `slack-data.js`가 자동 커밋되고, Pages 사이트에 반영됩니다.

이후 매일 **21:00(KST)** 에 자동 실행됩니다. (시간 변경: `.github/workflows/daily-slack-tally.yml`의 cron)

---

## 동작 요약 (하루 2회 실행)
```
① 21:00 KST — 진행 현황 집계 (오늘)      : daily-slack-tally
② 00:30 KST — 어제 최종 마감 집계        : daily-slack-tally-final
     ↑ 야간 직원의 21:00~24:00 업무까지 포함해 '전날'을 완전 확정
  → 각 실행이 slack-data.js 갱신 후 자동 커밋
  → GitHub Pages 자동 재배포
  → 팀 전원이 https://taeyangsong-art.github.io/test/ 에서 최신 실적 확인
```
> 집계 대상 날짜는 `TALLY_DATE_OFFSET`(0=오늘, -1=어제)로 제어하며,
> 하루 경계(00:00~24:00 KST)를 정확히 잘라 자정 넘어 실행해도 그날치만 집계합니다.

## 수동 집계(백업)
토큰 없이 Claude Code에서 `/원격집계` 를 실행하면, 슬랙 커넥터로 읽어 `slack-data.js`를 갱신합니다. (로컬 확인용)

## 이모지 규칙(집계 기준)
- 담당자: `원격규빈`=김규빈, `원격선유`=배선유, `원격성현`=심성현, `원격동욱`=김동욱, `원격현기`=김현기, `원격태양`=송태양, `원격기범`=김기범, `원격상원`=서상원, `원격민석`=최민석
- 카테고리: `원격as`=AS, `원격온보딩`=온보딩
- 확인필요: 담당자/카테고리 이모지 없음 또는 `1차_부재`/`2차_부재`
- 새 이모지가 생기면 `scripts/fetch-and-tally.js`와 `scripts/tally-remote-as.js`의 `personMap`/`catMap`에 추가
