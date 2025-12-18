import PATH from '../constants/path.ts';
import { renderGameList } from '../game-list/game-list.js';
import showModal from '../modal/modal.ts';
import { handleSearchInputGame } from '../search/search.js';

export function renderHomeRoute(
  pushHistory = true,
  page: number = 1,
  player: string | null = null,
  difficulty: string | null = null
) {
  if (pushHistory) {
    window.history.pushState({ page: page }, '', `${PATH.HOME}?page=${page}`);
  }
  const main = document.getElementById('main-content');

  if (!main) return;

  const html = String.raw;
  main.innerHTML = html`
    <!-- 검색, 필터 섹션 -->
    <section>
      <div class="search-section">
        <div>
          <input
            type="text"
            id="game_search_input"
            placeholder="보드게임 이름을 검색해주세요!"
          />
          <button id="search_button">검색</button>
        </div>
        <div id="search_results"></div>
      </div>
    </section>
    <section id="filter_and_request_section">
      <button id="request_game_button">
        <img
          class="send_icon"
          src="/public/icons/send.icon.svg"
          alt="새 게임 요청 아이콘"
        />
        <span>게임 추가 요청 하기</span>
      </button>
      <div id="filter_section">
        <div class="filter" id="player-filter">
          <label>플레이어 수</label>
          <select class="filter-select" id="player-filter-options">
            <option value="all">전체</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
            <option value="5+">5명 이상</option>
          </select>
        </div>
        <div class="filter" id="difficulty-filter">
          <label>난이도</label>
          <select class="filter-select" id="difficulty-filter-options">
            <option value="all">전체</option>
            <option value="hard">어려움</option>
            <option value="normal">중간</option>
            <option value="easy">쉬움</option>
          </select>
        </div>
      </div>
    </section>

    <!-- 게임 리스트 섹션 -->
    <section>
      <div id="game_list"></div>
      <div id="pagination_container"></div>
    </section>
  `;

  const requestGameButton = document.getElementById('request_game_button');
  if (requestGameButton) {
    requestGameButton.addEventListener('click', () => {
      showModal('request_game_form');
    });
  }

  const searchBtn = document.getElementById('search_button');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      handleSearchInputGame();
    });
  }

  const searchInput = document.getElementById('game_search_input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        handleSearchInputGame();
      }
    });
  }
  const playerFilter = document.getElementById('player-filter');
  if (playerFilter) {
    playerFilter.addEventListener('change', () => {
      renderGameList();
    });
  }
  const difficultyFilter = document.getElementById('difficulty-filter');
  if (difficultyFilter) {
    difficultyFilter.addEventListener('change', () => {
      renderGameList();
    });
  }

  renderGameList(page, player, difficulty);
}
