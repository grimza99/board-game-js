import GAME_LIST from '../../game-list/game-list-Item.js';
export const SUMMONER_WARS = {
  title: '서머너 워즈 (Summoner Wars)',
  image: 'public/game-image/default/default_detail_image.jpeg',

  info: GAME_LIST[59],
  rule: `<div class="rules-summonerwars">
  <h4>게임 승리조건</h4>
  <p>
    상대 소환사(Summoner)를 쓰러뜨리면 즉시 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>팩션 덱 선택.</li>
    <li>유닛 카드와 시작 유닛 배치.</li>
    <li>전장 매트 배치.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>카드 드로우.</li>
    <li>이동.</li>
    <li>공격.</li>
    <li>소환.</li>
  </ol>

  <h4>세부 규칙 – 마나 관리</h4>
  <ul>
    <li><strong>마나</strong>: 카드 폐기 시 생성되어 소환 비용으로 사용.</li>
  </ul>
</div>

`,
  video: 'b3JflqjXOWA?si=m0WHDUq8UeyXyG7d',
};
