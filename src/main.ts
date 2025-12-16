import {
  renderCookiePolicyRoute,
  renderHomeRoute,
  renderPrivacyRoute,
  renderTermsRoute,
} from './pages/index.js';
import { renderGameDetailRoute } from './pages/game-detail.js';
import PATH from './constants/path.js';

document.addEventListener('DOMContentLoaded', function () {
  renderHomeRoute(true, 1); // 초기 페이지 로드 시 1페이지 렌더링
  setupHistoryEventListeners();
  setupCommonEventListeners();
});

function setupCommonEventListeners() {
  const headerTitle = document.getElementById('header_title');
  if (headerTitle) {
    headerTitle.addEventListener('click', () => {
      renderHomeRoute(true, 1); //title 클릭 시 1페이지로 이동
    });
  }

  const renderPrivacy = document.getElementById('footer_privacy_route');
  if (renderPrivacy) {
    renderPrivacy.addEventListener('click', () => {
      renderPrivacyRoute();
    });
  }
  const renderTerms = document.getElementById('footer_terms_route');
  if (renderTerms) {
    renderTerms.addEventListener('click', () => {
      renderTermsRoute();
    });
  }
  const renderCookiePolicy = document.getElementById(
    'footer_cookie_policy_route'
  );
  if (renderCookiePolicy) {
    renderCookiePolicy.addEventListener('click', () => {
      renderCookiePolicyRoute();
    });
  }
}
function setupHistoryEventListeners() {
  window.addEventListener('popstate', function () {
    const path = window.location.pathname;
    const searchParams = window.location.search;
    switch (path) {
      case PATH.HOME:
        const pageParam = new URLSearchParams(searchParams).get('page');
        const page = pageParam ? parseInt(pageParam) : 1;
        renderHomeRoute(false, page);
        return;
      case PATH.GAME_DETAIL:
        if (searchParams) {
          const gameId = parseInt(searchParams.substring(1));
          if (gameId) {
            renderGameDetailRoute(gameId, false);
          }
        }
        return;
      case PATH.PRIVACY:
        renderPrivacyRoute(false);
        return;
      case PATH.TERMS:
        renderTermsRoute(false);
        return;
      case PATH.COOKIE_POLICY:
        renderCookiePolicyRoute(false);
        return;
      default:
        return;
    }
  });
}
