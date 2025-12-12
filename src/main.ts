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
});

function setupHistoryEventListeners() {
  window.addEventListener('popstate', function (event) {
    const path = window.location.pathname;
    const searchParams = window.location.search;

    switch (path) {
      case '/':
        renderHomeRoute();
        return;
      case '/game-rule':
        if (searchParams) {
          const gameId = parseInt(searchParams.substring(1));
          if (gameId) {
            renderGameDetailRoute(gameId);
          }
        }
        return;
      case '/privacy':
        renderPrivacyRoute();
        return;
      case '/terms':
        renderTermsRoute();
        return;
      case '/cookie-policy':
        renderCookiePolicyRoute();
        return;
      default:
        return;
    }
  });
}
