/*
 * 슬랙 원격 처리 채널(AS요청·명의변경 등) 집계 데이터 (날짜별 누적)
 * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.
 */
window.SLACK_DATA = {
  "version": 331,
  "days": {
    "2026-07-08": {
      "updatedAt": "22:50",
      "counts": {
        "as": {
          "최민석": 29,
          "배선유": 26,
          "김규빈": 17,
          "김현기": 22,
          "심성현": 25,
          "김동욱": 24,
          "송태양": 16,
          "서상원": 4,
          "김기범": 6
        },
        "onboarding": {
          "배선유": 6,
          "최민석": 3,
          "심성현": 9,
          "김동욱": 9,
          "김규빈": 6,
          "송태양": 2,
          "김기범": 1
        },
        "extern": {
          "김현기": 2,
          "김동욱": 5,
          "서상원": 5,
          "김기범": 2,
          "배선유": 1
        },
        "transfer": {
          "송태양": 7
        },
        "menu": {
          "최민석": 1,
          "김규빈": 7,
          "배선유": 6
        },
        "delivery": {
          "최민석": 2,
          "김현기": 1
        }
      },
      "pending": [
        {
          "time": "17:17",
          "store": "",
          "biz": "",
          "handler": "김규빈",
          "cat": "menu",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "17:16",
          "store": "",
          "biz": "",
          "handler": "김규빈",
          "cat": "menu",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:12",
          "store": "에프에이카페봉선 주식회사",
          "biz": "7428603764",
          "handler": "김기범",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        }
      ],
      "voc": {
        "responses": 21,
        "install": {
          "count": 5,
          "low": 1
        },
        "nps": {
          "count": 21,
          "low": 8
        },
        "high": {
          "install": 3,
          "nps": 7
        },
        "npsDist": {
          "0": 1,
          "2": 2,
          "3": 1,
          "5": 4,
          "6": 1,
          "8": 2,
          "9": 3,
          "10": 7
        },
        "installDist": {
          "2": 1,
          "3": 1,
          "5": 3
        },
        "byIndustry": {
          "서비스[학원]": 4,
          "카페": 1
        },
        "byTenure": {
          "6개월": {
            "total": 10,
            "low": 4
          },
          "3개월": {
            "total": 2,
            "low": 0
          },
          "12개월": {
            "total": 1,
            "low": 0
          },
          "1개월": {
            "total": 3,
            "low": 2
          },
          "구매설치": {
            "total": 5,
            "low": 2
          }
        },
        "byVan": {
          "KPN": {
            "total": 1,
            "low": 1
          },
          "DAOU": {
            "total": 6,
            "low": 3
          },
          "SECTA9": {
            "total": 3,
            "low": 0
          },
          "KSNET": {
            "total": 2,
            "low": 0
          },
          "SMARTRO": {
            "total": 4,
            "low": 0
          },
          "KIS": {
            "total": 4,
            "low": 3
          },
          "NICE": {
            "total": 1,
            "low": 1
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 2,
          "사용중 오류가 자주 발생함": 5,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2
        },
        "alerts": [
          {
            "time": "22:26",
            "store": "매쓰퀸수학국어학원",
            "storeId": "323913",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "아주 중요한 기본 기능의 부재",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "18:55",
            "store": "나래수학교습소",
            "storeId": "331213",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "종이 프린터기 아직도 연결 못함..안됨.. 문의 어디에서 할지 모르겠음. 월별 매출표 어디서 찾아야할지 모르겠음. 이거보시면 연락주세요.. 제가 연락을 못받을때가 많지만..",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 원격예약 수업중, 통화 불가 / 익일 13:00 예약 수업중, 통화 불가 / 익일 13:00 예약 / 2차부재 2차부재 2차 부재 솔라피 발송 2차 부재 솔라피 발송",
            "doneDate": ""
          },
          {
            "time": "15:49",
            "store": "위드베이커리(With bakery)",
            "storeId": "494010",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "결제오류났던게 타격이 큽니다",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:36",
            "store": "세인트폴주니어불당어학원",
            "storeId": "510524",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 2,
            "nps": 2,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "소프트웨어가 너무 부실해요",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              },
              {
                "q": "추천의향",
                "score": 2,
                "text": "기기자체는 좋은데 소프트웨어 오류가 너무 많고 업체의 개선의지도 없어서 다른 업체로 바꾸고 싶어요",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "미묘",
            "storeId": "326463",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "오류에 불편다겪엇는데도 결제가안되서못햇는데 욕은욕대로 먹고 그시간에먹통이어서결제를못한걸 결제가없엇다고 보상도못받음",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:19",
            "store": "윤이네 포케샌드",
            "storeId": "493671",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "며칠전 에러사건도 그렇고 배달 대행사 연결도 매우 불편합니다 게다가 고객센터 연결도 매우 힘들어요",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 더가치플래닛 배달대행사 사용중 • 현재 부릉/생각대로 2개사 연동가능한 부분 설명 • 자사 고객센터 자정까지 운영하니 여유로운 시간대에 연락주시면 편하게 도움받을 수 있음 안내 • [기록용:필요한 기능이 없어서 불편했어요 / 배달대행 / 요식업] 더가치플래닛 배달대행사 사용중 현재 부릉/생각대로 2개사 연동가능한 부분 설명 자사 고객센터 자정까지 운영하",
            "doneDate": ""
          },
          {
            "time": "13:53",
            "store": "더채움수학교습소",
            "storeId": "301128",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "로딩이 시간이 많이 걸림",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "08:34",
            "store": "정앤정스터디입시학원",
            "storeId": "533889",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 5,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "다들쓰기도하고  안쓰는곳이 없어요",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "16:44",
            "store": "제이에이치펄스랩",
            "storeId": "195052",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "깔끔 편의성",
            "byReaction": false
          },
          {
            "time": "16:24",
            "store": "올제인지학습센터",
            "storeId": "319903",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "쓰기에 편리함",
            "byReaction": false
          },
          {
            "time": "15:36",
            "store": "송현컴퓨터학원",
            "storeId": "537637",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "처음엔 좀 당황 했는데, 이리 저리 몇번 실패를 거듭하며 토스프론트와 포스앱의 뛰어난 기능을 알게됨. 그냥 최고.",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "은진식당",
            "storeId": "320081",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "원주 고양이 카페&미용&호텔 오묘",
            "storeId": "329012",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리,디자인예쁨,홍보효과",
            "byReaction": false
          },
          {
            "time": "15:06",
            "store": "오브잇(ove it)",
            "storeId": "539994",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "초기 설치시 직접와서 설치하고 선정리까지 해주고 가셔서 좋았습니다 네이버스마트플레이스 플러스 연동이 토스만 안되더라구요 ㅠ 그래서 별 하나 뺍니다",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-07": {
      "updatedAt": "22:35",
      "counts": {
        "as": {
          "최민석": 22,
          "김기범": 9,
          "심성현": 18,
          "김현기": 26,
          "김규빈": 8,
          "김동욱": 19,
          "송태양": 11,
          "배선유": 12,
          "서상원": 6
        },
        "onboarding": {
          "최민석": 6,
          "송태양": 1,
          "심성현": 6,
          "배선유": 4,
          "김규빈": 2,
          "김동욱": 4
        },
        "extern": {
          "서상원": 6,
          "김동욱": 3,
          "김기범": 1
        },
        "transfer": {
          "심성현": 2,
          "송태양": 9
        },
        "menu": {
          "김규빈": 12,
          "배선유": 2,
          "김기범": 1,
          "김현기": 1
        },
        "delivery": {
          "김현기": 1,
          "최민석": 1,
          "심성현": 1
        }
      },
      "pending": [
        {
          "time": "14:15",
          "store": "제이에이지",
          "biz": "1140930387",
          "handler": "송태양",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        },
        {
          "time": "12:30",
          "store": "하뷰",
          "biz": "6463601371",
          "handler": "김현기",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        },
        {
          "time": "10:18",
          "store": "",
          "biz": "",
          "handler": "김동욱",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        }
      ],
      "voc": {
        "responses": 24,
        "install": {
          "count": 14,
          "low": 3
        },
        "nps": {
          "count": 24,
          "low": 4
        },
        "high": {
          "install": 4,
          "nps": 8
        },
        "npsDist": {
          "2": 1,
          "3": 1,
          "5": 2,
          "6": 1,
          "7": 3,
          "8": 3,
          "9": 5,
          "10": 8
        },
        "installDist": {
          "1": 2,
          "2": 1,
          "3": 1,
          "4": 6,
          "5": 4
        },
        "byIndustry": {
          "서비스[학원]": 7,
          "요식업": 1,
          "기타": 1,
          "도소매": 1,
          "카페": 3,
          "서비스[뷰티,헤어]": 1
        },
        "byTenure": {
          "3개월": {
            "total": 3,
            "low": 1
          },
          "구매설치": {
            "total": 14,
            "low": 4
          },
          "12개월": {
            "total": 3,
            "low": 1
          },
          "1개월": {
            "total": 2,
            "low": 0
          },
          "6개월": {
            "total": 2,
            "low": 0
          }
        },
        "byVan": {
          "SECTA9": {
            "total": 4,
            "low": 1
          },
          "KIS": {
            "total": 6,
            "low": 2
          },
          "KSNET": {
            "total": 4,
            "low": 1
          },
          "KOVAN": {
            "total": 2,
            "low": 1
          },
          "KPN": {
            "total": 3,
            "low": 1
          },
          "DAOU": {
            "total": 2,
            "low": 0
          },
          "SMARTRO": {
            "total": 2,
            "low": 0
          },
          "NICE": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 5,
          "고객센터 연락이 매우 힘듦": 1,
          "단말기 설치나 초기 과정이 어려움": 1
        },
        "alerts": [
          {
            "time": "21:53",
            "store": "플뢰르 도레",
            "storeId": "425913",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "로딩이 너무 길게 느껴짐",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "20:08",
            "store": "낙원맛집",
            "storeId": "193477",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "이번에 결제불가한것들",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "19:30",
            "store": "케이씨씨식당",
            "storeId": "534614",
            "industry": "음식점/주점",
            "indBucket": "요식업",
            "install": 4,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "서류만 넘 챙겨. 시간이 많이 걸림",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "17:59",
            "store": "영천샘 농업회사법인 주식회사",
            "storeId": "530604",
            "industry": "장류",
            "indBucket": "기타",
            "install": 1,
            "nps": 8,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "공사중. 힘든과정에 잘해주었음 힘",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "16:59",
            "store": "서종캠핑편의점",
            "storeId": "533110",
            "industry": "편의점",
            "indBucket": "도소매",
            "install": 1,
            "nps": 3,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "그동안 상담원들 친절하고 자세히말해줬는대 유지안이란분은 상담사하면 안되겠내요 설명도제대로못하고 정말 짜증나게하고 기다리란말을 다섯번이나하내요 막판에 이미지만 흐렸내요",
                "cat": "고객센터 연락이 매우 힘듦"
              },
              {
                "q": "추천의향",
                "score": 3,
                "text": "기분나빠서요",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• OB완료 • 카드가맹 관련 서류 보완 및 반려 건으로 이미 고객 온도감이 높은 상태에서 인입된 이며, 인입 당시 상담원 응대에 대한 불만을 토로. • 통화내역 확인 결과, 상담원 응대 자체에 대한 문제점은 발견되지 않음. 다만, 정확한 히스토리 확인을 위해 대기 시간이 길어졌고, 해당 부분에서 고객 불만이 발생한 것으로 확인. • 관련 내용에 대해 고객",
            "doneDate": ""
          },
          {
            "time": "15:28",
            "store": "얼린왕자",
            "storeId": "532711",
            "industry": "카페/베이커리",
            "indBucket": "카페",
            "install": 2,
            "nps": 6,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "1.제품에 하자가 있어 못 쓰고있는데 ai 답변만 있고 상담원 연결이 계속 안되고 있음. 2. 대리점 마다 서비스가 다름. 계속 월정액 구독 유도하는 대리점이 있고 여러 군데에서 연락이 오니 헌란스러움",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 프린터 출력불가 증상으로 원격 점검 도움드림 • 대리점 별 이익추구 및 정책이 다른 관계로 차이가 발생할 수 있음 안내 -&gt; 수긍 • 고객센터 유선번호 안내드린 후 통화종료 • [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 도소매업] 프린터 출력불가 증상으로 원격 점검 도움드림 대리점 별 이익추구 및 정책이 다른 관계로 차이가 발생할 수",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "19:30",
            "store": "SR태권도체육관",
            "storeId": "512329",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 7,
            "text": "설명부족 아직까지는 그렇게 편리한지는 모르겠다",
            "byReaction": false
          },
          {
            "time": "16:52",
            "store": "밀리토피아 피지컬 스튜디오",
            "storeId": "424706",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "대체로 사용하는데 편리하지만 입금되는 기간이 (Days) 좀더 짧으면 합니다.",
            "byReaction": false
          },
          {
            "time": "16:42",
            "store": "엘샤론염색방",
            "storeId": "464811",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기도 간편하고 디자인도 깔끔해서 좋아요",
            "byReaction": false
          },
          {
            "time": "16:17",
            "store": "오브몽",
            "storeId": "308460",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용법도 편리하고 작아서 마음에 든다",
            "byReaction": false
          },
          {
            "time": "15:28",
            "store": "아우어룸 커피하우스",
            "storeId": "518890",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "편리함 편리해서",
            "byReaction": false
          },
          {
            "time": "15:28",
            "store": "몰팁(MOLTIP)",
            "storeId": "492294",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "혼자서 설치하기 쉬웠음 직관적이라 사용하기 편리함",
            "byReaction": false
          },
          {
            "time": "15:28",
            "store": "후필라테스",
            "storeId": "196094",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "편리하고 디자인도 깔끔 사용법 어렵지않고 좋았어요",
            "byReaction": false
          },
          {
            "time": "15:28",
            "store": "후필라테스",
            "storeId": "196094",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "편리한 면도 있고 디자인도 예뻐요 사용법도 어려운 것이 없어서 좋았습니다",
            "byReaction": false
          },
          {
            "time": "15:28",
            "store": "후필라테스",
            "storeId": "196094",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "편리하고 디자인깔끔 사용법 간편하고 좋았음",
            "byReaction": false
          },
          {
            "time": "08:56",
            "store": "바디 테라피",
            "storeId": "475593",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "전화를 거는 것은 어렵지만 직원의 도움을 받아 쉽게 설정할 수 있습니다. 설정이 간단합니다.",
            "byReaction": false
          },
          {
            "time": "08:26",
            "store": "해든공부방",
            "storeId": "517892",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 3,
            "nps": 10,
            "text": "혼자하기 어려워서 고객센터 영상통화로 설치안내 받았습니다 기기가 깔끔하고 안정적이며, 사용하기 편리합니다",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-09": {
      "updatedAt": "23:05",
      "counts": {
        "as": {
          "최민석": 19,
          "김기범": 8,
          "송태양": 21,
          "김규빈": 15,
          "배선유": 25,
          "김현기": 19,
          "심성현": 27,
          "김동욱": 19,
          "서상원": 4
        },
        "onboarding": {
          "최민석": 8,
          "송태양": 5,
          "배선유": 5,
          "심성현": 4,
          "서상원": 1,
          "김규빈": 5,
          "김현기": 3,
          "김동욱": 8
        },
        "extern": {
          "서상원": 5,
          "김현기": 1,
          "김기범": 1,
          "김동욱": 1
        },
        "transfer": {
          "최민석": 2,
          "송태양": 11,
          "김동욱": 1,
          "심성현": 1
        },
        "menu": {
          "최민석": 1,
          "배선유": 6,
          "김규빈": 9
        },
        "delivery": {
          "서상원": 1,
          "김현기": 1
        }
      },
      "pending": [
        {
          "time": "17:30",
          "store": "우리말해&amp;해법보습학원",
          "biz": "2489201697",
          "handler": "김현기",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        }
      ],
      "voc": {
        "responses": 29,
        "install": {
          "count": 8,
          "low": 0
        },
        "nps": {
          "count": 29,
          "low": 5
        },
        "high": {
          "install": 5,
          "nps": 14
        },
        "npsDist": {
          "0": 2,
          "2": 1,
          "3": 1,
          "5": 1,
          "6": 1,
          "7": 1,
          "8": 5,
          "9": 3,
          "10": 14
        },
        "installDist": {
          "3": 1,
          "4": 2,
          "5": 5
        },
        "byIndustry": {
          "서비스[학원]": 3,
          "도소매": 3,
          "서비스[뷰티,헤어]": 1,
          "카페": 1
        },
        "byTenure": {
          "3개월": {
            "total": 5,
            "low": 1
          },
          "6개월": {
            "total": 11,
            "low": 2
          },
          "1개월": {
            "total": 2,
            "low": 1
          },
          "구매설치": {
            "total": 8,
            "low": 1
          },
          "12개월": {
            "total": 3,
            "low": 0
          }
        },
        "byVan": {
          "KPN": {
            "total": 4,
            "low": 0
          },
          "SMARTRO": {
            "total": 4,
            "low": 1
          },
          "SECTA9": {
            "total": 7,
            "low": 2
          },
          "KIS": {
            "total": 7,
            "low": 2
          },
          "DAOU": {
            "total": 2,
            "low": 0
          },
          "NICE": {
            "total": 3,
            "low": 0
          },
          "KSNET": {
            "total": 2,
            "low": 0
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 1,
          "필요한 기능이 없거나 몰라서 불편": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2,
          "고객센터 연락이 매우 힘듦": 1
        },
        "alerts": [
          {
            "time": "17:27",
            "store": "에픽보습학원",
            "storeId": "484111",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "영수증을 따로 설치 해야해서 불편합니다",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "17:02",
            "store": "동동국밥 부산구서점",
            "storeId": "329587",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "토스포스는 주문, 결제라는 기본적인 시스템의 안정성 조차도 갖추지 못하였으며, 서버 다운이라는 심각한 문제에 대한 대응도 기본기가 전혀 없어보인다. 불편함에 대한 사죄와 반성이 있었다면 그런 보상안이 나올수도 없고, 앞으로 누가 토스 포스 괜찮냐 묻는다면 최악이고 후진적인 시스템 이라 답해줄것임.",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리 CX일괄처리",
            "doneDate": ""
          },
          {
            "time": "16:44",
            "store": "고운 그곳에",
            "storeId": "486293",
            "industry": "도소매",
            "indBucket": "도소매",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "나이들어 조금어려움",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "16:02",
            "store": "애즈비영어키즈카페",
            "storeId": "311461",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "고객센터 답이느림",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "2차부재 2차부재",
            "doneDate": ""
          },
          {
            "time": "15:36",
            "store": "화육공간",
            "storeId": "432284",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "장애 관련 무책임함",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "17:14",
            "store": "하나음악학원",
            "storeId": "530746",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "설치방법이 간단했는데 영수증이 안나오니 좀 이상하긴해요^^ 깔끔한디자인과 편리한사용법이 너무좋아요",
            "byReaction": false
          },
          {
            "time": "16:02",
            "store": "클라우드 9 브리즈",
            "storeId": "330910",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "다 좋은데 좀 느려요",
            "byReaction": false
          },
          {
            "time": "15:52",
            "store": "잔잔히",
            "storeId": "187246",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "조작법이 매우 쉽고, 구성을 원하는대로 할 수 있어서 좋았음. 결제 및 적립 시스템도 간단해서 사용하기 용이함.",
            "byReaction": false
          },
          {
            "time": "15:44",
            "store": "쌩얼 EYE LASH",
            "storeId": "533720",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치하는데 어려움 없었다 편리하다",
            "byReaction": false
          },
          {
            "time": "15:37",
            "store": "카페 라파우자",
            "storeId": "434964",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "직관적이고 복잡하지 않아 편리함",
            "byReaction": false
          },
          {
            "time": "15:32",
            "store": "맨즈헤어",
            "storeId": "324750",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "빠르게계산이잘됩니다",
            "byReaction": false
          },
          {
            "time": "15:32",
            "store": "우아(Woo ah !)",
            "storeId": "306916",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "편리하고 초기 비용 없음",
            "byReaction": false
          },
          {
            "time": "15:32",
            "store": "온다노체(Onda Noche)",
            "storeId": "320187",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "간편하긴 한데 살짝 불편한 것도 있어요",
            "byReaction": false
          },
          {
            "time": "15:32",
            "store": "리치크레",
            "storeId": "320294",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "편리함",
            "byReaction": false
          },
          {
            "time": "15:13",
            "store": "근본 재활운동센터",
            "storeId": "526778",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "직관적으로 잘되어있어요 편리하고 직관적이에요",
            "byReaction": false
          },
          {
            "time": "15:13",
            "store": "스터디카페 더딩글 대전점",
            "storeId": "524758",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "무인이라 설치만 했는데 그에 따른 자세한 사항은 알아서 찾아보라고함 기기 자체가 무료이고 이용하기 편리 해서",
            "byReaction": false
          },
          {
            "time": "10:05",
            "store": "구자은피아노교습소",
            "storeId": "335338",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "너무간편하고 편리",
            "byReaction": false
          },
          {
            "time": "09:42",
            "store": "슈즈크리닝",
            "storeId": "532665",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "간편하고 깔끔합니다 안바꿀이유가 없음",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-10": {
      "updatedAt": "23:22",
      "counts": {
        "as": {
          "최민석": 23,
          "김기범": 4,
          "서상원": 24,
          "김동욱": 19,
          "김현기": 30,
          "김규빈": 18,
          "송태양": 16,
          "심성현": 34
        },
        "onboarding": {
          "최민석": 9,
          "심성현": 6,
          "송태양": 7,
          "김동욱": 6,
          "서상원": 4,
          "김현기": 5,
          "김규빈": 5
        },
        "extern": {
          "김동욱": 3,
          "서상원": 4
        },
        "transfer": {
          "최민석": 2,
          "송태양": 15
        },
        "menu": {
          "김규빈": 18
        },
        "delivery": {
          "최민석": 3,
          "서상원": 3
        }
      },
      "pending": [
        {
          "time": "17:12",
          "store": "드롭탑 강천산(대구)휴게소점",
          "biz": "5858502942",
          "handler": "김동욱",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        }
      ],
      "voc": {
        "responses": 29,
        "install": {
          "count": 6,
          "low": 1
        },
        "nps": {
          "count": 29,
          "low": 11
        },
        "high": {
          "install": 4,
          "nps": 6
        },
        "npsDist": {
          "0": 3,
          "1": 1,
          "2": 1,
          "3": 2,
          "4": 1,
          "5": 3,
          "6": 1,
          "7": 1,
          "8": 6,
          "9": 4,
          "10": 6
        },
        "installDist": {
          "1": 1,
          "3": 1,
          "5": 4
        },
        "byIndustry": {
          "서비스[학원]": 2,
          "도소매": 3,
          "서비스[뷰티,헤어]": 1
        },
        "byTenure": {
          "6개월": {
            "total": 6,
            "low": 2
          },
          "12개월": {
            "total": 2,
            "low": 1
          },
          "3개월": {
            "total": 11,
            "low": 3
          },
          "구매설치": {
            "total": 6,
            "low": 2
          },
          "1개월": {
            "total": 4,
            "low": 3
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 3,
            "low": 1
          },
          "NICE": {
            "total": 5,
            "low": 2
          },
          "KPN": {
            "total": 2,
            "low": 0
          },
          "SECTA9": {
            "total": 5,
            "low": 3
          },
          "KIS": {
            "total": 10,
            "low": 3
          },
          "DAOU": {
            "total": 2,
            "low": 1
          },
          "KSNET": {
            "total": 2,
            "low": 1
          }
        },
        "reasonCounts": {
          "사용중 오류가 자주 발생함": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 5,
          "필요한 기능이 없거나 몰라서 불편": 1,
          "고객센터 연락이 매우 힘듦": 2,
          "단말기 설치나 초기 과정이 어려움": 2
        },
        "alerts": [
          {
            "time": "21:31",
            "store": "문그로우",
            "storeId": "209437",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "최근 부쩍 피크시간때 안됨이슈",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "토스장애이슈 토스장애이슈",
            "doneDate": ""
          },
          {
            "time": "17:21",
            "store": "나의다짐",
            "storeId": "540125",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 1,
            "nps": 3,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "카카오페이등록이 쉽지않네요",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              },
              {
                "q": "추천의향",
                "score": 3,
                "text": "전자기기 잘못하시는분들은 어려울것같아요",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "17:09",
            "store": "클레버 카페",
            "storeId": "315863",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "예고 없이하는 업데이트, 서버불안정, 유니온페이 광고 못 없애던거, 주문, 테이블 탭에 테이블 탭 필요 없는데 못 없애는거. 쓰지도 않는는거 만들었으면 원래 쓰던대로 바꿀수도 있게 해야져",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 유니온페이 광고 OFF / 선불형 매장으로 설정하여 테이블 탭 없애드림 • 추가 문의사항 없으셔서 OB종료 • [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 카페] 유니온페이 광고 OFF / 선불형 매장으로 설정하여 테이블 탭 없애드림 추가 문의사항 없으셔서 OB종료 [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 카페]",
            "doneDate": ""
          },
          {
            "time": "16:39",
            "store": "스낵팩멜번 야당",
            "storeId": "325793",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "일년에 1번씩 꼭 서버가 다운됨",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "토스장애이슈 토스장애이슈",
            "doneDate": ""
          },
          {
            "time": "15:44",
            "store": "씨앤스카이리조트2",
            "storeId": "436211",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "상담할려고 전화를 수십번해도 안받음 애로사항은 어디다 접수합니까",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 통화품질 관련 사과 • 프론트 키인결제 가능한지 여부 문의하셔서 불가능 안내 • CAT단말기/터미널 기기추가 안내드렸으나 거부 • [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 서비스업 숙박] 통화품질 관련 사과 프론트 키인결제 가능한지 여부 문의하셔서 불가능 안내 CAT단말기/터미널 기기추가 안내드렸으나 거부 [기록용: 고객센터에 연결하거나 ",
            "doneDate": ""
          },
          {
            "time": "15:34",
            "store": "갓프라이스 양평역점",
            "storeId": "485243",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "바코드 결제를 많이 하는데 카메라 인식으로는 촛점 거리가 멀어서 작은 바코드 인식이 안됩니다. 블루투스 바코드 리더를 붙이면 간단한데 프론트에 블루투스 내장으로 알고 있는데... 간단하게 안되나보죠? 여러번 문의 했는데... 빠른 S/W 업그레이드 바랍니다.",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 내장 카메라 성능,스펙이 부족한 문제로 블루투스 스캐너 연동 가능성 문의 -&gt; 해당 내용 담당부서에 향후 개발될 수 있도록 전달 드려보겠음 시간 양해 안내 내장 카메라 성능,스펙이 부족한 문제로 블루투스 스캐너 연동 가능성 문의 - 해당 내용 담당부서에 향후 개발될 수 있도록 전달 드려보겠음 시간 양해 안내 / [기록용:필요한 기능이 없어서 불편했",
            "doneDate": ""
          },
          {
            "time": "15:34",
            "store": "라 플라스 말흘",
            "storeId": "496906",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "오류",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "토스장애이슈 토스장애이슈",
            "doneDate": ""
          },
          {
            "time": "15:21",
            "store": "깜밥 누룽지",
            "storeId": "532689",
            "industry": "도소매",
            "indBucket": "도소매",
            "install": 5,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "물어보면 추천 해 주는 정도",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:14",
            "store": "해잇박스",
            "storeId": "431971",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "처음엔 계약해야하니까 담당자 연결이 빠르고 친절했는데, 사용하다 문의사항이 발생하면 답변받는데까지 시간이 오래 소요됨 토스결제시스템으로 다 맞추고싶어서, 무선단말기 문의를 했더니 구매후에 문의하라고해서 말이야 방구야. 라는 생각이 듦. 무선단말기 처음 쓰는데 문의도 못해보고 냅다 구매하고 문의를 해야하는 시스템이 맞는건가 싶음. 약정이 끝나면 네이버로 갈아 탈 예정",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1차부재 1차부재",
            "doneDate": ""
          },
          {
            "time": "15:14",
            "store": "모래내책방",
            "storeId": "436806",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "토스프론트 카메라가 바코드를 잘 인식하지 못해서 셀프결제 어려움",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "08:01",
            "store": "도림",
            "storeId": "499556",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "네트워크 연결이 자주 장애가 일어나서 불안하다",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "16:39",
            "store": "명량꽈배기",
            "storeId": "329806",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "간편하고 초보자들도 잘 따라서 할수있어서 좋아요",
            "byReaction": false
          },
          {
            "time": "16:09",
            "store": "명량꽈배기",
            "storeId": "329806",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "장사를시작 했는데 카드기만 사용하다가 아들이 토스를 추천하고 구입해서 설치가지 해줬어요  손님이 많아 바쁠때도 혼자 장사를 할수있어요 다른 분들한테 추천했어요 편리하다고 ㅎㅎ",
            "byReaction": false
          },
          {
            "time": "15:44",
            "store": "금석",
            "storeId": "434320",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false
          },
          {
            "time": "15:34",
            "store": "작은네일",
            "storeId": "463780",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리하고 디자인도 예뻐서 만족도 100프로입니다",
            "byReaction": false
          },
          {
            "time": "15:21",
            "store": "비상잉글리시아이동광영어교습소",
            "storeId": "532177",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 3,
            "nps": 8,
            "text": "설치 오류가 생겨서 친절하게 답변해주고 기기 사용료가 없어서",
            "byReaction": false
          },
          {
            "time": "15:13",
            "store": "우드바우어의밤",
            "storeId": "434738",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "좋아요 가끔 오류가있어서 9점이요",
            "byReaction": false
          },
          {
            "time": "07:36",
            "store": "네일멜로(Nail Mello)",
            "storeId": "280178",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "편리해요",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-11": {
      "updatedAt": "22:02",
      "counts": {
        "as": {
          "서상원": 13,
          "김동욱": 45,
          "미지정": 14
        },
        "onboarding": {
          "서상원": 1,
          "김동욱": 1
        },
        "extern": {
          "김동욱": 1
        },
        "menu": {
          "김동욱": 2,
          "미지정": 1
        },
        "delivery": {
          "김동욱": 1
        }
      },
      "pending": [],
      "voc": {
        "responses": 25,
        "install": {
          "count": 9,
          "low": 0
        },
        "nps": {
          "count": 25,
          "low": 4
        },
        "high": {
          "install": 6,
          "nps": 12
        },
        "npsDist": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 1,
          "6": 2,
          "7": 1,
          "8": 4,
          "9": 2,
          "10": 12
        },
        "installDist": {
          "4": 3,
          "5": 6
        },
        "byIndustry": {
          "카페": 2,
          "서비스[학원]": 3,
          "기타": 1,
          "도소매": 3
        },
        "byTenure": {
          "1개월": {
            "total": 6,
            "low": 1
          },
          "12개월": {
            "total": 5,
            "low": 1
          },
          "구매설치": {
            "total": 9,
            "low": 0
          },
          "6개월": {
            "total": 3,
            "low": 0
          },
          "3개월": {
            "total": 2,
            "low": 2
          }
        },
        "byVan": {
          "KIS": {
            "total": 11,
            "low": 1
          },
          "KSNET": {
            "total": 2,
            "low": 0
          },
          "SMARTRO": {
            "total": 2,
            "low": 0
          },
          "NICE": {
            "total": 3,
            "low": 1
          },
          "KPN": {
            "total": 3,
            "low": 1
          },
          "DAOU": {
            "total": 2,
            "low": 0
          },
          "SECTA9": {
            "total": 2,
            "low": 1
          }
        },
        "reasonCounts": {
          "고객센터 연락이 매우 힘듦": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2,
          "필요한 기능이 없거나 몰라서 불편": 1
        },
        "alerts": [
          {
            "time": "16:11",
            "store": "237오므카레 서초 지파이브점",
            "storeId": "475320",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "큐알코드 결재인데 기존 주문이 자동으로 안지워져서 손님들이 결재 잘못됐다고 하루에도 몇번씩 문의 함. 바쁜 점심시간에 테이블 비우기를 어떻게 계속 해주나요. 문의해도 답변도 없네요",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:21",
            "store": "정뷰티살롱",
            "storeId": "430936",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "어쩔땐 좋은데 처음에 시작할때 로딩 너무 오래걸리고 최근 이슈땜에 불안함",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:21",
            "store": "송정한식뷔페",
            "storeId": "434863",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "서버끊김 결제느림 삼성페이인식",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:06",
            "store": "위드미헤어",
            "storeId": "209497",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "불편하다.",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "20:43",
            "store": "고르곤",
            "storeId": "498161",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "모든 점이 좋은데 업종 특성상 네이버 리뷰가 중요하다 보니 그 점이 조금 아쉬움이 남습니다. 가격 입력해서 사용하니 그냥 화면 없는 단말기와 차별성이 적네요. 디자인은 깔끔해서 좋습니다.",
            "byReaction": false
          },
          {
            "time": "20:08",
            "store": "레더준",
            "storeId": "192848",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리성",
            "byReaction": false
          },
          {
            "time": "17:29",
            "store": "하이브뮤직스튜디오",
            "storeId": "539525",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "좋네요 좋아요",
            "byReaction": false
          },
          {
            "time": "16:59",
            "store": "엘로타로사주",
            "storeId": "332964",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "퍈리하게 이용함 사영퍈리",
            "byReaction": false
          },
          {
            "time": "16:59",
            "store": "와비사비",
            "storeId": "531301",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "아쉬운건 있습니다. 토스포스를 컴퓨터로 하고싶은데.. 랜과 와이파이가 엇갈려있어서.. 좀 아쉽긴했습니다! 다른 UX,UI 다 좋습니다. 넘어가는 트렌지션도 너무 완벽해요. 토스가.. 최곱니다.",
            "byReaction": false
          },
          {
            "time": "16:37",
            "store": "아담리즈수학학원 시흥배곧센터",
            "storeId": "204875",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 6,
            "text": "지금의 토스단말기 형태는 학원업종에 맞는 형태는 아니라고 봅니다. 요식업에 맞춰져있지요.",
            "byReaction": false
          },
          {
            "time": "16:28",
            "store": "명지탁구클럽",
            "storeId": "542770",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "하라는대로 하니 되던데요? ㅎ 편리한거 같아요",
            "byReaction": false
          },
          {
            "time": "15:41",
            "store": "에끌레레(Eclele)",
            "storeId": "483444",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "결제도  편하고 기능도  많고 간편해서  좋아요",
            "byReaction": false
          },
          {
            "time": "15:41",
            "store": "황소쌤개념수학",
            "storeId": "499159",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "일단공짜고 쓰기편하고 너무좋아요 디자인도 완전짱이쁘고 페이스페이도되고요",
            "byReaction": false
          },
          {
            "time": "15:28",
            "store": "에코샷 골프",
            "storeId": "480340",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설명도 잘되있고 쉬워요. 토스가 편리하고 간편해요",
            "byReaction": false
          },
          {
            "time": "15:06",
            "store": "드루와점핑다이어트 자이점",
            "storeId": "182183",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "편함",
            "byReaction": false
          },
          {
            "time": "13:28",
            "store": "브로스커스텀",
            "storeId": "523182",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "유선으로 설명들으며 설치가 매우친절했어요 간단한조작, 작은크기의 기계",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-12": {
      "updatedAt": "22:08",
      "counts": {
        "menu": {
          "배선유": 1
        }
      },
      "pending": [],
      "voc": {
        "responses": 26,
        "install": {
          "count": 7,
          "low": 2
        },
        "nps": {
          "count": 26,
          "low": 6
        },
        "high": {
          "install": 1,
          "nps": 12
        },
        "npsDist": {
          "0": 2,
          "3": 3,
          "4": 1,
          "6": 1,
          "7": 1,
          "8": 2,
          "9": 4,
          "10": 12
        },
        "installDist": {
          "2": 2,
          "3": 4,
          "5": 1
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 2,
          "요식업": 3,
          "기타": 1,
          "도소매": 1
        },
        "byTenure": {
          "구매설치": {
            "total": 7,
            "low": 3
          },
          "1개월": {
            "total": 2,
            "low": 1
          },
          "6개월": {
            "total": 4,
            "low": 1
          },
          "12개월": {
            "total": 5,
            "low": 1
          },
          "3개월": {
            "total": 8,
            "low": 2
          }
        },
        "byVan": {
          "KPN": {
            "total": 5,
            "low": 1
          },
          "KSNET": {
            "total": 4,
            "low": 0
          },
          "SECTA9": {
            "total": 6,
            "low": 2
          },
          "KIS": {
            "total": 6,
            "low": 3
          },
          "KOVAN": {
            "total": 1,
            "low": 1
          },
          "NICE": {
            "total": 2,
            "low": 1
          },
          "SMARTRO": {
            "total": 2,
            "low": 0
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 1,
          "사용중 오류가 자주 발생함": 4,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 3
        },
        "alerts": [
          {
            "time": "22:08",
            "store": "인네일",
            "storeId": "534735",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 2,
            "nps": 9,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "모르는 부분이 너무 많아서 헷갈려요 직접 설치하는 부분에 헷갈려요",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1차부재 1차부재",
            "doneDate": ""
          },
          {
            "time": "18:55",
            "store": "아야서울(ayaseoul)",
            "storeId": "314381",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "시스템 먹통 된 적 있고 서비스센터 불친절",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "토스장애이슈 토스장애이슈",
            "doneDate": ""
          },
          {
            "time": "16:29",
            "store": "함양군농촌마을관광협동조합 산삼주제관점",
            "storeId": "334272",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "계속 에러가 나는데 해결이 안ㄷㆍ니요",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "16:06",
            "store": "황금상황버섯삼계탕,오리",
            "storeId": "543217",
            "industry": "음식점/주점",
            "indBucket": "요식업",
            "install": 3,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "주방 포스키 영수증 반대로 나오는데 그낭 써야함",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:59",
            "store": "마싯",
            "storeId": "437465",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "본인들이더잘알겠죠",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:49",
            "store": "다인카페",
            "storeId": "500226",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "이유 없는 에러 때문에 매장 운영에 어려움을 겪었던 기억만 하연 절대 추천하고 싶지 않습니다!",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "토스장애이슈 토스장애이슈",
            "doneDate": ""
          },
          {
            "time": "15:44",
            "store": "라파스 베이커리",
            "storeId": "205001",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "너무 업데이트도 많고 결제할때 렉도 많이 걸림",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:06",
            "store": "자작나무 아카데미",
            "storeId": "536189",
            "industry": "공방",
            "indBucket": "기타",
            "install": 2,
            "nps": 8,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "첨이라 어려움",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "21:21",
            "store": "로지을 카페(Ro-jieul kafe)",
            "storeId": "498130",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "일단 누구나 다루기 쉬운 UX/UI가 좋습니다만, 디테일에서 약간 아쉬운 면은 있기에.. 10점 아닌 8점을 드렸습니다.",
            "byReaction": false
          },
          {
            "time": "17:44",
            "store": "스파피부관리샵",
            "storeId": "193266",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "감사합니다",
            "byReaction": false
          },
          {
            "time": "16:29",
            "store": "자스민영어문해력학원",
            "storeId": "423296",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "간편하고 깔끔하다",
            "byReaction": false
          },
          {
            "time": "16:06",
            "store": "레이나 에스테틱",
            "storeId": "538698",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 3,
            "nps": 10,
            "text": "혼자하깃힘들어서 도움받아서하느라 그래도 디쟌이나 월사요료부분",
            "byReaction": false
          },
          {
            "time": "15:59",
            "store": "롱롱래쉬뷰티",
            "storeId": "369339",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "뷰티샵운영에  예약스스템  안내자동카톡 보내주는기능도 편하고  결제시스템 도 너무좋습니다",
            "byReaction": false
          },
          {
            "time": "15:44",
            "store": "파노라마",
            "storeId": "200019",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "일단 단말기 사용비용이 저렴해요 디자인도 깔끔하고, 사용하기가 편해요",
            "byReaction": false
          },
          {
            "time": "15:29",
            "store": "블랙카페",
            "storeId": "435931",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편하고좋아요",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "아름다운이야기",
            "storeId": "321340",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "간편하고 쓰기도도편해요",
            "byReaction": false
          },
          {
            "time": "15:14",
            "store": "유원헤어",
            "storeId": "211267",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "이번 결제 문제 사건에 대한 토스의 대응이 정말 인상적이었습니다. 문제 발생 직후부터 상황을 빠르게 안내해 주었고, 고객 입장에서 불안하지 않도록 지속적으로 공지와 대응이 이루어져 신뢰가 더욱 커졌습니다. 저 역시 매장에서 토스 단말기를 사용하고 있는데, 이번 일을 보면서 “토스로 바꾸길 정말 잘했다”는 생각이 들었습니다. 단순히 결제만 되는 단말기가 아니라 문제가 생겼을 때 얼마나 빠르고 책임감 있게 대응하는지가 더 중요하다는 걸 느꼈습니다. 앞으로도 안심하고 사용할 수 있을 것 같고, 토스 단말기로 변경한 것을 한 번도 후회한 적이 없습니다. 앞으로도 지금처럼 믿을 수 있는 서비스와 빠른 대응을 기대하겠습니다.",
            "byReaction": false
          },
          {
            "time": "14:43",
            "store": "홍플라워",
            "storeId": "210574",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "사용하기에 편리합니다",
            "byReaction": false
          },
          {
            "time": "09:34",
            "store": "온정(시부야함바그)",
            "storeId": "521389",
            "indBucket": "요식업",
            "emp": "",
            "install": 3,
            "nps": 10,
            "text": "프린크 연결 동영상이 허접함 깔끔하다",
            "byReaction": false
          },
          {
            "time": "00:01",
            "store": "권선반찬",
            "storeId": "541635",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절하게 설명을 잘해주세요 자세하게 설명",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-13": {
      "updatedAt": "11:30",
      "counts": {
        "as": {
          "김기범": 2,
          "서상원": 1,
          "심성현": 9,
          "배선유": 7,
          "송태양": 3,
          "김현기": 5,
          "김규빈": 1
        },
        "extern": {
          "서상원": 1
        },
        "onboarding": {
          "김규빈": 1,
          "심성현": 2,
          "서상원": 1,
          "김현기": 1
        },
        "transfer": {
          "송태양": 3,
          "심성현": 1
        },
        "menu": {
          "김규빈": 2,
          "배선유": 5
        }
      },
      "pending": [
        {
          "time": "11:23",
          "store": "카츠쇼우",
          "biz": "7010103989",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "11:13",
          "store": "연우샵",
          "biz": "8311200881",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        },
        {
          "time": "11:11",
          "store": "모모",
          "biz": "2171664092",
          "handler": "심성현",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "10:55",
          "store": "이헤어플러스",
          "biz": "4081176689",
          "handler": "심성현",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "10:15",
          "store": "주디마리 홍대점(JUDYMARY)",
          "biz": "4858502579",
          "handler": "김현기",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "10:13",
          "store": "가장맛있는 후라이드 안동점",
          "biz": "1535400985",
          "handler": "김현기",
          "cat": "delivery",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "10:05",
          "store": "요거트가족",
          "biz": "1891602210",
          "handler": "배선유",
          "cat": "menu",
          "reasons": [
            "확인 후 미완료"
          ]
        }
      ],
      "voc": {
        "responses": 2,
        "install": {
          "count": 1,
          "low": 0
        },
        "nps": {
          "count": 2,
          "low": 0
        },
        "high": {
          "install": 0,
          "nps": 1
        },
        "npsDist": {
          "9": 1,
          "10": 1
        },
        "installDist": {
          "4": 1
        },
        "byIndustry": {
          "기타": 1
        },
        "byTenure": {
          "구매설치": {
            "total": 1,
            "low": 0
          },
          "3개월": {
            "total": 1,
            "low": 0
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 2,
            "low": 0
          }
        },
        "reasonCounts": {},
        "alerts": [],
        "praises": [
          {
            "time": "08:41",
            "store": "씨엔 엔터테인먼트(C. N Entertainment)",
            "storeId": "486554",
            "indBucket": "기타",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "설치하기 편리함 깔끔하고 마음에 듬",
            "byReaction": false
          },
          {
            "time": "00:01",
            "store": "애플아이",
            "storeId": "434500",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "실사용이 편리하고 호환도 잘되서 좋습니다",
            "byReaction": false
          }
        ]
      }
    },
    "2026-06-29": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 23,
        "install": {
          "count": 5,
          "low": 0
        },
        "nps": {
          "count": 23,
          "low": 3
        },
        "high": {
          "install": 3,
          "nps": 11
        },
        "npsDist": {
          "0": 1,
          "5": 2,
          "7": 2,
          "8": 4,
          "9": 3,
          "10": 11
        },
        "installDist": {
          "4": 2,
          "5": 3
        },
        "byIndustry": {
          "도소매": 1,
          "카페": 1,
          "서비스[뷰티,헤어]": 3
        },
        "byTenure": {
          "6개월": {
            "total": 8,
            "low": 1
          },
          "3개월": {
            "total": 5,
            "low": 2
          },
          "1개월": {
            "total": 4,
            "low": 0
          },
          "구매설치": {
            "total": 5,
            "low": 0
          },
          "12개월": {
            "total": 1,
            "low": 0
          }
        },
        "byVan": {
          "KOVAN": {
            "total": 1,
            "low": 1
          },
          "SECTA9": {
            "total": 4,
            "low": 1
          },
          "KIS": {
            "total": 4,
            "low": 1
          },
          "KPN": {
            "total": 5,
            "low": 0
          },
          "DAOU": {
            "total": 3,
            "low": 0
          },
          "SMARTRO": {
            "total": 5,
            "low": 0
          },
          "KSNET": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 1,
          "사용중 오류가 자주 발생함": 1,
          "단말기 설치나 초기 과정이 어려움": 1
        },
        "alerts": [
          {
            "time": "18:53",
            "store": "리포윅스 창원중동점",
            "storeId": "320796",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "완전 불편. 약정끝나면 버릴꺼임",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:27",
            "store": "숙성회136 철산역점",
            "storeId": "423230",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "사용한지 3개월도 안됐는데 바쁜 금요일 저녁에 장시간 오류나서 매장이 난장판이됨",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:27",
            "store": "방가네 닭발",
            "storeId": "418402",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "배달어플 연동 힘듬",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "16:57",
            "store": "갤러리 현",
            "storeId": "419044",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용도 편리하고 보여지는 부분도 좋습니다",
            "byReaction": false
          },
          {
            "time": "16:16",
            "store": "라베이스",
            "storeId": "477981",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "편리하나 통신 장애",
            "byReaction": false
          },
          {
            "time": "16:03",
            "store": "폭스트롯(FOXTROT)",
            "storeId": "514941",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "기사님이 너무 친절 편리해서",
            "byReaction": false
          },
          {
            "time": "15:46",
            "store": "포토트리(Photo Tree)",
            "storeId": "445402",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "사용하기도 편하고 저렴해서 좋습니다. 그런데 한달사이에 오류가 여러번 나서 영업에 지장이 많습니다. 오류가 있으면 콜센타 통화가 되던지 언제부터 정상화가 된다는 알림이 있어야 고객에게 말씀을 드리는데 콜센타 전화도 안되고 공지도 없고 너무 무책임한것 같습니다.",
            "byReaction": false
          },
          {
            "time": "15:27",
            "store": "한국연합금거래소 동탄점",
            "storeId": "423843",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용법이 편리하고 다양한 기능이 있어 만족합니다",
            "byReaction": false
          },
          {
            "time": "15:27",
            "store": "정원(02-470-3339)공인중개사사무소",
            "storeId": "416370",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "일단 예쁘다, 깔끔하다.인테리어에 효과적이다. 설치비가 무료다",
            "byReaction": false
          },
          {
            "time": "15:22",
            "store": "더(THE)오름영어수학학원",
            "storeId": "284102",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리합니다",
            "byReaction": false
          },
          {
            "time": "15:12",
            "store": "다온헤어",
            "storeId": "203849",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "네이버연동.예약스케줄칸이조금불편함",
            "byReaction": false
          },
          {
            "time": "13:02",
            "store": "the예쁜머리",
            "storeId": "513332",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "쉽게 설치할수있게 설명서를 보내주셨지만ㅎ 연결선이 몇개있어 헷갈려서 처음엔 버벅거렸지만ㅎ 잘 해결했습니다. 간단히 설치할수있어 편했습니다. 간단하게 설치할수있고 고객관리 문자서비스도 편하게 이용할수있어서 좋아서 추천해주고 싶습니다.^^",
            "byReaction": false
          }
        ]
      }
    },
    "2026-06-30": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 29,
        "install": {
          "count": 9,
          "low": 1
        },
        "nps": {
          "count": 29,
          "low": 11
        },
        "high": {
          "install": 6,
          "nps": 13
        },
        "npsDist": {
          "0": 4,
          "4": 1,
          "5": 6,
          "7": 1,
          "8": 1,
          "9": 3,
          "10": 13
        },
        "installDist": {
          "2": 1,
          "3": 1,
          "4": 1,
          "5": 6
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 1,
          "도소매": 2,
          "서비스[학원]": 2,
          "카페": 3,
          "기타": 1
        },
        "byTenure": {
          "6개월": {
            "total": 4,
            "low": 0
          },
          "구매설치": {
            "total": 9,
            "low": 2
          },
          "12개월": {
            "total": 7,
            "low": 4
          },
          "1개월": {
            "total": 4,
            "low": 1
          },
          "3개월": {
            "total": 5,
            "low": 4
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 4,
            "low": 0
          },
          "KPN": {
            "total": 6,
            "low": 4
          },
          "KSNET": {
            "total": 8,
            "low": 5
          },
          "KIS": {
            "total": 8,
            "low": 2
          },
          "NICE": {
            "total": 2,
            "low": 0
          },
          "SECTA9": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 3,
          "사용중 오류가 자주 발생함": 4,
          "필요한 기능이 없거나 몰라서 불편": 1,
          "구매,계약과정에서 설명이 부족": 1,
          "고객센터 연락이 매우 힘듦": 1
        },
        "alerts": [
          {
            "time": "22:20",
            "store": "주방문",
            "storeId": "201937",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "서버 불안정 인터넷 연결불안정",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "18:53",
            "store": "네일나빛",
            "storeId": "463807",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "서버장애로인한 불공평한 보상기준& 예상했던데로 서버기반이라 사용에대한 불안함 있어 신뢰도가 떨어짐",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "18:40",
            "store": "스텔라아이티 주식회사",
            "storeId": "528252",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "너무 상담원과 연결이 안됨",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:48",
            "store": "주식회사준이컴퍼니",
            "storeId": "199228",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "갑자기 서버가 병신되서 등줄기에 식은땀이 흐르는 기분을 느꼇습니다. 정말 두번다시 경험하고 싶지않은 악몽과 같은 하루였습니다.",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리 CX일괄처리",
            "doneDate": ""
          },
          {
            "time": "15:34",
            "store": "한양무용학원",
            "storeId": "423021",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "기계가 두개나 있을 필요가 없었어요. 업종에 맞게 제품 추천도 해줬음 좋았을걸...합니다",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:34",
            "store": "애월연어 강릉점",
            "storeId": "423509",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "전반적으론 편리하나, 가끔씩 발생하는 오류와 전화를 받지 않는 고객센터",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리 CX일괄처리",
            "doneDate": ""
          },
          {
            "time": "15:18",
            "store": "해서웨이(Hatheway)",
            "storeId": "183500",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "잦은오류 대처미비",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX안내문자발송 CX안내문자발송",
            "doneDate": ""
          },
          {
            "time": "15:09",
            "store": "정원움직임과학연구소 (Jw msl.)",
            "storeId": "524911",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 2,
            "nps": 5,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "설치하는 날짜에 문제가 있었는지 휴대폰을 포스로 연동하는데 되질 않아서 많은 시간을 버렸어요",
                "cat": "단말기 설치나 초기 과정이 어려움"
              },
              {
                "q": "추천의향",
                "score": 5,
                "text": "횟수권도 일반 상품처럼 설명이나 사진이 들어가면 좋겠습니다",
                "cat": "구매,계약과정에서 설명이 부족"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX안내문자발송 CX안내문자발송",
            "doneDate": ""
          },
          {
            "time": "15:03",
            "store": "엔케이 모션 센터",
            "storeId": "335417",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "예약 기능 준비되어있지않은상태임 전화로 문의해도 의견을보내도 처리상태 알 수 없음. 1회성 예약으로만 생각함. 피트니스업종 시스템은 힘듦",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "2차부재 2차부재",
            "doneDate": ""
          },
          {
            "time": "15:03",
            "store": "윤헤어(YunHair)",
            "storeId": "423731",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "영수증을 필요로 하시는 분이 있는데 그걸 따로 옵션이라",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "13:18",
            "store": "코쿠",
            "storeId": "191653",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "오류 존나게 생기고 보상 왜 안해줌",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX안내문자발송 CX안내문자발송",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "22:41",
            "store": "(주)더얀 (오포르)",
            "storeId": "518791",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "공명현팀장님께서 정말정말 친절하고 프로답게 하나부터 열까지 세세한 교육과 책임감으로 급한일정에도 불구하고,완벽하게 오픈준비를 늦은밤까지 도와주셔서 감사의 말씀 드립니다. 프로다운 공명현팀장님 큰도움을받은 백합팀장님 처음 시작때부터 감사했던 김동규팀장님 감사합니다",
            "byReaction": false
          },
          {
            "time": "18:29",
            "store": "보은칼국수",
            "storeId": "326568",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "빠르고 간편함",
            "byReaction": false
          },
          {
            "time": "16:10",
            "store": "구피스탠스(Goofy Stance)",
            "storeId": "510015",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치하기 간편 좋아요",
            "byReaction": false
          },
          {
            "time": "16:10",
            "store": "여민동락 농업회사법인 주식회사",
            "storeId": "527423",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "어렵지 않게 설치했엉ㅎ 편리하고 간편해서",
            "byReaction": false
          },
          {
            "time": "15:22",
            "store": "제이에스(JS)골프피팅연구소",
            "storeId": "483463",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용도 편하고 무료라 더좋아요",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-01": {
      "updatedAt": "23:10",
      "counts": {
        "as": {
          "최민석": 29,
          "김현기": 18,
          "배선유": 18,
          "미지정": 21,
          "송태양": 12,
          "심성현": 19,
          "김동욱": 13,
          "김규빈": 8,
          "서상원": 2,
          "김기범": 2
        },
        "onboarding": {
          "최민석": 6,
          "배선유": 5,
          "송태양": 4,
          "김동욱": 4,
          "미지정": 5,
          "심성현": 6,
          "서상원": 1,
          "김기범": 1
        },
        "extern": {
          "서상원": 3,
          "김동욱": 1,
          "심성현": 1
        },
        "menu": {
          "최민석": 4,
          "김규빈": 9,
          "배선유": 8
        },
        "transfer": {
          "송태양": 3,
          "김동욱": 2
        },
        "delivery": {
          "미지정": 1,
          "심성현": 1
        }
      },
      "pending": [],
      "voc": {
        "responses": 32,
        "install": {
          "count": 4,
          "low": 0
        },
        "nps": {
          "count": 32,
          "low": 13
        },
        "high": {
          "install": 1,
          "nps": 8
        },
        "npsDist": {
          "0": 5,
          "2": 1,
          "5": 7,
          "6": 1,
          "7": 2,
          "8": 4,
          "9": 4,
          "10": 8
        },
        "installDist": {
          "3": 2,
          "4": 1,
          "5": 1
        },
        "byIndustry": {
          "카페": 2,
          "서비스[학원]": 1,
          "서비스[뷰티,헤어]": 1
        },
        "byTenure": {
          "1개월": {
            "total": 11,
            "low": 4
          },
          "3개월": {
            "total": 8,
            "low": 2
          },
          "6개월": {
            "total": 3,
            "low": 3
          },
          "구매설치": {
            "total": 4,
            "low": 1
          },
          "12개월": {
            "total": 6,
            "low": 3
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 6,
            "low": 5
          },
          "SECTA9": {
            "total": 7,
            "low": 1
          },
          "KIS": {
            "total": 5,
            "low": 2
          },
          "KPN": {
            "total": 8,
            "low": 1
          },
          "KSNET": {
            "total": 4,
            "low": 3
          },
          "DAOU": {
            "total": 2,
            "low": 1
          }
        },
        "reasonCounts": {
          "사용중 오류가 자주 발생함": 3,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 4,
          "단말기 설치나 초기 과정이 어려움": 3,
          "필요한 기능이 없거나 몰라서 불편": 3
        },
        "alerts": [
          {
            "time": "17:36",
            "store": "한잔의풀내음",
            "storeId": "319828",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "가장 바쁜 시간에 결제가 되지 않는 오류, 토스 포스의 API 오류였으나 마치 매장의 WIFI 연결오류라는 듯한 안내문 굉장히 불쾌하며 당황스럽습니다.",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          },
          {
            "time": "16:16",
            "store": "키라키라(KIRAKIRA)",
            "storeId": "467785",
            "industry": "카페/베이커리",
            "indBucket": "카페",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "각자 쓰는게있음",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "16:10",
            "store": "레이지 미드데이(LAZY MIDDAY)",
            "storeId": "422351",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "매번 통신장애, 프론트 연결 끊기고 최악입니다.",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 재연동 도와드렸고 프론트 교체 안내 및 출고 접수 완료 • 프론트 수령 후 재연락 주시면 재온보딩 도움 드리겠음 안내 • 교체 후에도 동일증상시 통신점검 받아보시길 권장 안내 후 통화종료 • [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 서비스업 뷰티학원] 재연동 도와드렸고 프론트 교체 안내 및 출고 접수 완료 프론트 수령 후 재연락 주시면 ",
            "doneDate": ""
          },
          {
            "time": "15:55",
            "store": "바로인한의원",
            "storeId": "205151",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "상담원과의 연결이 어려움, 최근 결제 장애때문에 원활하게 운영을 하지 못함",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄대응예정 CX일괄대응예정",
            "doneDate": ""
          },
          {
            "time": "15:40",
            "store": "피규어아지트",
            "storeId": "274058",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "시스템이 안정적이지 않음",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          },
          {
            "time": "15:35",
            "store": "주식회사 하루한알 장기점",
            "storeId": "322325",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "빈번한 통신장애, 여러모로 기능 안좋음",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          },
          {
            "time": "15:35",
            "store": "이선음악학원",
            "storeId": "325224",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "영수증이 나왔다 안나왓다해서 너무 불편해요ㅜ",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "통화거부 통화거부",
            "doneDate": ""
          },
          {
            "time": "15:29",
            "store": "김밥짱",
            "storeId": "488595",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "오류가많앗고 일처리가 늦음",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄대응예정 CX일괄대응예정",
            "doneDate": ""
          },
          {
            "time": "15:29",
            "store": "동광주한우리독서토론논술학원",
            "storeId": "471456",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "면세 사업자인 학원용으로 맞지않음",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• • 민원 인입 매장으로 매우 강성 • 고발의지 표명한 상태로 님 직접 OB진행 예정 히스토리 민원 인입 매장으로 매우 강성 고발의지 표명한 상태로 님 직접 OB진행 예정 접수 일시 2026-06-24 사업자번호/상호명 2909202509 / 동광주한우리독서토론논술학원 작성자 홍승기 인입채널 전화 상담 일시 (통화시간 or 채팅링크) 14:20경 리스크 ",
            "doneDate": ""
          },
          {
            "time": "15:29",
            "store": "웅진학원",
            "storeId": "465156",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "금액을 다른 단말기처럼 바로 입력하게 해주세요 금액이 그때마다 변동되는 업이라 결제하러오셨을때 폰으로 들어가서 입력하고 다시 단말기에서 결제하고 번거로워요 카드꼽고 금액을 입력하고 바로 결제 할 수있도록 부탁드립니다",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 금액입력결제모드로 결제시 과세로 책정되어 면세사업자인 학원업종에서는 추천드리지 않음 -&gt; 수긍 • 면세상품 등록 후 키오스크모드 설정 해드렸고 사용해보시겠다고 함 • [기록용:필요한 기능이 없어서 불편했어요 / 금액입력결제모드 / 서비스업 학원] 금액입력결제모드로 결제시 과세로 책정되어 면세사업자인 학원업종에서는 추천드리지 않음 - 수긍 면세상품 ",
            "doneDate": ""
          },
          {
            "time": "15:29",
            "store": "월드 헤어",
            "storeId": "488021",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "사용 하는점에서 불편함은 없는데 포스 연결이 살짝 주춤할때가 있음",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:25",
            "store": "우드코티지",
            "storeId": "193708",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "너무 자주 업데이트를 하는데 뭘 업데이트 하는지 모르겠음 어플 킬때마다 늦게 업데이트 땜에 늦게 켜짐",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "2차부재 2차부재",
            "doneDate": ""
          },
          {
            "time": "15:25",
            "store": "팔월오일 커피",
            "storeId": "202537",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "잦은 먹통",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "22:31",
            "store": "주식회사 파이커스코리아",
            "storeId": "294265",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리하고 예쁘고",
            "byReaction": false
          },
          {
            "time": "18:11",
            "store": "온담심리상담센터",
            "storeId": "430186",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "깔끔한 화면과 기기, 시스템",
            "byReaction": false
          },
          {
            "time": "15:59",
            "store": "주식회사 울림아트",
            "storeId": "489101",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "좋아요",
            "byReaction": false
          },
          {
            "time": "15:46",
            "store": "라온포레",
            "storeId": "527905",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절하고 기기의 편리함 편의성.",
            "byReaction": false
          },
          {
            "time": "15:29",
            "store": "곱슬베이커리",
            "storeId": "476740",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "1.그래도 신속하게 대응해 주셔서 큰 불편함이 없습니다.. 2.사용할 수록 더 좋은 기능들을 알게 되니 조금 더 좋습니다..",
            "byReaction": false
          },
          {
            "time": "15:16",
            "store": "나윤헤어",
            "storeId": "504180",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "상세한 설명이 맘에듬 편리하게 사용가능",
            "byReaction": false
          },
          {
            "time": "15:10",
            "store": "최강영어교습소",
            "storeId": "334199",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "결제가 편합니다",
            "byReaction": false
          },
          {
            "time": "15:10",
            "store": "블루미아(BLOOMIA)",
            "storeId": "256268",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "간편하게 쓰기 좋아요",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-02": {
      "updatedAt": "23:00",
      "counts": {
        "as": {
          "최민석": 36,
          "서상원": 6,
          "송태양": 17,
          "심성현": 20,
          "미지정": 25,
          "배선유": 18,
          "김동욱": 18,
          "김현기": 17,
          "김기범": 3,
          "김규빈": 3
        },
        "onboarding": {
          "최민석": 4,
          "송태양": 4,
          "심성현": 10,
          "김규빈": 2,
          "김현기": 2,
          "미지정": 6,
          "배선유": 5,
          "김동욱": 3
        },
        "menu": {
          "서상원": 1,
          "최민석": 1,
          "배선유": 11,
          "김동욱": 2,
          "김규빈": 8
        },
        "extern": {
          "배선유": 1,
          "김동욱": 2,
          "서상원": 4
        },
        "transfer": {
          "최민석": 1,
          "송태양": 7,
          "김동욱": 2
        },
        "delivery": {
          "최민석": 2,
          "김현기": 1
        }
      },
      "pending": [
        {
          "time": "16:00",
          "store": "투윈스짐(2Wins Gym)",
          "biz": "8856900543",
          "handler": "김현기",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "15:00",
          "store": "놀러오개",
          "biz": "6355400357",
          "handler": "김동욱",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        },
        {
          "time": "14:00",
          "store": "타코야끼정류장",
          "biz": "8230204005",
          "handler": "김현기",
          "cat": "delivery",
          "reasons": [
            "1차 부재"
          ]
        }
      ],
      "voc": {
        "responses": 36,
        "install": {
          "count": 14,
          "low": 2
        },
        "nps": {
          "count": 36,
          "low": 11
        },
        "high": {
          "install": 9,
          "nps": 16
        },
        "npsDist": {
          "0": 4,
          "1": 2,
          "2": 1,
          "4": 1,
          "5": 3,
          "7": 4,
          "8": 4,
          "9": 1,
          "10": 16
        },
        "installDist": {
          "1": 1,
          "2": 1,
          "3": 1,
          "4": 2,
          "5": 9
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 3,
          "도소매": 2,
          "서비스[학원]": 5,
          "기타": 1,
          "요식업": 3
        },
        "byTenure": {
          "구매설치": {
            "total": 14,
            "low": 3
          },
          "12개월": {
            "total": 8,
            "low": 2
          },
          "6개월": {
            "total": 3,
            "low": 2
          },
          "3개월": {
            "total": 5,
            "low": 1
          },
          "1개월": {
            "total": 6,
            "low": 3
          }
        },
        "byVan": {
          "KIS": {
            "total": 6,
            "low": 1
          },
          "KSNET": {
            "total": 8,
            "low": 2
          },
          "SECTA9": {
            "total": 6,
            "low": 2
          },
          "SMARTRO": {
            "total": 6,
            "low": 2
          },
          "NICE": {
            "total": 1,
            "low": 0
          },
          "KPN": {
            "total": 6,
            "low": 2
          },
          "KOVAN": {
            "total": 1,
            "low": 1
          },
          "DAOU": {
            "total": 2,
            "low": 1
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 3,
          "사용중 오류가 자주 발생함": 4,
          "필요한 기능이 없거나 몰라서 불편": 3,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2,
          "고객센터 연락이 매우 힘듦": 1
        },
        "alerts": [
          {
            "time": "20:04",
            "store": "비봉상황삼계탕오리불고기",
            "storeId": "205146",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "문의가 있을때 원하는 내용이 메뉴에 없으면 문제해결이 너무 답답합니다. 답변하나만 들으면 되는것을 한참을 헤메야하고 상담원연결시 답변이 바로되는것도 아니고  시간이지나 상담사가 톡이 와도 손님응대하고 열어보면 대답없어 상담 종료라고 다시 처음부터해야 합니다. 업주들이 상담사시간에 맞춰야하는게 어이없고 답답할때가 많아 몇번이고 토스플레이스는 다시는 안써야겠다 생각한적도 수차례입니다. 장애발생시 에도 빠른대처방법부터 보내줬으면 피해도 줄었을겁니다. 비상 모드가 안될때 프론트기기로도 금액결제 가능하다는걸 메세지에 줄줄이 나열할것이아니라 방법을 각각 따로 발송했더라면 피해업주들이 줄었을텐데 , 전체보기를 저처럼 누르지않은 업주분들은 대다수 몰랐을겁니다. 저는 위 사유들로 토스플레이스를 비추천합니다. 이번피해에도 저는 방법을 알기전까지 결제를 못받고 보낸분도있습니다. 다음방문시까지 독촉드리기도 난처합니다. 저희는 여름시즌에 집중되는 업종입니다. 지난 매출로 비교했을때 확연히 차이가 벌…",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          },
          {
            "time": "17:37",
            "store": "슈보요우",
            "storeId": "465139",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "오류가많음",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": ""
          },
          {
            "time": "15:54",
            "store": "남성컷트.맨즈컷하우스",
            "storeId": "526852",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "설치하기 어렵고 판매자와 통화도 잘안됨 사용하기 불편함",
                "cat": "사용중 오류가 자주 발생함"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "포스기 없으면 불편함",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• • 원격 인입건으로 처리 완료 원격 인입건으로 처리 완료 상호: 남성컷트.맨즈컷하우스 / KPN 오프/온라인: 온라인 / 임대 사업자번호 : 4011707688 대표자명 : 송주희 대표자 전화번호 : <tel:010-8115-6318|010-8115-6318[갤] 가게 연락처 : <tel:010-8115-6318|010-8115-6318 주소 : 울산광",
            "doneDate": ""
          },
          {
            "time": "15:48",
            "store": "정통춘천닭갈비 소담점",
            "storeId": "427695",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "본인들이 더 잘 아실거같아요.",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리 CX일괄처리",
            "doneDate": ""
          },
          {
            "time": "15:43",
            "store": "더핀셋 더브로우즈",
            "storeId": "319600",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "되는게 없네요",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• OFFPG로 사용중이시며 다중TID 등록되어있어 지역화폐 결제 가능하나 금액입력결제모드로 사용중이셔서 결제가 안되는 상황으로 추정 • 현재 시술중으로 바쁘시다며 끊으셔서 차주 월요일 재연락드려 점검 진행 예정 OFFPG로 사용중이시며 다중TID 등록되어있어 지역화폐 결제 가능하나 금액입력결제모드로 사용중이셔서 결제가 안되는 상황으로 추정 현재 시술중으로",
            "doneDate": ""
          },
          {
            "time": "15:43",
            "store": "요가, 여운",
            "storeId": "322435",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "업데이트를 너무 자주해서 카드 결제가 바로바로 안 되고 시간이 걸림…",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:37",
            "store": "라인 필라테스",
            "storeId": "490200",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "영수증인쇄기도따로사야하고 저번에 결제 오류때문에 결제를 못해 매우 불편했으나 필라테스업종이라 동일시간대가 아닌 1일 기준 매출에 타격을 입었음에도 불구하고 일반 음식점처럼 해당 시간대로만 보상을 한다고 하여 매우 기분 나빴음.",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          },
          {
            "time": "15:37",
            "store": "보들랑 베이커리",
            "storeId": "486691",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "엊그제 점심 저녁으로 포스마비되고 고객신터 전화도안받음",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "논칠필터드",
            "storeId": "473478",
            "industry": "음식점/주점",
            "indBucket": "요식업",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "최근 결제오류도 있었고 용지 갈았을때 처음엔 검정색빼고 나중에 다시 끼워야ㅘ는 점이 불편함. 기기랑 용지 사이즈를 맞춰서 출시했어야하는거 아닌가. 아니면 애초에 공지가 됐어야함. 바쁠때 그래서 당황했었음.",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "굿스터디학원",
            "storeId": "522737",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 2,
            "nps": 5,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "설명이 간결하고 자세하지 않으며 설치 과정에서 몇 번이고 상담원과 통화를 해야 함",
                "cat": "단말기 설치나 초기 과정이 어려움"
              },
              {
                "q": "추천의향",
                "score": 5,
                "text": "사 용 의 편의성은 좋으나 솔직히 과정이 복잡함",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• • 민원인입 매장 처리예정 민원인입 매장 처리예정 접수 일시 2026-07-02 사업자번호/상호명 2179069817 / 굿스터디학원 작성자 박현주 인입채널 전화 상담 일시 (통화시간 or 채팅링크) 2026-07-02 1300 리스크 강도 일반 VOC 민원유형 제신고 / 가맹 이슈 내용 • 우리카드 정산계좌 확인 요청 인입 • 6/22 서류제출 후 6",
            "doneDate": ""
          },
          {
            "time": "14:32",
            "store": "마주헤어(MAJU HAIR)",
            "storeId": "195908",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "악플아니고 진짜 피드백 원하시면 이 글 진짜 진지하게 받아들이셔야 함 일단 네이버예약과 연동안되는거 치명적임 이거 가지고 올 때 부터 네이버예약 연동 될거라고 하더니 아직도 감감무소식이죠? 네이버예약 연동안되니까 고객관리어플이랑 토스포스 두 개 다 써야 하는 비효율 발생함 토스포스로만 하면 안되냐고? 네이버예약 연동안되어서 예약 들어오면 다시 토스포스에 따로 입력해야 하는 비효율 발생함 심지어 예약칸에 디자이너 개개인 따로 예약 표시도 안되고 12시 1시 이렇게 시간으로만 나누어짐 진짜 이거만든사람들 다니는 미용실은 미용사 선생님이 전부 한 명뿐인 미용실을 다니시는건지 진심 이해못함 문자도 내가 개별로 본인이 보내고 싶은 문자 보낼 수 있게 만들어야 한다니까 이거 고쳤던데 아니 장난하는 것도 아니고 그걸 왜 200자 한도를 걸어놓는거임? 문자쓰다보면 200자 금방 차는데 이거 뭐 장난하는건가? 비용을 아끼는건 좋은데 비용을 아껴서 안하느니만 못한 서비스를 출시할꺼면 차라…",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1. 네이버예약 연동 미지원 (가장 큰 불만) ◦ 출시 당시 네이버예약 연동을 지원한다고 안내했으나 아직 미지원 상태 가장 치명적인 문제로 인식하고 있음. ◦ 네이버예약과 연동되지 않아 고객관리 앱 + 토스포스를 동시에 사용해야 하는 상황. ◦ 네이버예약으로 접수된 예약을 토스포스에 다시 수기로 입력해야 하는 비효율 발생. ◦ 토스포스만 단독으로 사용하기 ",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "22:26",
            "store": "다시봄종합화장품",
            "storeId": "526061",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "간편하고 이쁨 ㅋㅋ기계가 편리하고 이쁨ㅋ",
            "byReaction": false
          },
          {
            "time": "21:34",
            "store": "라곰헤어",
            "storeId": "204136",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "고객님의 만족도가 너무 좋아요~",
            "byReaction": false
          },
          {
            "time": "20:55",
            "store": "가멸다 가죽아트",
            "storeId": "434445",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절하게 설명및 잘가르쳐 주심 넘 편하고 저렴하고 좋아서요",
            "byReaction": false
          },
          {
            "time": "20:25",
            "store": "더알랩(The R Lab)",
            "storeId": "409393",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 8,
            "text": "심플하면서도 깔끔함. 아직 아쉬운 기능이 있음. (예: 공부방 등 면세사업자는 추가 상품 메뉴를 만들 때마다 면세에 체크했는지 계속해서 확인해야하는 문제점 등.) 심플하면서도 깔끔함. 아직 아쉬운 기능이 있음. (예: 공부방 등 면세사업자는 추가 상품 메뉴를 만들 때마다 면세에 체크했는지 계속해서 확인해야하는 문제점 등.)",
            "byReaction": false
          },
          {
            "time": "17:24",
            "store": "닥터뷰치과의원의정부역점",
            "storeId": "523801",
            "indBucket": "기타",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "사용하기 좋은 인터페이스, 깔끔한디자인, 쉬운설치 사용용이성",
            "byReaction": false
          },
          {
            "time": "17:07",
            "store": "눅 하우스(Nook Haus)",
            "storeId": "483237",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리한 시스템과 빠른 상담 일처리응대  등이 자영업자가 매장운영하는데 큰 도움이 됩니다",
            "byReaction": false
          },
          {
            "time": "16:54",
            "store": "포레스트 피티 스튜디오(FORREST PT STUDIO)",
            "storeId": "508184",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 7,
            "text": "간단함 편리함 및 디자인",
            "byReaction": false
          },
          {
            "time": "16:03",
            "store": "결 헤어살롱",
            "storeId": "192351",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "너무 편리함",
            "byReaction": false
          },
          {
            "time": "15:48",
            "store": "보은맛차",
            "storeId": "426357",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리합니다.",
            "byReaction": false
          },
          {
            "time": "15:37",
            "store": "디아망네일(Diamant nail)",
            "storeId": "462819",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "너무쓰기좋아요 예쁘고",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "마포 숯불갈비",
            "storeId": "527528",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절 신속 편리하고 신속성",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "박선생수학",
            "storeId": "508020",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 7,
            "text": "편리함 깔끔하고 편리",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "쿠에노메",
            "storeId": "504722",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "굉장히 심플하고 간단함 여태 왜 다른 포스를 쓰고있었는지 후회 될 정도 시스템도 좋고 기능도 많은데 심플함",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "뽀글리",
            "storeId": "521715",
            "indBucket": "도소매",
            "emp": "",
            "install": 4,
            "nps": 8,
            "text": "괜찮았어요 사용 편리하고 단말기 예쁨",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "아소비 다산플루리움점",
            "storeId": "337382",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "쉽다 기계가 예쁘고 편리하다",
            "byReaction": false
          },
          {
            "time": "15:17",
            "store": "라잇더네임",
            "storeId": "413742",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "소품샵인데 재고관리하기 더 좋았으면 합니다",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-03": {
      "updatedAt": "23:10",
      "counts": {
        "onboarding": {
          "최민석": 9,
          "심성현": 16,
          "송태양": 1,
          "미지정": 8,
          "김현기": 1,
          "김동욱": 1,
          "김규빈": 1
        },
        "as": {
          "최민석": 17,
          "김기범": 4,
          "심성현": 23,
          "송태양": 19,
          "김현기": 23,
          "배선유": 19,
          "미지정": 26,
          "김동욱": 10,
          "김규빈": 6,
          "서상원": 1
        },
        "extern": {
          "서상원": 4,
          "김동욱": 2,
          "배선유": 1
        },
        "transfer": {
          "최민석": 2,
          "송태양": 9,
          "김동욱": 5
        },
        "menu": {
          "최민석": 4,
          "김기범": 4,
          "김규빈": 7,
          "김동욱": 2,
          "서상원": 1,
          "배선유": 5
        },
        "delivery": {
          "최민석": 2
        }
      },
      "pending": [
        {
          "time": "18:25",
          "store": "월리",
          "biz": "3902800697",
          "handler": "김기범",
          "cat": "menu",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "11:08",
          "store": "(주)오픈",
          "biz": "1808800527",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        },
        {
          "time": "09:44",
          "store": "",
          "biz": "",
          "handler": "김규빈",
          "cat": "menu",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "09:30",
          "store": "솔리오(SOLIO) 관리형 학습관",
          "biz": "1022396719",
          "handler": "송태양",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        }
      ],
      "voc": {
        "responses": 24,
        "install": {
          "count": 9,
          "low": 2
        },
        "nps": {
          "count": 24,
          "low": 5
        },
        "high": {
          "install": 6,
          "nps": 6
        },
        "npsDist": {
          "0": 1,
          "1": 1,
          "4": 1,
          "5": 2,
          "7": 3,
          "8": 9,
          "9": 1,
          "10": 6
        },
        "installDist": {
          "1": 1,
          "2": 1,
          "4": 1,
          "5": 6
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 3,
          "기타": 1,
          "도소매": 1,
          "요식업": 2,
          "서비스[학원]": 2
        },
        "byTenure": {
          "3개월": {
            "total": 4,
            "low": 0
          },
          "구매설치": {
            "total": 9,
            "low": 3
          },
          "6개월": {
            "total": 2,
            "low": 0
          },
          "1개월": {
            "total": 7,
            "low": 3
          },
          "12개월": {
            "total": 2,
            "low": 0
          }
        },
        "byVan": {
          "KSNET": {
            "total": 3,
            "low": 0
          },
          "KPN": {
            "total": 6,
            "low": 2
          },
          "KIS": {
            "total": 5,
            "low": 1
          },
          "SMARTRO": {
            "total": 4,
            "low": 1
          },
          "NICE": {
            "total": 1,
            "low": 1
          },
          "DAOU": {
            "total": 2,
            "low": 0
          },
          "SECTA9": {
            "total": 3,
            "low": 1
          }
        },
        "reasonCounts": {
          "구매,계약과정에서 설명이 부족": 1,
          "필요한 기능이 없거나 몰라서 불편": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2,
          "단말기 설치나 초기 과정이 어려움": 1,
          "사용중 오류가 자주 발생함": 2
        },
        "alerts": [
          {
            "time": "21:02",
            "store": "모람(MORAM) 네일 목동점",
            "storeId": "526020",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 2,
            "nps": 5,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "사용환경이 아무리 편하게 되있다해도 처음 접하는 사용자에 대한 설명이 스피드함위주였음",
                "cat": "구매,계약과정에서 설명이 부족"
              },
              {
                "q": "추천의향",
                "score": 5,
                "text": "애플페이외 메리트가없음",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": ""
          },
          {
            "time": "15:43",
            "store": "제이슨바버샵(Jason Barbershop)",
            "storeId": "467307",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "쓴지 한달도 안되어서 바쁜 금요일에 결제가 안되는 사고가 난건 문제가 있다고 생각합니다",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리예정 CX일괄처리예정",
            "doneDate": ""
          },
          {
            "time": "15:30",
            "store": "더강한수학교습소",
            "storeId": "362688",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 5,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "설치와 사용법은 간편하나 처음결제화면에 주문하기로 떠서 학원에서 학부모님이나 아이앞에서 결제할때 민망합니다",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 결제로 바꾸기 경로 안내 완료 결제로 바꾸기 경로 안내 완료",
            "doneDate": ""
          },
          {
            "time": "15:30",
            "store": "돈뚜껑",
            "storeId": "527488",
            "industry": "음식점/주점",
            "indBucket": "요식업",
            "install": 1,
            "nps": 10,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "95",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:13",
            "store": "낙산 닭 한마리",
            "storeId": "490319",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "장사하는 데포스기 먹통되는게 말이되나요",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄처리 CX일괄처리",
            "doneDate": ""
          },
          {
            "time": "15:13",
            "store": "카페 피크니커(cafe picnicker)",
            "storeId": "485008",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "결제 오류난 적이 있어서 무섭네요",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX처리예정 CX처리예정",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "15:39",
            "store": "호수탁구교실",
            "storeId": "205703",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "별로 불편없이 잘 사용하고 있는데 타사제품을 잘 몰라서요",
            "byReaction": false
          },
          {
            "time": "15:39",
            "store": "차빛공간",
            "storeId": "194320",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "업데이트자주되고 몇일전 결재가 너무 안되서 손님을 귀찮게했음",
            "byReaction": false
          },
          {
            "time": "15:30",
            "store": "모래내 장어",
            "storeId": "530433",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 8,
            "text": "우리는나이가있어,사용방범을잘모릅니다,자세히설멍해주시고,직접 애뉴판도 해주셨 어요 시대변화에동참,나이먹은사람도할수있다",
            "byReaction": false
          },
          {
            "time": "15:30",
            "store": "더(The)수학",
            "storeId": "294830",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치가 간편하고 설치에 대한 설명이 잘 되어 있습니다. 결제 및 결산관리가 편리하고 비대면 설치가 가능하고 신청후 배송까지 빠르기 때문입니다.",
            "byReaction": false
          },
          {
            "time": "15:30",
            "store": "똥깡아지",
            "storeId": "516924",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "직접 설치해주시지 않아도 영상통화로 친절하게 잘 알려주셔서 잘 설치할 수 있었어요 우선 디자인이 깔끔해서 어디에든 잘 어울리고 배경화면이랑 영수증에 이미지를 넣을 수 있어서 만족스럽습니다",
            "byReaction": false
          },
          {
            "time": "15:24",
            "store": "피자 페이스오프(PIZZA FACEOFF)석촌호수점",
            "storeId": "417261",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "직관적이고 사용하기 편리합니다.",
            "byReaction": false
          },
          {
            "time": "15:19",
            "store": "오동나무빵집",
            "storeId": "307219",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "연동성 및 직관성은 훌륭합니다. 다만, 장애 관련 공지 및 대응이 미흡합니다.",
            "byReaction": false
          },
          {
            "time": "15:13",
            "store": "국제 공업사",
            "storeId": "470526",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "간편하고  이전의  결제 통신 문제  이외에 문제는  없었습니다.  고객 삼당이  오래  걸리기는하지만 해결되었습니댜",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-04": {
      "updatedAt": "22:41",
      "counts": {
        "onboarding": {
          "김기범": 3,
          "김동욱": 6,
          "미지정": 7
        },
        "as": {
          "김기범": 12,
          "김동욱": 39,
          "미지정": 9
        },
        "transfer": {
          "김동욱": 1
        },
        "menu": {
          "김기범": 1,
          "배선유": 1,
          "김동욱": 3
        }
      },
      "pending": [
        {
          "time": "14:00",
          "store": "세라양과점",
          "biz": "1885700944",
          "handler": "미지정",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        }
      ],
      "voc": {
        "responses": 23,
        "install": {
          "count": 6,
          "low": 0
        },
        "nps": {
          "count": 23,
          "low": 4
        },
        "high": {
          "install": 1,
          "nps": 10
        },
        "npsDist": {
          "2": 1,
          "5": 3,
          "7": 3,
          "8": 4,
          "9": 2,
          "10": 10
        },
        "installDist": {
          "3": 3,
          "4": 2,
          "5": 1
        },
        "byIndustry": {
          "도소매": 1,
          "카페": 1,
          "기타": 1,
          "서비스[학원]": 2,
          "서비스[뷰티,헤어]": 1
        },
        "byTenure": {
          "구매설치": {
            "total": 6,
            "low": 0
          },
          "1개월": {
            "total": 4,
            "low": 1
          },
          "3개월": {
            "total": 3,
            "low": 0
          },
          "12개월": {
            "total": 7,
            "low": 2
          },
          "6개월": {
            "total": 3,
            "low": 1
          }
        },
        "byVan": {
          "KIS": {
            "total": 6,
            "low": 1
          },
          "SMARTRO": {
            "total": 3,
            "low": 0
          },
          "SECTA9": {
            "total": 4,
            "low": 1
          },
          "KSNET": {
            "total": 7,
            "low": 2
          },
          "NICE": {
            "total": 1,
            "low": 0
          },
          "KPN": {
            "total": 2,
            "low": 0
          }
        },
        "reasonCounts": {
          "사용중 오류가 자주 발생함": 1,
          "단말기 설치나 초기 과정이 어려움": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1,
          "필요한 기능이 없거나 몰라서 불편": 1
        },
        "alerts": [
          {
            "time": "15:27",
            "store": "카페 포르투나",
            "storeId": "313334",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "치명적 결제오류",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자전송 CX일괄문자전송",
            "doneDate": ""
          },
          {
            "time": "15:17",
            "store": "와코",
            "storeId": "203872",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "연결이 끊기거나 포스가 자주 버벅임",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "12:46",
            "store": "아재커피 충정로점",
            "storeId": "206090",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "포인트에대한 시스템적 개념이 저와 맞지 않습니다.",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1차부재 1차부재 / • 대형 키오스크 포인트 노출 및 사용 프로세스 개선 요청 ◦ 대형 키오스크 결제 시 포인트 적립 과정에서 고객 보유 포인트가 함께 노출되는 이슈 발생 ◦ 고객 보유 포인트가 지인에게 노출되어 고객에게 항의를 받았던 사례 ex) 포인트 많으니 너가 커피 쏴라! ◦ 포인트 또한 개인정보로 인식되는 부분이기에, 무분별한 노출에 대한 개선 ",
            "doneDate": ""
          },
          {
            "time": "08:49",
            "store": "큐모텔",
            "storeId": "477443",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "기존 카드 단말기 영수증 출력이 안되서 불편합니다. 사용을 거의 안하게 됩니다",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 금융결제원 JT350 타사단말기 사용중 • 프론트는 섹타나인으로 캣프로는 사용 불가능 안내 • 토스포스 사용 및 연동 케이블 구매 하여 사용가능함 안내드렸으나 거부 • [기록용:필요한 기능이 없어서 불편했어요 / 프린터 / 서비스업 기타] 금융결제원 JT350 타사단말기 사용중 프론트는 섹타나인으로 캣프로는 사용 불가능 안내 토스포스 사용 및 연동 케이",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "18:39",
            "store": "오지구 전자담배 검단마전점",
            "storeId": "534611",
            "indBucket": "도소매",
            "emp": "",
            "install": 3,
            "nps": 8,
            "text": "포스프로그램pc로받아서 사용하는부분이 좀어렵네요 방문설치면 설명듣고 더 좋았을거같아요 설치하고나니 좀편해요",
            "byReaction": false
          },
          {
            "time": "18:22",
            "store": "직지방앗간",
            "storeId": "488966",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "포스가 연결이 안되거나 버퍼링 걸릴때가 있고 상담원 연결이 너ㅡㅡㅡ무 오래걸려요",
            "byReaction": false
          },
          {
            "time": "17:47",
            "store": "미니멍 살롱",
            "storeId": "207292",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "깔끔하고 세련된 디자인 그리고 사용하기 간편",
            "byReaction": false
          },
          {
            "time": "17:08",
            "store": "월리",
            "storeId": "533099",
            "indBucket": "카페",
            "emp": "",
            "install": 4,
            "nps": 7,
            "text": "비교적 친절하게 사용법 설명 해 주심 편리하고 깔끔하다",
            "byReaction": false
          },
          {
            "time": "17:08",
            "store": "이너템플",
            "storeId": "514596",
            "indBucket": "기타",
            "emp": "",
            "install": 3,
            "nps": 10,
            "text": "어렵진 않았는데 완전 쉽진 않아서 오래걸렸습니다 편리하고 간편하고 예쁨",
            "byReaction": false
          },
          {
            "time": "16:57",
            "store": "생각하는 진수학교습소",
            "storeId": "320846",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "상품을 세세하게 분류하여 결제하기 편하네요~ 단지 탭이 항상 켜져있어야해서 조금 불편한 점이 있긴 하네요",
            "byReaction": false
          },
          {
            "time": "16:17",
            "store": "하니 루비셀 뷰티랩 불광점",
            "storeId": "206000",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false
          },
          {
            "time": "15:47",
            "store": "반올림피아노교습소",
            "storeId": "207793",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "학원에서 사용중인데 학생들이름에 메뉴명이라고 적힌게 수정이되지않는다고해서요",
            "byReaction": false
          },
          {
            "time": "15:47",
            "store": "포니커피",
            "storeId": "205810",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "가장 큰 장점은 셀프설치와 관리의 편리함, 선결제 시스템과 토스 자체 쿠폰발행 이벤트 등은 매출에도 도움이 됩니다.",
            "byReaction": false
          },
          {
            "time": "15:38",
            "store": "다이아나 뷰티(Diana beauty)",
            "storeId": "527157",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "리뷰로 바로 쓸 수있고 너무좋아요 지인한테 소개해주고 싶어요 ~",
            "byReaction": false
          },
          {
            "time": "11:00",
            "store": "마음을담다",
            "storeId": "413423",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-05": {
      "updatedAt": "22:25",
      "counts": {
        "menu": {
          "김동욱": 3,
          "김규빈": 1
        }
      },
      "pending": [],
      "voc": {
        "responses": 25,
        "install": {
          "count": 8,
          "low": 2
        },
        "nps": {
          "count": 25,
          "low": 6
        },
        "high": {
          "install": 5,
          "nps": 10
        },
        "npsDist": {
          "0": 2,
          "1": 1,
          "4": 1,
          "5": 2,
          "6": 1,
          "7": 1,
          "8": 4,
          "9": 3,
          "10": 10
        },
        "installDist": {
          "2": 2,
          "3": 1,
          "5": 5
        },
        "byIndustry": {
          "카페": 1,
          "서비스[뷰티,헤어]": 3,
          "기타": 2,
          "요식업": 1,
          "서비스[학원]": 1
        },
        "byTenure": {
          "3개월": {
            "total": 5,
            "low": 2
          },
          "1개월": {
            "total": 2,
            "low": 0
          },
          "12개월": {
            "total": 7,
            "low": 1
          },
          "구매설치": {
            "total": 8,
            "low": 3
          },
          "6개월": {
            "total": 3,
            "low": 1
          }
        },
        "byVan": {
          "KIS": {
            "total": 7,
            "low": 4
          },
          "SECTA9": {
            "total": 3,
            "low": 0
          },
          "SMARTRO": {
            "total": 3,
            "low": 1
          },
          "KSNET": {
            "total": 6,
            "low": 1
          },
          "KPN": {
            "total": 5,
            "low": 1
          },
          "KOVAN": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "사용중 오류가 자주 발생함": 3,
          "필요한 기능이 없거나 몰라서 불편": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 3,
          "고객센터 연락이 매우 힘듦": 1
        },
        "alerts": [
          {
            "time": "21:10",
            "store": "린도디아 더 애월",
            "storeId": "430533",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "최근 결제 오류 시기에 고객센터 연락 1도 안됨",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX OB예정 CX OB예정 / 님 상기매장은 계약해지 언급으로 따로 태그드렸어요 ! cc 님 상기매장은 계약해지 언급으로 따로 태그드렸어요 ! cc",
            "doneDate": ""
          },
          {
            "time": "17:45",
            "store": "월호",
            "storeId": "526347",
            "industry": "카페/베이커리",
            "indBucket": "카페",
            "install": 2,
            "nps": 4,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "이전 포스기와 비교해 프로그램이 불편함",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              },
              {
                "q": "추천의향",
                "score": 4,
                "text": "무료인것빼면 기계도 너무 크고 별로인듯",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 이전 프로그램사에서 고객정보 이관이 안되어 고객정보를 일일히 수기입력중 ◦ 아쉽지만 이전 고객내역이관이 안되면 수기입력으로 진행하셔야 하는 점 안내 • 재고수량 수정 관련 편의성 개선 요청 ◦ 현재도 프로그램내 상품 할인 탭에서 상품별 재고수량 커스텀 가능한 부분 안내. 이마저도 불편하다 하시어 엑셀파일로 한번에 수정 가능한 부분 안내드렸으나 윈도우 디",
            "doneDate": ""
          },
          {
            "time": "17:04",
            "store": "한봄 Science Lab & Studio",
            "storeId": "306605",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "종이 영수증이 안됨",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:45",
            "store": "스피릿 코어 랩",
            "storeId": "533974",
            "industry": "음식점/주점",
            "indBucket": "요식업",
            "install": 2,
            "nps": 8,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "기사님 방문전화라도 주셨으면 했는데 셀프로 다했어요",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "[기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 기타] [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 기타]",
            "doneDate": ""
          },
          {
            "time": "15:15",
            "store": "따따네일",
            "storeId": "512902",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "기기가 예쁘기만함",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:09",
            "store": "훈이네 만원족발",
            "storeId": "431928",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "수시로 안됨 보상없음",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "12:53",
            "store": "오스테리아 냅",
            "storeId": "206513",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "토스장애 및 후속조치 미흡",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• • 무선단말기 보상 완료 건 히스토리 무선단말기 보상 완료 건 접수 일시 2026-06-30 사업자번호/상호명 4691003001 / 오스테리아 냅 작성자 백합 인입채널 채팅 상담 일시 (통화시간 or 채팅링크) 오스테리아냅-6a252b62f0aa5fb1566c 리스크 강도 일반 VOC 민원유형 장비 / 기술 이슈 내용 • 해지 신청 및 위약금 문의 차",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "19:29",
            "store": "하루댕핏 강아지유치원",
            "storeId": "491045",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "결제가 편해요.",
            "byReaction": false
          },
          {
            "time": "17:54",
            "store": "토리네일",
            "storeId": "185854",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "일단 전 무료인게 젤 좋습니다",
            "byReaction": false
          },
          {
            "time": "16:54",
            "store": "닥터브레인 상담센터",
            "storeId": "176225",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "예쁘고 편리하고 좋아요",
            "byReaction": false
          },
          {
            "time": "16:45",
            "store": "제이블랑",
            "storeId": "532404",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "모두만족 모두만족",
            "byReaction": false
          },
          {
            "time": "15:54",
            "store": "소나무",
            "storeId": "207050",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "전반적으로좋았고 진동벨연동ㅇㅣ아쉽습니다 지난번 먹통된사건도 아쉽네요",
            "byReaction": false
          },
          {
            "time": "15:15",
            "store": "벙커베이스",
            "storeId": "532397",
            "indBucket": "기타",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "설치가 간편합니다 필수라거 생각합니다 매출 상승 및 유지관리에 도움이 됩니다.",
            "byReaction": false
          },
          {
            "time": "15:09",
            "store": "핑크개러지",
            "storeId": "413626",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 너무편리합니다",
            "byReaction": false
          },
          {
            "time": "15:09",
            "store": "엘리트중국어",
            "storeId": "432127",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "간편하고 사용편리합니다.",
            "byReaction": false
          }
        ]
      }
    },
    "2026-07-06": {
      "updatedAt": "23:16",
      "counts": {
        "as": {
          "최민석": 23,
          "송태양": 22,
          "심성현": 31,
          "김기범": 7,
          "배선유": 22,
          "김규빈": 5,
          "서상원": 5,
          "김동욱": 18,
          "김현기": 17
        },
        "onboarding": {
          "최민석": 6,
          "심성현": 5,
          "김기범": 1,
          "김현기": 4,
          "김규빈": 3,
          "김동욱": 2,
          "서상원": 3,
          "송태양": 2,
          "배선유": 1
        },
        "extern": {
          "서상원": 5,
          "김기범": 1,
          "배선유": 2,
          "김동욱": 4
        },
        "menu": {
          "서상원": 2,
          "배선유": 16,
          "김규빈": 14,
          "김동욱": 1
        },
        "transfer": {
          "최민석": 1,
          "송태양": 11,
          "김동욱": 1
        },
        "delivery": {
          "최민석": 2,
          "김현기": 2,
          "심성현": 1
        }
      },
      "pending": [],
      "voc": {
        "responses": 21,
        "install": {
          "count": 2,
          "low": 0
        },
        "nps": {
          "count": 21,
          "low": 6
        },
        "high": {
          "install": 1,
          "nps": 5
        },
        "npsDist": {
          "0": 2,
          "1": 1,
          "2": 2,
          "5": 1,
          "6": 4,
          "7": 2,
          "8": 1,
          "9": 3,
          "10": 5
        },
        "installDist": {
          "4": 1,
          "5": 1
        },
        "byIndustry": {
          "요식업": 1,
          "서비스[학원]": 1
        },
        "byTenure": {
          "6개월": {
            "total": 6,
            "low": 3
          },
          "3개월": {
            "total": 4,
            "low": 1
          },
          "1개월": {
            "total": 6,
            "low": 0
          },
          "12개월": {
            "total": 3,
            "low": 2
          },
          "구매설치": {
            "total": 2,
            "low": 0
          }
        },
        "byVan": {
          "KPN": {
            "total": 5,
            "low": 3
          },
          "SECTA9": {
            "total": 1,
            "low": 0
          },
          "KOCES": {
            "total": 1,
            "low": 0
          },
          "KSNET": {
            "total": 3,
            "low": 1
          },
          "DAOU": {
            "total": 2,
            "low": 0
          },
          "SMARTRO": {
            "total": 7,
            "low": 2
          },
          "KIS": {
            "total": 2,
            "low": 0
          }
        },
        "reasonCounts": {
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1,
          "사용중 오류가 자주 발생함": 3,
          "단말기 설치나 초기 과정이 어려움": 1,
          "필요한 기능이 없거나 몰라서 불편": 1
        },
        "alerts": [
          {
            "time": "23:42",
            "store": "샤브앤 구로점",
            "storeId": "331359",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "너무자주 문제가 생겨서",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": ""
          },
          {
            "time": "15:59",
            "store": "원마일",
            "storeId": "208740",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "잦은 오류 기계치인 사람한테는 다소 어려움",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 미팅중이셔서 길게는 통화가 어렵지만 처음 설치시 매우 버벅거리셨고 그 점에 대한 불만을 적어주심. 다행히 정상적으로 사용중 • [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 뷰티헤어] 미팅중이셔서 길게는 통화가 어렵지만 처음 설치시 매우 버벅거리셨고 그 점에 대한 불만을 적어주심. 다행히 정상적으로 사용중 [기록용:단말기 설",
            "doneDate": ""
          },
          {
            "time": "15:44",
            "store": "뷰티페이스",
            "storeId": "379150",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "기계가 안됨",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 현재 매장이 아닌 관계로 익일 오전10시 30분 예약 점검 안내 현재 매장이 아닌 관계로 익일 오전10시 30분 예약 점검 안내 / 통화거부 통화거부",
            "doneDate": ""
          },
          {
            "time": "15:40",
            "store": "오브빈(of bin)",
            "storeId": "316315",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "네이버 리뷰/플레이스와 직접 연동되어 쌓이는 구조가 아니라 마케팅 자산으로 이어지는 효과가 약하다고 느꼈습니다. 또 토스 포인트 기반이라 실제로 사용하거나 참여하는 고객이 많지 않아 체감 효용이 크지 않았습니다. 그래서 매장 운영 관점에서 실질적인 도움이 적다고 판단했습니다.",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "[기록용:기타이슈/네이버연동/서비스업 뷰티헤어] [기록용:기타이슈/네이버연동/서비스업 뷰티헤어]",
            "doneDate": ""
          },
          {
            "time": "15:29",
            "store": "키브 스튜디오",
            "storeId": "197778",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "오류가 너무 많아요.",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:10",
            "store": "작업실 국어학원",
            "storeId": "318856",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "학원업에 전혀 쓸데없는 기능만 있음",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "• 링크통해 결제하는 OFFPG결제 관련 개발중인지 확인 및 요청 드려보겠음 • 입금계좌 제신고는 9개 카드사에 자사 측에 대행을 맡겨주시면 수수료 33000원 비용 발생, 혹은 직접 요청해주시면 됨 안내 • [기록용:필요한 기능이 없어서 불편했어요 / OFFPG / 서비스업 학원] 링크통해 결제하는 OFFPG결제 관련 개발중인지 확인 및 요청 드려보겠음 ",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "17:44",
            "store": "9회말스크린야구존",
            "storeId": "421250",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리하고 페이스페이가 되니 좋아요",
            "byReaction": false
          },
          {
            "time": "16:35",
            "store": "자트(Satt)",
            "storeId": "493867",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "무료임. 키오스크기능으로 1인사장에게 매우 도움됨. 마케팅마세지 월 300건 무료는 진짜 획기적임",
            "byReaction": false
          },
          {
            "time": "15:59",
            "store": "빵순이피자앤파스타",
            "storeId": "206925",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "사용편리",
            "byReaction": false
          },
          {
            "time": "15:35",
            "store": "정미니하우스",
            "storeId": "309077",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편합니다. 연동이 안되는 부분만 빼고는 만족스럽습니다.",
            "byReaction": false
          },
          {
            "time": "15:14",
            "store": "오름국어교습소",
            "storeId": "429961",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 6,
            "text": "결제마다 폰에 접속하는게 불펼함",
            "byReaction": false
          }
        ]
      }
    },
    "2026-06-28": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 27,
        "install": {
          "count": 1,
          "low": 0
        },
        "nps": {
          "count": 27,
          "low": 13
        },
        "high": {
          "install": 0,
          "nps": 9
        },
        "npsDist": {
          "0": 6,
          "2": 1,
          "3": 2,
          "4": 2,
          "5": 2,
          "8": 3,
          "9": 2,
          "10": 9
        },
        "installDist": {
          "3": 1
        },
        "byIndustry": {
          "요식업": 1
        },
        "byTenure": {
          "3개월": {
            "total": 7,
            "low": 5
          },
          "12개월": {
            "total": 5,
            "low": 2
          },
          "구매설치": {
            "total": 1,
            "low": 0
          },
          "1개월": {
            "total": 7,
            "low": 3
          },
          "6개월": {
            "total": 7,
            "low": 3
          }
        },
        "byVan": {
          "KIS": {
            "total": 5,
            "low": 4
          },
          "NICE": {
            "total": 7,
            "low": 3
          },
          "SECTA9": {
            "total": 4,
            "low": 2
          },
          "KPN": {
            "total": 3,
            "low": 0
          },
          "SMARTRO": {
            "total": 3,
            "low": 2
          },
          "KSNET": {
            "total": 4,
            "low": 2
          },
          "DAOU": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 1,
          "사용중 오류가 자주 발생함": 9,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2,
          "필요한 기능이 없거나 몰라서 불편": 1
        },
        "alerts": [
          {
            "time": "22:22",
            "store": "요가피플",
            "storeId": "406602",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "가끔 인터넷 연결이 잘 안되있을때 그러는지 멈출때가 있네요?",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "18:10",
            "store": "벼리네점빵(KIS)",
            "storeId": "463301",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "바쁜시간에..오류로 결제불가..",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "17:51",
            "store": "국밥쌀롱&포차쌀롱",
            "storeId": "362058",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "몇일전 토스프로그램장애로 손님들 돌아가  피해입음",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "17:21",
            "store": "레오 밸런스 랩(LEO BALANCE LAB)",
            "storeId": "375914",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "오류도 많고 일반단말기쓰는게 더 편한거같아요",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "16:21",
            "store": "라온J",
            "storeId": "375770",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "카드단말기및 포스가 이용되지않아서 불편했어요.긴급결제도안되서 손님들이 불편해했습니다.",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:46",
            "store": "선산곱창",
            "storeId": "321845",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "에러가남  가입자에게 빨리통보하고 해결해야지 고객센터 전화불통     답답하게 일처리함",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:45",
            "store": "달콤풀",
            "storeId": "318182",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "써보니 포스화면 글자가 잘 안보여도 크기를  조절할수 있으면 좋겠어요 그리고 키오스크 화면에 광고도 크기를 줄이거나 할슈있으면 좋겠어요 또 이번 결제불거 사건으로 추천 하고 싶지 않아요 비상결제 모드도 제대로 되지 않아 너무 곤란 했어요",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:36",
            "store": "수호정",
            "storeId": "197938",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "지금 2번정도 크게 토스 문제로 오류가 걸려 결제할 때 진땀뺀적이 있었음.",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:20",
            "store": "양산국밥(정관점)",
            "storeId": "422945",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "몇일 전 전산먹통 전까지는 10점 만점이었음.",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:09",
            "store": "고토(KO TO mens)",
            "storeId": "473686",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "아 그래요 제가 오픈한지 한달차긴한데 엇그제 토스 시스템먹통되서 예약도안되고 들어갈수없어서 생긴 불이익은 매출산정안되니까 전혀보상받지못하죠 :) 아그리고 뭐지원금 마니준다퍼다준다 이런말저런말다싸질러놓고 달랑 단말기하나에 추첨통해준다고 써져있고 과대광고 지림",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:05",
            "store": "크렘 에 카도",
            "storeId": "199418",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "에러가 너무 자주일어남",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "11:08",
            "store": "블랑포유",
            "storeId": "461175",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "너무느리고 연결도자주끊깁니다 전에 신화포스썻었는데 너무비교되고 해지하고싶은데 1년은써야해서참고있어요 진심으로 별로에요 개선되었음합니다.",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "10:14",
            "store": "등촌샤브칼국수 남영역점",
            "storeId": "310375",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "잦은 포스 오류와 상담원 통화 난이",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": ""
          }
        ],
        "praises": [
          {
            "time": "18:10",
            "store": "한지촌",
            "storeId": "472511",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리함",
            "byReaction": false
          },
          {
            "time": "17:46",
            "store": "이레테크앤컨설팅 주식회사",
            "storeId": "313470",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "매우 만족합니다. 기능도 편리하고 사용하기에 너무 좋습니다.",
            "byReaction": false
          },
          {
            "time": "16:10",
            "store": "피부미희",
            "storeId": "457783",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "전체적으로 뷰티업을 하는 사람에게 금액이라던지 기록이라던지가 중요한데  전체 다 될수 있는 부분이 가장 좋습니다",
            "byReaction": false
          },
          {
            "time": "15:21",
            "store": "나로에스테틱",
            "storeId": "417926",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편해요",
            "byReaction": false
          }
        ]
      }
    }
  }
};
