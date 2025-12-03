import GAME_LIST from "../../gameListItem.js";

export const TERRAFORMING_MARS = {
  title: "테라포밍 마스 (Terraforming Mars)",
  image: "public/game-image/detail/15-Terraforming-Mars.jpeg",
  info: GAME_LIST[14],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>모든 글로벌 파라미터(온도, 산소량, 바다 개수)가 최대치에 도달하면 게임 종료 준비에 들어갑니다.</li>
    <li>이후 최종 점수 계산을 통해 <strong>가장 높은 점수(Terraforming Rating + VP)</strong>를 획득한 플레이어가 승리합니다.</li>
    <li>점수 구성: 기본 TR, 지도 타일 보너스, 카드 점수, 목표/보상 등.</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 게임 사전준비</h4>
  <ul>
    <li>화성 보드를 펼치고, 바다 타일 9개·도시/녹지 타일을 준비합니다.</li>
    <li>글로벌 파라미터(온도, 산소 등)를 초기값에 둡니다.</li>
    <li>각 플레이어는 기업 보드를 선택하고, 기본 자원 생산량을 설정합니다.</li>
    <li>프로젝트 카드 덱을 섞고, 초반에 ‘드래프트(선택)’로 10장 중 선택하는 기본 규칙을 적용할 수 있습니다.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 턴 진행 구조 (세대 진행)</h4>
  <ol>
    <li>① 연구 단계: 각 플레이어는 프로젝트 카드 4장을 보고 구매할지 선택합니다.</li>
    <li>② 행동 단계: 시계방향으로 돌아가며 1~2개의 행동을 수행, 모두 패스할 때까지 반복.</li>
    <li>③ 생산 단계: 모든 자원 생산량에 따라 자원을 생산합니다.</li>
  </ol>
</div>

<div>
  <h4>🧩 4) 행동 종류</h4>
  <ul>
    <li>프로젝트 카드 플레이(메가크레딧 지불)</li>
    <li>글로벌 파라미터 상승(온도, 산소, 바다 설치)</li>
    <li>지도 타일 설치(녹지/도시)</li>
    <li>표준 프로젝트(발전소 건설, 도시 건설, 온도 올리기 등)</li>
    <li>카드의 액션 능력 실행</li>
  </ul>
</div>
`,
  video: "zOhNZ6xSwlo?si=-PQ_ofnymoKJBzsc",
};
