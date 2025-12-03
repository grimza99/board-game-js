import GAME_LIST from "../../gameListItem.js";

export const WINNERS_CIRCLE = {
  title: "위너스 서클 (winner's circle)",
  image: "public/game-image/detail/17-winners-circle.jpeg",
  info: GAME_LIST[16],
  rule: `
 <div>
  <h4>🎯 1) 게임 승리조건</h4>
  <ul>
    <li>3라운드의 경주가 끝난 후, <strong>획득한 배팅 점수(돈) 합계</strong>가 가장 큰 플레이어가 승리합니다.</li>
  </ul>
</div>

<div>
  <h4>🧱 2) 사전 준비</h4>
  <ul>
    <li>7마리의 말 능력 카드와 말 말판을 준비합니다.</li>
    <li>각 말의 능력치를 보드판 주변에 공개합니다.</li>
    <li>플레이어는 배팅 토큰을 3개씩 받습니다.</li>
  </ul>
</div>

<div>
  <h4>🔄 3) 라운드 진행</h4>
  <ol>
    <li>① 배팅 단계: 플레이어들은 말 위에 비밀 배팅 토큰을 3회 배치.</li>
    <li>② 레이스 단계: 주사위를 굴려 특정 말이 능력에 맞는 칸 수만큼 전진.</li>
    <li>③ 결산: 1~3위 말에 따라 배팅 점수를 지급.</li>
  </ol>
</div>

<div>
  <h4>🏇 4) 능력 주사위 규칙</h4>
  <ul>
    <li>주사위에는 말들 능력 아이콘이 있으며, 해당 아이콘이 나온 말이 이동합니다.</li>
    <li>능력치가 낮은 말은 주사위에서 자주 나올 수 있으나 이동 칸은 적습니다.</li>
    <li>능력치가 높은 말은 잘 나오지 않지만 이동 칸은 큽니다.</li>
  </ul>
</div>
`,
  video: "MqKy32CWfUE?si=-WGTugosXMuKhQAr",
};
