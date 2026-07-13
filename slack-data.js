/*
 * 슬랙 원격 처리 채널(AS요청·명의변경 등) 집계 데이터 (날짜별 누적)
 * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.
 */
window.SLACK_DATA = {
  "version": 349,
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 원격예약 수업중, 통화 불가 / 익일 13:00 예약 수업중, 통화 불가 / 익일 13:00 예약 / 2차부재 2차부재 2차 부재 솔라피 발송 2차 부재 솔라피 발송",
            "doneDate": "2026-07-08"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-07-08"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 더가치플래닛 배달대행사 사용중 • 현재 부릉/생각대로 2개사 연동가능한 부분 설명 • 자사 고객센터 자정까지 운영하니 여유로운 시간대에 연락주시면 편하게 도움받을 수 있음 안내 • [기록용:필요한 기능이 없어서 불편했어요 / 배달대행 / 요식업] 더가치플래닛 배달대행사 사용중 현재 부릉/생각대로 2개사 연동가능한 부분 설명 자사 고객센터 자정까지 운영하",
            "doneDate": "2026-07-08"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• OB완료 • 카드가맹 관련 서류 보완 및 반려 건으로 이미 고객 온도감이 높은 상태에서 인입된 이며, 인입 당시 상담원 응대에 대한 불만을 토로. • 통화내역 확인 결과, 상담원 응대 자체에 대한 문제점은 발견되지 않음. 다만, 정확한 히스토리 확인을 위해 대기 시간이 길어졌고, 해당 부분에서 고객 불만이 발생한 것으로 확인. • 관련 내용에 대해 고객",
            "doneDate": "2026-07-07"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 프린터 출력불가 증상으로 원격 점검 도움드림 • 대리점 별 이익추구 및 정책이 다른 관계로 차이가 발생할 수 있음 안내 -&gt; 수긍 • 고객센터 유선번호 안내드린 후 통화종료 • [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 도소매업] 프린터 출력불가 증상으로 원격 점검 도움드림 대리점 별 이익추구 및 정책이 다른 관계로 차이가 발생할 수",
            "doneDate": "2026-07-07"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "2차부재 2차부재",
            "doneDate": "2026-07-09"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 유니온페이 광고 OFF / 선불형 매장으로 설정하여 테이블 탭 없애드림 • 추가 문의사항 없으셔서 OB종료 • [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 카페] 유니온페이 광고 OFF / 선불형 매장으로 설정하여 테이블 탭 없애드림 추가 문의사항 없으셔서 OB종료 [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 카페]",
            "doneDate": "2026-07-10"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 통화품질 관련 사과 • 프론트 키인결제 가능한지 여부 문의하셔서 불가능 안내 • CAT단말기/터미널 기기추가 안내드렸으나 거부 • [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 서비스업 숙박] 통화품질 관련 사과 프론트 키인결제 가능한지 여부 문의하셔서 불가능 안내 CAT단말기/터미널 기기추가 안내드렸으나 거부 [기록용: 고객센터에 연결하거나 ",
            "doneDate": "2026-07-10"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 내장 카메라 성능,스펙이 부족한 문제로 블루투스 스캐너 연동 가능성 문의 -&gt; 해당 내용 담당부서에 향후 개발될 수 있도록 전달 드려보겠음 시간 양해 안내 내장 카메라 성능,스펙이 부족한 문제로 블루투스 스캐너 연동 가능성 문의 - 해당 내용 담당부서에 향후 개발될 수 있도록 전달 드려보겠음 시간 양해 안내 / [기록용:필요한 기능이 없어서 불편했",
            "doneDate": "2026-07-10"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-07-13": {
      "updatedAt": "15:26",
      "counts": {
        "as": {
          "서상원": 10,
          "김현기": 19,
          "배선유": 16,
          "심성현": 16,
          "김기범": 6,
          "송태양": 7,
          "김규빈": 5
        },
        "onboarding": {
          "송태양": 1,
          "심성현": 7,
          "배선유": 4,
          "서상원": 3,
          "김현기": 2,
          "김규빈": 1
        },
        "extern": {
          "서상원": 4
        },
        "transfer": {
          "송태양": 10,
          "심성현": 3
        },
        "menu": {
          "배선유": 8,
          "서상원": 1,
          "김규빈": 4
        },
        "delivery": {
          "최민석": 1
        }
      },
      "pending": [
        {
          "time": "15:23",
          "store": "수고했어 오늘도",
          "biz": "5773800478",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "15:18",
          "store": "노원경춘마루",
          "biz": "8318102153",
          "handler": "김현기",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "15:15",
          "store": "처갓집반찬",
          "biz": "",
          "handler": "송태양",
          "cat": "transfer",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "15:00",
          "store": "황제족발",
          "biz": "8990603995",
          "handler": "송태양",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:49",
          "store": "등촌샤브칼국수(문지점)",
          "biz": "2340303858",
          "handler": "심성현",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        },
        {
          "time": "14:32",
          "store": "키노(KINO)",
          "biz": "6010666898",
          "handler": "김현기",
          "cat": "as",
          "reasons": [
            "1차 부재"
          ]
        },
        {
          "time": "13:13",
          "store": "뮤리엘 스킨&amp;왁싱",
          "biz": "1952300573",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "1차 부재"
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
        }
      ],
      "voc": {
        "responses": 10,
        "install": {
          "count": 5,
          "low": 2
        },
        "nps": {
          "count": 10,
          "low": 2
        },
        "high": {
          "install": 2,
          "nps": 4
        },
        "npsDist": {
          "0": 1,
          "5": 1,
          "7": 1,
          "8": 1,
          "9": 2,
          "10": 4
        },
        "installDist": {
          "1": 2,
          "4": 1,
          "5": 2
        },
        "byIndustry": {
          "기타": 2,
          "서비스[학원]": 2,
          "서비스[뷰티,헤어]": 1
        },
        "byTenure": {
          "1개월": {
            "total": 2,
            "low": 0
          },
          "구매설치": {
            "total": 5,
            "low": 2
          },
          "3개월": {
            "total": 3,
            "low": 1
          }
        },
        "byVan": {
          "KPN": {
            "total": 3,
            "low": 1
          },
          "KIS": {
            "total": 4,
            "low": 2
          },
          "SMARTRO": {
            "total": 3,
            "low": 0
          }
        },
        "reasonCounts": {
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2,
          "필요한 기능이 없거나 몰라서 불편": 1,
          "단말기 설치나 초기 과정이 어려움": 1
        },
        "alerts": [
          {
            "time": "15:13",
            "store": "원픽(ONE PICK)",
            "storeId": "463246",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 1,
            "nps": 9,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "편하고 좋았습니다.",
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
            "store": "모쓰 바버샵 (MOTH BARBERSHOP)",
            "storeId": "539489",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "아니 바버샵에 이라고말했더니 이딴걸 가져다줘요?",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "존나불편해요진짜 그러고 환불도 안된대요 박스버렸다고",
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
            "time": "15:06",
            "store": "얼큰이맵닥",
            "storeId": "432106",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "배달의민족 연결이 원할하지않습니다. 배달연결해놔도 다 끊겨요 하루하루 다시해야합니다. 연결이 안되어있으니 총매출 보기가힘들어요.",
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
            "time": "15:13",
            "store": "금호모터스",
            "storeId": "544763",
            "indBucket": "기타",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "쉽게설치가능해서좋아요 직관적으로 쉽게사용가능",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:13",
            "store": "오케이스크린골프",
            "storeId": "541367",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "편리해요 깔끔하고 편리해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:06",
            "store": "더 콤(THE COMB)",
            "storeId": "438070",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "08:41",
            "store": "씨엔 엔터테인먼트(C. N Entertainment)",
            "storeId": "486554",
            "indBucket": "기타",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "설치하기 편리함 깔끔하고 마음에 듬",
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "2차부재 2차부재",
            "doneDate": "2026-06-30"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 재연동 도와드렸고 프론트 교체 안내 및 출고 접수 완료 • 프론트 수령 후 재연락 주시면 재온보딩 도움 드리겠음 안내 • 교체 후에도 동일증상시 통신점검 받아보시길 권장 안내 후 통화종료 • [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 서비스업 뷰티학원] 재연동 도와드렸고 프론트 교체 안내 및 출고 접수 완료 프론트 수령 후 재연락 주시면 ",
            "doneDate": "2026-07-01"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "통화거부 통화거부",
            "doneDate": "2026-07-01"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• • 민원 인입 매장으로 매우 강성 • 고발의지 표명한 상태로 님 직접 OB진행 예정 히스토리 민원 인입 매장으로 매우 강성 고발의지 표명한 상태로 님 직접 OB진행 예정 접수 일시 2026-06-24 사업자번호/상호명 2909202509 / 동광주한우리독서토론논술학원 작성자 홍승기 인입채널 전화 상담 일시 (통화시간 or 채팅링크) 14:20경 리스크 ",
            "doneDate": "2026-07-01"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 금액입력결제모드로 결제시 과세로 책정되어 면세사업자인 학원업종에서는 추천드리지 않음 -&gt; 수긍 • 면세상품 등록 후 키오스크모드 설정 해드렸고 사용해보시겠다고 함 • [기록용:필요한 기능이 없어서 불편했어요 / 금액입력결제모드 / 서비스업 학원] 금액입력결제모드로 결제시 과세로 책정되어 면세사업자인 학원업종에서는 추천드리지 않음 - 수긍 면세상품 ",
            "doneDate": "2026-07-01"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "2차부재 2차부재",
            "doneDate": "2026-07-01"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-07-02"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• • 원격 인입건으로 처리 완료 원격 인입건으로 처리 완료 상호: 남성컷트.맨즈컷하우스 / KPN 오프/온라인: 온라인 / 임대 사업자번호 : 4011707688 대표자명 : 송주희 대표자 전화번호 : <tel:010-8115-6318|010-8115-6318[갤] 가게 연락처 : <tel:010-8115-6318|010-8115-6318 주소 : 울산광",
            "doneDate": "2026-07-02"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• OFFPG로 사용중이시며 다중TID 등록되어있어 지역화폐 결제 가능하나 금액입력결제모드로 사용중이셔서 결제가 안되는 상황으로 추정 • 현재 시술중으로 바쁘시다며 끊으셔서 차주 월요일 재연락드려 점검 진행 예정 OFFPG로 사용중이시며 다중TID 등록되어있어 지역화폐 결제 가능하나 금액입력결제모드로 사용중이셔서 결제가 안되는 상황으로 추정 현재 시술중으로",
            "doneDate": "2026-07-02"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• • 민원인입 매장 처리예정 민원인입 매장 처리예정 접수 일시 2026-07-02 사업자번호/상호명 2179069817 / 굿스터디학원 작성자 박현주 인입채널 전화 상담 일시 (통화시간 or 채팅링크) 2026-07-02 1300 리스크 강도 일반 VOC 민원유형 제신고 / 가맹 이슈 내용 • 우리카드 정산계좌 확인 요청 인입 • 6/22 서류제출 후 6",
            "doneDate": "2026-07-02"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1. 네이버예약 연동 미지원 (가장 큰 불만) ◦ 출시 당시 네이버예약 연동을 지원한다고 안내했으나 아직 미지원 상태 가장 치명적인 문제로 인식하고 있음. ◦ 네이버예약과 연동되지 않아 고객관리 앱 + 토스포스를 동시에 사용해야 하는 상황. ◦ 네이버예약으로 접수된 예약을 토스포스에 다시 수기로 입력해야 하는 비효율 발생. ◦ 토스포스만 단독으로 사용하기 ",
            "doneDate": "2026-07-02"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-07-03"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / • 대형 키오스크 포인트 노출 및 사용 프로세스 개선 요청 ◦ 대형 키오스크 결제 시 포인트 적립 과정에서 고객 보유 포인트가 함께 노출되는 이슈 발생 ◦ 고객 보유 포인트가 지인에게 노출되어 고객에게 항의를 받았던 사례 ex) 포인트 많으니 너가 커피 쏴라! ◦ 포인트 또한 개인정보로 인식되는 부분이기에, 무분별한 노출에 대한 개선 ",
            "doneDate": "2026-07-04"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 금융결제원 JT350 타사단말기 사용중 • 프론트는 섹타나인으로 캣프로는 사용 불가능 안내 • 토스포스 사용 및 연동 케이블 구매 하여 사용가능함 안내드렸으나 거부 • [기록용:필요한 기능이 없어서 불편했어요 / 프린터 / 서비스업 기타] 금융결제원 JT350 타사단말기 사용중 프론트는 섹타나인으로 캣프로는 사용 불가능 안내 토스포스 사용 및 연동 케이",
            "doneDate": "2026-07-04"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 이전 프로그램사에서 고객정보 이관이 안되어 고객정보를 일일히 수기입력중 ◦ 아쉽지만 이전 고객내역이관이 안되면 수기입력으로 진행하셔야 하는 점 안내 • 재고수량 수정 관련 편의성 개선 요청 ◦ 현재도 프로그램내 상품 할인 탭에서 상품별 재고수량 커스텀 가능한 부분 안내. 이마저도 불편하다 하시어 엑셀파일로 한번에 수정 가능한 부분 안내드렸으나 윈도우 디",
            "doneDate": "2026-07-05"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• • 무선단말기 보상 완료 건 히스토리 무선단말기 보상 완료 건 접수 일시 2026-06-30 사업자번호/상호명 4691003001 / 오스테리아 냅 작성자 백합 인입채널 채팅 상담 일시 (통화시간 or 채팅링크) 오스테리아냅-6a252b62f0aa5fb1566c 리스크 강도 일반 VOC 민원유형 장비 / 기술 이슈 내용 • 해지 신청 및 위약금 문의 차",
            "doneDate": "2026-07-05"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-07-06"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 미팅중이셔서 길게는 통화가 어렵지만 처음 설치시 매우 버벅거리셨고 그 점에 대한 불만을 적어주심. 다행히 정상적으로 사용중 • [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 뷰티헤어] 미팅중이셔서 길게는 통화가 어렵지만 처음 설치시 매우 버벅거리셨고 그 점에 대한 불만을 적어주심. 다행히 정상적으로 사용중 [기록용:단말기 설",
            "doneDate": "2026-07-06"
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
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 링크통해 결제하는 OFFPG결제 관련 개발중인지 확인 및 요청 드려보겠음 • 입금계좌 제신고는 9개 카드사에 자사 측에 대행을 맡겨주시면 수수료 33000원 비용 발생, 혹은 직접 요청해주시면 됨 안내 • [기록용:필요한 기능이 없어서 불편했어요 / OFFPG / 서비스업 학원] 링크통해 결제하는 OFFPG결제 관련 개발중인지 확인 및 요청 드려보겠음 ",
            "doneDate": "2026-07-06"
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
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
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-13": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 15,
        "install": {
          "count": 7,
          "low": 1
        },
        "nps": {
          "count": 15,
          "low": 1
        },
        "high": {
          "install": 4,
          "nps": 10
        },
        "npsDist": {
          "5": 1,
          "7": 1,
          "9": 3,
          "10": 10
        },
        "installDist": {
          "1": 1,
          "3": 1,
          "4": 1,
          "5": 4
        },
        "byIndustry": {
          "요식업": 3,
          "서비스[뷰티,헤어]": 1,
          "서비스[학원]": 1,
          "카페": 1,
          "도소매": 1
        },
        "byTenure": {
          "1개월": {
            "total": 4,
            "low": 0
          },
          "6개월": {
            "total": 2,
            "low": 1
          },
          "구매설치": {
            "total": 7,
            "low": 1
          },
          "12개월": {
            "total": 2,
            "low": 0
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 2,
            "low": 0
          },
          "SECTA9": {
            "total": 3,
            "low": 0
          },
          "KSNET": {
            "total": 3,
            "low": 1
          },
          "KPN": {
            "total": 3,
            "low": 0
          },
          "KIS": {
            "total": 3,
            "low": 1
          },
          "NICE": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1
        },
        "alerts": [
          {
            "time": "22:00",
            "store": "도전해동검도",
            "storeId": "133294",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "영수증안나오는거불편하고 거래취소안되는거 불편합니다",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 전자영수증 설정은 이미 하고계심 -&gt; 영수프린터 사용니즈로 렌탈비용 발생 안내 • 단말기 자체에서 결제취소도 가능했으면 좋겠다는 의견 -&gt; 해당 내용 담당부서에 전달드려보겠으나, 개발가능성은 매우 낮은 점, 자사 프론트는 토스포스 연동으로 사용 하는 것으로 개발된 제품인 점 설명 전자영수증 설정은 이미 하고계심 - 영수프린터 사용니즈로 렌탈비",
            "doneDate": "2026-06-13"
          },
          {
            "time": "15:11",
            "store": "용남문구점",
            "storeId": "505379",
            "industry": "도소매",
            "indBucket": "도소매",
            "install": 1,
            "nps": 10,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "기기등록하기가 쉬워서 좋아요 :grinning:",
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
            "time": "21:43",
            "store": "떡대장",
            "storeId": "503596",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "다좋습니다 굿입니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "17:27",
            "store": "브로이즘",
            "storeId": "417998",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "너무편리하고 예뻐요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "17:12",
            "store": "나미스뷰티",
            "storeId": "466302",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "쓰기좋아요 편리한데 예약금 해제하면 계산할때 원래금액이 안나오는게 불편해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:22",
            "store": "카페(Cafe) 로몬",
            "storeId": "193270",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "포스 화면에서 수동 결제 후 다시 키오스크 켜는 버튼 누를 필요없이 키오스크 자동 전환 하는 버튼이나 설정 만들어주시면 정말 감사하겠습니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:41",
            "store": "서울남부범죄피해자지원센터부설(희망카페나무)",
            "storeId": "500805",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "친절 다양한 정보제공",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:22",
            "store": "유의미커피로스터즈(역삼점)",
            "storeId": "196008",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "UI가 쉽고 의견이 빨리반영된다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "01:07",
            "store": "올라이트 술집",
            "storeId": "490496",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절하고 상세하게 설명해 주셨습니다 모든게 편하네요",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-14": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 16,
        "install": {
          "count": 5,
          "low": 1
        },
        "nps": {
          "count": 16,
          "low": 3
        },
        "high": {
          "install": 2,
          "nps": 9
        },
        "npsDist": {
          "0": 1,
          "5": 2,
          "7": 1,
          "8": 1,
          "9": 2,
          "10": 9
        },
        "installDist": {
          "1": 1,
          "3": 2,
          "5": 2
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 2,
          "도소매": 1,
          "서비스[숙박]": 1,
          "서비스[학원]": 1
        },
        "byTenure": {
          "3개월": {
            "total": 4,
            "low": 1
          },
          "구매설치": {
            "total": 5,
            "low": 2
          },
          "6개월": {
            "total": 2,
            "low": 0
          },
          "12개월": {
            "total": 2,
            "low": 0
          },
          "1개월": {
            "total": 3,
            "low": 0
          }
        },
        "byVan": {
          "SECTA9": {
            "total": 4,
            "low": 2
          },
          "KPN": {
            "total": 3,
            "low": 1
          },
          "NICE": {
            "total": 1,
            "low": 0
          },
          "KSNET": {
            "total": 3,
            "low": 0
          },
          "KIS": {
            "total": 1,
            "low": 0
          },
          "DAOU": {
            "total": 1,
            "low": 0
          },
          "SMARTRO": {
            "total": 2,
            "low": 0
          },
          "KOVAN": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1,
          "단말기 설치나 초기 과정이 어려움": 1
        },
        "alerts": [
          {
            "time": "20:13",
            "store": "팩토아이매쓰학원",
            "storeId": "383365",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "결제는 편하나 영수증 출력이 불편",
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
            "time": "18:49",
            "store": "오라헤어",
            "storeId": "496524",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "무료이용으로 여러가지 프로그램이나 혜택이 좋으나 신규이면 정말 괜찮지만 바꾸기가 쉽지 않다.",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 네이버플레이스 연동요청 -&gt; 불가능 안내 • 핸드SOS 고객정보 이관 방법 문의 -&gt; 핸드SOS 측에 고객정보 엑셀자료 추출요청 하신 뒤 플레이스 고객센터로 연락주시면 이관 받아보실 수 있음 안내. • 고객센터번호 안내 완료 • [기록용: 기타이슈/ 고객정보이관 / 서비스업 뷰티헤어] 네이버플레이스 연동요청 - 불가능 안내 핸드SOS 고객정보",
            "doneDate": "2026-06-14"
          },
          {
            "time": "05:45",
            "store": "잉글리시아이대방더퍼스트영어교습소",
            "storeId": "424008",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "설치 너무힘들었고 지금도 사용하기 불편함",
                "cat": "단말기 설치나 초기 과정이 어려움"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "사용하기 불편",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 수업중으로 통화 힘듦 • 고객센터 번호 안내드렸고 추후 연락주시면 재연동 도움드리겠음 안내 • [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 학원] 수업중으로 통화 힘듦 고객센터 번호 안내드렸고 추후 연락주시면 재연동 도움드리겠음 안내 [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 학원]",
            "doneDate": "2026-06-14"
          }
        ],
        "praises": [
          {
            "time": "17:12",
            "store": "피제리아오로",
            "storeId": "368012",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "진짜개편함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:18",
            "store": "경대북문꽃집 쁘띠플라워",
            "storeId": "335671",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "사용하기가 편리 간단하게 사용하기 편해서",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:59",
            "store": "윤프로CAR",
            "storeId": "188163",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "결제편함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:42",
            "store": "에프제이수학(FJ Math)",
            "storeId": "407225",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리.간편.저렴",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:29",
            "store": "멍멍나래 장현점",
            "storeId": "195151",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "비용이 안나가는게 정말 좋아요!",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:18",
            "store": "그린파크여관",
            "storeId": "496034",
            "indBucket": "서비스[숙박]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "상담도 좋앗고 설치가 간편해서 좋앗어요 사용하기좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:12",
            "store": "금강 힐링캠프",
            "storeId": "405331",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "무선으로 와이파이만 연결해 사용할수 있는점이 만족스럽습니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "12:32",
            "store": "메리멜트커피(MERRY MELT COFFEE)",
            "storeId": "448167",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "전반적으로 사용하기 편함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "09:01",
            "store": "에스엔피이(SNPE)바른자세척추운동광교상현역점",
            "storeId": "462494",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "결제가 쉽고 편함",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-15": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 19,
        "install": {
          "count": 7,
          "low": 0
        },
        "nps": {
          "count": 19,
          "low": 3
        },
        "high": {
          "install": 6,
          "nps": 12
        },
        "npsDist": {
          "0": 1,
          "3": 1,
          "5": 1,
          "6": 1,
          "7": 1,
          "8": 1,
          "9": 1,
          "10": 12
        },
        "installDist": {
          "4": 1,
          "5": 6
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 4,
          "카페": 1,
          "서비스[학원]": 1,
          "요식업": 1
        },
        "byTenure": {
          "구매설치": {
            "total": 7,
            "low": 0
          },
          "1개월": {
            "total": 7,
            "low": 1
          },
          "12개월": {
            "total": 2,
            "low": 1
          },
          "3개월": {
            "total": 2,
            "low": 0
          },
          "6개월": {
            "total": 1,
            "low": 1
          }
        },
        "byVan": {
          "KSNET": {
            "total": 3,
            "low": 1
          },
          "NICE": {
            "total": 2,
            "low": 0
          },
          "KPN": {
            "total": 2,
            "low": 0
          },
          "SMARTRO": {
            "total": 7,
            "low": 1
          },
          "KIS": {
            "total": 3,
            "low": 1
          },
          "SECTA9": {
            "total": 1,
            "low": 0
          },
          "DAOU": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1
        },
        "alerts": [
          {
            "time": "17:10",
            "store": "유일무",
            "storeId": "407201",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "카드결제시 언제통장에 들어가는지 알수가없어서 자꾸 확인하게됨 그리고 결제후에 예약등록하면 다시 결제를해야해서 복잡함;",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 카드결제대금 정산은 영업일기준 23일 소요됨 양해 • 선결제 후 예약시에는 예약탭에서 상품추가 없이 예약 잡으신 뒤, '결제없이 방문처리'로 후처리 가능함 교육 및 설명 • 추가 문의사항은 없으시고 추후 문의사항은 고객센터로 연락주시면 도와드리겠음 안내 후 통화종료 • [기록용: 기타이슈/ 정산 / 서비스업 뷰티헤어] 카드결제대금 정산은 영업일기준 23",
            "doneDate": "2026-06-15"
          },
          {
            "time": "15:36",
            "store": "동네한바퀴",
            "storeId": "183319",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "아직까지 불편한점과 추가 개선사항부분들이 많은데 바로 업데이트는 안되는듯 합니다",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 바쁘신관계로 재통화 가능시간 문자로 알려주신다고 하심 바쁘신관계로 재통화 가능시간 문자로 알려주신다고 하심 / 2차부재 2차부재",
            "doneDate": "2026-06-15"
          },
          {
            "time": "15:12",
            "store": "미래 팜 아카데미",
            "storeId": "303756",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "상호변경신청한지가 15일이 다되도록 변경이이뤄지지 않는다.. 직무유기..",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 서류보완관련 솔라피전송 확인 • 1차부재 히스토리 서류보완관련 솔라피전송 확인 1차부재 안녕하세요, 대표님. 아이샵케어입니다. 보완 해야 할 서류 사항이 있어서 문자드립니다. 아래 링크를 통해 보완 할 서류를 제출 해주시면 감사하겠습니다. ▶ ▶ 필요 서류: (사업자 등록증, 통장 사본) 1. 사업자 등록증 사진 위에 임의로 편집을 하면 제출이 불가합니",
            "doneDate": "2026-06-15"
          }
        ],
        "praises": [
          {
            "time": "22:57",
            "store": "한비(구월점)",
            "storeId": "498085",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절했어요 편해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "20:41",
            "store": "멍쓰담",
            "storeId": "462147",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "모든카드가다되고 결제하기도쉽고 일매출현황이 잘정리되어서 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "19:26",
            "store": "마릴린헤어부티크",
            "storeId": "495610",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "기사님이 신속정확하게 설치하여 주셨어요 외관과 쓰임이 편하고 고급스러워요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "19:07",
            "store": "와틀&비(Wattle&B.)",
            "storeId": "190948",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리함. 무료로 주는 프린트용지도 좋음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "18:56",
            "store": "캄눅",
            "storeId": "489678",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치 방법도 간단하고 기기 사용법도 편리해요 다른 매장에 사용하더라도 간편할 거 같아서요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:25",
            "store": "포시즌양주팜",
            "storeId": "491706",
            "indBucket": "서비스[학원]",
            "emp": "송태양",
            "install": 5,
            "nps": 10,
            "text": "사용법이 간단하고 편리합니다. 단말기와 터치스크린이 연동되어 별다른 복잡하지 않아 사용하기가 매우 편리합니다.",
            "byReaction": true,
            "doneDate": "2026-06-15"
          },
          {
            "time": "15:25",
            "store": "카페 차누",
            "storeId": "490190",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치하다가 불편한점은 서비스센터에 전화 했더니 바로 영상통화로 해결해줘서 너무 좋았어요 설치 간편하고 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:19",
            "store": "꼼래쉬",
            "storeId": "334865",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리하고 간단해서",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "14:09",
            "store": "일킬로그램(1kg) 탕수육 일산시장점",
            "storeId": "463090",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-16": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 22,
        "install": {
          "count": 10,
          "low": 2
        },
        "nps": {
          "count": 22,
          "low": 6
        },
        "high": {
          "install": 3,
          "nps": 10
        },
        "npsDist": {
          "3": 1,
          "5": 5,
          "6": 2,
          "7": 1,
          "8": 1,
          "9": 2,
          "10": 10
        },
        "installDist": {
          "2": 2,
          "3": 3,
          "4": 2,
          "5": 3
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 5,
          "카페": 3,
          "도소매": 1,
          "기타": 1
        },
        "byTenure": {
          "구매설치": {
            "total": 10,
            "low": 6
          },
          "6개월": {
            "total": 5,
            "low": 0
          },
          "1개월": {
            "total": 3,
            "low": 0
          },
          "12개월": {
            "total": 3,
            "low": 1
          },
          "3개월": {
            "total": 1,
            "low": 1
          }
        },
        "byVan": {
          "KPN": {
            "total": 7,
            "low": 3
          },
          "SECTA9": {
            "total": 4,
            "low": 1
          },
          "SMARTRO": {
            "total": 4,
            "low": 1
          },
          "KSNET": {
            "total": 4,
            "low": 1
          },
          "KIS": {
            "total": 3,
            "low": 2
          }
        },
        "reasonCounts": {
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 4,
          "구매,계약과정에서 설명이 부족": 1,
          "필요한 기능이 없거나 몰라서 불편": 1,
          "단말기 설치나 초기 과정이 어려움": 1,
          "사용중 오류가 자주 발생함": 1
        },
        "alerts": [
          {
            "time": "20:03",
            "store": "머리하세요",
            "storeId": "497587",
            "industry": "미용",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 2,
            "nps": 10,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "만족해서",
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
            "time": "19:33",
            "store": "아리에뜰",
            "storeId": "499656",
            "industry": "카페/베이커리",
            "indBucket": "카페",
            "install": 4,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "너무 고가",
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
            "store": "어스24스터디카페",
            "storeId": "496243",
            "industry": "카페/베이커리",
            "indBucket": "카페",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "서비스 설명 부족",
                "cat": "구매,계약과정에서 설명이 부족"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 관련 내용으로 불편을 야기한 점 사과 • 키오스크모드 설정법 사용방법 전체적인 교육 완료 • 고객센터 자정까지 운영하며 지속적인 채용진행 중이니 양해 부탁드림 • [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 카페] 관련 내용으로 불편을 야기한 점 사과 키오스크모드 설정법 사용방법 전체적인 교육 완료 고객센터 자정까지 운영하며 지속적인 채용진행",
            "doneDate": "2026-06-16"
          },
          {
            "time": "15:43",
            "store": "별별당 떡볶이&꼬마김밥",
            "storeId": "182443",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "처음써봐서",
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
            "time": "15:32",
            "store": "내일디디 스위트",
            "storeId": "506170",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 4,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "다른기능을 많이 추가하거나 필요로 한다면 다른기기 사용해도 될거같아요",
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
            "time": "15:32",
            "store": "회복테라피",
            "storeId": "502969",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "토스 사용 방법이 어려운 듯 아닌듯",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / • 방문설치 받아보셨으나 전체적인 사용법 교육 원하셔서 사용법 교육 [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 뷰티헤어] 방문설치 받아보셨으나 전체적인 사용법 교육 원하셔서 사용법 교육 [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 뷰티헤어]",
            "doneDate": "2026-06-16"
          },
          {
            "time": "12:55",
            "store": "안녕꼬순내",
            "storeId": "378942",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "이름10글자 제한으로 반려견이름견종을 다 표기하기 어려움. 옵션설정 불편함. 1일단위로밖에 설정이 안되어 1박이상 호텔링 스케줄은 포스에 입력이 불가능함.",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 타매장 있음 /플레이스 또한 인지중이나 예약관련 리소스 부족 예상 타매장 동일이력 있음 /플레이스 또한 인지중이나 예약관련 리소스 부족 예상 1. 고객 이름 등록이 10글자로제한되어 있어 불편 2. 세차장을 운영하는 저같은 경우 전화번호 1개에(1명의 고객) 차량 2대 이상 등록이 필요한데 전화번호 수정도, 동일 번호로 2명 고객등록이 불가해서 불편 3",
            "doneDate": "2026-06-16"
          },
          {
            "time": "10:30",
            "store": "이킵팩토리",
            "storeId": "504178",
            "industry": "오토바이센터",
            "indBucket": "기타",
            "install": 2,
            "nps": 6,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "설치 기사님이 오셔서 해주는줄 알았는데 기기만 보내고 알아서 설치를 하라고 하니 벙찌고 멀해야하는지 영상을봐도 똑같이 안됨 고객센터 전화를하는데도 전화를 안받음 13통정도 전화를해서 받아서 겨우겨우 설치를 할수있었습니다",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 키오스크모드로 사용이 힘든 매장으로 금액입력결제모드로 설정 도움드림 • 방문설치 인지 자가설치인지 언급도 없이 매장으로 단말기만 보내주셔서 당황하셨다고 함. 관련 내용으로 불쾌한 경험을 하게 해드린 점 사과 • [기록용:단말기 설치나 초기 설정이 어렵게 느껴졌어요/ 프론트 / 서비스업 기타] 키오스크모드로 사용이 힘든 매장으로 금액입력결제모드로 설정 도",
            "doneDate": "2026-06-16"
          }
        ],
        "praises": [
          {
            "time": "19:51",
            "store": "밤부루뜨(Bambroot)",
            "storeId": "314260",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "결제가 편리하고 잘 되고 토스를 사용하는 고객들이 많아 리뷰를 자연스럽게 달아줘서 매장홍보까지 되는 효과",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "19:48",
            "store": "자세균형 연구소",
            "storeId": "446863",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "문의시 응답이 빠르고 친철함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "17:49",
            "store": "하나요가",
            "storeId": "309518",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "사용이편리",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:32",
            "store": "카페 로피(LOAFY)",
            "storeId": "504642",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "편리하다 편리하다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:43",
            "store": "호트커피 (HOAT COFFEE)",
            "storeId": "185768",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "일단 너무 편리한 인터페이스와 사용인 것 같습니다!",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:32",
            "store": "파충류샵크레하우스",
            "storeId": "430257",
            "indBucket": "도소매",
            "emp": "송태양",
            "install": 3,
            "nps": 8,
            "text": "핸드폰과 연결이 안되서 어려워요 어려움 ㅠ",
            "byReaction": true,
            "doneDate": "2026-06-16"
          },
          {
            "time": "15:13",
            "store": "비올라래쉬",
            "storeId": "185908",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "고객관리도 편리하고 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "13:46",
            "store": "스멜비(smell b)",
            "storeId": "460112",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "직관적이라 편해요, 1점 뺀 이유는 배민 쿠팡이랑 품절을 연결시켜준다고 들었는데 아니여서 뺏습니다",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-17": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 30,
        "install": {
          "count": 11,
          "low": 2
        },
        "nps": {
          "count": 30,
          "low": 11
        },
        "high": {
          "install": 2,
          "nps": 10
        },
        "npsDist": {
          "0": 3,
          "3": 3,
          "4": 1,
          "5": 4,
          "6": 4,
          "7": 2,
          "8": 2,
          "9": 1,
          "10": 10
        },
        "installDist": {
          "1": 2,
          "3": 3,
          "4": 4,
          "5": 2
        },
        "byIndustry": {
          "카페": 5,
          "서비스[학원]": 2,
          "요식업": 1,
          "기타": 2,
          "서비스[뷰티,헤어]": 1
        },
        "byTenure": {
          "구매설치": {
            "total": 11,
            "low": 4
          },
          "6개월": {
            "total": 3,
            "low": 1
          },
          "1개월": {
            "total": 8,
            "low": 4
          },
          "3개월": {
            "total": 3,
            "low": 0
          },
          "12개월": {
            "total": 5,
            "low": 2
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 9,
            "low": 6
          },
          "SECTA9": {
            "total": 7,
            "low": 1
          },
          "KPN": {
            "total": 4,
            "low": 1
          },
          "KIS": {
            "total": 3,
            "low": 1
          },
          "KSNET": {
            "total": 5,
            "low": 1
          },
          "NICE": {
            "total": 2,
            "low": 1
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 8,
          "사용중 오류가 자주 발생함": 1,
          "구매,계약과정에서 설명이 부족": 1,
          "필요한 기능이 없거나 몰라서 불편": 1
        },
        "alerts": [
          {
            "time": "23:58",
            "store": "시골로스터리",
            "storeId": "493223",
            "industry": "카페/베이커리",
            "indBucket": "카페",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "설치기사가 너무 불 친절 하고 예의가 너무 없습니다. 설치하러 오셔서 어디서 왔는지 말씀도 없고 인사도 없이 주머니에 한손을 넣어두신 상태로 설치하러 왔다가 다였으며 설치하는동안에도 한손은 계속 주머니에 넣어둔 상태로와이파이 여기치라고 하고 사용법을 알려주시지도 않으면서 제가 먼저 물어본것에 대하여 기사임에도 불구하고  토스단말기 사용법에 대하여 모르시는게 다반사였습니다 결국 제가 계속하여 물어보니 본사 콜센터에 전화 하여 물어보시고 그거마저도 못 알아 들어 제가 옆에서 들으면서해결하였습니다. 결국 본인은 모르신다고 전화번호 알려주시면서 여기 전화해서 물어보라 하시고,가셨습니다 . 또한 기존에 저희가 사용하던 단말기를 이거는 구입한거냐고 물으셔서 구입한거라고 한차례 말씀드렸는데 가시기 전에도 이건 구입한거냐 필요하냐,계속 해서 물어보시고 제가 구입한거다,필요하다 하니 본인이 중고거래도 해서 그런다며 가져 가실려 했습니다 . 정말  와서 선만 꽂아주는거면 왜 기사를 불렀는지 와서 한거…",
                "cat": "단말기 설치나 초기 과정이 어려움"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "서비스 최악",
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
            "time": "22:40",
            "store": "시골로스터리",
            "storeId": "493223",
            "industry": "카페/베이커리",
            "indBucket": "카페",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "설치기사가 너무 불 친절 하고 예의가 너무 없습니다. 설치하러 오셔서 어디서 왔는지 말씀도 없고 인사도 없이 주머니에 한손을 넣어두신 상태로 설치하러 왔다가 다였으며 설치하는동안에도 한손은 계속 주머니에 넣어둔 상태로와이파이 여기치라고 하고 사용법을 알려주시지도 않으면서 제가 먼저 물어본것에 대하여 기사임에도 불구하고  토스단말기 사용법에 대하여 모르시는게 다반사였습니다 결국 제가 계속하여 물어보니 본사 콜센터에 전화 하여 물어보시고 그거마저도 못 알아 들어 제가 옆에서 들으면서해결하였습니다. 결국 본인은 모르신다고 전화번호 알려주시면서 여기 전화해서 물어보라 하시고,가셨습니다 . 또한 기존에 저희가 사용하던 단말기를 이거는 구입한거냐고 물으셔서 구입한거라고 한차례 말씀드렸는데 가시기 전에도 이건 구입한거냐 필요하냐,계속 해서 물어보시고 제가 구입한거다,필요하다 하니 본인이 중고거래도 해서 그런다며 가져 가실려 했습니다 . 정말  와서 선만 꽂아주는거면 왜 기사를 불렀는지 와서 한거…",
                "cat": "단말기 설치나 초기 과정이 어려움"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "서비스 최악",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "<!subteam^S087TUQFYG0 / • 불편한 경험 하게 해드려 대신 사과 • 기억하고 싶지않은 경험이며 길게 통화는 힘드시다며 끊으심 • [기록용: 기타이슈/ 외주 불친절 / 카페] 불편한 경험 하게 해드려 대신 사과 기억하고 싶지않은 경험이며 길게 통화는 힘드시다며 끊으심 [기록용: 기타이슈/ 외주 불친절 / 카페]",
            "doneDate": "2026-06-17"
          },
          {
            "time": "19:09",
            "store": "에듀라인수학교습소",
            "storeId": "462620",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "학원에서 뭔가 주문하는듯한 결제방법이 이상하다",
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
            "time": "17:57",
            "store": "브라운도어",
            "storeId": "315911",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "편리하고 편집이 쉬워서 좋습니다",
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
            "time": "17:54",
            "store": "장돌이어묵",
            "storeId": "466135",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "용지가안나와요",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 금액입력결제모드로 결제시 토스포스 프로그램 실행 중인 상태여야 영수증 자동출력됨 설명 • [기록용: 기타이슈/ 프린터 / 요식업] 금액입력결제모드로 결제시 토스포스 프로그램 실행 중인 상태여야 영수증 자동출력됨 설명 [기록용: 기타이슈/ 프린터 / 요식업]",
            "doneDate": "2026-06-17"
          },
          {
            "time": "16:19",
            "store": "미벗",
            "storeId": "194344",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "배달어플 호환이 잘안됨",
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
            "time": "15:38",
            "store": "몬퓨리엘 아뜰리에",
            "storeId": "483646",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 3,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "ㆍ",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 유선프린터 연결이 안되어 고객센터 인입하셨으나 지속적인 통화실패로 온도감 높은 상태 • 유선프린터 연동은 다행히 완료하신 상태로, 관련 내용으로 사과 드리는 것으로 마무리 • [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 서비스업 뷰티헤어] 유선프린터 연결이 안되어 고객센터 인입하셨으나 지속적인 통화실패로 온도감 높은 상태 유선프린터 연동은 다",
            "doneDate": "2026-06-17"
          },
          {
            "time": "15:23",
            "store": "올데이짐",
            "storeId": "464997",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "수수료가 너무 비쌈 설명부족햇음",
                "cat": "구매,계약과정에서 설명이 부족"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "2차부재 2차부재",
            "doneDate": "2026-06-17"
          },
          {
            "time": "15:23",
            "store": "텐퍼센트 울산보람병원점",
            "storeId": "470547",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "기존 대비 각종 페이류 인식률이 유의미하게 높지 않음 어디에 대야 하는지도 정확히 모르겠고 심지어 유가지원금 카드는 마그네틱 잘 안 읽힘",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 님 안녕하세요, 상기매장 OB진행 하려 하였으나 자대리점(현은시스템) 매장으로 가입 심사 결과는 도대체 언제 알려주나요? 된 건지 안 된 건지 안 됐으면 추가제출서류가 뭔지 알려줘야 뭘 진행할 것 아닙니까 이 부분에 허들이 있어 OB 진행이 불가능한 상황입니다. 현은시스템 측에서 심사 결과에 대해 OB를 진행 해주셔야 할 것 같아서요 또한 프론트에서 페",
            "doneDate": "2026-06-17"
          },
          {
            "time": "15:19",
            "store": "스페이스에임(Space aim)",
            "storeId": "191132",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "카드사 할부 안 되는 점이 아쉬워요",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / • 할부결제방법 교육 • 무이자할부 문의하셔서 카드사별로 상이한 부분으로 자사에서 안내 불가한 사항이니 카드사에 문의하시면 됨 안내 • [기록용: 기타이슈/ 할부 / 서비스업 뷰티헤어] 할부결제방법 교육 무이자할부 문의하셔서 카드사별로 상이한 부분으로 자사에서 안내 불가한 사항이니 카드사에 문의하시면 됨 안내 [기록용: 기타이슈/ 할부",
            "doneDate": "2026-06-17"
          },
          {
            "time": "09:52",
            "store": "쩨리몽",
            "storeId": "459359",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "카드사 정산이 너무 느림",
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
            "time": "18:57",
            "store": "바이트참(BITE CHARM)",
            "storeId": "313710",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "조작이 편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:39",
            "store": "카페 명안가",
            "storeId": "486557",
            "indBucket": "카페",
            "emp": "",
            "install": 3,
            "nps": 7,
            "text": "영상 가이드에 있는 제품과 받아본 제품이 달라서 연결잭을 어디에 꽂아야 하는지 잘 모르겠었음. 깔끔한 디자인과 편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:19",
            "store": "온앤오프플러스",
            "storeId": "195999",
            "indBucket": "",
            "emp": "송태양",
            "install": null,
            "nps": 6,
            "text": "카카오페이결제안됨 바코드결제안됨",
            "byReaction": true,
            "doneDate": "2026-06-17"
          },
          {
            "time": "16:09",
            "store": "온클래식필라테스&온더런",
            "storeId": "490579",
            "indBucket": "서비스[학원]",
            "emp": "송태양",
            "install": 4,
            "nps": 8,
            "text": "사용방법을 검색하면서 설치했고 아직도 적립이나 포인트제에 대해 정확히 모르겠습니다 ㅠ 앞에 답변과 동일합니다",
            "byReaction": true,
            "doneDate": "2026-06-17"
          },
          {
            "time": "15:39",
            "store": "양주덕계역아이폰수리 내폰살려",
            "storeId": "477850",
            "indBucket": "기타",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "만족스러워요 추천할만해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:32",
            "store": "워너비",
            "storeId": "326612",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:26",
            "store": "슈에뜨카페",
            "storeId": "318524",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편하고 좋고 문제발생시 상담도 친절",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:23",
            "store": "에덴네일스킨",
            "storeId": "453314",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용이 편리해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:23",
            "store": "커피앤스튜디오나이브",
            "storeId": "461287",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 6,
            "text": "사용이 편리하고 자리를 많이 차지하지않아서 좋음",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-18": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 21,
        "install": {
          "count": 6,
          "low": 0
        },
        "nps": {
          "count": 21,
          "low": 1
        },
        "high": {
          "install": 4,
          "nps": 15
        },
        "npsDist": {
          "5": 1,
          "7": 2,
          "8": 1,
          "9": 2,
          "10": 15
        },
        "installDist": {
          "3": 2,
          "5": 4
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 3,
          "서비스[학원]": 2,
          "카페": 1
        },
        "byTenure": {
          "1개월": {
            "total": 7,
            "low": 0
          },
          "6개월": {
            "total": 2,
            "low": 0
          },
          "12개월": {
            "total": 4,
            "low": 1
          },
          "구매설치": {
            "total": 6,
            "low": 0
          },
          "3개월": {
            "total": 2,
            "low": 0
          }
        },
        "byVan": {
          "KSNET": {
            "total": 4,
            "low": 1
          },
          "SMARTRO": {
            "total": 3,
            "low": 0
          },
          "NICE": {
            "total": 4,
            "low": 0
          },
          "KIS": {
            "total": 5,
            "low": 0
          },
          "DAOU": {
            "total": 1,
            "low": 0
          },
          "KPN": {
            "total": 3,
            "low": 0
          },
          "SECTA9": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 1
        },
        "alerts": [
          {
            "time": "15:56",
            "store": "리햅포러스(Rehab4us)",
            "storeId": "168912",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "모든것이 직접 접촉이 아닌 쳇봇이나 문자로 이뤄집니다. 직관적이지 않아 업무처리에 딜레이가 있습니다. 전화 연결도 매우힘들고 귀측에서 척척 알아서 처리해주는 사안은 극히 일부고 소비자가 해야 할 일을 안내하는 데에 지나지 않아 무슨 코치받는 느낌입니다. 결국 해주는건 없고 해야할 일만 지시받으니 울며겨자먹기로 '냅둬' '관둬' 가 만연합니다.별로 친숙해지는 느낌이 안고 남의 옷입은 느낌입니다.끝.",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 통화거부 통화거부",
            "doneDate": "2026-06-18"
          }
        ],
        "praises": [
          {
            "time": "21:32",
            "store": "젓가락질 잘해야만 밥을 먹나요",
            "storeId": "464640",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "전 직장에서도 썼었기에 편리하게 잘 쓰고있음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "20:06",
            "store": "헤쎄드(HESED)",
            "storeId": "317530",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리 종이안갈아도 되고 각종페이결제 되서",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "17:31",
            "store": "여우숲(The Fox Forest)",
            "storeId": "382791",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리하고 포터블해서 갖고 나갈 수도 있어요.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:31",
            "store": "가죽공방 현",
            "storeId": "455824",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "디자인이 깔끔해서 맘에들고 사용하기도 편리해서 잘쓰고 있습니다.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:16",
            "store": "패들엑스테니스인더스트리",
            "storeId": "491380",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 3,
            "nps": 9,
            "text": "지시대로 잘설치 하였지만 조금 당황스러웠어요 기기가 편리한거 같습니다.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:30",
            "store": "리바이브샵",
            "storeId": "448893",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "단말기랑 어플사용이 편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:30",
            "store": "커피안",
            "storeId": "462799",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편하고 디자인도 심플하고 좋아요 기능도 여러가지 있고 핸드폰이랑 연동도 되고요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:15",
            "store": "토마토바버샵",
            "storeId": "509577",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치가편하고 좋아요 사용편리 디자인 실용성.토스지원이벤트",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:15",
            "store": "크리아트산성자이미술교습소",
            "storeId": "511725",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치방법 몰라서 전화했더니 매우 친절하게 알려주심 ^^",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:15",
            "store": "드미룬뷰티",
            "storeId": "504767",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "처음에 설정을 잘못해서 어려웠지만 영상통화로 자세히 설명해주셔서 잘했어요 공간 차지도 안하고 인테리어를 해치지 않아서 넘 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "14:26",
            "store": "달콤네일",
            "storeId": "195166",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리해요",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-19": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 24,
        "install": {
          "count": 8,
          "low": 1
        },
        "nps": {
          "count": 24,
          "low": 5
        },
        "high": {
          "install": 3,
          "nps": 16
        },
        "npsDist": {
          "1": 2,
          "3": 3,
          "7": 1,
          "9": 2,
          "10": 16
        },
        "installDist": {
          "1": 1,
          "4": 4,
          "5": 3
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 3,
          "카페": 2,
          "도소매": 1,
          "기타": 1,
          "서비스[학원]": 1
        },
        "byTenure": {
          "3개월": {
            "total": 5,
            "low": 2
          },
          "구매설치": {
            "total": 8,
            "low": 1
          },
          "1개월": {
            "total": 6,
            "low": 0
          },
          "6개월": {
            "total": 2,
            "low": 1
          },
          "12개월": {
            "total": 3,
            "low": 1
          }
        },
        "byVan": {
          "KSNET": {
            "total": 5,
            "low": 1
          },
          "KPN": {
            "total": 3,
            "low": 0
          },
          "DAOU": {
            "total": 1,
            "low": 0
          },
          "NICE": {
            "total": 2,
            "low": 1
          },
          "SECTA9": {
            "total": 5,
            "low": 1
          },
          "KIS": {
            "total": 6,
            "low": 2
          },
          "SMARTRO": {
            "total": 2,
            "low": 0
          }
        },
        "reasonCounts": {
          "단말기 설치나 초기 과정이 어려움": 3,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1,
          "필요한 기능이 없거나 몰라서 불편": 2
        },
        "alerts": [
          {
            "time": "16:24",
            "store": "금보가",
            "storeId": "504198",
            "industry": "도소매",
            "indBucket": "도소매",
            "install": 1,
            "nps": 1,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "방운설치가 필요합니다! 프린터.cctv,씨네빔등 부가 서비스의 안내가 절대 불만 입니다 영수증 출력을 못해 손님들의 항의를 듣고 있어요ㅠ",
                "cat": "단말기 설치나 초기 과정이 어려움"
              },
              {
                "q": "추천의향",
                "score": 1,
                "text": "나이 많은 점주들은  적응의 시간이 필요해요  방문설치  도움이 적용되어야~~",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• • 프린터 케이블 오구매로 반품 및 재구매 진행중인 매장으로 구매후 프린터 연결 도움드릴 예정 히스토리 프린터 케이블 오구매로 반품 및 재구매 진행중인 매장으로 구매후 프린터 연결 도움드릴 예정 / • OB완료. 현재 B케이블 구매하신 상태 • 케이블 수령 후 바로 연락주시면 신속하게 프린터 연동 도움 드리겠음 안내 후 통화종료 OB완료. 현재 B케이블",
            "doneDate": "2026-06-19"
          },
          {
            "time": "15:42",
            "store": "통식당",
            "storeId": "265301",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "모든것이 카톡으로 이루어 지는점",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 우리카드 가맹신청 서류를 카톡으로 발송하다가 허들이 있어 우리카드 결제를 못받는 상황 • 고객센터 유선연결 요청하시어 자정까지 운영하오니 금일 오후시간에 연락주셔서 유 선으로 진행 안내 • [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 요식업] 우리카드 가맹신청 서류를 카톡으로 발송하다가 허들이 있어 우리카드 결제를 못받는 상황 고객센터 유선연",
            "doneDate": "2026-06-19"
          },
          {
            "time": "15:34",
            "store": "레이지버거클럽 부암점",
            "storeId": "28931",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "테이블 호출기능",
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
            "time": "15:18",
            "store": "황학대상회",
            "storeId": "384821",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "바로결제기능이없네요",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 통화거부 통화거부",
            "doneDate": "2026-06-19"
          },
          {
            "time": "15:18",
            "store": "메아뷰티",
            "storeId": "368290",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "카드결제시 연결이 정말 잘안되서 매번 난감하네요....",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 2개월전 2개월전 교체이력 • 해당증상으로 불편을 끼쳐드린 점 사과 • 프론트 교체 안내 및 장비 수령 후 고객센터 연락주시면 재연동 도움드리겠음 안내 후 통화종료 • [기록용:포스 및 단말기 사용중 오류가 자주 발생했어요/ 연결끊김 / 서비스업 뷰티] 해당증상으로 불편을 끼쳐드린 점 사과 프론트 교체 안내 및 장비 수령 후 고객센터 연락주시면 재연동 ",
            "doneDate": "2026-06-19"
          }
        ],
        "praises": [
          {
            "time": "18:54",
            "store": "슬로모(SLO-MO)",
            "storeId": "505824",
            "indBucket": "카페",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "편리하지만은 않았음 좋음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "18:24",
            "store": "뉴한나미용실",
            "storeId": "510340",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "친절히 잘 가르쳐 주셔서 설치를 잘 할수 있었습니다 매우 만족하고 다른업종에도 추천하고 싶어요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "17:54",
            "store": "손이예쁜날",
            "storeId": "509541",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "살짝 어려운면이 있었어요 디자인이 깔끔하구 예뻐서용",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "카페시하",
            "storeId": "511972",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절한 설명 소프트웨어가 강점",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "아쿠아플로우스위밍랩",
            "storeId": "514438",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "헷갈렸지만 잘 설치됨 결제가 편리",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:07",
            "store": "더블유(W)창 광주점",
            "storeId": "466558",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:03",
            "store": "이루어짐PT&운동과학센터 매탄점",
            "storeId": "198078",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "너무 편리합니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "06:01",
            "store": "두유라이크",
            "storeId": "189054",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용이 편하고 예뻐요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "00:07",
            "store": "젤리즈펫",
            "storeId": "318260",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "엄청 간편하고 편리함",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-20": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 21,
        "install": {
          "count": 8,
          "low": 2
        },
        "nps": {
          "count": 21,
          "low": 3
        },
        "high": {
          "install": 4,
          "nps": 8
        },
        "npsDist": {
          "0": 2,
          "1": 1,
          "7": 2,
          "8": 4,
          "9": 4,
          "10": 8
        },
        "installDist": {
          "1": 1,
          "2": 1,
          "4": 2,
          "5": 4
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 4,
          "요식업": 2,
          "서비스[학원]": 1,
          "기타": 1
        },
        "byTenure": {
          "1개월": {
            "total": 6,
            "low": 0
          },
          "12개월": {
            "total": 3,
            "low": 0
          },
          "3개월": {
            "total": 2,
            "low": 0
          },
          "구매설치": {
            "total": 8,
            "low": 2
          },
          "6개월": {
            "total": 2,
            "low": 1
          }
        },
        "byVan": {
          "NICE": {
            "total": 2,
            "low": 0
          },
          "KSNET": {
            "total": 3,
            "low": 0
          },
          "SMARTRO": {
            "total": 4,
            "low": 0
          },
          "KPN": {
            "total": 5,
            "low": 0
          },
          "KIS": {
            "total": 4,
            "low": 1
          },
          "SECTA9": {
            "total": 1,
            "low": 1
          },
          "KOVAN": {
            "total": 1,
            "low": 1
          },
          "DAOU": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "구매,계약과정에서 설명이 부족": 3,
          "단말기 설치나 초기 과정이 어려움": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1
        },
        "alerts": [
          {
            "time": "16:01",
            "store": "원파인데이학원",
            "storeId": "512676",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "기기값설명 안함",
                "cat": "구매,계약과정에서 설명이 부족"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "설명부족",
                "cat": "구매,계약과정에서 설명이 부족"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 통화 녹취록 확인 연매출 3억 이상 초과 매장으로 5500원 발생 고지함 (36초 경) 통화 녹취록 확인 연매출 3억 이상 초과 매장으로 5500원 발생 고지함 (36초 경) / / • 1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-06-20"
          },
          {
            "time": "15:30",
            "store": "진남기업",
            "storeId": "500172",
            "industry": "제조업",
            "indBucket": "기타",
            "install": 2,
            "nps": 1,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "설명이 너무 부족함",
                "cat": "구매,계약과정에서 설명이 부족"
              },
              {
                "q": "추천의향",
                "score": 1,
                "text": "설치가 어렵고 프린터기 별도 구매에 대한 설명이 없다. 무료인듯 광고하지만 무료가 아니다.",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-06-20"
          },
          {
            "time": "15:18",
            "store": "보드레스킨",
            "storeId": "320739",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "요금을 자꾸 내야되서 좀 그러내요 무료인지알았는데 뷰티사랑넷을 얼마만큼 결제가 되어야지만 무료라해서 괜히 한거같아요..",
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
            "time": "21:12",
            "store": "에츠헤어살롱 옥정점",
            "storeId": "197698",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "사용하기편하고 as가 잘 되서요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "18:31",
            "store": "체인지헤어",
            "storeId": "504062",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치가 쉽고 간단했어요^^ 보기에도 예쁘고 사용하기 편리해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:31",
            "store": "빨간맛상회",
            "storeId": "506422",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절한 설명 좋아요 사용 용이함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "커피랑",
            "storeId": "509438",
            "indBucket": "요식업",
            "emp": "",
            "install": 4,
            "nps": 8,
            "text": "그냥 할 만했다 깔끔하고 편함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "네일 더 캄&큐릭스",
            "storeId": "509708",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "쉬운듯 쉽지않아요! 초기 관리자번호 입력에서 관리자번호를 몰라서 고객센터 챗봇에 문의해야함 등.. 일단, 카드단말기가 예쁨. 결제가 용이해요!",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "주식회사 포커스",
            "storeId": "358043",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "쉽고 편리함 쉽고 편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "뷰티옥(BEAUTY OK)",
            "storeId": "507807",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "쉬웠어요 좋아요 쉬워요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:18",
            "store": "뷰티온니(beauty only)",
            "storeId": "317158",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "간편해서 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:14",
            "store": "디테일링 앤 케어(Detailing and care)",
            "storeId": "472949",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:10",
            "store": "타코의밤",
            "storeId": "194211",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "대체로 만족하지만 개선했으면 하는 부분이 있어서 7점 입니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "05:42",
            "store": "어 닭발",
            "storeId": "446392",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "기대했던것이상으로 편리하고 유용하네요",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-21": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 24,
        "install": {
          "count": 10,
          "low": 0
        },
        "nps": {
          "count": 24,
          "low": 1
        },
        "high": {
          "install": 6,
          "nps": 13
        },
        "npsDist": {
          "0": 1,
          "7": 1,
          "8": 5,
          "9": 4,
          "10": 13
        },
        "installDist": {
          "3": 1,
          "4": 3,
          "5": 6
        },
        "byIndustry": {
          "서비스[학원]": 4,
          "도소매": 2,
          "요식업": 2,
          "서비스[뷰티,헤어]": 1,
          "카페": 1
        },
        "byTenure": {
          "구매설치": {
            "total": 10,
            "low": 0
          },
          "1개월": {
            "total": 7,
            "low": 1
          },
          "3개월": {
            "total": 3,
            "low": 0
          },
          "12개월": {
            "total": 3,
            "low": 0
          },
          "6개월": {
            "total": 1,
            "low": 0
          }
        },
        "byVan": {
          "KSNET": {
            "total": 4,
            "low": 0
          },
          "KPN": {
            "total": 3,
            "low": 0
          },
          "SECTA9": {
            "total": 5,
            "low": 0
          },
          "SMARTRO": {
            "total": 5,
            "low": 0
          },
          "KIS": {
            "total": 5,
            "low": 0
          },
          "NICE": {
            "total": 1,
            "low": 0
          },
          "DAOU": {
            "total": 1,
            "low": 1
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 1
        },
        "alerts": [
          {
            "time": "11:20",
            "store": "미라클(MIRACLE)",
            "storeId": "467676",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "개선사항 얘기해도 나아지는게 없네요",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 히스토리 • 752개 상품 등록하여 사용중, 아무래도 많은 상품이 등록 되어 있다보니, 카테고리별로 검색이 가능했으면 좋겠다고 하심 • 토스포스 내 상품 등록 창에서 이미지를 추가하면 가운데 바꾸기 버튼을 없앨 수 있는지? 해당 내용 업데이트 될 수 있도록 담당부서에 전달 드려보겠음 안내[부정/사용할 수 있는 기능이 있는지 몰랐거나, 찾기 어려웠어요/도",
            "doneDate": "2026-06-21"
          }
        ],
        "praises": [
          {
            "time": "16:21",
            "store": "정원산책 카페",
            "storeId": "466664",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "​1. 가장 만족스러운 점 (장점) ​비용 부담 없는 서비스, 높은 자유도의 커스텀 기능 ​2. 화면 구성 및 디자인 개선 요청 (UI/UX) ​현황 페이지 배경색 변경 (다크 모드 등): 현재 현황 페이지의 바탕화면이 어두운 톤으로 지원된다면, 주문서 내용이 시각적으로 훨씬 더 명확하게 눈에 들어올 것 같습니다. ​글자 크기 옵션 세분화 (더 큰 글씨 추가): 현재 '작은 글씨'와 '큰 글씨' 옵션이 제공되지만, '큰 글씨'조차 가시성이 다소 부족합니다. 바쁜 현장에서 한눈에 볼 수 있도록 더 큰 글씨 옵션이 추가되었으면 합니다. ​주문 화면 수정 시 UI 오류 개선: 포스 주문 화면에서 옵션이나 메뉴를 수정하고 나면, 갑자기 글씨가 더 작아지거나 키(버튼) 크기가 임의로 변하는 현상이 있습니다. 이 레이아웃 오류를 수정해 주세요. ​3. 기능 및 성능 개선 요청 ​주문서 내 '총 메뉴 개수' 표기: 주문서 자체에도 해당 주문의 총 메뉴 개수가 한눈에 보이도록 표기해 주시면…",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:47",
            "store": "로마네 성수",
            "storeId": "190415",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "기본기능이 충실하게 잘 되어있고 비용이 거의 들지 않습니다.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:37",
            "store": "비비드버튼",
            "storeId": "512370",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치가 전혀 어렵지 않았어요! 너무 편하고 좋습니다 토스단말기 하나로 할수있는게 정말 많네요 아주 만족합니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:37",
            "store": "다한다 송화",
            "storeId": "515300",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "설치가 쉽고, 이용이 편리함 좋으니까요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "메밀치킨",
            "storeId": "409868",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:21",
            "store": "불란서간식집",
            "storeId": "469463",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:07",
            "store": "앵커스터디카페 워크라운지",
            "storeId": "514006",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "편리 좋음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:07",
            "store": "로스트파라다이스",
            "storeId": "513200",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "응답빠름 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:07",
            "store": "엘스킨뷰티",
            "storeId": "476282",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "설치하기 ~좋았어요(쉽게 할 수 있어어요~ 편리합니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:07",
            "store": "부자수산",
            "storeId": "500173",
            "indBucket": "요식업",
            "emp": "",
            "install": 4,
            "nps": 9,
            "text": "설명서대로 해도 안되는 부분이 있었음 설치만 하면 사용은 편리한거같음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "14:25",
            "store": "하나요가",
            "storeId": "309518",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용이편리",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "12:20",
            "store": "네일다영",
            "storeId": "450373",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "11:36",
            "store": "마이네임",
            "storeId": "491746",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "간단한 설치 빠른 응대, 단말기 사용 편리성",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-22": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 15,
        "install": {
          "count": 3,
          "low": 0
        },
        "nps": {
          "count": 15,
          "low": 2
        },
        "high": {
          "install": 2,
          "nps": 8
        },
        "npsDist": {
          "0": 1,
          "5": 1,
          "6": 2,
          "7": 1,
          "8": 2,
          "10": 8
        },
        "installDist": {
          "3": 1,
          "5": 2
        },
        "byIndustry": {
          "카페": 1,
          "도소매": 1,
          "기타": 1
        },
        "byTenure": {
          "6개월": {
            "total": 1,
            "low": 0
          },
          "12개월": {
            "total": 3,
            "low": 0
          },
          "1개월": {
            "total": 3,
            "low": 1
          },
          "구매설치": {
            "total": 3,
            "low": 1
          },
          "3개월": {
            "total": 5,
            "low": 0
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 4,
            "low": 1
          },
          "KSNET": {
            "total": 3,
            "low": 0
          },
          "KPN": {
            "total": 2,
            "low": 1
          },
          "KIS": {
            "total": 1,
            "low": 0
          },
          "SECTA9": {
            "total": 4,
            "low": 0
          },
          "NICE": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1,
          "단말기 설치나 초기 과정이 어려움": 1
        },
        "alerts": [
          {
            "time": "18:59",
            "store": "모니크헤어",
            "storeId": "477355",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "안쓰는중",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "[기록용: 기타이슈/네이버플레이스/서비스업 뷰티헤어] [기록용: 기타이슈/네이버플레이스/서비스업 뷰티헤어]",
            "doneDate": "2026-06-22"
          },
          {
            "time": "15:14",
            "store": "백구생(Baekusaeng)",
            "storeId": "488909",
            "industry": "양조장",
            "indBucket": "기타",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "어르신들은 설치가 불편할 것으로 예상",
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
            "time": "16:14",
            "store": "(주)제주감성2",
            "storeId": "518530",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절 기능 풍부",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:14",
            "store": "루녹스 (LUNOX)",
            "storeId": "493646",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 8,
            "text": "기계가 아주 만족스러움 설치가 쉬움 푯말 같은걸 좀 더 다양하게 줬음 좋겠음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:38",
            "store": "SSUN NAIL(썬네일)",
            "storeId": "407588",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "기계렌탈비가 없고 기계가 심플하고 깔끔해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:28",
            "store": "동구상사, 비오는날의 오후(B5 COFFEE)",
            "storeId": "468469",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "심플하고 편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "미니멀 스토리지 광안점",
            "storeId": "199379",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "데이터를 참고하기에 너무 유용함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:08",
            "store": "동백서가",
            "storeId": "388120",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "깔끔한 인테페이스",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-23": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 21,
        "install": {
          "count": 6,
          "low": 1
        },
        "nps": {
          "count": 21,
          "low": 1
        },
        "high": {
          "install": 3,
          "nps": 13
        },
        "npsDist": {
          "0": 1,
          "7": 2,
          "8": 5,
          "10": 13
        },
        "installDist": {
          "1": 1,
          "4": 2,
          "5": 3
        },
        "byIndustry": {
          "서비스[뷰티,헤어]": 1,
          "서비스[학원]": 3,
          "요식업": 2
        },
        "byTenure": {
          "구매설치": {
            "total": 6,
            "low": 1
          },
          "6개월": {
            "total": 5,
            "low": 0
          },
          "3개월": {
            "total": 3,
            "low": 0
          },
          "1개월": {
            "total": 3,
            "low": 0
          },
          "12개월": {
            "total": 4,
            "low": 0
          }
        },
        "byVan": {
          "KPN": {
            "total": 2,
            "low": 0
          },
          "NICE": {
            "total": 2,
            "low": 0
          },
          "SMARTRO": {
            "total": 4,
            "low": 0
          },
          "SECTA9": {
            "total": 5,
            "low": 0
          },
          "KSNET": {
            "total": 4,
            "low": 0
          },
          "KIS": {
            "total": 3,
            "low": 1
          },
          "DAOU": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "사용중 오류가 자주 발생함": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 1
        },
        "alerts": [
          {
            "time": "15:51",
            "store": "플로웰(Flowell English)어학원",
            "storeId": "517201",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "업종이 학원임을 알리고 상담했는데도 상담시 자세한 설명없었고 받아서 설치할 당시 단말기에서 카드취소가 안된다는걸 알게되서 매우 불편함을 느끼고 반품까지 고민하게됨. 이후 키오스크 기능 사용시 주문번호 멘트를 삭제할 수 없다는 안내를 받음. 광고로 토스단말기 엄청 편하다고 홍보하고 있지만 현실에서는 업종에 따른 서비스자체가 구성 안되어있음. 학원업종 선택했음에도 주문번호가 자동설정되며 삭제가 안되고 카드취소나 프린트를 이용하려면 추가 기기를 구매해야한다는 사실을 배송받고 추후 안내받음. 사전 고지가 명확해야한다고 생각함. 그리고 메일로 받아본 계약서에 적히 상호명, 영문명 등 오류가 많아서 매우 불쾌했음",
                "cat": "사용중 오류가 자주 발생함"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "앞 내용과 동일",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 통화녹취 확인 • 상담사가 먼저 학원업종인 것 확인 및 고지 • 종이영수증 출력 안되며 전자영수증 기능 있음 고지 통화녹취 확인 상담사가 먼저 학원업종인 것 확인 및 고지 종이영수증 출력 안되며 전자영수증 기능 있음 고지 / • OB 완료 • 영수증 출력 및 학원업종 관련해서는 녹취록 확인하였고 오해가 있으신 것 수긍 • 단말기에서 바로 취소가 안되는 ",
            "doneDate": "2026-06-23"
          }
        ],
        "praises": [
          {
            "time": "22:23",
            "store": "이쏘어네일",
            "storeId": "510861",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 4,
            "nps": 7,
            "text": "혼자 설치 하긴 했는데 살짝 버버가렸어요 깔끔합니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "21:41",
            "store": "러블리헤어",
            "storeId": "319908",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "20:46",
            "store": "웅천세일공인중개사사무소",
            "storeId": "354810",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "사용편리",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "18:36",
            "store": "히든보컬스튜디오",
            "storeId": "451682",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "결제시스템이 매우 간편해서 편리하다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "17:09",
            "store": "리스펙NJ",
            "storeId": "317345",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "결제하기가 간편하고 메뉴등록하는것도 간편해서 좋습니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:15",
            "store": "NY과학교습소",
            "storeId": "403993",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리한 기능으로 결재 방식 소통이 원활합니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:01",
            "store": "태인쌤",
            "storeId": "197661",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용이 편리하고 꾸준한 업데이트로 오류가 적어요.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:51",
            "store": "퍼플무용 아카데미",
            "storeId": "512622",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "일단 너무예쁘고 간편해요 이거저거 구매비용이나 렌탈비용도없는데 디자인도 이쁘고 다 만족!!!!!!!! 소문많이냈습니다아",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "메종블리스",
            "storeId": "198972",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "하루매출을 못적고 넘어갈때 그날당일로 등록할수없으니 불편해요.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "좋은날엔",
            "storeId": "198750",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "만족",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:21",
            "store": "스튜디오가림",
            "storeId": "509869",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "쉽고 빠르다 사용하기 편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:21",
            "store": "두루미추어탕",
            "storeId": "513013",
            "indBucket": "요식업",
            "emp": "",
            "install": 4,
            "nps": 8,
            "text": "설명서가없고 전화연결 상담받아야하는데 연결이 너무 오래걸림 합리적인 점수라 생각합니다",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-24": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 25,
        "install": {
          "count": 11,
          "low": 1
        },
        "nps": {
          "count": 25,
          "low": 3
        },
        "high": {
          "install": 6,
          "nps": 16
        },
        "npsDist": {
          "4": 1,
          "5": 2,
          "7": 1,
          "8": 3,
          "9": 2,
          "10": 16
        },
        "installDist": {
          "2": 1,
          "3": 3,
          "4": 1,
          "5": 6
        },
        "byIndustry": {
          "도소매": 4,
          "카페": 1,
          "서비스[뷰티,헤어]": 3,
          "서비스[학원]": 2,
          "기타": 1
        },
        "byTenure": {
          "3개월": {
            "total": 8,
            "low": 0
          },
          "6개월": {
            "total": 5,
            "low": 1
          },
          "구매설치": {
            "total": 11,
            "low": 2
          },
          "1개월": {
            "total": 1,
            "low": 0
          }
        },
        "byVan": {
          "SECTA9": {
            "total": 4,
            "low": 0
          },
          "KOVAN": {
            "total": 1,
            "low": 0
          },
          "KIS": {
            "total": 7,
            "low": 1
          },
          "KPN": {
            "total": 6,
            "low": 1
          },
          "NICE": {
            "total": 1,
            "low": 0
          },
          "SMARTRO": {
            "total": 5,
            "low": 1
          },
          "DAOU": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "구매,계약과정에서 설명이 부족": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2
        },
        "alerts": [
          {
            "time": "18:31",
            "store": "모던 세탁",
            "storeId": "512504",
            "industry": "세탁",
            "indBucket": "도소매",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "설명을 부좆",
                "cat": "구매,계약과정에서 설명이 부족"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "",
            "doneDate": ""
          },
          {
            "time": "15:58",
            "store": "이이이이이(EEEEE)합정역점",
            "storeId": "507410",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 2,
            "nps": 5,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "굳이 필요하지 않은 케이블 선들이 2개나와서 헷갈림(단독으로 사용할경우에 선들까지옴. 세트로구매했음)",
                "cat": "구매,계약과정에서 설명이 부족"
              },
              {
                "q": "추천의향",
                "score": 5,
                "text": "아직 많이 사용안해봤지만, 편리함",
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
            "time": "15:46",
            "store": "노라벨Nolabel",
            "storeId": "309143",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 4,
            "reasons": [
              {
                "q": "추천의향",
                "score": 4,
                "text": "수수료가 쎔",
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
            "time": "16:28",
            "store": "네페아(Nymphea)",
            "storeId": "512766",
            "indBucket": "카페",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "컴팩트한 사이즈와 예쁜 디자인, 어플 사용 편의성, 사용자 시인성 등 전부 좋습니다. 3번과 같은 이유입니다.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:22",
            "store": "제이에듀멘토학원",
            "storeId": "406835",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "원하던 프로그램이 다 있음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:58",
            "store": "하이네일",
            "storeId": "515344",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "고객센터로 문의하면서 설치했음 매우친절 인테리어효과 깔끔 편리 관리기능",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:46",
            "store": "웜업(WARM UP)",
            "storeId": "313213",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리합니다.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:28",
            "store": "가챠#(GACHA#)",
            "storeId": "508256",
            "indBucket": "도소매",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "간편해요 간편함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:22",
            "store": "조천당",
            "storeId": "413256",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:12",
            "store": "수수안",
            "storeId": "450408",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "인테리어 효과가 크고 간편해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "07:25",
            "store": "행담차문화원",
            "storeId": "514239",
            "indBucket": "기타",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "쉽게 설치가능하게 원격으로 도움 받았음 설치 쉽고 따로 사용료 없으니까",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-25": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 27,
        "install": {
          "count": 5,
          "low": 1
        },
        "nps": {
          "count": 27,
          "low": 6
        },
        "high": {
          "install": 3,
          "nps": 14
        },
        "npsDist": {
          "0": 2,
          "3": 1,
          "5": 3,
          "6": 1,
          "7": 2,
          "8": 2,
          "9": 2,
          "10": 14
        },
        "installDist": {
          "1": 1,
          "4": 1,
          "5": 3
        },
        "byIndustry": {
          "요식업": 1,
          "서비스[뷰티,헤어]": 2,
          "서비스[학원]": 1,
          "도소매": 1
        },
        "byTenure": {
          "1개월": {
            "total": 7,
            "low": 0
          },
          "구매설치": {
            "total": 5,
            "low": 1
          },
          "3개월": {
            "total": 7,
            "low": 4
          },
          "12개월": {
            "total": 5,
            "low": 1
          },
          "6개월": {
            "total": 3,
            "low": 0
          }
        },
        "byVan": {
          "SECTA9": {
            "total": 9,
            "low": 2
          },
          "KSNET": {
            "total": 7,
            "low": 1
          },
          "KIS": {
            "total": 3,
            "low": 0
          },
          "KPN": {
            "total": 6,
            "low": 3
          },
          "SMARTRO": {
            "total": 2,
            "low": 0
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 1,
          "단말기 설치나 초기 과정이 어려움": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 3,
          "고객센터 연락이 매우 힘듦": 1
        },
        "alerts": [
          {
            "time": "17:31",
            "store": "고유의 목소리",
            "storeId": "407914",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "너무 복잡해요",
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
            "time": "17:01",
            "store": "래쉬기릿",
            "storeId": "423553",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "네이버플레이스 연동 불가",
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
            "time": "16:01",
            "store": "김지현 영어수학",
            "storeId": "385222",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 3,
            "reasons": [
              {
                "q": "추천의향",
                "score": 3,
                "text": "온라인 결제를 더 많이 사용합니다. 온라인 결제가 되었음 좋겠어요.",
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
            "store": "온헤어",
            "storeId": "515118",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 1,
            "nps": 0,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "통화가어렵습니다.시설도불편합니다",
                "cat": "고객센터 연락이 매우 힘듦"
              },
              {
                "q": "추천의향",
                "score": 0,
                "text": "전화로설치되었는지확인해주지않아요",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 점주 고령으로 원격설치 불가, 차주 화요일 오전11시 방문설치 예정 • [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 서비스업 뷰티헤어] 점주 고령으로 원격설치 불가, 차주 화요일 오전11시 방문설치 예정 [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 서비스업 뷰티헤어]",
            "doneDate": "2026-06-25"
          },
          {
            "time": "15:31",
            "store": "뉴엘헤어",
            "storeId": "423292",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "배경화면 을 못바꿔요",
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
            "time": "15:15",
            "store": "퀸즈EVT영어학원",
            "storeId": "185636",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "저리로 대출해서 거래하게 하고 12%까지 올리고 고신용자에게 연장도 안 해주고 아주 나쁨",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• OB완료 • 토스뱅크 대출받으신 내용을 플레이스에 적어주신거 같다고 함 • [기록용: 기타이슈/서비스업 학원] OB완료 토스뱅크 대출받으신 내용을 플레이스에 적어주신거 같다고 함 [기록용: 기타이슈/서비스업 학원]",
            "doneDate": "2026-06-25"
          }
        ],
        "praises": [
          {
            "time": "21:51",
            "store": "싱글벙글 산약초 건강원",
            "storeId": "450883",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "비용 없이 친절하게 안내해주시고 사용할 수 있게 해주셔서 큰 힘이 됩니다.",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "20:51",
            "store": "도구돼지국밥",
            "storeId": "477117",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리하고 가격이 싸요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "18:07",
            "store": "독도새우",
            "storeId": "516447",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "친절하게 설명을 자세히 차근차근해주셨어요 사용하기 쉬워서",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:50",
            "store": "대치명문영어 교습소",
            "storeId": "183120",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "문제 있을 때 친절히 응대해 주셔서",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:20",
            "store": "바르다미술교습소",
            "storeId": "476228",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "너무 편함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:37",
            "store": "망포플레이팩토창의수학교습소",
            "storeId": "513034",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "토스 단말기 만족합니다 사용법이 편리합니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:37",
            "store": "미샤창원대동백화점",
            "storeId": "512958",
            "indBucket": "도소매",
            "emp": "",
            "install": 4,
            "nps": 10,
            "text": "천천히 설명해주셔서 감사했습니다 사용하기 간편해서",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:31",
            "store": "모들플라워",
            "storeId": "417278",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "디자인도 예쁘고 사용법도 간단하고 결제도 편리해서 좋습니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "우도바라기",
            "storeId": "316456",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용하기 편리 프론트에서 고객이 직접 주문과 결제가능해서 1인매장에 아주편리",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:24",
            "store": "밝은세상 안경원",
            "storeId": "320506",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "세련된 디자인과 PC 연동과 자체로도 결제가되어 편리해요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:15",
            "store": "윤슬로네일",
            "storeId": "192050",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용이 편리하고 업데이트가 자주 되어서 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "11:14",
            "store": "포미",
            "storeId": "189913",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "너무 좋아요",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-26": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 27,
        "install": {
          "count": 10,
          "low": 3
        },
        "nps": {
          "count": 27,
          "low": 10
        },
        "high": {
          "install": 3,
          "nps": 10
        },
        "npsDist": {
          "0": 3,
          "1": 1,
          "3": 2,
          "5": 4,
          "7": 1,
          "8": 1,
          "9": 5,
          "10": 10
        },
        "installDist": {
          "1": 2,
          "2": 1,
          "3": 2,
          "4": 2,
          "5": 3
        },
        "byIndustry": {
          "서비스[학원]": 3,
          "요식업": 1,
          "서비스[뷰티,헤어]": 4,
          "카페": 1,
          "도소매": 1
        },
        "byTenure": {
          "1개월": {
            "total": 5,
            "low": 3
          },
          "12개월": {
            "total": 5,
            "low": 1
          },
          "3개월": {
            "total": 5,
            "low": 2
          },
          "6개월": {
            "total": 2,
            "low": 0
          },
          "구매설치": {
            "total": 10,
            "low": 5
          }
        },
        "byVan": {
          "SECTA9": {
            "total": 6,
            "low": 2
          },
          "KSNET": {
            "total": 6,
            "low": 2
          },
          "SMARTRO": {
            "total": 6,
            "low": 2
          },
          "KIS": {
            "total": 2,
            "low": 0
          },
          "KPN": {
            "total": 6,
            "low": 4
          },
          "NICE": {
            "total": 1,
            "low": 1
          }
        },
        "reasonCounts": {
          "사용중 오류가 자주 발생함": 1,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 5,
          "필요한 기능이 없거나 몰라서 불편": 2,
          "단말기 설치나 초기 과정이 어려움": 4,
          "고객센터 연락이 매우 힘듦": 1
        },
        "alerts": [
          {
            "time": "20:23",
            "store": "네일보네이즈",
            "storeId": "198440",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "오류가 많이나고 응대직원이 불친절하다고 느낌.",
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
            "time": "19:38",
            "store": "불패칼국수 월피동점",
            "storeId": "410939",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "오늘 점심 저녁 바쁜시간에 결제안되는 사태를 보고",
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
            "time": "17:08",
            "store": "달보드레",
            "storeId": "405599",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "26일 장애건으로 영업에 지장 받응",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX 일괄문자발송 CX 일괄문자발송",
            "doneDate": ""
          },
          {
            "time": "15:43",
            "store": "살롱드유니(헤드스파)",
            "storeId": "161635",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "익숙치않은 기계사용의 불편함",
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
            "time": "15:43",
            "store": "큐티클헤어",
            "storeId": "523061",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 1,
            "nps": 3,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "설치과정이 어려웠어요",
                "cat": "단말기 설치나 초기 과정이 어려움"
              },
              {
                "q": "추천의향",
                "score": 3,
                "text": "설치과정이 어렵고 기본용지가 동봉되어 오지 않아 신청하니 착불택배비 붙음",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 처리완료 원격인입건 처리완료 상호: 큐티클헤어 / KPN 사업자번호: 1273950824 핸드폰 번호: 01024253228 / 갤 주소: 경기도 동두천시 중앙로 110-17 (지행동) 현대프라자 101호 큐티클헤어 인입유형: 온라인 공급유형: 임대 배달제휴: 자대리점: N 내용:포프+유프 온보딩 요청드립니다. 상호: 큐티클헤어 / KPN 사업자번호: ",
            "doneDate": "2026-06-26"
          },
          {
            "time": "15:43",
            "store": "프렌잉글리시 월평황실점",
            "storeId": "440976",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 3,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "포스 활용이 어려워요ㅜ",
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
            "time": "15:26",
            "store": "킨느(kynne)",
            "storeId": "459996",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "네이버리뷰작성이 힘듭니다 토스리뷰는 장사에 별 도움이 안됩니다",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "[기록용: 기타이슈/네이버연동/서비스업 뷰티헤어] [기록용: 기타이슈/네이버연동/서비스업 뷰티헤어]",
            "doneDate": "2026-06-26"
          },
          {
            "time": "15:26",
            "store": "시은순환요가",
            "storeId": "482055",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "금액 별도 입력 결제 방법이 없음",
                "cat": "필요한 기능이 없거나 몰라서 불편"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-06-26"
          },
          {
            "time": "15:13",
            "store": "좋은 움직임 연구소 헬스&PT",
            "storeId": "491958",
            "industry": "학원/스포츠/서비스",
            "indBucket": "서비스[학원]",
            "install": 2,
            "nps": 3,
            "reasons": [
              {
                "q": "구매설치",
                "score": 2,
                "text": "아무래도 설명서랑 영상만 보고 따라하기는 어려움. 고객센터나 판매자에게 물어보기 편하게 하는게 없음. 팔고 땡",
                "cat": "고객센터 연락이 매우 힘듦"
              },
              {
                "q": "추천의향",
                "score": 3,
                "text": "필요는 하면 알려는 줘도 젊은 사람아니면 추천안할듯",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• 프론트온보딩 및 금액입력결제모드, 전자영수증 세팅 및 사용법 교육 완료 • 고객센터 번호 모르셔서 안내 해드림 • [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 서비스업 체육] 프론트온보딩 및 금액입력결제모드, 전자영수증 세팅 및 사용법 교육 완료 고객센터 번호 모르셔서 안내 해드림 [기록용: 고객센터에 연결하거나 상담받기가 힘들었어요/ 서비스",
            "doneDate": "2026-06-26"
          },
          {
            "time": "12:25",
            "store": "타니예르",
            "storeId": "431885",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "고객센터 연결 사실상 불가",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "CX일괄문자발송 CX일괄문자발송",
            "doneDate": "2026-06-26"
          },
          {
            "time": "11:12",
            "store": "핸썸가이",
            "storeId": "514667",
            "industry": "뷰티",
            "indBucket": "서비스[뷰티,헤어]",
            "install": 1,
            "nps": 9,
            "reasons": [
              {
                "q": "구매설치",
                "score": 1,
                "text": "설치하라는데로 해도 아무것도 안되고.. 심지어 배경화면도 안바뀌고.. 넘넘 어려웠어요.. 그냥 전원 연결하고 간단히 하라는거 따라하면 될줄 알았는데.. 삼일동안 끙끙 대다가.. 아들 불러서 했는데.. 아들도 머 이렇게 쉽지 않냐고~~",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "1차부재 1차부재 / 2차부재 2차부재",
            "doneDate": "2026-06-26"
          }
        ],
        "praises": [
          {
            "time": "21:28",
            "store": "주식회사 마켓윙스",
            "storeId": "471165",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리함",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:44",
            "store": "심리상담소 홀씨",
            "storeId": "464751",
            "indBucket": "서비스[학원]",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "친절한 설명과 함께 잘 설치해주셨어요 설치도 잘 해주셨지만 기본적으로 알아야할 부분들에 대한 설명을 잘 해주셨어요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:43",
            "store": "오늘도부담없이",
            "storeId": "509991",
            "indBucket": "요식업",
            "emp": "",
            "install": 5,
            "nps": 10,
            "text": "자세하게 설명서 보내주셔서 아들이 설치했어요 편리하게 사용할수있고 간편해서 좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "16:07",
            "store": "서나결",
            "storeId": "416548",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:43",
            "store": "황지영헤어스크린",
            "storeId": "523446",
            "indBucket": "서비스[뷰티,헤어]",
            "emp": "",
            "install": 5,
            "nps": 9,
            "text": "간편하고.생각보다어렵지않고 편리해요 일단빠르고단말기모양도세련돠고 친절히상담잘해주고톡도빠른답장해주고좋아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:22",
            "store": "목가적",
            "storeId": "197867",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 8,
            "text": "타 포스프로그램에 비해 간편하고 피드백빠르고 좋음",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:22",
            "store": "더건강한피티(문화비)",
            "storeId": "201487",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "아주 좋습니다",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:22",
            "store": "나무와 풀",
            "storeId": "184918",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리하고 포스기로 할수 있는게 많아서 좋습니다",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    },
    "2026-06-27": {
      "updatedAt": "",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 24,
        "install": {
          "count": 1,
          "low": 0
        },
        "nps": {
          "count": 24,
          "low": 10
        },
        "high": {
          "install": 1,
          "nps": 5
        },
        "npsDist": {
          "0": 4,
          "1": 2,
          "2": 2,
          "5": 2,
          "6": 1,
          "7": 5,
          "8": 2,
          "9": 1,
          "10": 5
        },
        "installDist": {
          "5": 1
        },
        "byIndustry": {
          "서비스[학원]": 1
        },
        "byTenure": {
          "6개월": {
            "total": 6,
            "low": 3
          },
          "1개월": {
            "total": 9,
            "low": 3
          },
          "3개월": {
            "total": 4,
            "low": 2
          },
          "12개월": {
            "total": 4,
            "low": 2
          },
          "구매설치": {
            "total": 1,
            "low": 0
          }
        },
        "byVan": {
          "SMARTRO": {
            "total": 4,
            "low": 2
          },
          "SECTA9": {
            "total": 6,
            "low": 3
          },
          "KIS": {
            "total": 3,
            "low": 0
          },
          "KSNET": {
            "total": 4,
            "low": 3
          },
          "KPN": {
            "total": 3,
            "low": 1
          },
          "NICE": {
            "total": 2,
            "low": 0
          },
          "KOVAN": {
            "total": 1,
            "low": 1
          },
          "DAOU": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {
          "필요한 기능이 없거나 몰라서 불편": 1,
          "단말기 설치나 초기 과정이 어려움": 2,
          "기타 이슈(정산/직원에 대한 불만/호영님출몰)": 2,
          "고객센터 연락이 매우 힘듦": 1,
          "사용중 오류가 자주 발생함": 4
        },
        "alerts": [
          {
            "time": "23:11",
            "store": "이연서 캘리그라피",
            "storeId": "318521",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "편하거나 불편함이 없다",
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
            "time": "16:44",
            "store": "강프로휠타이어",
            "storeId": "374914",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "아침 출근해서 첫결재때는 연결이 항상 끊겨있음ㅋㅋ 영수증 재출력이 일상. 판매한 하청업체도 대응도 배째라 위약금내라식 대응. 진심으로 토스 회사는 망하시길 바랍니다. 이 정도면 다단계사기회사지요.",
                "cat": "단말기 설치나 초기 과정이 어려움"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "• • 금액입력결제모드로 결제시 토스포스 실행되어 있는 상태여야 자동출력됨 설명 드리고 프론트관련 AS 도움드리겠다 하였으나 지속적으로 통화거부하시며 VOC 저점인입되는 매장 히스토리 금액입력결제모드로 결제시 토스포스 실행되어 있는 상태여야 자동출력됨 설명 드리고 프론트관련 AS 도움드리겠다 하였으나 지속적으로 통화거부하시며 VOC 저점인입되는 매장 • •",
            "doneDate": "2026-06-27"
          },
          {
            "time": "16:29",
            "store": "카페 완도리",
            "storeId": "202586",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "시스템 불안정",
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
            "time": "16:09",
            "store": "해법영어교습소",
            "storeId": "280296",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "상담내용과 관리 부분이 아예 다르고 소개 해서 전화 번호 드려도 연락도 없고 최악 입니다",
                "cat": "고객센터 연락이 매우 힘듦"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "/ • 지인추천 이벤트 관련 기상담 안내까지 드린 매장으로 추천한 지인이 프론트 구매안한 매장으로 이벤트대상 아님 설명드린 매장 • 지속 인입되어 통화하였으나 온도감 높으심 통화거부 • 문자로 해당 내용 재발송 안내 히스토리 지인추천 이벤트 관련 기상담 안내까지 드린 매장으로 추천한 지인이 프론트 구매안한 매장으로 이벤트대상 아님 설명드린 매장 지속 인입되",
            "doneDate": "2026-06-27"
          },
          {
            "time": "16:03",
            "store": "배정동카페",
            "storeId": "483576",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 2,
            "reasons": [
              {
                "q": "추천의향",
                "score": 2,
                "text": "토스포스기 오류가 있을지 몰랐는데 영업시간에 오류가 생기니 너무 불편함 포스기 오류에 대한 문제 해결이 시급해보임",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "토스장애이슈 안내 문자 발송 토스장애이슈 안내 문자 발송",
            "doneDate": ""
          },
          {
            "time": "15:59",
            "store": "굿앳 (Good ATT)",
            "storeId": "202306",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 5,
            "reasons": [
              {
                "q": "추천의향",
                "score": 5,
                "text": "어제와같은 서버 문제가 하루에 두번씩이나 생긴게 이해할 수없어요. 특히 12시부터 18시부터 점심 , 저녁 피크타임에 이래버리니.. 게다가 고객센터 전화연결이 힘들어서 추천하지 않습니다.",
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
            "time": "15:39",
            "store": "코딩앤플레이 평택고덕점",
            "storeId": "322697",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "아직까지 부족한것 같다",
                "cat": "기타 이슈(정산/직원에 대한 불만/호영님출몰)"
              }
            ],
            "emp": "송태양",
            "autoStatus": "처리완료",
            "autoEmp": "송태양",
            "autoNote": "2차부재 2차부재",
            "doneDate": "2026-06-27"
          },
          {
            "time": "15:33",
            "store": "리플주",
            "storeId": "468085",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "단말기에러",
                "cat": "사용중 오류가 자주 발생함"
              }
            ],
            "emp": "",
            "autoStatus": "",
            "autoEmp": "",
            "autoNote": "CX일괄안내예정 CX일괄안내예정",
            "doneDate": ""
          },
          {
            "time": "15:33",
            "store": "라라카페",
            "storeId": "463789",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 1,
            "reasons": [
              {
                "q": "추천의향",
                "score": 1,
                "text": "26일 결제 지연 및 불가 현상(토스 설치 대리점 포함 토스 상담원 연락 자체 불가 누구도 상황 해결책 제시 못함 추후 달랑 문자한통 모니터링중이라 보내고 해결안됨 고소하고싶음 장사 중대한 피해 입음",
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
            "time": "10:12",
            "store": "만취살롱",
            "storeId": "418958",
            "industry": "",
            "indBucket": "",
            "install": null,
            "nps": 0,
            "reasons": [
              {
                "q": "추천의향",
                "score": 0,
                "text": "프로그램오류 개선 너무 안됨 영업방해등 문제가 자주 발생 문제발생시 응대등 추천하지 않음",
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
            "time": "20:04",
            "store": "150.우리끼리 키즈카페 블럭마을 평택지제점",
            "storeId": "458560",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 7,
            "text": "영수증 프린트가 필요한 상황에 대처하기 힘들고 토스 사장님 어플을 사용할 때 메뉴 수정, 관리할 때 글씨가 너무 작아서 휴대폰으로 할 때 너무 불편해서",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "19:34",
            "store": "헤세커피",
            "storeId": "485747",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "사용자 사용자 편의성이 최고",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:59",
            "store": "곱다",
            "storeId": "200398",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "무료이용에 편리함 굿굿",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:39",
            "store": "손끝에내린단비",
            "storeId": "305964",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "편리하기도 하고 어느 영업장이나 잘어울릴거같아요",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:33",
            "store": "자이모 보컬 스튜디오",
            "storeId": "450342",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 9,
            "text": "프로그램 실행할때 부팅, 로딩이 느림",
            "byReaction": false,
            "doneDate": ""
          },
          {
            "time": "15:33",
            "store": "원유방아간",
            "storeId": "485771",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 10,
            "text": "기능이 깔끔하고 필요한 것만 있어서 사용하기 편해요",
            "byReaction": false,
            "doneDate": ""
          }
        ]
      }
    }
  }
};
