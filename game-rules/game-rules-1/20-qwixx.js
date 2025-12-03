import GAME_LIST from "../../game-list/game-list-Item.js";

export const QWIXX = {
  title: "퀵스 (Qwixx)",
  image: "public/game-image/detail/20-qwixx.jpeg",
  info: GAME_LIST[19],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>게임 종료 후 네 줄의 점수 총합 - 실수 마킹 패널티를 계산하여 가장 높은 점수를 가진 플레이어가 승리합니다.</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 사전 준비</h4>
  <ul>
    <li>점수 시트와 6개의 주사위(색 4개 + 흰색 2개)를 준비합니다.</li>
    <li>모든 플레이어는 동일한 시트를 사용합니다.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 턴 진행</h4>
  <ul>
    <li>활성 플레이어는 주사위 6개를 굴립니다.</li>
    <li>모든 플레이어가 "흰색 2개 합"을 사용할 수 있습니다.</li>
    <li>활성 플레이어만 "흰색 1개 + 색 주사위"의 조합도 사용할 수 있습니다.</li>
    <li>시트에서 해당 숫자를 오른쪽으로 갈수록 큰 숫자만 칠 수 있도록 진행합니다.</li>
  </ul>
</div>

<div>
  <h4>📌 4) 종료 조건</h4>
  <ul>
    <li>두 줄이 잠기면(마지막 칸 체크) 게임 즉시 종료.</li>
    <li>한 사람이 실수 마킹(패스) 4개를 채워도 종료.</li>
  </ul>
</div>
`,
  video: "mJse3e75x7U?si=XPK7boKr46F8ZbVy",
};
