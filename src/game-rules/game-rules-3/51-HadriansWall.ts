import GAME_LIST from '../../game-list/game-list-Item.js';
export const HADRIANS_WALL = {
  title: '하드리안의 장벽 (Hadrian’s Wall)',
  image: 'public/game-image/detail/51-HadriansWall.jpeg',
  info: GAME_LIST[50],
  rule: `<div class="rules-hadrian">
  <h4>게임 승리조건</h4>
  <p>
    6라운드를 모두 마친 뒤, 방어력·훈련·예술·신앙·시민 등 여러 트랙의 점수를 합산해 
    가장 높은 점수를 가진 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>플레이어마다 양면 시트(시민/군사 시트)를 준다.</li>
    <li>자원 큐브, 병사, 건물 토큰 등을 세팅한다.</li>
    <li>지도자 카드와 개인 목표 카드를 지급한다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>카드 2장 선택: 재료와 보너스를 결정한다.</li>
    <li>자원 분배: 노동자, 자원 획득.</li>
    <li>건설: 건물/트랙을 체크하여 효과를 연쇄적으로 얻는다.</li>
    <li>침공 단계: 북방 야만족의 공격을 방어력으로 막는다.</li>
  </ol>

  <h4>세부 규칙 – 연쇄 효과·방어</h4>
  <ul>
    <li><strong>연쇄 체크</strong>: 하나의 트랙을 체크하면 인접 트랙 보너스가 이어지는 콤보 구조.</li>
    <li><strong>침공</strong>: 방어력이 낮으면 패널티를 받고 점수를 잃는다.</li>
  </ul>
</div>
`,
  video: 'HGLm9b1JwpI?si=I3ISID0APcS1g3Ep',
};
