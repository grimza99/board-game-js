import { CATAN } from "./1-catan.js";
import { TICKET_TO_RIDE } from "./2-ticket-to-ride.js";

/**@description 
 * 게임 상세 정보 맵
 * title: "카탄의 개척자들",
  image: "images/catan.jpg",
  info: {
    description: "카탄의 개척자들은 자원을 모아 섬을 개발하는 전략 게임입니다. 플레이어들은 도로, 마을, 도시를 건설하고, 자원을 교환하며 승점을 획득합니다. 가장 먼저 정해진 승점에 도달한 플레이어가 승리합니다.",
    players: "3-4명",
    playtime: "60-120분",
    difficulty: "중간",
  },
  rule: `
    <h2>게임 규칙</h2>
    <ol>
      <li>게임 준비: 각 플레이어는 초기 자원과 마을, 도로를 배치합니다.</li>
      <li>턴 진행: 주사위를 굴려 자원을 획득하고, 건설 및 교환을 진행합니다.</li>
      <li>승리 조건: 가장 먼저 10점에 도달한 플레이어가 승리합니다.</li>
    </ol>
  `,
  video: "https://www.youtube.com/embed/5Zg-C8AA4fM"
 */
export const GAME_DETAIL_MAP = new Map();

GAME_DETAIL_MAP.set(1, CATAN); //카탄의 개척자들
GAME_DETAIL_MAP.set(2, TICKET_TO_RIDE); //티켓 투 라이드
