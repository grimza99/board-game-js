import GAME_LIST from "../../game-list/game-list-Item.js";

export const TICKET_TO_RIDE = {
  title: "티켓 투 라이드",
  image: "public/game-image/detail/2-ticket_to_ride.jpeg",
  info: GAME_LIST[1],
  rule: `
  <div id="goal">
    <h4>🎯 1) 게임 목표</h4>
    <p>
      기차 노선을 놓아 게임 종료 조건 이후, <strong>가장 많은 점수</strong>를 얻는 플레이어가 승리합니다.
    </p>
    <ul>
      <li>도시 사이에 기차 노선을 완성한 길이 점수</li>
      <li>목적지 카드(티켓)를 완성하면 추가 점수</li>
      <li>가장 긴 연속 노선 보너스</li>
      <li>미완성 목적지 카드는 <strong>마이너스 점수</strong></li>
    </ul>
  </div>

  <div id="basic-concepts">
    <h4>📌 2) 기본 개념</h4>
    <ul>
      <li>
        각 철도 경로는 <strong>색과 칸 수</strong>로 표시됩니다.
        <br />
        예: 파란색 3칸 경로 = 파란색 카드 3장(또는 와일드 포함) 필요
      </li>
      <li>
        목적지 카드는 서로 다른 두 도시를 연결하라는 목표입니다.
        <br />
        게임 종료 시 실제로 연결되어 있으면 카드에 적힌 점수만큼 득점,
        <br />
        연결 실패 시 동일한 점수만큼 감점.
      </li>
      <li>
        자신의 기차 말 수가 거의 다 떨어지면 게임 종료가 가까워집니다.
      </li>
    </ul>
  </div>

  <div id="setup">
    <h4>🎲 3) 게임 준비</h4>
    <ol>
      <li>각 플레이어는 자신의 색 기차 말과 점수 마커를 받습니다.</li>
      <li>점수 마커를 점수 트랙의 0 또는 시작 위치에 놓습니다.</li>
      <li>기차 카드를 섞어 각자 정해진 수만큼 받습니다. (기본판은 4장)</li>
      <li>목적지 카드를 정해진 수만큼 받고, 설명에 따라 일부는 선택/버립니다.</li>
      <li>기차 카드 더미에서 공개 카드 5장을 테이블에 펼쳐 둡니다.</li>
      <li>시작 플레이어를 정하고, 시계방향으로 턴을 진행합니다.</li>
    </ol>
  </div>

  <div id="turn-order">
    <h4>🔄 4) 플레이어의 차례 - 할 수 있는 행동</h4>
    <p>자신의 턴에는 아래 행동 중 <strong>딱 1가지</strong>만 선택할 수 있습니다.</p>

    <span>1) 기차 카드 뽑기</span>
    <ul>
      <li>총 2장까지 뽑을 수 있습니다.</li>
      <li>공개된 카드에서 뽑거나, 뒷면 더미에서 뽑을 수 있습니다.</li>
      <li>
        공개된 카드 중 <strong>기관차(와일드 카드)</strong>를 뽑으면,
        <br />
        그 턴에는 그 1장만 뽑고 턴이 끝납니다.
      </li>
    </ul>

    <span>2) 노선 점령(기차 배치)</span>
    <ul>
      <li>
        보드판의 도시와 도시 사이에 있는 <strong>하나의 경로를 선택</strong>합니다.
      </li>
      <li>
        그 경로의 색과 길이에 맞는 기차 카드를 버리고,
        <br />
        자신의 색 기차 말을 해당 칸 수만큼 놓습니다.
      </li>
      <li>즉시, 노선 길이에 따른 점수를 획득합니다.</li>
    </ul>

    <span>3) 목적지 카드 뽑기</span>
    <ul>
      <li>목적지 카드 더미에서 정해진 수만큼 새로 뽑습니다.</li>
      <li>그 중 일정 수 이상은 반드시 가지고 있어야 하며, 나머지는 다시 버립니다.</li>
      <li>뽑은 목적지는 나중에 연결해야 하므로, 난이도를 고려해 선택합니다.</li>
    </ul>
  </div>

  <div id="route-scoring">
    <h4>📏 5) 노선 길이별 점수</h4>
    <table>
      <thead>
        <tr>
          <th>노선 길이(칸 수)</th>
          <th>획득 점수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1칸</td>
          <td>1점</td>
        </tr>
        <tr>
          <td>2칸</td>
          <td>2점</td>
        </tr>
        <tr>
          <td>3칸</td>
          <td>4점</td>
        </tr>
        <tr>
          <td>4칸</td>
          <td>7점</td>
        </tr>
        <tr>
          <td>5칸</td>
          <td>10점</td>
        </tr>
        <tr>
          <td>6칸</td>
          <td>15점</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div id="tickets">
    <h4>🎫 6) 목적지 카드 점수</h4>
    <ul>
      <li>각 목적지 카드에는 두 도시와 점수가 적혀 있습니다.</li>
      <li>
        게임 종료 시 자신의 기차 노선들이 그 두 도시를 <strong>연결하고 있다면</strong>,
        <br />
        해당 카드의 점수를 <strong>추가로 획득</strong>합니다.
      </li>
      <li>
        연결하지 못했다면, 카드에 적힌 점수만큼 <strong>감점</strong>을 받습니다.
      </li>
      <li>따라서 욕심내서 많이 들고 있다가 실패하면 큰 감점이 될 수 있습니다.</li>
    </ul>
  </div>

  <div id="longest-route">
    <h4>🚆 7) 가장 긴 연속 노선 보너스</h4>
    <ul>
      <li>게임 종료 후, 각 플레이어의 기차 중 가장 긴 연결 경로의 길이를 계산합니다.</li>
      <li>가장 긴 연속 노선을 가진 플레이어는 보너스 점수(예: 10점)를 획득합니다.</li>
      <li>동점일 경우, 룰북에 따라 모두에게 보너스를 주거나 나누어 가질 수 있습니다.</li>
    </ul>
  </div>

  <div id="endgame">
    <h4>🏁 8) 게임 종료</h4>
    <ul>
      <li>
        한 플레이어의 남은 기차 말 수가
        <strong>2개 이하</strong>가 되는 순간,
        <br />
        그 플레이어의 턴을 포함하여 모든 플레이어가 <strong>한 번씩 더 턴</strong>을 진행합니다.
      </li>
      <li>그 후, 게임이 종료됩니다.</li>
    </ul>
  </div>

  <div id="final-scoring">
    <h4>🧮 9) 최종 점수 계산</h4>
    <ol>
      <li>게임 중에 획득한 노선 점수를 합산합니다.</li>
      <li>완성한 목적지 카드 점수를 더합니다.</li>
      <li>실패한 목적지 카드 점수는 뺍니다.</li>
      <li>가장 긴 연속 노선 보너스를 더합니다.</li>
      <li>총 점수가 가장 높은 플레이어가 승리합니다.</li>
    </ol>
  </div>

  `,
  video: "_bDJg7wQ3Fg?si=7O0rYjaKaQACkgPX",
};
