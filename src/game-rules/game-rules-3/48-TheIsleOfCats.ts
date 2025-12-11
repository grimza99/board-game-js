import GAME_LIST from '../../game-list/game-list-Item.js';
export const THE_ISLE_OF_CATS = {
  title: '아일 오브 캣츠 (The Isle of Cats)',
  image: 'public/game-image/default/default_detail_image.jpeg',
  info: GAME_LIST[47],
  rule: `<div class="rules-isle-of-cats">
  <h4>게임 승리조건</h4>
  <p>
    5라운드 종료 후 고양이 가족 점수, 보트 채우기 점수, 보물/필드 목표 카드 점수를 합산해 
    최고 점수를 얻은 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>각 플레이어에게 보트 보드를 준다.</li>
    <li>고양이 가족별 타일을 섞어 공급한다.</li>
    <li>어부(생선 토큰)와 보물 타일, 목표 카드 덱을 준비한다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>카드 드래프트: 목표 카드/구출 카드 등을 드래프트한다.</li>
    <li>생선 지불: 구조할 고양이 수에 따라 생선을 지불한다.</li>
    <li>타일 배치: 고양이 타일을 보트 보드 위에 규칙에 맞게 배치한다.</li>
    <li>보물 배치: 보물 카드를 플레이해 추가 타일을 얻는다.</li>
  </ol>

  <h4>세부 규칙 – 가족 색·실내/실외 구역</h4>
  <ul>
    <li><strong>가족 색</strong>: 같은 색 고양이를 연결해 그룹을 만들면 큰 점수를 얻는다.</li>
    <li><strong>보트 구역</strong>: 방을 완전히 채우면 점수를 얻고, 빈 방은 감점이 된다.</li>
  </ul>
</div>
`,
  video: 'tfeLJe6QCVA?si=FlF25vPaG_kTdlEg',
};
