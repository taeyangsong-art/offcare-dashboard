#!/usr/bin/env node
/*
 * ============================================================
 *  컴포즈커피 공유용 대시보드 빌더
 * ============================================================
 *  franchise/client.html (멀티 고객사) 에서 고객사 전용 화면을 뽑아낸다.
 *  두 벌을 만든다:
 *
 *   1) share/compose/index.html      호스팅용 · 고객사에 URL 로 공유
 *      원장(franchise/data/<slug>.js)만 런타임에 읽는다 → 슬랙 적재로 원장이
 *      갱신되면 페이지는 그대로 두고 데이터만 바뀐다(커밋 용량도 작다).
 *
 *   2) share/compose-dashboard.html  단독 파일 · 메일·슬랙 첨부용
 *      원장까지 전부 인라인해 외부 의존이 0. 만든 시점의 스냅샷이다.
 *
 *  왜 스크립트인가: client.html 을 손으로 복사해두면 원본이 바뀔 때마다
 *  세 벌이 어긋난다. 원본은 그대로 두고 여기서 기계적으로 뽑아낸다.
 *
 *    node scripts/build-compose-share.js
 * ============================================================
 */
const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT = path.join(__dirname, '..');
const FR   = path.join(ROOT, 'franchise');
const SLUG  = 'compose';
const BRAND = '컴포즈커피';

const OUT_HOSTED = path.join(ROOT, 'share', SLUG, 'index.html');
const OUT_SINGLE = path.join(ROOT, 'share', SLUG + '-dashboard.html');
/* 호스팅본 위치(share/<slug>/) 에서 원장까지의 상대 경로 */
const LEDGER_REL = '../../franchise/data/' + SLUG + '.js';

/* 줄바꿈을 LF 로 통일해서 읽는다.
   저장소 정본은 LF 지만 윈도우 작업트리는 CRLF 로 체크아웃돼(autocrlf),
   그대로 읽으면 아래 치환 패턴이 전부 빗나간다. */
const read = p => fs.readFileSync(p, 'utf8').split('\r\n').join('\n');

/* 인라인 스크립트 안에 </script> 가 있으면 HTML 파서가 거기서 블록을 끊는다.
   백슬래시를 끼워 넣으면 HTML 파서는 못 알아보고 JS 파서는 그대로 읽는다. */
const MARK   = '<\\/script';
const safe   = s => s.split('</script').join(MARK);
const unsafe = s => s.split(MARK).join('</script');

/* 치환이 조용히 실패하면 깨진 파일이 나가므로 반드시 검증한다 */
function must(html, from, to, what){
  if(!html.includes(from)) throw new Error('치환 대상을 찾지 못했습니다 (' + what + ')\n  ' + from.slice(0, 90));
  if(html.split(from).length > 2) throw new Error('치환 대상이 여러 곳입니다 (' + what + ')');
  return html.split(from).join(to);
}

const src = read(path.join(FR, 'client.html'));
const fav = fs.readFileSync(path.join(ROOT, 'favicon.png')).toString('base64');

