import GAME_LIST from '../../game-list/game-list-Item.js';
export const SUSHI_GO_PARTY = {
  title: '스시 고 파티 (Sushi Go Party!)',
  image: 'public/game-image/detail/56-SushiGoParty.jpeg',

  info: GAME_LIST[55],
  rule: `<div class="rules-sushigoparty">
  <h4>게임 승리조건</h4>
  <p>
    3라운드 종료 후 스시 카드 조합으로 얻은 점수를 합산해
    가장 높은 점수를 가진 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>이번 게임에 사용할 메뉴 카드 8종을 선택한다.</li>
    <li>선택된 카드만 모아 덱을 섞는다.</li>
    <li>플레이어 수에 맞게 카드를 나눠준다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>카드 1장 선택 후 공개.</li>
    <li>남은 손패를 옆 사람에게 전달.</li>
    <li>모든 카드가 사용될 때까지 반복.</li>
    <li>라운드 종료 후 점수 계산.</li>
  </ol>

  <h4>세부 규칙 – 카드 조합 점수</h4>
  <ul>
    <li><strong>롤</strong>: 같은 종류를 모을수록 점수 증가.</li>
    <li><strong>디저트</strong>: 게임 종료 시 최종 점수 계산.</li>
  </ul>
</div>
`,
  video: 'eTHyJNSQxrA?si=-F_J5eXw9e_aEWGq',
};
