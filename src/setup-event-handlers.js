import GAME_LIST from './game-list/game-list-Item.js';
import { renderGameList } from './game-list/game-list.js';
import { renderPrivacyRoute } from './pages/privacy.js';
import showRequestGameForm from './request-game/request-game.js';
import { filteredGames, handleSearchInputGame } from './search/search.js';

document.addEventListener('DOMContentLoaded', function () {
  renderGameList(GAME_LIST); //초기 게임 리스트 렌더링
  setupEventListeners();
  setUpRouteEventListeners();
});

//이미 html에 존재하는 요소들에 이벤트 리스너 설정
function setupEventListeners() {
  const replyNewGameBtn = document.getElementById('request_game_button');
  if (replyNewGameBtn) {
    replyNewGameBtn.addEventListener('click', () => {
      showRequestGameForm();
    });
  }

  const searchBtn = document.getElementById('search_button');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      handleSearchInputGame();
    });
  }

  const searchInput = document.getElementById('game_search_input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        handleSearchInputGame();
      }
    });
  }
  const playerFilter = document.getElementById('player-filter');
  if (playerFilter) {
    playerFilter.addEventListener('change', () => {
      filteredGames();
    });
  }
  const difficultyFilter = document.getElementById('difficulty-filter');
  if (difficultyFilter) {
    difficultyFilter.addEventListener('change', () => {
      filteredGames();
    });
  }
}
function setUpRouteEventListeners() {
  const renderPrivacy = document.getElementById('footer_privacy_route');
  if (renderPrivacy) {
    renderPrivacy.addEventListener('click', () => {
      renderPrivacyRoute();
    });
  }
}
