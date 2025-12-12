import {
  renderCookiePolicyRoute,
  renderHomeRoute,
  renderPrivacyRoute,
  renderTermsRoute,
} from './pages/index.js';
import { renderGameDetailRoute } from './pages/game-detail.js';

document.addEventListener('DOMContentLoaded', function () {
  renderHomeRoute();
  setupHistoryEventListeners();
  setupCommonEventListeners();
});

function setupCommonEventListeners() {
  const headerTitle = document.getElementById('header_title');
  if (headerTitle) {
    headerTitle.addEventListener('click', () => {
      renderHomeRoute();
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
      case '/':
        renderHomeRoute(false);
        return;
      case '/game-rule':
        if (searchParams) {
          const gameId = parseInt(searchParams.substring(1));
          if (gameId) {
            renderGameDetailRoute(gameId, false);
          }
        }
        return;
      case '/privacy':
        renderPrivacyRoute(false);
        return;
      case '/terms':
        renderTermsRoute(false);
        return;
      case '/cookie-policy':
        renderCookiePolicyRoute(false);
        return;
      default:
        return;
    }
  });
}
