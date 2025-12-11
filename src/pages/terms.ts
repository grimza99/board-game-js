import { EL_ID } from '../constants/el-id';

export function renderTermsRoute() {
  document.title = '이용약관 | 보드게임위키';
  const main = document.getElementById(EL_ID.MAIN);
  if (!main) return;
  const path = `./terms`;
  window.history.pushState({}, '', path);

  const html = String.raw;
  main.innerHTML = '';
  main.innerHTML = html`
    <section id="policy_section">
      <h2 id="policy_title">이용약관</h2>

      <p>
        본 이용약관은 보드게임위키(이하 "사이트")의 서비스 이용 조건 및 절차,
        이용자 권리와 책임 등을 규정합니다.
      </p>

      <h4>1. 목적</h4>
      <p>
        본 약관은 사이트 이용과 관련한 권리, 의무 및 책임 사항을 규정하는 것을
        목적으로 합니다.
      </p>

      <h4>2. 서비스 내용</h4>
      <p>
        사이트는 보드게임 룰 정보, 추천 목록 등 콘텐츠 제공 서비스를 운영합니다.
      </p>

      <h4>3. 면책</h4>
      <ul>
        <li>
          사이트는 정보 제공 목적의 서비스로, 정보의 정확성을 보장하지 않습니다.
        </li>
        <li>
          사이트는 보드게임 이미지 및 저작권을 소유하지 않으며, 각 퍼블리셔의
          권리에 따릅니다.
        </li>
      </ul>

      <h4>4. 이용자의 의무</h4>
      <ul>
        <li>
          사이트를 비정상적 방법으로 이용하거나 서버를 해킹하는 행위를
          금지합니다.
        </li>
        <li>타인의 정보를 도용할 수 없습니다.</li>
      </ul>

      <h4>5. 약관 변경</h4>
      <p>사이트는 약관을 개정할 수 있으며, 변경 사항은 페이지에 공지합니다.</p>

      <h4>6. 문의</h4>
      <p>문의: gbtmxlf0808@gmail.com</p>

      <p>본 약관은 2025년 12월 10일부터 적용됩니다.</p>
    </section>
  `;
}
