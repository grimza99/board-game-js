document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners();
});

function setupEventListeners() {
  const resetButton = document.getElementById("reset");
  if (resetButton) {
    resetButton.addEventListener("click", renderGameList);
  }

  const replyNewGameBtn = document.getElementById("replyNewGame");
  if (replyNewGameBtn) {
    replyNewGameBtn.addEventListener("click", () => {
      console.log("새 게임 추가 요청하기 클릭됨");
    });
  }
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      console.log("검색 버튼 클릭됨");
    });
  }

  const searchInput = document.getElementById("gameSearch");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        console.log("검색어 입력 후 Enter 키 눌림");
      }
    });
  }
  const playerFilter = document.getElementById("playerFilter");
  if (playerFilter) {
    playerFilter.addEventListener("change", () => {
      console.log("플레이어 수 필터 변경됨");
    });
  }
}
