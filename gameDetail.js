import { GAME_DETAIL_MAP } from "./game-rules/index.js";

export function showGameDetail(gameId) {
  const main = document.getElementById("main-content");
  if (!main) return;

  const { title, info, image, rule, video } = GAME_DETAIL_MAP.get(gameId) || {};
  main.innerHTML = "";
  main.innerHTML = `
    <section id="detail-game-section">
      <div id="detail-game-image-title">
        <h3 id="detail-game-title">${title}</h3>
        <img id="detail-game-image" src="${image}" alt="${title}"/>
      </div>
      <div class="detail-game-info-card">
        <div class="detail-info-item">
          <img class='info-card-icon' src='/public/icons/player.icon.svg' alt='player'/>
          <div class="info-text-group">
            <span>인원</span>
            <span>${info.players}명</span>
          </div>
        </div>
        <div class="detail-info-item">
          <img class='info-card-icon' src='/public/icons/time.icon.svg' alt='playtime'/>
          <div class="info-text-group">
            <span>시간</span>
            <span>${info.playtime}분</span>
          </div>
        </div>
        <div class="detail-info-item">
          <img class='info-card-icon' src='/public/icons/difficulty.icon.svg' alt='difficulty'/>
          <div class="info-text-group">
            <span>난이도</span>
            <span>${info.difficulty}</span>
          </div>
        </div>
      </div>
      <div>
        <h4 class='detail-game-subtitle'>게임 설명</h4>
        <p id="detail-description">${info.description}</p>
      </div>
      <div id="game-rule-section">
        <h4 class='detail-game-subtitle'>게임 규칙</h4>
        <div id="game-rule">${rule}</div>
      </div>
      <div id="game-video-section">
        <h4 class='detail-game-subtitle'>게임 룰 영상</h4>
        <iframe 
          id="detail-game-video"
          src="https://www.youtube.com/embed/${video}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      </div>
    </section>
  `;
}
