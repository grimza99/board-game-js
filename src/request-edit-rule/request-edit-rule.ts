export default function showRequestEditRuleForm() {
  const modalRoot = document.getElementById('request_edit_rule_modal');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
        <div id="request_game_modal_overlay">
          <div id="request_game_modal_content">
            <button  id="close_request_game_modal">x</button>
            <div id="game-detail-container">   
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSezM7Jj3Zz_rcxjB6ZlWIW5Li1qeP30x0G92zMiv-LsLI1ZSQ/viewform?embedded=true" width="640" height="628" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe>
            </div>
          </div>
        </div>
  `;

  const closeBtn = document.getElementById('close_request_game_modal');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      hideReplyGameForm();
    });
  }
}

export function hideReplyGameForm() {
  const modalRoot = document.getElementById('request_game_form_modal');
  if (modalRoot) {
    modalRoot.innerHTML = '';
  }
}
