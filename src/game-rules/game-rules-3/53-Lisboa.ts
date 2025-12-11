import GAME_LIST from '../../game-list/game-list-Item.js';
export const LISBOA = {
  title: '리스보아 (Lisboa)',
  image: 'public/game-image/detail/53-Lisboa.jpeg',
  info: GAME_LIST[52],
  rule: `<div class="rules-lisboa">
  <h4>게임 승리조건</h4>
  <p>
    3명의 귀족(상인/군인/사제)의 영향력을 활용해 도시를 재건하고, 
    게임 종료 시 건물 점수·상점 점수·임무·정치 영향력 등을 합산하여 
    가장 높은 점수를 가진 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>지진/화재/홍수 후의 도시 보드를 세팅한다.</li>
    <li>건물, 상점, 선박, 법률 카드, 임무 카드를 배치한다.</li>
    <li>플레이어는 공무원 타일, 돈, 영향력을 받는다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
   <li>카드 1장 플레이: 귀족 중 한 명에게 청원을 올리고 그 효과를 사용.</li>
   <li>청원 효과: 건설/교역/선박/정치 행동 등.</li>
   <li>보조 행동: 자원 교환, 영향력 획득 등.</li>
   <li>손패 정리 및 다음 턴 준비.</li>
  </ol>

  <h4>세부 규칙 – 붕괴 지역·건설 규칙</h4>
  <ul>
    <li><strong>붕괴 지역</strong>: 도시가 3종 재해로 나뉘며, 건물 색·재해 종류에 따라 비용이 달라진다.</li>
    <li><strong>상점 배치</strong>: 선박과 연계되며 강력한 경제 효과를 제공한다.</li>
  </ul>
</div>
`,
  video: '51Nn2JAcW0s?si=8w7X0uWlcObdj943',
};
