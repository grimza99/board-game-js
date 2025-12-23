import { renderGameDetailRoute } from '../../pages/game-detail.ts';
import GAME_LIST from '../../game-list/game-list-Item.js';
import { IGame } from '../../shared/types/game-type.ts';

/**--------------인풋에 검색 연산---------------*/
/**검색결과 리스트 생성 */
function createSearchResultItem(game: IGame): HTMLLIElement {
  const li = document.createElement('li');
  li.className = 'search-result-item';
  li.innerHTML = `
  <span>${game.name}</span>
  <img src="${game.image}" alt="${game.name}" class="game-image"/>
  `;
  //클릭시 상세 페이지로 이동
  li.addEventListener('click', () => {
    renderGameDetailRoute(game.id);
  });
  return li;
}

/**인풋 검색 연산 */
export function handleSearchInputGame() {
  const searchInput = document.getElementById(
    'game_search_input'
  ) as HTMLInputElement;
  const searchResults = document.getElementById('search_results');

  if (!searchInput || !searchResults) return;

  const searchTerm = searchInput.value.trim().toLowerCase();

  searchResults.innerHTML = "<ul id='search_results_ul'></ul>";
  const searchResultsUl = document.getElementById('search_results_ul');

  if (!searchResultsUl) return;
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
