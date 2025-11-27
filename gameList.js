import GAME_LIST from "./gameListItem.js";

document.addEventListener("DOMContentLoaded", function () {
  renderGameList();
});

function renderGameList() {
  const gameListElement = document.getElementById("gameList");
  if (!gameListElement) return;
  gameListElement.innerHTML = "";
  GAME_LIST.forEach((game) => {
    const gameCard = createGameCard(game);
    gameListElement.appendChild(gameCard);
  });
}

function createGameCard(game) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.innerHTML = `
    <h3>${game.name}</h3>
    <div class="game-info">
      <span class="players">👥 ${game.players}명</span>
      <span class="time">⏱️ ${game.playtime}분</span>
      <span class="difficulty">🎯 ${game.difficulty}</span>
    </div>
  `;
  return card;
}
