import GAME_LIST from '../../game-list/game-list-Item.js';
export const SKY_TEAM = {
  title: '스카이팀 (Sky Team)',
  image: 'public/game-image/detail/55-SkyTeam.jpeg',

  info: GAME_LIST[54],
  rule: `<div class="rules-skyteam">
    <h4>게임 승리조건</h4>
    <p>
      플레이어 둘이 협력하여 비행기를 활주로에 안전하게 착륙시키면 즉시
      승리한다. 착륙 과정에서 속도, 고도, 기울기, 엔진, 착륙 장치, 항공 관제
      조건을 모두 만족해야 하며, 어느 하나라도 허용 범위를 벗어나면 즉시
      패배한다.
    </p>

    <h4>게임 사전준비</h4>
    <ul>
      <li>공항 시나리오 보드를 선택하고 활주로, 고도, 속도 트랙을 배치한다.</li>
      <li>조종사(기장)와 부조종사 역할을 나눈다.</li>
      <li>
        각 플레이어는 자신의 주사위 색상을 받고, 라운드 수만큼 연료/위험 토큰을
        준비한다.
      </li>
      <li>각종 조작 패널(엔진, 플랩, 착륙 장치 등)을 중앙에 배치한다.</li>
    </ul>

    <h4>턴 진행 구조</h4>
    <ol>
      <li>주사위 굴림: 각 플레이어는 자신의 주사위를 굴린다.</li>
      <li>비공개 배치: 대화 없이 주사위를 패널에 배치한다.</li>
      <li>
        패널 해결: 배치된 주사위 값을 기준으로 고도, 속도, 기울기 등이 조정된다.
      </li>
      <li>위험 체크: 한계를 넘었는지 확인하고, 넘었다면 즉시 패배.</li>
      <li>라운드 종료 및 다음 라운드 진행.</li>
    </ol>

    <h4>세부 규칙 – 소통 제한·주사위 배치</h4>
    <ul>
      <li>
        <strong>소통 제한</strong>: 주사위 굴림 이후에는 숫자·의도 언급 금지.
      </li>
      <li>
        <strong>전담 패널</strong>: 기장/부조종사는 서로 다른 패널만 조작 가능.
      </li>
    </ul>
  </div> `,
  video: 'xn_mGd_2B1U?si=vOE_8Ixd4ELcuHdM',
};
