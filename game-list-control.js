import showReplyGameForm from "./reply-game.js";
import { filteredGames, handleSearchInputGame } from "./search.js";

document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners();
});

function setupEventListeners() {
  const replyNewGameBtn = document.getElementById("reply-new-game-button");
  if (replyNewGameBtn) {
    replyNewGameBtn.addEventListener("click", () => {
      showReplyGameForm();
    });
  }

  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      handleSearchInputGame();
    });
  }

  const searchInput = document.getElementById("gameSearch");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        handleSearchInputGame();
      }
    });
  }
  const playerFilter = document.getElementById("player-filter");
  if (playerFilter) {
    playerFilter.addEventListener("change", () => {
      filteredGames();
    });
  }
  const difficultyFilter = document.getElementById("difficulty-filter");
  if (difficultyFilter) {
    difficultyFilter.addEventListener("change", () => {
      filteredGames();
    });
  }
}
