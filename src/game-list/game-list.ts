import { GAMES_LIST_PAGE_SIZE } from '../constants/pagination.ts';
import { filteredGames } from '../features/filter/filter.ts';
import { renderGameDetailRoute } from '../pages/index.ts';
import {
  IGame,
  TDifficultyFilterOption,
  TPlayerFilterOption,
} from '../shared/types/game-type.ts';
import renderPagination from './pagination.ts';

export function renderGameList(
  currentPage = 1,
  player?: TPlayerFilterOption,
  difficulty?: TDifficultyFilterOption
) {
  const playerFilter = document.getElementById(
    'player-filter-options'
  ) as HTMLSelectElement;
  const difficultyFilter = document.getElementById(
    'difficulty-filter-options'
  ) as HTMLSelectElement;
  const gameListElement = document.getElementById('game_list');

  if (!playerFilter && !difficultyFilter) return;

  const selectedPlayer = (player ||
    playerFilter?.value ||
    'all') as TPlayerFilterOption;
  const selectedDifficulty = (difficulty ||
    difficultyFilter?.value ||
    'all') as TDifficultyFilterOption;

  const gameList = filteredGames(selectedPlayer, selectedDifficulty);

  /**서치파람스 업데이트 , pushState */
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set('page', currentPage.toString());
  searchParams.set('player', selectedPlayer.toString());
  searchParams.set('difficulty', selectedDifficulty.toString());

  const newUrl = window.location.pathname + '?' + searchParams.toString();
  window.history.pushState(
    {
      player: selectedPlayer,
      difficulty: selectedDifficulty,
      page: currentPage,
    },
    '',
    newUrl
  );

  const startIndex = (currentPage - 1) * GAMES_LIST_PAGE_SIZE;
  const endIndex = startIndex + GAMES_LIST_PAGE_SIZE;
  const paginatedGames = gameList.slice(startIndex, endIndex);

  if (!gameListElement) return;
  gameListElement.innerHTML = '';
  paginatedGames.forEach((game) => {
    const gameCard = createGameCard(game);
    gameListElement.appendChild(gameCard);
  });
  renderPagination(
    currentPage,
    Math.ceil(gameList.length / GAMES_LIST_PAGE_SIZE)
  );
}

export function createGameCard(game: IGame): HTMLButtonElement {
  const card = document.createElement('button');
  card.className = 'game_card';
  card.innerHTML = `
    <div class="game_card_content">
      <h3 class='game_name'>${game.name}</h3>
      <p class="description">${game.description}</p>
      <div>
        <span class="players">👥 ${game.players}명</span>
        <span class="time">⏱️ ${game.playtime}분</span>
        <span class="difficulty">🎯 ${game.difficulty}</span></div>
      </div>
    </div>
    <img src="${game.image}" alt="${game.name}" class="game_image"/>
  `;
  card.addEventListener('click', () => {
    renderGameDetailRoute(game.id);
  });
  return card;
}
