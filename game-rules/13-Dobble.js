import GAME_LIST from "../game-list/game-list-Item.js";

export const DOBBLE = {
  title: "도블 (Dobble /Spot it!)",
  image: "public/game-image/detail/13-Dobble.jpeg",
  info: GAME_LIST[12],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>선택한 플레이 모드에 따라, 가장 많은 카드를 모으거나, 가장 빨리 자신의 카드를 없애는 등 규칙이 다릅니다.</li>
    <li>어떤 모드든 공통적으로, <strong>같은 심벌을 누구보다 빨리 찾아내는 것</strong>이 핵심입니다.</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 게임 사전준비</h4>
  <ul>
    <li>도블 카드를 모두 섞습니다.</li>
    <li>선택한 모드(기본, 타워, 우물, 핫포테이토 등)에 따라 카드 분배 방식과 중앙 카드 유무가 달라집니다.</li>
    <li>여기서는 가장 기본적인 모드(타워 모드)를 예시로 설명합니다.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 기본 모드(타워 모드) 진행</h4>
  <ul>
    <li>각 플레이어에게 같은 수의 카드를 나눠주고, 자기 앞에 뒷면으로 쌓아둡니다.</li>
    <li>중앙에 카드 1장을 앞면으로 놓습니다.</li>
    <li>모든 플레이어는 중앙 카드와 자신의 맨 위 카드(앞면) 사이에서 <strong>같은 그림 1개</strong>를 찾습니다.</li>
    <li>같은 심벌을 찾은 사람은 그 심벌의 이름을 외치고, 자신의 카드를 중앙 카드 위에 올립니다.</li>
    <li>이제 새로 자기 카드 맨 위가 드러나고, 중앙 카드가 바뀐 상태로 다시 반복합니다.</li>
  </ul>
</div>

<div>
  <h4>⚡ 4) 다른 모드 & 공통 규칙</h4>
  <ul>
    <li>우물 모드: 중앙을 기준으로 카드를 빨리 없애는 모드.</li>
    <li>핫포테이토 모드: 카드를 떠넘기는 방식으로, 손에 카드가 남으면 패배.</li>
    <li>어떤 두 장의 카드든, <strong>정확히 1개의 같은 그림</strong>이 존재하도록 설계되어 있습니다(집합/수학 구조 기반).</li>
  </ul>
</div>

`,
  video: "QIoVUkHLBsU?si=WBrBYh8EJRLwzd4m",
};
