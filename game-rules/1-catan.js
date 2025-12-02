export const CATAN = {
  title: "카탄의 개척자들",
  image: "public/game-image/main/1-catan.jpeg",
  info: {
    description:
      "카탄의 개척자들은 자원을 모아 섬을 개발하는 전략 게임입니다. 플레이어들은 도로, 마을, 도시를 건설하고, 자원을 교환하며 승점을 획득합니다. 가장 먼저 정해진 승점에 도달한 플레이어가 승리합니다.",
    players: "3-4",
    playtime: "60-120",
    difficulty: "중간",
  },
  rule: `
  <div id="goal">
        <h5>1) 승리 조건</h5>
  <p><strong>승점 10점</strong>을 먼저 달성하면 승리합니다.</p>
    <h3>승점 획득 방법</h3>
    <ul>
      <li>마을 1개 = 1점</li>
      <li>도시 1개 = 2점</li>
      <li>가장 긴 도로 = 2점</li>
      <li>가장 큰 군대 = 2점</li>
      <li>발전카드 중 승점 카드 = 1점</li>
    </ul>
  </div>
  <div id="setup">
    <h5>🎲 2) 게임 시작 준비</h5>
    <ol>
      <li>육각형 타일(지형)을 섞어 배치한다.</li>
      <li>각 타일에 번호 칩(2~12)을 올린다.</li>
      <li>플레이어들은 차례로 <strong>마을 2개 + 도로 2개</strong>를 배치한다.</li>
      <li>두 번째로 놓은 마을 주변 3개 지형에서 <strong>초기 자원</strong>을 얻는다.</li>
    </ol>
  </div>

  <!-- 3. 자원 종류 -->
  <div id="resources">
    <h5>🧱 3) 자원 종류</h5>
    <ul>
      <li>🌲 <strong>목재</strong> (숲)</li>
      <li>🧱 <strong>벽돌</strong></li>
      <li>🌾 <strong>곡물</strong> (밀밭)</li>
      <li>🐑 <strong>양털</strong> (초원)</li>
      <li>⛏ <strong>광석</strong> (산)</li>
      <li>🏜 <strong>사막</strong> : 자원 없음</li>
    </ul>
    <p>
      주사위로 자원을 얻습니다. 자신의 마을/도시가 있는 타일의 번호가
      주사위 합과 같으면 자원을 생산하며, <strong>도시는 자원을 2개</strong> 얻습니다.
    </p>
  </div>

  <!-- 4. 턴 순서 -->
  <div id="turn-order">
    <h5>🎲 4) 턴 순서</h5>
    <ol>
      <li>
        <strong>주사위 굴리기</strong>
        <ul>
          <li>결과에 따라 모든 플레이어가 자원을 얻는다.</li>
          <li><strong>7이 나오면 도둑 발동!</strong></li>
        </ul>
      </li>
      <li>
        <strong>행동 수행 (원하는 만큼 반복)</strong>
        <ul>
          <li>도로 건설</li>
          <li>마을/도시 건설</li>
          <li>발전카드 구매</li>
          <li>다른 플레이어 또는 은행과 교역</li>
        </ul>
      </li>
      <li><strong>턴 종료</strong></li>
    </ol>
  </div>

  <!-- 5. 도둑 -->
  <div id="robber">
    <h5>🦹 5) 도둑(7)이 나오면?</h5>
    <ol>
      <li><strong>모든 플레이어는 자원 8장 초과 시 절반을 버린다.</strong> (예: 9장은 4장 버림)</li>
      <li>현재 플레이어는 <strong>도둑을 원하는 타일로 이동</strong>시킨다.</li>
      <li>그 타일 주변에 마을/도시가 있는 상대에게 <strong>자원 1장</strong>을 훔친다.</li>
      <li>도둑이 있는 타일은 자원 생산이 <strong>막힌다.</strong></li>
    </ol>
  </div>

  <!-- 6. 건설 비용 -->
  <div id="build-cost">
    <h5>🛠 6) 건설 비용</h5>
    <table>
      <thead>
        <tr>
          <th>건설물</th>
          <th>필요 자원</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>마을</td>
          <td>목재 1 + 벽돌 1 + 곡물 1 + 양털 1</td>
        </tr>
        <tr>
          <td>도로</td>
          <td>목재 1 + 벽돌 1</td>
        </tr>
        <tr>
          <td>도시</td>
          <td>곡물 2 + 광석 3</td>
        </tr>
        <tr>
          <td>발전카드</td>
          <td>곡물 1 + 양털 1 + 광석 1</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 7. 교역 -->
  <div id="trade">
    <h5>🔄 7) 교역</h5>

    <h3>1) 플레이어 간 교역</h3>
    <ul>
      <li>플레이어끼리 자유롭게 협상 가능</li>
      <li>수량/종류/조건 모두 합의하면 교역 성사</li>
    </ul>

    <h3>2) 항구 교역</h3>
    <ul>
      <li>바닷가 항구에 마을/도시가 있어야 사용 가능</li>
      <li>기본 항구: 같은 자원 3개 → 원하는 자원 1개 (3:1)</li>
      <li>특수 항구: 특정 자원 2개 → 원하는 자원 1개 (2:1)</li>
    </ul>
  </div>

  <!-- 8. 특수 점수 -->
  <div id="special-points">
    <h5>🎖 8) 특수 점수</h5>

    <h3>🔗 가장 긴 도로 (2점)</h3>
    <ul>
      <li>연속된 도로 길이가 <strong>5칸 이상</strong>이면 획득</li>
      <li>다른 플레이어가 더 길면 점수를 빼앗긴다.</li>
    </ul>

    <h3>🛡 가장 큰 군대 (2점)</h3>
    <ul>
      <li>발전카드 중 <strong>기사 카드 3장 이상 사용</strong> 시 획득</li>
      <li>상대가 더 많은 기사 카드를 사용하면 점수를 빼앗긴다.</li>
    </ul>
  </div>

  <!-- 9. 발전카드 -->
  <div id="development-cards">
    <h5>🧩 9) 발전카드 종류</h5>
    <ul>
      <li>🛡 <strong>기사 카드</strong>: 사용 시 도둑을 이동</li>
      <li>🧱 <strong>건설 진보</strong>: 도로 2개 무료 건설</li>
      <li>🔄 <strong>발견 진보</strong>: 원하는 자원 2개 획득</li>
      <li>🎁 <strong>독점 진보</strong>: 원하는 자원 1종류를 모든 플레이어에게서 가져오기</li>
      <li>⭐ <strong>승점 카드</strong>: 1점 (즉시 공개하지 않고, 10점 달성 시 공개)</li>
    </ul>
  </div>
  <div id="win-condition">
    <h5>🎉 10) 승리 조건</h5>
    <p>
      자신의 턴 중, 보유한 승점이 <strong>10점이 되는 순간 즉시 승리</strong>합니다.
    </p>
  </div>
</article>

  `,
  video: "37V2ajpMEic?si=anORnH6m_rAPVfVd",
};
