# 메뉴 이미지 자동판독 — 도입 검토 도구

메뉴등록 채널로 들어오는 메뉴판 이미지를 Claude Vision 으로 판독하는 안을 검토하기 위한 측정 도구.
**아직 운영 파이프라인이 아니다.** 모델 선정과 비용 확정을 위한 일회성 평가용.

## 배경

현재 `scripts/fetch-menu-requests.js` 는 tesseract.js 로 무료 OCR 을 돌리지만
슬랙에 **직접 첨부된 파일만** 처리한다. 실제 이미지 대부분은 Google Drive 링크로 들어와
판독 대상에서 빠져 있다.

## 실측 결과 (2026-07 기준)

| 항목 | 값 |
|---|---|
| 메뉴등록 요청 | 455건 / 월 |
| Drive 링크 | 131건 (요청의 약 13%만 첨부 동반) |
| ├ 이미지 | 116건 (89%) · 중앙값 416KB |
| ├ PDF | 11건 (8%) |
| ├ 엑셀 | 2건 |
| └ 기타(.egg 압축) | 2건 |
| Drive 접근성 | **131/131 (100%)** — OAuth 단일 계정으로 충분 |
| tesseract 정확도 | **10/21 (47.6%)** — 가격 대응 미채점, 후한 상한값 |

## 스크립트

| 파일 | 용도 | API 키 |
|---|---|---|
| `baseline-tesseract.js` | 현행 무료 OCR 을 정답과 대조 | 불필요 |
| `compare.js` | Haiku 4.5 / Sonnet 5 / Opus 5 정확도·비용 비교 | `ANTHROPIC_API_KEY` |
| `score.js` | 채점 유틸 — (상품명, 가격) 정확일치 P/R/F1 | — |
| `ground-truth.json` | `menu-files/` POS 캡처 3장의 사람 판독 정답 21개 항목 | — |

Drive 쪽 도구는 `scripts/drive-auth.js`(토큰 발급) · `scripts/drive-meta.js`(메타 스캔) 참고.

## 실행

```powershell
npm install                          # @anthropic-ai/sdk

node ocr-eval\baseline-tesseract.js  # 무료 baseline (비용 0원)

$env:ANTHROPIC_API_KEY = "sk-ant-..."
node ocr-eval\compare.js             # 3개 모델 × 3장 = 9회 호출, 약 300원
node ocr-eval\compare.js --runs 3    # 모델당 3회 (일관성 확인)
node ocr-eval\compare.js --models haiku
```

환율은 `KRW_PER_USD` 환경변수로 덮어쓸 수 있다 (기본 1380).

## 정답 데이터 늘리기

표본 3장은 한 매장의 POS 화면뿐이라 얇다. 다른 매장·다른 POS 프로그램 이미지를
`menu-files/` 에 넣고 `ground-truth.json` 의 `images[]` 에 정답을 추가하면 된다.
형식은 기존 항목과 동일하며, **화면에 보이는 표기 그대로** 적는다(맞춤법 교정 금지).

## 설계 메모

- 출력은 `output_config.format` 의 json_schema 로 강제한다. 스키마에 자유 텍스트 필드를
  두지 않아, 이미지에 연락처 등이 있어도 결과로 새어나올 구멍이 없다.
- Haiku 4.5 는 `effort` / adaptive thinking 미지원 — 보내면 400.
- Sonnet 5 · Opus 5 는 thinking 이 기본 ON 이라 인식 작업에는 `effort: "low"` 로 낮춘다
  (thinking 을 끄는 것보다 권장되는 비용 억제 방식).
