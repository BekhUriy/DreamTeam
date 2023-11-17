import { API_SERVICE } from './api-requests';
import { bestSellersMarkup } from './best-sellers';
import { setActive } from './set-active';
import { openModalId } from "./modal-about";

const apiByCategory = new API_SERVICE();
const topBooksByCategories = document.querySelector('.best-sellers-books');
const titleRef = document.querySelector('.home-page-title');

function updatePageTitle(categoryTitle) {
  const titleWords = categoryTitle.split(' ');
  const accentWord = titleWords.pop();
  const blackWords = titleWords.join(' ');
  const pageTitle = `${blackWords} <span class="home-page-title-accent">${accentWord}</span>`;
  if (categoryTitle === 'All categories') {
    return `
    Best Sellers <span class="home-page-title-accent">Books</span>`;
  }
  return pageTitle;
}

function selectedCategory(event) {
  event.preventDefault();

  // this.classList.add('active');

  if (event.target.dataset.categoryName === 'All categories') {
    bestSellersMarkup();
    // titleRef.innerHTML = `
    // Best Sellers <span class="home-page-title-accent">Books</span>`;
  }
  const categoryName = this.getAttribute('data-category-name');
  setActive(event);
  // console.log(categoryName);

  titleRef.innerHTML = updatePageTitle(categoryName);

  topBooksByCategories.innerHTML = '';
  onCategoryMarkup(categoryName);
}

async function onCategoryMarkup(selectedOption) {
  let result = await apiByCategory
    .fetchBooksByCategory(selectedOption)
    .then(categoryBooks => {
      // console.log(categoryBooks)
      const booksArr = categoryBooks.data
        .map(
          book =>
            `<li class="category-book js-open-modal" data-book-id="${book._id}">
             <img class="best-sellers-book-img" src="${book.book_image}" alt="${book.title}" />
             <p class="best-sellers-book-title">${book.title}</p>
             <p class="best-sellers-book-author">${book.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`
        )
        .join('');
      topBooksByCategories.classList.replace(
        'best-sellers-books',
        'category-books'
      );
      topBooksByCategories.innerHTML = booksArr;
    })
    .then(() => {
      const openBookEl = document.querySelectorAll('.js-open-modal');
      openBookEl.forEach(function (item) {
        //  console.log(item);
        item.addEventListener('click', openModalId);
      });
    });
}

// function setActive(event) {
//   console.log([event.currentTarget]);
//   const allCategories = [...event.target.parentElement];
// console.log(allCategories);

// allCategories.forEach(liItem => {
//   console.log(liItem);
//   liItem.classList.remove('active');
// });
//   event.target.classList.add('active');

// }

export { selectedCategory };