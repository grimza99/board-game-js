import GAME_LIST from '../../game-list/game-list-Item.js';
export const TWILIGHT_STRUGGLE = {
  title: '황혼의 투쟁 (Twilight Struggle)',
  image: 'public/game-image/detail/33-TwilightStruggle.jpeg',
  info: GAME_LIST[32],
  rule: `
  <div> <h4>게임 승리조건</h4> <p>게임은 미국(US)과 소련(USSR)의 두 진영이 전 세계 주요 지역에서 영향력을 경쟁하는 구조다. 아래 조건 중 하나가 충족되면 즉시 게임이 종료된다.</p> <ul> <li><strong>즉시 승리 – 영향력 점수(20점 차이)</strong>: 점수 트랙에서 한쪽이 +20점에 도달하면 즉시 승리한다.</li> <li><strong>즉시 승리 – 유럽 장악</strong>: 한쪽이 유럽 지역에서 ‘장악(Domination)’ 또는 ‘통제(Control)’ 조건을 충족하면 즉시 승리한다.</li> <li><strong>즉시 패배 – 핵전쟁</strong>: DEFCON 레벨이 1에 도달하면 그 원인을 제공한 플레이어가 패배한다.</li> <li><strong>최종 점수 승리</strong>: 10턴이 모두 끝난 후 점수 계산에서 점수가 높은 플레이어가 승리한다.</li> </ul> </div> <div> <h4>게임 사전준비</h4> <ul> <li>세계 지도 보드를 중앙에 펼치고, 지역별 국가 카드 및 영향력 값(안정도)을 확인한다.</li> <li>DEFCON 마커를 5에 놓고, 스페이스 레이스 트랙에 양측 마커를 시작 위치에 둔다.</li> <li>Early War 시대 카드 덱을 섞어 양 진영에 일정 수의 카드를 배분한다.</li> <li>후반에는 Mid War와 Late War 카드 덱이 순차적으로 추가된다.</li> <li>미국과 소련은 각자 초기 영향력을 배치한다. (예: 미국은 서유럽에, 소련은 동유럽에 강한 초기 영향력이 있다.)</li> </ul> </div> <div> <h4>턴 진행 구조</h4> <p>각 턴은 아래의 세부 단계로 구성된다. 게임은 카드 플레이를 중심으로 진행된다.</p> <ol> <li><strong>헤드라인 단계(Headline Phase)</strong> 양 플레이어는 카드 한 장을 선택해 공개하고, 이벤트 우선순위(소련 → 미국 또는 카드의 규칙)에 따라 해당 이벤트를 발동한다.</li>
<li><strong>액션 라운드(Action Rounds)</strong>  
  각 턴은 여러 액션 라운드로 구성되며, 양측이 번갈아가며 카드 한 장씩을 플레이한다.  
  카드를 사용할 때 선택 가능한 옵션:
  <ul>
    <li><strong>작전력(OP) 사용</strong>: 영향력 배치, 정권 변경(쿠데타), 동요(Roll), 스페이스 레이스 등에 사용할 수 있다.</li>
    <li><strong>이벤트 발동(Event)</strong>: 카드가 가진 역사적 사건을 그대로 발동한다.  
      단, 상대 진영 이벤트 카드라도 사용하면 상대의 이벤트가 발동되니 주의해야 한다.</li>
    <li><strong>스페이스 레이스(우주 경쟁)</strong>: OP를 사용해 주사위 결과에 따라 스페이스 트랙에서 앞서 나가며 특별 능력을 얻는다.</li>
  </ul>
</li>

<li><strong>군사 작전 요구치 충족(Military Ops Check)</strong>  
  상대 진영이 요구한 만큼 군사 행동(쿠데타 등)을 수행하지 않으면 점수 페널티를 받는다.</li>

<li><strong>점수 계산 단계(Scoring Cards)</strong>  
  Scoring 카드가 플레이되면 특정 지역(아시아, 유럽, 중동 등)의 영향력 점수를 즉시 계산한다.</li>
</ol> </div> <div> <h4>세부 규칙 – DEFCON·정권 변경·스페이스 레이스</h4> <ul> <li><strong>DEFCON 레벨</strong> DEFCON이 낮아질수록 군사 행동 제한이 커지며, 특정 지역에는 쿠데타가 금지된다. DEFCON이 1이 되면 즉시 게임 종료이며, 그 원인을 만든 플레이어가 패배한다.</li><li><strong>정권 변경(Coup)</strong>  
  상대가 지배하는 국가에 쿠데타를 시도할 수 있다. 주사위 굴림 + OP 값으로 영향력을 제거하거나 빼앗을 수 있다.</li>

<li><strong>동요(Rolling Influence)</strong>  
  지배하지 않지만 영향력을 확장하고 싶은 국가에 소규모 정치 공작을 수행한다. 쿠데타보다 위험이 적지만 효과가 낮다.</li>

<li><strong>스페이스 레이스</strong>  
  카드를 스페이스 레이스에 사용하면 상대에게 이벤트 발동을 주지 않으면서 OP를 소모할 수 있다. 게임 후반 전략적 활용도가 매우 높다.</li>
</ul> </div>`,
  video: '9wnM4UmFISo?si=atmbzmhiSXTzMtaW',
};
