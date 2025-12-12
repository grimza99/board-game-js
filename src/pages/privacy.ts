import { EL_ID } from '../constants/el-id';

export function renderPrivacyRoute(pushHistory = true) {
  document.title = '개인정보처리방침 | 보드게임위키';
  const main = document.getElementById(EL_ID.MAIN);
  if (!main) return;

  if (pushHistory) {
    const path = `./privacy`;
    window.history.pushState({}, '', path);
  }

  const html = String.raw;
  main.innerHTML = '';
  main.innerHTML = html`
    <section id="policy_section">
      <h2 id="policy_title">개인정보처리방침</h2>
      <p>
        보드게임위키(이하 "사이트")는 개인정보 보호법 등 관련 법령을 준수하며,
        이용자의 개인정보를 안전하게 보호하기 위해 다음과 같은 방침을 따르고
        있습니다.
      </p>
      <h4>1. 수집하는 개인정보</h4>
      <p>사이트는 다음과 같은 정보를 수집할 수 있습니다:</p>
      <ul>
        <li>쿠키 및 로그 데이터</li>
        <li>Google Analytics를 통한 트래픽 분석 정보(비식별 정보)</li>
        <li>Google AdSense 광고 송출을 위한 쿠키 정보</li>
      </ul>

      <h4>2. 개인정보의 이용 목적</h4>
      <p>수집한 정보는 다음 용도로 사용됩니다:</p>
      <ul>
        <li>사이트 이용 통계 분석</li>
        <li>콘텐츠 개선 및 사용자 경험 향상</li>
        <li>맞춤형 광고 제공(AdSense)</li>
      </ul>

      <h4>3. 쿠키 사용</h4>
      <p>
        사이트는 Google Analytics, Google AdSense 등 제3자 서비스에서 쿠키를
        사용할 수 있습니다.
      </p>

      <h4>4. 개인정보 보관 기간</h4>
      <p>
        사이트는 이용자의 개인정보를 직접 저장하지 않으며, 제3자 서비스(Google)
        정책에 따릅니다.
      </p>

      <h4>5. 제3자 제공</h4>
      <p>
        사이트는 법령에 의한 경우 외에는 개인정보를 외부에 제공하지 않습니다.
      </p>

      <h4>6. 이용자 권리</h4>
      <p>이용자는 브라우저 설정을 통해 쿠키를 거부하거나 삭제할 수 있습니다.</p>

      <h4>7. 연락처</h4>
      <p>문의: gbtmxlf0808@gmail.com</p>

      <p>본 방침은 2025년 12월 10일부터 적용됩니다.</p>
    </section>
  `;
}
