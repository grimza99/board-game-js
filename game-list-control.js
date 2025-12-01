import { filteredGames, handleSearchInputGame } from "./search.js";

document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners();
});

function setupEventListeners() {
  const replyNewGameBtn = document.getElementById("replyNewGame");
  if (replyNewGameBtn) {
    replyNewGameBtn.addEventListener("click", () => {
      console.log("새 게임 추가 요청하기 클릭됨");
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
