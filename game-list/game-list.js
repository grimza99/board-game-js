import { showGameDetail } from "../gameDetail.js";

export function renderGameList(gameList) {
  const gameListElement = document.getElementById("game_list");
  if (!gameListElement) return;
  gameListElement.innerHTML = "";
  gameList.forEach((game) => {
    const gameCard = createGameCard(game);
    gameListElement.appendChild(gameCard);
  });
}

export function createGameCard(game) {
  const card = document.createElement("button");
  card.className = "game_card";
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
  card.addEventListener("click", () => {
    showGameDetail(game.id, game.name);
  });
  return card;
}
