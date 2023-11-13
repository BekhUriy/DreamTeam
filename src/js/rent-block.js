import { API_SERVICE } from './api-requests';
const listCreate = document.querySelector('.shopping-cards');
const shoppingCard = document.querySelector('.shopping-card')
const deleteShoppingList = document.querySelector('.shopping-btn-delete');
const apiShoppingList = new API_SERVICE();
const shoppingStorage = document.querySelector('.shopping-storage');
shoppingStorage.style.display = "none";

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Remove state error: ', error.message);
  }
};

deleteShoppingList.addEventListener('click', onTrushBtn);
function onTrushBtn(evt) {
  evt.currentTarget.remove();
  remove();
};

function createMarcup() {
  apiShoppingList
    .fetchBookById(bookId)
    .then(response => {
      return response.data
        .map(
          ({
            book_image,
            title,
            list_name,
            description,
            author,
            buy_links: [{ name, url }],
          }) => `
  <li class="shopping-card">
        <div class="shopping-card-img">
          <img src="${book_image}" alt="${title}"/>
        </div>
        <div class="shopping-blok">
          <h2 class="shopping-book-title">"${title}"</h2>
          <p class="shopping-book-category">"${list_name}"</p>
          <p class="shopping-book-description">"${description}"</p>
          <p class="shopping-book-autor">"${author}"</p>
        </div>
        <ul class="shopping-shops">
          <li class="shopping-shop">
            <a
              href="${buy_links[0].url}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amazon-book site"
            >
              <img src="./img/amazon.png" class="shopping-shop-amazon" alt="${buy_links[0].name}" />
            </a>
          </li>
          <li class="shopping-shop">
            <a
              href="${buy_links[0].url}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple-book site"
            >
              <img src="./img/appleBook.png" class="shopping-shop-appleBook" alt="${buy_links[0].name}" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          class="shopping-btn-delete"
          aria-label="Delete the book from shopping list"
        >
          <svg class="shopping-btn-delete-icon" width="18" height="18">
            <use href=./img/sprit.svg#icon-trash-03"></use>
          </svg>
        </button>
      </li>`
        )
        .join('');
    })
    .catch(error => {
      console.error(error);
    });
}

f/* unction getShoppingItems() {
  if (localStorage.length > 0) {
    shoppingStorage.style.display = 'none';
    listCreate.innerHTML = createMarcup();
  } else {
    listCreate.style.display = 'none';
    shoppingStorage.style.display = 'block';
  }
}
getShoppingItems();
 */