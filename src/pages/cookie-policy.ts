import { EL_ID } from '../constants/el-id';

export function renderCookiePolicyRoute() {
  document.title = '쿠키 정책 | 보드게임위키';
  const path = `./cookie-policy`;
  window.history.pushState({}, '', path);

  const main = document.getElementById(EL_ID.MAIN);
  if (!main) return;
  const html = String.raw;
  main.innerHTML = '';
  main.innerHTML = html`
    <section id="policy_section">
      <h2 id="policy_title">쿠키 정책</h2>
      <p>
        보드게임위키(이하 "사이트")는 사용자 경험 개선 및 서비스 분석을 위해
        쿠키를 사용합니다.
      </p>

      <h4>1. 쿠키란?</h4>
      <p>
        쿠키는 웹사이트가 이용자의 브라우저에 저장하는 작은 데이터 파일입니다.
      </p>

      <h4>2. 사용하는 쿠키 종류</h4>
      <ul>
        <li>Google Analytics 분석 쿠키</li>
        <li>Google AdSense 광고 쿠키</li>
        <li>세션 유지 쿠키</li>
      </ul>

      <h4>3. 쿠키 사용 목적</h4>
      <ul>
        <li>사이트 방문자 분석</li>
        <li>사용자 맞춤화된 광고 제공</li>
        <li>페이지 성능 개선</li>
      </ul>

      <h4>4. 쿠키 거부 방법</h4>
      <p>이용자는 브라우저 설정에서 쿠키 저장을 비활성화할 수 있습니다.</p>

      <h4>5. 문의</h4>
      <p>문의: gbtmxlf0808@gmail.com</p>

      <p>본 정책은 2025년 1월 1일부터 적용됩니다.</p>
    </section>
  `;
}
