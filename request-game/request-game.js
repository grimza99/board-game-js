export default function showRequestGameForm() {
  const modalRoot = document.getElementById("request_game_form_modal");
  if (!modalRoot) return;

  modalRoot.innerHTML = `
        <div id="request_game_modal_overlay">
          <div id="request_game_modal_content">
            <button  id="close_request_game_modal">x</button>
            <div id="game-detail-container">   
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScG4QDNYfDTwq35x7X_PTrdQfNGpNZu7QXy030IaWUtH2CeTQ/viewform?embedded=true" width="640" height="700" frameborder="0">로드 중…</iframe>
            </div>
          </div>
        </div>
  `;

  const closeBtn = document.getElementById("close_request_game_modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      hideReplyGameForm();
    });
  }
}

export function hideReplyGameForm() {
  const modalRoot = document.getElementById("request_game_form_modal");
  if (modalRoot) {
    modalRoot.innerHTML = "";
  }
}
