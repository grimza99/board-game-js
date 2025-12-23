import {
  renderCookiePolicyRoute,
  renderHomeRoute,
  renderPrivacyRoute,
  renderTermsRoute,
} from './pages/index.js';
import { renderGameDetailRoute } from './pages/game-detail.js';
import PATH from './constants/path.js';
import { restoreFilterValues } from './features/filter/restoreFilterValues.js';
import './styles/index.ts';
import {
  TDifficultyFilterOption,
  TPlayerFilterOption,
} from './shared/types/game-type.ts';

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
    const searchParams = new URLSearchParams(window.location.search);
    switch (path) {
      case PATH.HOME:
        const pageParam = searchParams.get('page');
        const player = (searchParams.get('player') ||
          'all') as TPlayerFilterOption;
        const difficulty = (searchParams.get('difficulty') ||
          'all') as TDifficultyFilterOption;
        const page = pageParam ? parseInt(pageParam) : 1;
        renderHomeRoute(false, page, player, difficulty);
        restoreFilterValues(player, difficulty);

        return;
      case PATH.GAME_DETAIL:
        {
          const gameId = searchParams.get('gameId');
          if (gameId) {
            renderGameDetailRoute(Number(gameId), false);
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
