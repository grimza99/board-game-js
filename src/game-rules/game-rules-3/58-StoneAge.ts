import GAME_LIST from '../../game-list/game-list-Item.js';
export const STONE_AGE = {
  title: '스톤에이지 (Stone Age)',
  image: 'public/game-image/detail/58-StoneAge.jpeg',

  info: GAME_LIST[57],
  rule: `<div class="rules-stoneage">
  <h4>게임 승리조건</h4>
  <p>
    게임 종료 시 건물, 문명 카드, 인구, 자원 점수를 합산해
    가장 높은 점수를 얻은 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>중앙 보드에 자원 지역과 행동 칸 배치.</li>
    <li>각 플레이어는 일꾼 5명, 음식 12개로 시작.</li>
    <li>건물 카드와 문명 카드를 공개한다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>일꾼 배치.</li>
    <li>일꾼 회수 및 주사위 굴림.</li>
    <li>음식 공급.</li>
    <li>점수/효과 적용.</li>
  </ol>

  <h4>세부 규칙 – 주사위 보정</h4>
  <ul>
    <li><strong>도구</strong>: 주사위 결과를 보정해 자원 수급 안정화.</li>
  </ul>
</div>
`,
  video: 'H95A2OM-xo0?si=eLTYd7s6xMzXm-xX',
};
