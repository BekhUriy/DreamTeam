import { API_SERVICE } from './api-requests';
const listCreate = document.querySelector('.shopping-cards');

const deleteShoppingList = document.querySelector('.shopping-btn-delete');
const apiShoppingList = new API_SERVICE();
const shoppingStorage = document.querySelector('.shopping-storage');
document.deleteCardItem = function deleteCardItem(id) {
  let data = load(storageKey)
  data = data.filter(book => book.id !== id)
  localStorage.setItem(storageKey, JSON.stringify(data))

   const element = document.getElementById('' + id + '');
   element.remove();
  if (data.length === 0) {
    listCreate.style.display = 'none';
    shoppingStorage.style.display = 'block';
 }
}

function createMarcup(data) {
   return data.map(
          (book) => `
  <li class="shopping-card" id="${book.id}">
        <div class="shopping-card-img">
          <img src="${book.book_image}" alt="${book.title}"/>
        </div>
        <div class="shopping-blok">
          <h2 class="shopping-book-title">"${book.title}"</h2>
          <p class="shopping-book-category">"${book.list_name}"</p>
          <p class="shopping-book-description">"${book.description}"</p>
          <p class="shopping-book-autor">"${book.author}"</p>
        </div>
        <ul class="shopping-shops">
          <li class="shopping-shop">
            <a
              href="${book.marketAmazon}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amazon-book site"
            >
              <img src="./img/amazon.png" class="shopping-shop-amazon" alt="${book.marketAmazon}" />
            </a>
          </li>
          <li class="shopping-shop">
            <a
              href="${book.marketAppleBooks}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple-book site"
            >
              <img src="./img/appleBook.png" class="shopping-shop-appleBook" alt="${book.marketAppleBooks}" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick = "deleteCardItem('${book.id}')"
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
}

const storageKey = 'storage-data';
  const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

function getShoppingItems() {
   const data = load(storageKey)
  if (data && data.length > 0) {
     shoppingStorage.style.display = 'none';
    listCreate.innerHTML = createMarcup(data);
  } else {
    listCreate.style.display = 'none';
    shoppingStorage.style.display = 'block';
  }
}
getShoppingItems();
