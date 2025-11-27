import GAME_LIST from "./gameListItem.js";

const boardGameMap = new Map();
export let boardGameList = GAME_LIST;

// Map 초기화
GAME_LIST.forEach((game) => {
  boardGameMap.set(game.id, game);
});

let searchKeyword = document.getElementById("gameSearch")?.value.trim() || "";

// Map에서 게임 검색
function findGameById(id) {
  return boardGameMap.get(id);
}

// 검색 수행 함수
function performSearch() {
  const searchInput = document.getElementById("gameSearch");
  const searchResults = document.getElementById("searchResults");

  if (!searchInput || !searchResults) return;

  const searchTerm = searchInput.value.trim().toLowerCase();

  if (!searchTerm) {
    searchResults.innerHTML = "<p>검색어를 입력하세요.</p>";
    return;
  }

  const foundGame = boardGameList.find((game) =>
    game.name.toLowerCase().includes(searchTerm)
  );

  if (foundGame) {
    const gameCard = createGameCard(foundGame);
    searchResults.innerHTML = "<h3>검색 결과:</h3>";
    searchResults.appendChild(gameCard);
  } else {
    searchResults.innerHTML = "<p>검색 결과가 없습니다.</p>";
  }
}

// List에서 게임 검색 (이름으로)
function findGameByName(name) {
  return boardGameList.find((game) => game.name === name);
}

// 플레이어 수로 필터링
function filterGamesByPlayers(minPlayers, maxPlayers) {
  return boardGameList.filter((game) =>
    game.players.includes("-")
      ? parseInt(game.players.split("-")[0]) >= minPlayers &&
        parseInt(game.players.split("-")[1]) <= maxPlayers
      : parseInt(game.players) >= minPlayers &&
        parseInt(game.players) <= maxPlayers
  );
}

// 플레이어 수로 필터링
function filterByPlayers() {
  const playerFilter = document.getElementById("playerFilter");
  const gameListElement = document.getElementById("gameList");

  if (!playerFilter || !gameListElement) return;

  const selectedValue = playerFilter.value;

  if (!selectedValue) {
    displayGamesOnPage();
    return;
  }

  let filteredGames = [];

  if (selectedValue === "5+") {
    filteredGames = boardGameList.filter((game) => {
      if (game.players.includes("-")) {
        const maxPlayers = parseInt(game.players.split("-")[1]);
        return maxPlayers >= 5;
      }
      return parseInt(game.players) >= 5;
    });
  } else {
    const targetPlayers = parseInt(selectedValue);
    filteredGames = boardGameList.filter((game) => {
      if (game.players.includes("-")) {
        const [min, max] = game.players.split("-").map(Number);
        return targetPlayers >= min && targetPlayers <= max;
      }
      return parseInt(game.players) === targetPlayers;
    });
  }

  gameListElement.innerHTML = "";
  filteredGames.forEach((game) => {
    const gameCard = createGameCard(game);
    gameListElement.appendChild(gameCard);
  });
}
