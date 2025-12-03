import GAME_LIST from "../../game-list/game-list-Item.js";

export const RESISTANCE_AVALON = {
  title: "레지스탕스 아발론 (The Resistance Avalon)",
  image: "public/game-image/detail/23-Resistance-Avalon.jpeg",
  info: GAME_LIST[22],
  rule: `
 <div>
  <h4>🎯 1) 승리조건</h4>
  <ul>
    <li>선: 임무 3회 성공</li>
    <li>악: 임무 3회 실패 유도 또는 메를린 암살 성공</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 사전 준비</h4>
  <ul>
    <li>플레이어 수에 맞춘 역할 카드(메를린, 퍼시벌, 모르가나, 암살자 등)를 분배.</li>
    <li>악의 세력은 서로를 알고 시작.</li>
    <li>선의 세력은 정보 없음(메를린만 악을 알고 있음).</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 임무 진행</h4>
  <ol>
    <li>① 리더가 원정 팀을 선정.</li>
    <li>② 전체 투표로 승인/거부.</li>
    <li>③ 승인되면 원정 팀만 성공/실패 카드 제출.</li>
    <li>④ 실패 카드는 1장만 있어도 임무 실패(특정 인원수 제외).</li>
  </ol>
</div>

<div>
  <h4>🧙 4) 메를린 & 암살자 규칙</h4>
  <ul>
    <li>선이 임무 3회 성공해도, 악의 ‘암살자’가 메를린을 정확히 지목하면 악의 최종 승리.</li>
  </ul>
</div>
`,
  video: "C2feZBsDHlY?si=xWpUePXnGWE4yAKw",
};
