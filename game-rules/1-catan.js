import GAME_LIST from "../game-list/game-list-Item.js";

export const CATAN = {
  title: "카탄의 개척자들",
  image: "public/game-image/detail/1-catan.jpeg",
  info: GAME_LIST[0],
  rule: `
  <div class='game-rule-box 'id="goal">
    <h4>🏆 1) 승리 조건</h4>
    <p>자신의 턴 중, 보유한 승점이 <strong>10점이 되는 순간 즉시 승리</strong>합니다.</p>
    <ul>
      <li>마을 1개 = 1점</li>
      <li>도시 1개 = 2점</li>
      <li>가장 긴 도로 = 2점
        <ul>
          <li>연속된 도로 길이가 <strong>5칸 이상</strong>이면 획득</li>
          <li>다른 플레이어가 더 길면 점수를 빼앗긴다.</li>
        </ul>
      </li>
      <li>가장 큰 군대 = 2점
        <ul>
          <li>발전카드 중 <strong>기사 카드 3장 이상 사용</strong> 시 획득</li>
          <li>상대가 더 많은 기사 카드를 사용하면 점수를 빼앗긴다.</li>
        </ul>
      </li>
      <li>발전카드 중 승점 카드 = 1점</li>
    </ul>
  </div>

  <div class='game-rule-box' id="setup">
    <h4>🎲 2) 게임 시작 준비</h4>
    <ol>
      <li>항구 타일을 조립한다.</li>
      <li>육각형 타일(지형)을 섞어 배치한다.</li>
      <li>가장 바깥쪽 모서리에 있는 땅 타일 중 하나를 골라 반시계 방향으로 숫자 칩을 놓고, 사막에는 도둑을 올린다</li>
      <li>각자 원하는 색을 골라 가져간뒤 카드들을 한곳에 배치한다</li>
      <li>플레이어들은 차례로 <strong>마을 1개 + 도로 1개</strong>를 배치한다</li>
      <li>역순으로 한번더  <strong>마을 1개 + 도로 1개</strong>를 배치한다</li>
      <li>이때 마을은 세땅이 만나는 교차점중 인접한 교차점에 마을이나 도시가 없는 곳에만 지을수 있고, 길은 마을에 붙여서 지을수있다</li>
      <li>두 번째로 놓은 마을 주변 3개 지형에서 <strong>초기 자원</strong>을 얻는다.</li>
    </ol>
  </div>

  <div class='game-rule-box' id="turn-order">
    <h4>🎲 3) 턴 순서</h4>
      <div style="margin-bottom: 8px;">
        <strong>1. 주사위 굴리기</strong>
        <span>모든 플레이어가 두 주사위의 합과 같은 숫자 타일이 있는 자원을 얻는다.(도둑이 있는 땅 제외)</span>
        <ul>
          <li>마을 1개당 자원 1개, 도시 1개당 자원 2개</li>
          <li>주사위의 합이 7 이면 자원카드 8장 이상을 가지고 있는 플레이어는 자원카드 반을 버리고 도둑 말을 원하는 땅으로 옮기고, 땅 주위에 마을이나 도시가 있는 플레이어에게 자원카드 한장을 랜덤으로 뺏는다</li>
        </ul>
      </div>
      <div>
        <strong>2. 행동 수행 (원하는 만큼 반복)</strong>
        <ul>
          <li style="margin-bottom: 4px;">
            <strong>마을/도시/도로 건설</strong>
            <p>건설 비용 카드에 나와 있는 비용을 지불하고 아래 조건대로 원하는 만큼 지을 수 있음</p>
            <ul>
              <li><strong>도로:</strong> 비어있는 길 중 내 도로와 연결되는 곳 / 다른 사람의 마을이나 도시를 통과해서 지을수 없음</li>
              <li><strong>마을:</strong> 자기 도로와 닿아 있는 교차점 중 인접한 교차점에 마을이나 도시가 없는 곳에만 지을 수 있음</li>
              <li><strong>도시:</strong> 이미 건설된 마을을 도시로 바꾼다</li>
            </ul>
          </li>
          <li style="margin-bottom: 4px;">
            <strong>발전카드 구매</strong>
            <ul>
              <li>양 1개, 밀 1개, 철 1개를 지불하고 발전 카드 1장을 가져온다.</li>
              <li>발전 카드는 사용전까지는 비밀로 두고, 자기 차례 언제든 사용가능하지만 구입후에는 다음 턴에 사용할 수 있다.</li>
            </ul>
          </li>
          <li style="margin-bottom: 4px;">
            <strong>발전 카드 사용하기</strong>
            <ul>
              <li>🛡 <strong>기사 카드</strong>: 사용 시 도둑을 이동하고, 그 땅에 인접한 마을이나 도시의 플레이어에게 자원카드 1장을 랜덤으로 뺏어온다. 사용한 기사 카드는 앞에 내려 놓는다.</li>
              <li>🧱 <strong>건설 진보</strong>: 도로 2개 무료 건설</li>
              <li>🔄 <strong>발견 진보</strong>: 원하는 자원 2개 획득</li>
              <li>🎁 <strong>독점 진보</strong>: 원하는 자원 1종류를 모든 플레이어에게서 가져오기</li>
              <li>⭐ <strong>승점 카드</strong>: 1점 (즉시 공개하지 않고, 10점 달성 시 공개)</li>
            </ul>
          </li>
        </ul>
      </div>
  </div>

  `,
  video: "37V2ajpMEic?si=anORnH6m_rAPVfVd",
};
