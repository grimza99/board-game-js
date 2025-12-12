import { renderGameDetailRoute } from '../pages/game-detail.ts';
import { renderGameList } from '../game-list/game-list.js';
import GAME_LIST from '../game-list/game-list-Item.js';

const DIFFICULTY_MAP = {
  hard: '어려움',
  normal: '중간',
  easy: '쉬움',
};

/**--------------인풋에 검색 연산---------------*/
/**검색결과 리스트 생성 */
function createSearchResultItem(game) {
  const li = document.createElement('li');
  li.className = 'search-result-item';
  li.innerHTML = `
  <span>${game.name}</span>
  <img src="${game.image}" alt="${game.name}" class="game-image"/>
  `;
  //클릭시 상세 페이지로 이동
  li.addEventListener('click', () => {
    renderGameDetailRoute(game.id, game.name);
  });
  return li;
}

/**인풋 검색 연산 */
export function handleSearchInputGame() {
  const searchInput = document.getElementById('game_search_input');
  const searchResults = document.getElementById('search_results');

  if (!searchInput || !searchResults) return;

  const searchTerm = searchInput.value.trim().toLowerCase();

  searchResults.innerHTML = "<ul id='search_results_ul'></ul>";
  const searchResultsUl = document.getElementById('search_results_ul');
  if (!searchTerm) {
    searchResultsUl.innerHTML = '<p>검색어를 입력하세요.</p>';
    return;
  }
  const foundGames = GAME_LIST.filter((game) =>
    game.name.toLowerCase().includes(searchTerm)
  );

  if (foundGames.length > 0) {
    foundGames.forEach((game) => {
      const gameItem = createSearchResultItem(game);
      searchResultsUl.appendChild(gameItem);
    });
  } else {
    searchResultsUl.innerHTML = '<p>해당 게임이 없습니다.</p>';
  }
}

/**--------------플레이어수 & 난이도 필터링---------------*/

export function filteredGames() {
  const playerFilter = document.getElementById('player-filter-options');
  const difficultyFilter = document.getElementById('difficulty-filter-options');
  const gameListElement = document.getElementById('game_list');

  if (!playerFilter || !gameListElement || !difficultyFilter) return;

  let filteredGames = [];
  const selectedPlayer = playerFilter.value;
  const selectedDifficulty = difficultyFilter.value;

  if (selectedPlayer === 'all') {
    filteredGames = GAME_LIST;
  } else if (selectedPlayer === '5+') {
    filteredGames = GAME_LIST.filter((game) => {
      if (game.players.includes('-')) {
        const maxPlayers = parseInt(game.players.split('-')[1]);
        return maxPlayers >= 5;
      }
      return parseInt(game.players) >= 5;
    });
  } else {
    const targetPlayers = parseInt(selectedPlayer);
    filteredGames = GAME_LIST.filter((game) => {
      if (game.players.includes('-')) {
        const [min, max] = game.players.split('-').map(Number);

        return targetPlayers >= min && targetPlayers <= max;
      }
      return parseInt(game.players) === targetPlayers;
    });
  }

  if (selectedDifficulty !== 'all') {
    filteredGames = filteredGames.filter((game) => {
      return DIFFICULTY_MAP[selectedDifficulty] === game.difficulty;
    });
  }
  gameListElement.innerHTML = '';
  renderGameList(filteredGames);
}
