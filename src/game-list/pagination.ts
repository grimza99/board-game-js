import { PAGINATION_BUTTON_COUNT } from '../constants/pagination.ts';
import { renderGameList } from './game-list.js';

export default function renderPagination() {
  const paginationContainer =
    document.querySelector('#pagination_container') ||
    document.createElement('div');

  //previous Button
  const prevButton = document.createElement('button');
  prevButton.className = 'pagination_button';
  prevButton.id = 'prev_page';
  prevButton.innerHTML = `<img src="public/icons/left.arrow.icon.svg" alt="Previous Page" class="arrow_icon"/>`;
  prevButton.addEventListener('click', () => handlePreviousPage());
  paginationContainer.appendChild(prevButton);

  //page button
  for (let i = 1; i <= PAGINATION_BUTTON_COUNT; i++) {
    const pageButton = document.createElement('button');
    pageButton.className = 'pagination_button page-number';
    pageButton.id = `page-${i}`;
    pageButton.textContent = i.toString();
    pageButton.addEventListener('click', () => handlePageNumberClick(i));
    paginationContainer.appendChild(pageButton);
  }

  // Next Button
  const nextButton = document.createElement('button');
  nextButton.className = 'pagination_button';
  nextButton.id = 'next_page';
  nextButton.innerHTML = `<img src="public/icons/right.arrow.icon.svg" alt="Next Page" class="arrow_icon"/>`;
  nextButton.addEventListener('click', () => handleNextPage());

  paginationContainer.appendChild(nextButton);
}

/**페이지 네이션 이벤트 핸들러 */
const handlePreviousPage = () => {
  console.log('이전 페이지로 이동');
};

const handleNextPage = () => {
  console.log('다음 페이지로 이동');
};

const handlePageNumberClick = (pageNumber: number) => {
  renderGameList(undefined, pageNumber);
};
