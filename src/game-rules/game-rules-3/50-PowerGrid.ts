import GAME_LIST from '../../game-list/game-list-Item.js';
export const POWER_GRID = {
  title: '파워 그리드 (Power Grid)',
  image: 'public/game-image/default/default_detail_image.jpeg',
  info: GAME_LIST[49],
  rule: `<div class="rules-power-grid">
  <h4>게임 승리조건</h4>
  <p>
    마지막 라운드가 끝나면 <strong>전력을 공급할 수 있는 도시 수</strong>가 가장 많은 플레이어가 승리한다.  
    동률 시 남은 자금이 많은 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>지도(지역)를 선택하고, 도시 연결 비용을 확인한다.</li>
    <li>발전소 시장을 세팅하고, 자원(석탄/석유/쓰레기/우라늄)을 자원 트랙에 놓는다.</li>
    <li>플레이어는 시작 돈 50 일렉트로와 0도시 상태로 시작한다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <ol>
    <li>발전소 경매</li>
    <li>자원 구매</li>
    <li>도시 연결</li>
    <li>전력 공급 및 소득 지급</li>
    <li>발전소 시장 정리</li>
  </ol>

  <h4>세부 규칙 – 자원 시장·단계 전환</h4>
  <ul>
    <li><strong>자원 시장</strong>: 자원이 고갈되면 가격이 폭등하므로 선점이 중요하다.</li>
    <li><strong>단계 전환</strong>: 발전소 숫자/도시 연결 수에 따라 단계 2/3로 넘어가며 시장 구조가 바뀐다.</li>
  </ul>
</div>
`,
  video: 'paf2k4Jgk40?si=IvSIWPTuTQCumX-c',
};
