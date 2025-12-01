import { renderGameList } from "./gameList.js";
import GAME_LIST from "./gameListItem.js";

const DIFFICULTY_MAP = {
  hard: "어려움",
  normal: "중간",
  easy: "쉬움",
};

/**--------------인풋에 검색 연산---------------*/
/**검색결과 리스트 생성 */
function createSearchResultItem(game) {
  const li = document.createElement("li");
  li.className = "search-result-item";
  li.textContent = `${game.name}`;
  return li;
}

/**인풋 검색 연산 */
export function handleSearchInputGame() {
  const searchInput = document.getElementById("gameSearch");
  const searchResults = document.getElementById("search-results");

  if (!searchInput || !searchResults) return;

  const searchTerm = searchInput.value.trim().toLowerCase();

  searchResults.innerHTML = "";

  if (!searchTerm) {
    searchResults.innerHTML = "<p>검색어를 입력하세요.</p>";
    return;
  }
  const foundGame = GAME_LIST.find((game) =>
    game.name.toLowerCase().includes(searchTerm)
  );

  if (foundGame) {
    const gameItem = createSearchResultItem(foundGame);
    searchResults.appendChild(gameItem);
  } else {
    searchResults.innerHTML = "<li>해당 게임이 없습니다.</li>";
  }
}

/**--------------플레이어수 & 난이도 필터링---------------*/

export function filteredGames() {
  const playerFilter = document.getElementById("player-filter-options");
  const difficultyFilter = document.getElementById("difficulty-filter-options");
  const gameListElement = document.getElementById("game-list");

  if (!playerFilter || !gameListElement || !difficultyFilter) return;

  let filteredGames = [];
  const selectedPlayer = playerFilter.value;
  const selectedDifficulty = difficultyFilter.value;

  if (selectedPlayer === "all") {
    filteredGames = GAME_LIST;
  } else if (selectedPlayer === "5+") {
    filteredGames = GAME_LIST.filter((game) => {
      if (game.players.includes("-")) {
        const maxPlayers = parseInt(game.players.split("-")[1]);
        return maxPlayers >= 5;
      }
      return parseInt(game.players) >= 5;
    });
  } else {
    const targetPlayers = parseInt(selectedPlayer);
    filteredGames = GAME_LIST.filter((game) => {
      if (game.players.includes("-")) {
        const [min, max] = game.players.split("-").map(Number);

        return targetPlayers >= min && targetPlayers <= max;
      }
      return parseInt(game.players) === targetPlayers;
    });
  }

  if (selectedDifficulty !== "all") {
    filteredGames = filteredGames.filter((game) => {
      return DIFFICULTY_MAP[selectedDifficulty] === game.difficulty;
    });
  }
  gameListElement.innerHTML = "";
  renderGameList(filteredGames);
}
