/*
 * 슬랙 원격 처리 채널(AS요청·명의변경 등) 집계 데이터 (날짜별 누적)
 * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.
 */
window.SLACK_DATA = {
  "version": 228,
  "days": {
    "2026-07-08": {
      "updatedAt": "22:50",
      "counts": {
        "as": {
          "최민석": 28,
          "배선유": 26,
          "김규빈": 16,
          "김현기": 22,
          "심성현": 25,
          "김동욱": 23,
          "송태양": 15,
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
        "voc": {
          "송태양": 3
        },
        "extern": {
          "김현기": 2,
          "김동욱": 5,
          "서상원": 5,
          "김기범": 2,
          "배선유": 1
        },
        "transfer": {
          "최민석": 1,
          "송태양": 8,
          "김동욱": 1
        },
        "menu": {
          "최민석": 1,
          "김규빈": 8,
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
            "확인 후 미완료"
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
          "심성현": 16,
          "김현기": 25,
          "김규빈": 8,
          "김동욱": 19,
          "송태양": 8,
          "배선유": 11,
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
        "voc": {
          "송태양": 3
        }
      },
      "pending": [
        {
          "time": "15:48",
          "store": "탠이네미장원",
          "biz": "6211842516",
          "handler": "송태양",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:15",
          "store": "제이에이지",
          "biz": "1140930387",
          "handler": "송태양",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "12:30",
          "store": "하뷰",
          "biz": "6463601371",
          "handler": "김현기",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "10:18",
          "store": "",
          "biz": "",
          "handler": "김동욱",
          "reasons": [
            "확인 후 미완료"
          ]
        }
      ]
    },
    "2026-07-09": {
      "updatedAt": "23:05",
      "counts": {
        "as": {
          "최민석": 18,
          "김기범": 8,
          "송태양": 17,
          "김규빈": 15,
          "배선유": 25,
          "김현기": 18,
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
          "송태양": 15,
          "김동욱": 1,
          "심성현": 1
        },
        "menu": {
          "최민석": 1,
          "배선유": 6,
          "김규빈": 9
        },
        "delivery": {
          "최민석": 2,
          "서상원": 1,
          "김현기": 2
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": "송태양"
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
            "emp": ""
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
          "최민석": 22,
          "김기범": 4,
          "서상원": 24,
          "김동욱": 19,
          "김현기": 30,
          "김규빈": 18,
          "송태양": 12,
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
          "최민석": 3,
          "송태양": 19
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
          "김동욱": 42,
          "미지정": 14
        },
        "onboarding": {
          "서상원": 1,
          "김동욱": 1
        },
        "extern": {
          "김동욱": 1
        },
        "transfer": {
          "김동욱": 2
        },
        "menu": {
          "김동욱": 3,
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
            "emp": ""
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
      "updatedAt": "09:34",
      "counts": {},
      "pending": [],
      "voc": {
        "responses": 2,
        "install": {
          "count": 2,
          "low": 0
        },
        "nps": {
          "count": 2,
          "low": 0
        },
        "high": {
          "install": 1,
          "nps": 2
        },
        "npsDist": {
          "10": 2
        },
        "installDist": {
          "3": 1,
          "5": 1
        },
        "byIndustry": {
          "요식업": 2
        },
        "byTenure": {
          "구매설치": {
            "total": 2,
            "low": 0
          }
        },
        "byVan": {
          "SECTA9": {
            "total": 1,
            "low": 0
          },
          "SMARTRO": {
            "total": 1,
            "low": 0
          }
        },
        "reasonCounts": {},
        "alerts": [],
        "praises": [
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
    }
  }
};
