import GAME_LIST from "../../gameListItem.js";

export const CENTURY_SPICE_ROAD = {
  title: "센추리:향신료의 길 (Century: Spice Road)",
  image: "public/game-image/detail/22-Century-Spice-Road.jpeg",
  info: GAME_LIST[21],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>정해진 수(예: 5장)의 점수 카드를 획득한 후 게임 종료.</li>
    <li>점수 카드 + 남은 큐브 가치 합산으로 가장 높은 점수를 획득한 플레이어가 승리합니다.</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 사전 준비</h4>
  <ul>
    <li>향신료 큐브 4종(노랑/빨강/초록/갈색)을 준비.</li>
    <li>행동 카드(거래·업그레이드) 덱을 섞고 플레이어마다 시작 카드 제공.</li>
    <li>점수 카드 5장을 공개.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 턴 진행</h4>
  <ul>
    <li>턴에서 가능한 행동:
      <ul>
        <li>① 카드 플레이: 큐브 업그레이드, 교환, 획득</li>
        <li>② 점수 카드 구매: 큐브 조합 지불</li>
        <li>③ 핸드 리프레시: 사용한 카드 전체 회수</li>
        <li>④ 시장 카드 구매</li>
      </ul>
    </li>
  </ul>
</div>

<div>
  <h4>🌶️ 4) 향신료 업그레이드 규칙</h4>
  <ul>
    <li>노랑 → 빨강 → 초록 → 갈색 순으로 가치가 높아집니다.</li>
    <li>업그레이드 카드로 여러 단계 점프 가능.</li>
  </ul>
</div>

`,
  video: "3iGD16D7Nvo?si=mbfbDiSNWW9xg_GB",
};
