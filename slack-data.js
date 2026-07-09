/*
 * 슬랙 원격 처리 채널(AS요청·명의변경 등) 집계 데이터 (날짜별 누적)
 * GitHub Actions(daily-slack-tally)가 매일 자동 갱신합니다.
 */
window.SLACK_DATA = {
  "version": 18,
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
        "byIndustry": {
          "서비스[학원]": 4,
          "카페": 1
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
            "time": "22:26",
            "store": "매쓰퀸수학국어학원",
            "storeId": "323913",
            "indBucket": "",
            "emp": "",
            "install": null,
            "nps": 5,
            "text": "아주 중요한 기본 기능의 부재",
            "byReaction": false
          },
          {
            "time": "18:55",
            "store": "나래수학교습소",
            "storeId": "331213",
            "indBucket": "",
            "emp": "송태양",
            "install": null,
            "nps": 3,
            "text": "종이 프린터기 아직도 연결 못함..안됨.. 문의 어디에서 할지 모르겠음. 월별 매출표 어디서 찾아야할지 모르겠음. 이거보시면 연락주세요.. 제가 연락을 못받을때가 많지만..",
            "byReaction": true
          },
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
            "store": "세인트폴주니어불당어학원",
            "storeId": "510524",
            "indBucket": "서비스[학원]",
            "emp": "송태양",
            "install": 2,
            "nps": 2,
            "text": "소프트웨어가 너무 부실해요 기기자체는 좋은데 소프트웨어 오류가 너무 많고 업체의 개선의지도 없어서 다른 업체로 바꾸고 싶어요",
            "byReaction": true
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
            "time": "15:19",
            "store": "윤이네 포케샌드",
            "storeId": "493671",
            "indBucket": "",
            "emp": "송태양",
            "install": null,
            "nps": 0,
            "text": "며칠전 에러사건도 그렇고 배달 대행사 연결도 매우 불편합니다 게다가 고객센터 연결도 매우 힘들어요",
            "byReaction": true
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
      "updatedAt": "14:45",
      "counts": {
        "as": {
          "송태양": 11,
          "배선유": 17,
          "서상원": 2,
          "김현기": 9,
          "김기범": 3,
          "심성현": 14,
          "김동욱": 10,
          "김규빈": 10
        },
        "onboarding": {
          "김동욱": 4,
          "송태양": 3,
          "김규빈": 4,
          "심성현": 1,
          "배선유": 1,
          "김현기": 2
        },
        "extern": {
          "서상원": 2,
          "김기범": 1,
          "김동욱": 1
        },
        "transfer": {
          "송태양": 7,
          "김동욱": 1,
          "심성현": 1
        },
        "menu": {
          "김규빈": 4,
          "배선유": 4
        },
        "delivery": {
          "김현기": 1
        }
      },
      "pending": [
        {
          "time": "14:38",
          "store": "멍스타",
          "biz": "7763101696",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:34",
          "store": "용용선생 논현점",
          "biz": "7522901120",
          "handler": "서상원",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:30",
          "store": "(주)카노푸스",
          "biz": "6108618091",
          "handler": "심성현",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:30",
          "store": "로아바이설",
          "biz": "1842002449",
          "handler": "심성현",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:18",
          "store": "텐바이트",
          "biz": "6063907155",
          "handler": "김동욱",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:00",
          "store": "뉴월드 경산점",
          "biz": "1578703037",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "14:00",
          "store": "별이즉석떡볶이",
          "biz": "4406300862",
          "handler": "김현기",
          "cat": "delivery",
          "reasons": [
            "확인 후 미완료"
          ]
        },
        {
          "time": "13:51",
          "store": "타코시티",
          "biz": "3647400507",
          "handler": "배선유",
          "cat": "as",
          "reasons": [
            "확인 후 미완료"
          ]
        }
      ],
      "voc": {
        "responses": 5,
        "install": {
          "count": 1,
          "low": 0
        },
        "nps": {
          "count": 5,
          "low": 0
        },
        "high": {
          "install": 1,
          "nps": 3
        },
        "byIndustry": {
          "도소매": 1
        },
        "reasonCounts": {},
        "alerts": [],
        "praises": [
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
    }
  }
};
