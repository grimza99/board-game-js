import GAME_LIST from "../../game-list/game-list-Item.js";

export const SCYTHE = {
  title: "사이쓰 (Scythe)",
  image: "public/game-image/detail/19-Scythe.jpeg",
  info: GAME_LIST[18],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>6개의 업적 별(전투 승리, 인기, 건설 등)을 달성하고 게임 종료되면, 최종 점수가 가장 높은 플레이어가 승리합니다.</li>
    <li>점수 = 별 점수 + 영토 점수 + 자원 점수 등.</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 사전준비</h4>
  <ul>
    <li>보드 중앙에 공장 타일 설치.</li>
    <li>각 플레이어는 진영 보드 + 플레이어 보드를 조합해 배정.</li>
    <li>메카 4개, 근로자, 업그레이드 큐브, 건물 등을 자기 진영 색으로 준비.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 턴 구조</h4>
  <ul>
    <li>자신의 플레이어 보드에서 한 섹션을 선택해 <strong>상단 행동 → 하단 행동</strong>을 수행.</li>
    <li>상단 행동: 이동 / 생산 / 거래 / 강화</li>
    <li>하단 행동: 메카 배치 / 구조물 건설 / 업그레이드 / 채용</li>
    <li>인접 플레이어와 전투할 수 있음(전투 카드 + 전투력 사용).</li>
  </ul>
</div>

<div>
  <h4>⚙️ 4) 특수 시스템</h4>
  <ul>
    <li>인기(대중 지지) 수치가 점수 배율에 큰 영향.</li>
    <li>강력한 메카 능력은 진영마다 다름.</li>
    <li>공장 타일에서 한 번만 얻을 수 있는 강력한 액션 카드 존재.</li>
  </ul>
</div>
`,
  video: "9-XvYlj6r8c?si=rdk9CLwYqPcioKAW",
};
