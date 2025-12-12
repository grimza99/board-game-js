import { GAMES_LIST_PAGE_SIZE } from '../constants/pagination.ts';
import { renderGameDetailRoute } from '../pages';
import GAME_LIST from './game-list-Item.js';
import renderPagination from './pagination.ts';

export function renderGameList(gameList = GAME_LIST, currentPage = 1) {
  const gameListElement = document.getElementById('game_list');
  if (!gameListElement) return;

  const startIndex = (currentPage - 1) * GAMES_LIST_PAGE_SIZE;
  const endIndex = startIndex + GAMES_LIST_PAGE_SIZE;
  const paginatedGames = gameList.slice(startIndex, endIndex);

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

export function createGameCard(game) {
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
    renderGameDetailRoute(game.id, game.name);
  });
  return card;
}