/* ── 두 벌에 공통으로 적용하는 손질 ─────────────────────────── */
function common(html){
  /* 브랜드 고정 (?b= 쿼리 없이 열려야 함) */
  html = must(html,
    "const BRAND = (QS.get('b') || QS.get('brand') || '').trim();",
    "const BRAND = '" + BRAND + "';   /* 공유본: 브랜드 고정 */",
    '브랜드 고정');

  /* 고객사 전환 셀렉트 — 공유본엔 한 곳뿐 */
  html = must(html,
    '  <div class="side-sel no-print">\n    <label>고객사 전환</label>\n    <select id="clientSel"></select>\n  </div>\n',
    '', '고객사 전환 셀렉트 제거');
  html = must(html, '  fillClientSelect();\n', '', 'fillClientSelect 호출 제거');
  html = must(html,
    "  const sel = document.getElementById('clientSel');",
    "  const sel = document.getElementById('clientSel');\n  if(!sel) return;   /* 공유본에는 없음 */",
    'fillClientSelect 가드');

  /* 「데이터 연결 가이드」는 원본에서 통째로 없앴다 — 여기서 뺄 것이 없다 */

  /* 허브로 돌아가는 링크 — 공유본에는 옆 페이지가 없다 */
  html = must(html,
    '    <a href="index.html">← 프랜차이즈 전체 현황</a>\n'
  + '    <a href="../index.html">원격파트 대시보드 →</a>\n',
    '    <span style="font-size:11px;color:var(--gray2);line-height:1.5">'
  + BRAND + ' 원격 지원 현황<br>iShopCare 원격파트</span>\n',
    '허브 링크 제거');

  /* 파비콘 인라인 (옆 파일 참조 끊기) */
  html = must(html,
    '<link rel="icon" type="image/png" href="../favicon.png">',
    '<link rel="icon" type="image/png" href="data:image/png;base64,' + fav + '">',
    '파비콘 인라인');

  return html;
}

/* 정적 의존 파일 인라인 (원장은 변형별로 다르게 다룬다) */
const STATIC_DEPS = ['clients.js', 'brands.js', 'brand-match.js', 'xlsx.js'];
function inlineStatic(html, extra){
  const blocks = STATIC_DEPS.concat(extra || []).map(f =>
    '<script>/* ===== ' + f + ' ===== */\n' + safe(read(path.join(FR, f))) + '\n</script>'
  ).join('\n');
  return must(html,
    '<script src="clients.js"></script>\n'
  + '<script src="brands.js"></script>\n'
  + '<script src="brand-match.js"></script>\n'
  + '<script src="xlsx.js"></script>',
    blocks, '정적 의존 인라인');
}

/* 생성 시각을 넣지 않는다 — CI 가 10분마다 도는데 시각이 박히면 내용이 같아도
   매번 파일이 달라져 쓸데없는 커밋이 쌓인다. 같은 입력 → 같은 출력. */
function stamp(html, kind, note){
  return html.replace('<!DOCTYPE html>',
    '<!DOCTYPE html>\n<!-- 자동 생성 파일 · 직접 수정하지 마세요 (' + kind + ')\n'
  + '     원본: franchise/client.html\n'
  + '     ' + note + '\n'
  + '     재생성: node scripts/build-compose-share.js -->');
}

/* ── 검증 ───────────────────────────────────────────────────
   문법이 깨지면 브라우저는 스크립트를 통째로 버리고 화면이 빈다.
   요소 개수만 세는 검사로는 못 잡으므로(실제로 한 번 놓쳤다) 여기서 막는다. */
function verify(html, label, allowSrc){
  let n = 0;
  for(const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)){
    n++;
    try { new vm.Script(unsafe(m[1])); }
    catch(e){
      const line = html.slice(0, m.index).split('\n').length;
      throw new Error(label + ': 인라인 스크립트 #' + n + ' (' + line + '행 부근) 문법 오류 — ' + e.message);
    }
  }
  const left = [...html.matchAll(/(?:src|href)="(?!data:|#|https?:)([^"]+)"/g)]
    .map(m => m[1])
    /* renderPicker() 안의 링크 — BRAND 가 고정이라 실행되지 않는 죽은 경로 */
    .filter(u => !u.startsWith('client.html?b='))
    .filter(u => !(allowSrc || []).includes(u));
  if(left.length) throw new Error(label + ': 외부 파일 참조가 남았습니다 — ' + left.join(', '));
  return n;
}

/* ── 1) 호스팅용 ─────────────────────────────────────────── */
let hosted = inlineStatic(common(src));
hosted = must(hosted,
  "    if(MODE === 'contract'){ await loadScript(REG.dataFile); buildFromClientData(); }",
  "    /* 원장만 런타임 로드 — 슬랙 적재로 이 파일만 갱신된다.\n"
+ "       캐시가 남으면 고객사가 옛 숫자를 보게 되므로 버전 쿼리를 붙인다. */\n"
+ "    if(MODE === 'contract'){ await loadScript('" + LEDGER_REL + "?v=' + Date.now()); buildFromClientData(); }",
  '원장 런타임 경로');
