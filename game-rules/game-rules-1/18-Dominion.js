import GAME_LIST from "../../game-list/game-list-Item.js";

export const DOMINION = {
  title: "도미니언 (Dominion)",
  image: "public/game-image/detail/18-Dominion.jpeg",
  info: GAME_LIST[17],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>승점 카드를 모아 게임 종료 시 가장 높은 승점을 가진 플레이어가 승리합니다.</li>
    <li>주요 종료 조건:
      <ul>
        <li>속주(점수 6점 카드) 더미 소진</li>
        <li>어떤 카드 더미 3개가 소진</li>
      </ul>
    </li>
  </ul>
</div>

<div>
  <h4>🧱 2) 사전 준비</h4>
  <ul>
    <li>핵심 카드(재물·승점)와 10종류의 왕국 카드를 선택해 테이블 중앙에 배치.</li>
    <li>플레이어는 똑같은 시작 덱(구리 7 + 저택 3 = 10장)을 받습니다.</li>
    <li>자신의 덱에서 카드 5장을 뽑아 시작.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 턴 구조 — A/B/C 단계</h4>
  <ol>
    <li>① Action 단계: 행동 카드 1장 플레이 가능.</li>
    <li>② Buy 단계: 재물 카드로 원하는 카드 구매.</li>
    <li>③ Clean-up 단계: 사용/구매 카드 모두 버리고 신 카드 5장 드로우.</li>
  </ol>
</div>

<div>
  <h4>🃏 4) 카드 종류</h4>
  <ul>
    <li>재물 카드(구리/은/금): 구매력 제공</li>
    <li>행동 카드: 추가 행동·카드 드로우·공격 등 다양한 효과</li>
    <li>승점 카드: 게임 종료 시 점수 획득</li>
    <li>폐기 카드(쓰레기 처리)로 덱 압축 가능</li>
  </ul>
</div>
`,
  video: "xJVcbKQZZWg?si=pVatlqoB6dQtzNDF",
};
