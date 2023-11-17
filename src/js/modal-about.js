
import amazonJpg from '../img/shop/amazon.png';
import amazonJpg2x from '../img/shop/amazon2x.png';
import appleBookJpg from '../img/appleBook.png';
import appleBookJpg2x from '../img/appleBook2x.png';

const allModal = document.querySelector('.modal-about');

let storageObj = {};
const STORAGE_KEY = 'storage-data';

// відкриття модалки
function openModalId(e) {
    e.preventDefault();
    allModal.classList.remove("is-hidden");
    document.getElementById('myModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    allModal.innerHTML = '';
  const bookId = this.getAttribute('data-book-id');
 
    // console.log(bookId);
    
    createModal(bookId);
}

function modalCheck() {
    const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const idToFind = storageObj.id;

    const objToFind = storageArr.find(obj => obj.id === idToFind);

    return objToFind;

}

// Створюємо вікно
async function createModal(bookId) {
    try {
        const data = await findBookById(bookId);

        // allModal.innerHTML = '';
        // modalCheck();
        createModalMarkup(data);


        return data;
    } catch (error) {
        throw error;
    }
}

// добір потрібної інформації за Айді
async function findBookById(bookId) {
    try {
        const response = await fetch(`https://books-backend.p.goit.global/books/${bookId}`);
        const data = await response.json();

        storageObj = {
            book_image: data.book_image,
            title: data.title,
            author: data.author,
            marketAmazon: data.buy_links[0].url,
            marketAppleBooks: data.buy_links[1].url,
            list_name: data.list_name,
          id: data._id,
          description: data.description,
        };

        return data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}


function createModalMarkup(data) {
    const { book_image: bookModalImage, title: bookTitle, author: bookAuthor, buy_links: [marketAmazon, marketAppleBooks], description: bookDescription } = data;

    const html = `
    <button type="button" class="about-close">
      <svg class="about-svg">
        <use href="./img/sprit.svg#close"></use>
      </svg>
    </button>
    <div class="modal-book" id="my-modal-book">
    <div class="modal" id="bookModal">
      <img src="${bookModalImage}" alt="Book Cover" class="about-img">
      <div class="modal-text">
        <h2 id="modalTitle" class="title-about-book-modal">${bookTitle}</h2>
        <p class="author-about-book-modal">${bookAuthor}</p>
        <p class="text-about-book-modal">${bookDescription}</p>
        <div id="platformLinks">
          <ul class="shop-modal-list">
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
        </div>
      </div>
    </div>
    </div>
    <div id="aboutBtns" class="all-btns-modal">
    <button type="button" id="ad" class="modal-ad">
      Add book to shopping list
    </button>
    <div class="remove">
      <button type="button" id="removeBtn" class="modal-ad remove">
        Delete from shopping list
      </button>
      <p id="removeP" class="about-paragraf remove">Сongratulations! You have added the book to the shopping list. To delete, press the
        button “Remove from the shopping
        list”.
      </p>`;

    allModal.innerHTML = html;

    // працюємо з кнопками
    const adBtn = document.getElementById('ad');
    const removeBtn = document.getElementById('removeBtn');
    const textToRemove = document.getElementById('removeP');
    const closeBtn = document.querySelector('.about-close');

    if(modalCheck()){

        adBtn.style.display ="none";
        removeBtn.style.display = "block";
        textToRemove.style.display = "block";
    } else{
        adBtn.style.display ="block";
        removeBtn.style.display = "none";
    }

adBtn.addEventListener('click', addToShoppingList);
removeBtn.addEventListener('click', deleteFromShoppingList);

closeBtn.addEventListener('click', closeModal);
}

// Закриваємо вікно


function closeModal() {
    document.getElementById('myModal').style.display = 'none';
    allModal.classList.remove("is-hidden");


  document.body.style.overflow = 'auto';
}


function addToShoppingList() {
    const momentModalArr = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const textToRemove = document.getElementById('removeP');
    const adBtn = document.getElementById('ad');
    const removeBtn = document.getElementById('removeBtn');

    momentModalArr.push(storageObj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(momentModalArr));

    textToRemove.style.display = 'block';
    adBtn.style.display ="none";
    removeBtn.style.display = "block";

    console.log(storageObj);
    modalCheck();
}

function deleteFromShoppingList() {
    const textToRemove = document.getElementById('removeP');
    const adBtn = document.getElementById('ad');
    const removeBtn = document.getElementById('removeBtn');
    
    textToRemove.style.display = 'none';
    adBtn.style.display ="block";
    removeBtn.style.display = "none";

    const idToDelete = storageObj.id;

    let storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);

    if (indexToDelete !== -1) {
        storageArr.splice(indexToDelete, 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
    }

    modalCheck();
}

export { openModalId, storageObj };
