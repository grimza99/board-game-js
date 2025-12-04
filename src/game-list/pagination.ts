import { MAX_PAGINATION_BUTTON } from '../constants/pagination.ts';
import { renderGameList } from './game-list.js';

export default function renderPagination(
  currentPage: number,
  totalPage: number
) {
  const paginationContainer =
    document.querySelector('#pagination_container') ||
    document.createElement('div');

  paginationContainer.innerHTML = ''; // Clear existing pagination buttons
  //previous Button
  const prevButton = document.createElement('button');
  prevButton.className = 'pagination_button';
  prevButton.id = 'prev_page';
  prevButton.innerHTML = `<img src="public/icons/left.arrow.icon.svg" alt="Previous Page" class="arrow_icon"/>`;
  prevButton.addEventListener('click', () => handlePreviousPage(currentPage));
  paginationContainer.appendChild(prevButton);

  //page button
  const startPage = Math.max(
    1,
    Math.min(
      currentPage - Math.floor(MAX_PAGINATION_BUTTON / 2),
      totalPage - MAX_PAGINATION_BUTTON + 1
    )
  );
  for (let i = 0; i < MAX_PAGINATION_BUTTON; i++) {
    if (i + startPage > totalPage) break;

    const pageButton = document.createElement('button');
    pageButton.className = 'pagination_button page-number';

    if (i + startPage === currentPage) {
      pageButton.id = 'current_page' as string;
    }
    pageButton.textContent = (i + startPage).toString();
    pageButton.addEventListener('click', () =>
      handlePageNumberClick(i + startPage, totalPage)
    );
    paginationContainer.appendChild(pageButton);
  }

  // Next Button
  const nextButton = document.createElement('button');
  nextButton.className = 'pagination_button';
  nextButton.id = 'next_page';
  nextButton.innerHTML = `<img src="public/icons/right.arrow.icon.svg" alt="Next Page" class="arrow_icon"/>`;
  nextButton.addEventListener('click', () =>
    handleNextPage(currentPage, totalPage)
  );

  paginationContainer.appendChild(nextButton);
}

/**페이지 네이션 이벤트 핸들러 */
const handlePreviousPage = (currentPage: number) => {
  if (currentPage <= 1) return;
  renderGameList(undefined, currentPage - 1);
};

const handleNextPage = (currentPage: number, totalPage: number) => {
  if (currentPage >= totalPage) return;
  renderGameList(undefined, currentPage + 1);
};

const handlePageNumberClick = (pageNumber: number, totalPage: number) => {
  if (pageNumber > totalPage) return;
  renderGameList(undefined, pageNumber);
};
