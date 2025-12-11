import GAME_LIST from '../../game-list/game-list-Item.js';
export const MARACAIBO = {
  title: '마라카이보 (Maracaibo)',
  image: 'public/game-image/default/default_detail_image.jpeg',
  info: GAME_LIST[53],
  rule: `<div class="rules-maracaibo">
  <h4>게임 승리조건</h4>
  <p>
    4라운드 후 점수(전투, 탐험, 도시 방문, 카드 엔진, 영향력 등)를 합산해 
    가장 높은 점수를 가진 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>카리브해 보드 설치, 도시/정착지 배치.</li>
    <li>탐험 트랙, 영향력 트랙 세팅.</li>
    <li>플레이어는 배 토큰, 시작 카드, 자원을 받는다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>배 이동: 1~7칸 이동 후 도시에 정박한다.</li>
    <li>도시 행동: 거래, 전투 참여, 임무 완료, 퀘스트 해결 등.</li>
    <li>카드 플레이: 자원을 지불해 엔진을 구축한다.</li>
    <li>정리 후 다음 플레이어 턴.</li>
  </ol>

  <h4>세부 규칙 – 영향력·탐험 트랙</h4>
  <ul>
    <li><strong>영향력</strong>: 3개 국가 중 하나에 영향력을 올리고 전투 보너스를 얻는다.</li>
    <li><strong>탐험 트랙</strong>: 탐험가를 이동시키며 점수·보너스를 획득한다.</li>
  </ul>
</div>
`,
  video: 'MLj6OMtTHbg?si=cqAt8gm5-iTERZyr',
};