/* 현장방문 원본도 한 단계 더 위에 있다 */
hosted = must(hosted,
  "    try { await loadScript('../visit-data.js'); mergeVisits(); } catch(e){}",
  "    try { await loadScript('../../visit-data.js?v=' + Date.now()); mergeVisits(); } catch(e){}",
  '현장방문 경로');
hosted = stamp(hosted, '호스팅용', '원장: ' + LEDGER_REL + ' · 현장방문: ../../visit-data.js');
const nH = verify(hosted, '호스팅용');

/* ── 2) 단독 파일 ──────────────────────────────────────────
   원장을 품고 있어 적재될 때마다 내용이 바뀐다. CI 가 10분마다 이걸 커밋하면
   100KB 짜리 스냅샷이 계속 쌓이므로, CI(--hosted)에서는 만들지 않는다.
   메일로 보낼 스냅샷이 필요할 때 로컬에서 인자 없이 실행하면 된다. */
const HOSTED_ONLY = process.argv.includes('--hosted');

let single = null, nS = 0;
if(!HOSTED_ONLY){
  single = inlineStatic(common(src), ['data/' + SLUG + '.js']);
  single = must(single,
    "    if(MODE === 'contract'){ await loadScript(REG.dataFile); buildFromClientData(); }",
    "    if(MODE === 'contract'){ buildFromClientData(); }   /* 원장 인라인됨 */",
    '원장 인라인');
  /* 단독 파일은 외부 의존이 0 이어야 한다 — 현장방문도 인라인하고 로드를 없앤다.
     아직 수집 전이라 파일이 없으면 그 부분만 비워둔다. */
  const vPath = path.join(ROOT, 'visit-data.js');
  const vInline = fs.existsSync(vPath)
    ? '<script>/* ===== visit-data.js ===== */\n' + safe(read(vPath)) + '\n</script>\n'
    : '';
  single = must(single,
    "    try { await loadScript('../visit-data.js'); mergeVisits(); } catch(e){}",
    "    try { mergeVisits(); } catch(e){}   /* 현장방문 인라인됨 */",
    '현장방문 인라인 전환');
  if(vInline) single = must(single, '<script>/* ===== clients.js', vInline + '<script>/* ===== clients.js', '현장방문 인라인');
  single = stamp(single, '단독 파일', '원장까지 인라인된 스냅샷입니다.');
  nS = verify(single, '단독 파일');
}

fs.mkdirSync(path.dirname(OUT_HOSTED), { recursive: true });
fs.writeFileSync(OUT_HOSTED, hosted, 'utf8');
if(single) fs.writeFileSync(OUT_SINGLE, single, 'utf8');

/* 원장이 샘플이면 알려준다 — 이 상태로 고객사에 공유하면 안 된다 */
const ledger = read(path.join(FR, 'data', SLUG + '.js'));
const isSample = /sample\s*:\s*true/.test(ledger);
const nRec = (ledger.match(/"date":/g) || ledger.match(/date\s*:/g) || []).length;

const kb = b => Math.round(b / 1024) + ' KB';
console.log('검사  호스팅용 스크립트 ' + nH + '개' + (single ? ' · 단독 ' + nS + '개' : '') + ' 문법 통과');
console.log('생성  ' + path.relative(ROOT, OUT_HOSTED) + '  (' + kb(hosted.length) + ', 원장 런타임 로드)');
if(single) console.log('생성  ' + path.relative(ROOT, OUT_SINGLE) + '  (' + kb(single.length) + ', 단일 파일)');
else       console.log('생략  단독 파일 (--hosted)');
console.log('원장  ' + (isSample ? '⚠ sample:true — 화면에 "대외 제출용 아님" 경고가 붙습니다'
                                 : '실데이터 · 약 ' + nRec + '건'));
