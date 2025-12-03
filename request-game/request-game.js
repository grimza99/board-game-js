export default function showReplyGameForm() {
  const modalRoot = document.getElementById("reply-game-form-modal");
  if (!modalRoot) return;

  modalRoot.innerHTML = `
        <div id="reply-game-modal-overlay">
          <div id="reply-game-modal-content">
            <button class="close-button" id="close_reply_game_modal">x</button>
            <div id="game-detail-container">   
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScG4QDNYfDTwq35x7X_PTrdQfNGpNZu7QXy030IaWUtH2CeTQ/viewform?embedded=true" width="640" height="700" frameborder="0">로드 중…</iframe>
            </div>
          </div>
        </div>
  `;

  const closeBtn = document.getElementById("close_reply_game_modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      hideReplyGameForm();
    });
  }
}

export function hideReplyGameForm() {
  const modalRoot = document.getElementById("reply-game-form-modal");
  if (modalRoot) {
    modalRoot.innerHTML = "";
  }
}
