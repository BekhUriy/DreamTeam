// import { API_SERVICE } from './api-requests';
// const listCreate = document.querySelector('.shopping-list-cards');

// const deleteShoppingList = document.querySelector('.shopping-list-btn-delete');
// const apiShoppingList = new API_SERVICE();
// const shoppingStorage = document.querySelector('.shopping-list-storage');
// document.deleteCardItem = function deleteCardItem(id) {
//   let data = getLocalStorage(storageKey)
//   data = data.filter(book => book.id !== id)
//   localStorage.setItem(storageKey, JSON.stringify(data))

//    const element = document.getElementById('' + id + '');
//    element.remove();
//   if (data.length === 0) {
//     listCreate.style.display = 'none';
//     shoppingStorage.style.display = 'block';
//  }
// }


function createMarcup(data) {
   return data.map(
          (book) => `
  <li class="shopping-list-card" id="${book.id}">
        <div class="shopping-list-card-img">
          <img src="${book.book_image}" class="shopping-list-img" alt="${book.title}"/>
        </div>
        <div class="shopping-list-blok">
          <h2 class="shopping-list-book-title">"${book.title}"</h2>
          <p class="shopping-list-book-category">"${book.list_name}"</p>
          <p class="shopping-list-book-description">"${book.description}"</p>
          <p class="shopping-list-book-autor">"${book.author}"</p>
        </div>
        <ul class="shopping-list-shops">
          <li class="shopping-list-shop">
            <a
              href="${book.marketAmazon}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/amazon.png" class="amazon" alt="${book.marketAmazon}" />
            </a>
          </li>
          <li class="shopping-list-shop">
            <a
              href="${book.marketAppleBooks}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/appleBook.png" class="appleBook" alt="${book.marketAppleBooks}" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick = "deleteCardItem('${book.id}')"
          class="shopping-list-btn-delete"
        >
          <svg class="shopping-list-btn-delete-icon" width="18" height="18">
            <use href=./img/sprit.svg#icon-trash-03"></use>
          </svg>
        </button>
      </li>`
        )
    .join('');
}


//  const storageKey = 'storage-data';
// function getLocalStorage(key) {
//   const meaning = localStorage.getItem(key);
//   if (meaning === null) {
//   return  [];
//   } else {
//   return JSON.parse(meaning);
//   }
// };

// function getShoppingItems() {
//    const data = getLocalStorage(storageKey)
//   if (data && data.length > 0) {
//      shoppingStorage.style.display = 'none';
//     listCreate.innerHTML = createMarcup(data);
//   } else {
//     listCreate.style.display = 'none';
//     shoppingStorage.style.display = 'block';
//   }
// }
// getShoppingItems();
