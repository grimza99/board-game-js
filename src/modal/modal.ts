type TModalContentType = 'request_game_form' | 'request_edit_rule_form';

export default function showModal(modalType: TModalContentType) {
  const modalRoot = document.getElementById('modal_root');
  if (!modalRoot) return;

  modalRoot.innerHTML = `
        <div id="modal_overlay">
          <div id="modal_container">
            <button  id="close_modal_button">x</button>
            ${MODAL_CONTENT[modalType]}
          </div>
        </div>
  `;

  const closeBtn = document.getElementById('close_modal_button');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modalRoot.innerHTML = '';
    });
  }
}

const MODAL_CONTENT: Record<TModalContentType, string> = {
  request_game_form:
    '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScG4QDNYfDTwq35x7X_PTrdQfNGpNZu7QXy030IaWUtH2CeTQ/viewform?embedded=true" width="640" height="700" frameborder="0">로드 중…</iframe>',
  request_edit_rule_form:
    '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSezM7Jj3Zz_rcxjB6ZlWIW5Li1qeP30x0G92zMiv-LsLI1ZSQ/viewform?embedded=true"width="640" height="628"frameborder="0"marginheight="0"marginwidth="0">로드 중…</iframe>',
};
