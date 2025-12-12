import GAME_LIST from '../../game-list/game-list-Item.js';
export const CARCASSONNE = {
  title: '카르카손 (Carcassonne)',
  image: 'public/game-image/detail/57-Carcassonne.jpeg',

  info: GAME_LIST[56],
  rule: `<div class="rules-carcassonne">
  <h4>게임 승리조건</h4>
  <p>
    모든 타일이 소진된 후 점수를 계산하여
    가장 높은 점수를 가진 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>시작 타일을 중앙에 배치한다.</li>
    <li>타일 더미를 섞어 뒤집어 놓는다.</li>
    <li>각 플레이어는 미플 7개를 받는다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>타일 1장 공개.</li>
    <li>규칙에 맞게 지도에 배치.</li>
    <li>원하면 미플 1개 배치.</li>
    <li>완성된 지형 점수 계산.</li>
  </ol>

  <h4>세부 규칙 – 도시·길·수도원</h4>
  <ul>
    <li><strong>도시</strong>: 타일 수 × 2점.</li>
    <li><strong>길</strong>: 타일 수 × 1점.</li>
    <li><strong>수도원</strong>: 주변 8칸 완성 시 9점.</li>
  </ul>
</div>
`,
  video: 'BPXDhcYqngE?si=iJw65GrgK9pK0MkU',
};
