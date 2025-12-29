import { toFileName } from '../utils/util.mjs';

export function buildPrompt({ gameId, gameName, rawText, videoEmbedded }) {
  const fileName = toFileName(gameId, gameName);
  return `
너는 보드게임 규칙을 정리하는 전문가다.
아래 원문 규칙 텍스트를 기반으로,
반드시 다음 출력 규격을 지켜 결과를 생성해야 한다.
입력받은 json형식은 영어이나, 출력은 반드시 한국어로 작성해야 한다.
모든 문체는 ~입니다. 체로 작성한다.


[출력1) 텍스트 메타데이터 규격]

{
id: ${gameId},
name : 한글로 변환된 게임 이름 (${gameName}) : 예 ) '그레이트 웨스턴 트레일 (Great Western Trail)',
players : 예) n-m 또는 5+
playtime : 플레이시간 (10분 단위 숫자) : 예) 120,
difficulty : 난이도 (쉬움 / 중간 / 어려움 중 하나) : 예) '어려움',
image : 'public/game-image/crawl-images/${fileName}.jpeg' 예) 'public/game-image/main/39-greatest.jpeg',
description : 게임 소개 (1~2문장 요약) : 예) '목장을 운영하며 소를 모으고, 카우보이를 고용하고, 철도망을 확장해 효율적으로 소를 배송하는 덱빌딩+루트 최적화 전략 게임입니다.',
}

[출력2) 게임 룰 규칙 규격]

1) 아래의 원문 규칙 텍스트를 참조하여 게임 룰 규칙을 HTML로 작성한다.
- <article> 사용 금지
- <section> 사용 금지
-<ul,li> 등을 적절히 사용하여 가독성을 좋게 향상
- h1,h2,h3 사용 금지

- 설명은 초보자도 이해할 수 있도록 매우 자세하게 작성하고, 한줄 요약은 금지한다.
- 최소 4개 섹션:
  - 게임 승리조건
  - 게임 사전준비
  - 턴 진행 구조
  - 추가 규칙 (필요 시)

2) 작성한 게임 룰 규칙 HTML과 메타데이터를 가지고 아래와 같은 json 객체를 생성한다.
 {
  summaryObject:출력1의 메타데이터 객체,
  ruleObject:{
    title: '한글로 변환된 게임 이름 (${gameName})',
    image: 'public/game-image/crawl-images/${fileName}.jpeg',
    info:  '__GAME_LIST[${gameId - 1}]__',
    rule: 위에서 작성한 게임 룰 규칙 HTML,
    video: '${videoEmbedded || null}',
  }
};


[원문 규칙 텍스트]
"""
${rawText}
"""
`;
}
