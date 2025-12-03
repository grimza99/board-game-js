import GAME_LIST from "../../gameListItem.js";

export const KINGDOMINO = {
  title: "킹도미노 (Kingdomino)",
  image: "public/game-image/detail/16-Kingdomino.jpeg",
  info: GAME_LIST[15],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>게임 종료 시 타일들로 구성된 왕국의 <strong>각 지형별 영역 크기 × 왕관 수</strong>의 총합이 가장 높은 플레이어가 승리합니다.</li>
    <li>5×5 완성 보너스, 중앙 시작 배치 보너스 등을 포함할 수 있습니다.</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 사전준비</h4>
  <ul>
    <li>타일을 모두 섞어 번호 순으로 정렬합니다.</li>
    <li>라운드마다 4장의 타일을 공개하여 오름차순으로 배열합니다.</li>
    <li>플레이어는 자신 색깔의 왕 말 1개를 배정받습니다.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 턴 진행</h4>
  <ol>
    <li>① 플레이어는 타일이 놓인 순서대로, 원하는 타일 위에 왕 말 1개를 배치해 선택합니다.</li>
    <li>② 다음 라운드 타일 4장이 다시 공개됩니다.</li>
    <li>③ 이전 라운드에서 먼저 선택한 플레이어부터 자기 차례에 타일을 배치합니다.</li>
    <li>④ 타일 배치는 기존 왕국과 최소 한 면이 접하도록 배치합니다.</li>
  </ol>
</div>

<div>
  <h4>🏰 4) 영역 점수 계산</h4>
  <ul>
    <li>같은 지형 타일이 연결된 '영역'을 찾습니다.</li>
    <li>영역의 타일 수 × 왕관 수 = 그 영토 점수.</li>
    <li>왕관이 없다면 0점입니다.</li>
  </ul>
</div>
`,
  video: "n-JAc2tClOA?si=cDGgMYmstAoEs-c_",
};
