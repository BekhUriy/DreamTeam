 import { API_SERVICE } from './api-requests';
 const listCreate = document.querySelector('.shopping-list-cards');

 const deleteShoppingList = document.querySelector('.shopping-list-btn-delete');
 const apiShoppingList = new API_SERVICE(); const shoppingStorage = document.querySelector('.shopping-list-storage');
 document.deleteCardItem = function deleteCardItem(id) {
   let data = getLocalStorage(storageKey)
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
          <li class="shop-modal-item">
              <a href="${marketAmazon}" target="_blank">
                 <img class="amazon" width="62" height="19" srcset="${amazonJpg} 1x,${amazonJpg2x} 2x"
                  src="${amazonJpg}"
                  alt="Amazon"/>
              </a>
            </li>
            <li class="shop-modal-item">
              <a href="${marketAppleBooks}" target="_blank">
                <img class="apple" width="33" height="32" srcset="${appleBookJpg} 1x,${appleBookJpg2x} 2x"
                  src="${appleBookJpg}"
                  alt="appleBookPng"/>
              </a>
            </li>
        </ul>
        <button
          type="button"
          onClick = "deleteCardItem('${book.id}')"
          class="shopping-list-btn-delete"
        >
          <svg class="shopping-list-btn-delete-icon" width="16" height="16">
            <use href="../img/sprit.svg#icon-trash"></use>
          </svg>
        </button>
  </li>`
        )
    .join('');
}

  const storageKey ='storage-data';
 function getLocalStorage(key) {
   const meaning = localStorage.getItem(key);
   if (meaning === null) {
   return  [];
  } else {
   return JSON.parse(meaning);
   }
 };

 function getShoppingItems() {
    const data = getLocalStorage(storageKey)
   if (data && data.length > 0) {
      shoppingStorage.style.display = 'none';
     listCreate.innerHTML = createMarcup(data);
   } else {
     listCreate.style.display = 'none';
     shoppingStorage.style.display = 'block';
   }
 }
 getShoppingItems();
