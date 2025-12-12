import GAME_LIST from './game-list/game-list-Item.js';
import { renderGameList } from './game-list/game-list.js';
import {
  renderCookiePolicyRoute,
  renderHomeRoute,
  renderPrivacyRoute,
  renderTermsRoute,
} from './pages';
import { renderGameDetailRoute } from './pages/game-detail.js';
import showRequestGameForm from './request-game/request-game.js';
import { filteredGames, handleSearchInputGame } from './search/search.js';

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
