import GAME_LIST from '../../game-list/game-list-Item.js';
export const HEAT_PEDAL_TO_THE_METAL = {
  title: '히트: 페달 투 더 메탈 (Heat: Pedal to the Metal)',
  image: 'public/game-image/detail/47-HeatPedalToTheMetal.jpeg',
  info: GAME_LIST[46],
  rule: `<div class="rules-heat">
  <h4>게임 승리조건</h4>
  <p>
    결승선을 먼저 통과한 차량이 승리한다.  
    동일 라운드에 통과했다면, 더 멀리 간 사람이 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>트랙 보드를 선택하고, 각 플레이어는 차량 미니어처와 개인 덱을 받는다.</li>
    <li>기어(1~4단) 트랙, 냉각 토큰, 히트(열) 카드, 스트레스 카드 등을 준비한다.</li>
    <li>시작 위치에 모든 차량을 배치한다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>기어 변경: 필요하면 기어를 +1/-1 조정한다.</li>
    <li>카드 플레이: 현재 기어 수만큼 카드를 선택해 뒤집어 공개한다.</li>
    <li>이동: 카드의 속도 합만큼 차량을 전진한다.</li>
    <li>코너 체크: 속도를 초과하면 히트 카드를 받아 덱에 추가한다.</li>
    <li>냉각/정리: 냉각 토큰을 사용해 히트 카드를 버린다.</li>
  </ol>

  <h4>세부 규칙 – 스트레스 카드·히트 카드</h4>
  <ul>
    <li><strong>스트레스 카드</strong>: 공개 시 덱에서 숫자 카드가 나올 때까지 계속 뽑아 이동값으로 사용한다.</li>
    <li><strong>히트 카드</strong>: 덱에 들어가면 이동에 방해가 되며, 손패에 잡히면 무능 카드가 된다.</li>
  </ul>
</div>
`,
  video: 'ZPllY3GFRgM?si=xvmU_rwQLaLrdTNY',
};
