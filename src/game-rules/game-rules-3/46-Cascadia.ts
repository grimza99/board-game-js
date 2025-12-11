import GAME_LIST from '../../game-list/game-list-Item.js';
export const CASCADIA = {
  title: '카스카디아 (Cascadia)',
  image: 'public/game-image/default/default_detail_image.jpeg',
  info: GAME_LIST[45],
  rule: `<div class="rules-cascadia">
  <h4>게임 승리조건</h4>
  <p>
    게임 종료 시 가장 많은 점수를 획득한 플레이어가 승리한다. 점수는 
    동물 목표 카드(패턴 점수), 서식지 연결 점수, 자연 보너스 토큰으로 계산된다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>플레이어마다 시작 서식지 타일을 지급한다.</li>
    <li>서식지 타일 더미를 뒤집어 두고, 동물 토큰을 주머니에 넣는다.</li>
    <li>동물 목표 카드를 동물 종류별로 1장씩 선택하여 이번 게임의 목표로 한다.</li>
    <li>시장에 서식지 타일 4개와 동물 토큰 4개를 공개한다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>시장에서 “타일+동물” 세트를 하나 선택한다.</li>
    <li>서식지 타일을 자신의 생태계에 배치한다. 인접 규칙을 최대한 지키면 보너스 점수에 유리하다.</li>
    <li>동물 토큰을 방금 배치한 타일의 아이콘에 맞게 배치한다.</li>
    <li>4개의 시장 요소를 보충한다.</li>
  </ol>

  <h4>세부 규칙 – 동물 목표·연결 점수·자연 토큰</h4>
  <ul>
    <li><strong>동물 목표</strong>: 동물마다 특정 패턴(연속, 그룹, 특정 모양)을 충족하면 점수를 획득한다.</li>
    <li><strong>서식지 연결</strong>: 가장 긴 연결된 서식지 유형마다 점수를 받는다.</li>
    <li><strong>자연 토큰</strong>: 시장에서 원하는 동물/타일 조합을 바꿀 수 있는 강력한 리롤 기능.</li>
  </ul>
</div>

`,
  video: 'R5n-cGaFMlQ?si=4Np6UYQBc_Ohig6A',
};
