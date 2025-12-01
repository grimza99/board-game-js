import { GAME_DETAIL_MAP } from "./game-rules/index.js";

export function showGameDetail(gameId) {
  const main = document.getElementById("main-content");
  if (!main) return;

  const { title, info, image, rule, video } = GAME_DETAIL_MAP.get(gameId) || {};
  main.innerHTML = "";
  // 동적으로 HTML 생성
  main.innerHTML = `
    <section id="game-detail-section">
        <div id="game-title">${title}</div>
        <img id="game-image" src="${image}" alt="${title}"/>
        <div class="game-info">
          <span class="detail-description">${info.description}</span>
          <div>
            <span class="detail-players">👥 ${info.players}명</span>
            <span class="detail-time">⏱️ ${info.playtime}분</span>
            <span class="detail-difficulty">🎯 ${info.difficulty}</span></div>
          </div>
      </div>
        <div id="game-rule">${rule}</div>
      </section>
      <section id="game-rule-video-section">비디오 영상 섹션</section>
  `;
}
