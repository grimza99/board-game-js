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
  const card = document.createElement("button");
  card.className = "game-card";
  card.innerHTML = `
    <div>
      <h3 class='game-name'>${game.name}</h3>
      <div class="game-info">
        <span class="description">${game.description}</span>
        <div>
          <span class="players">👥 ${game.players}명</span>
          <span class="time">⏱️ ${game.playtime}분</span>
          <span class="difficulty">🎯 ${game.difficulty}</span></div>
        </div>
      </div>
    <img src="${game.image}" alt="${game.name}" class="game-image"/>
  `;
  card.addEventListener("click", () => {
    console.log(`${game.name} 카드 클릭됨`);
  });
  return card;
}
