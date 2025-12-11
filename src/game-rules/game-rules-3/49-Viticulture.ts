import GAME_LIST from '../../game-list/game-list-Item.js';
export const VITICULTURE = {
  title: '비티컬처 (Viticulture)',
  image: 'public/game-image/detail/49-Viticulture.jpeg',
  info: GAME_LIST[48],
  rule: `<div class="rules-viticulture">
  <h4>게임 승리조건</h4>
  <p>
    한 플레이어가 20점에 도달하면 해당 연도 종료 후 최종 점수를 비교한다. 
    가장 점수가 높은 플레이어가 승리한다.
  </p>

  <h4>게임 사전준비</h4>
  <ul>
    <li>포도밭, 와인 저장고, 주문 카드, 여름/겨울 일꾼 액션 칸을 배치한다.</li>
    <li>각 플레이어는 개인 보드, 일꾼 6명, 포도밭 카드, 방문객 카드를 받는다.</li>
  </ul>

  <h4>턴 진행 구조</h4>
  <p>1년은 여름 → 겨울 단계로 진행한다.</p>
  <ol>
    <li>여름 일꾼 배치: 포도밭 심기, 건물 짓기, 카드 뽑기 등.</li>
    <li>겨울 일꾼 배치: 수확, 발효, 주문 이행, 포도 수확 등.</li>
    <li>연말 처리: 와인 숙성, 점수 조정, 소득 지급.</li>
  </ol>

  <h4>세부 규칙 – 와인 숙성·주문 카드</h4>
  <ul>
    <li><strong>숙성</strong>: 겨울마다 레드/화이트/로제/스파클링 와인의 레벨이 1 상승한다.</li>
    <li><strong>주문 카드</strong>: 요구하는 와인을 판매하면 점수+돈을 받는다.</li>
  </ul>
</div>
`,
  video: 'lPkigLqi4OI?si=lNK9UkMo0iU7tYrM',
};
