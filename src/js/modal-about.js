import * as basicLightbox from 'basiclightbox';

const adBtn = document.getElementById('ad');
const removeB = document.getElementById('removeBtn');
const pRemove = document.getElementById('removeP');

let storageObj = {};
const STORAGE_KEY = 0; 

// відкриття модалки
function openModalId(e) {
    document.getElementById('myModal').style.display = 'block';
    e.preventDefault();
  const bookId = this.getAttribute('data-book-id');
  document.body.style.overflow = 'hidden';
    console.log(bookId);
    createModal(bookId);
}

// працюємо з кнопками

adBtn.addEventListener('click', addToShoppingList);
removeB.addEventListener('click', deleteFromShoppingList);

function modalCheck() {
    const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const idToFind = storageObj.id;

    const objToFind = storageArr.find(obj => obj.id === idToFind);

    adBtn.style.display = objToFind ? 'none' : 'block';
    removeB.style.display = objToFind ? 'block' : 'none';
}

function addToShoppingList() {
    const momentModalArr = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    momentModalArr.push(storageObj);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(momentModalArr));

    pRemove.style.display = 'block';

    modalCheck();
}

function deleteFromShoppingList() {
    pRemove.style.display = 'none';

    const idToDelete = storageObj.id;

    let storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

    const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);

    if (indexToDelete !== -1) {
        storageArr.splice(indexToDelete, 1);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
    }

    modalCheck();
}

// Створюємо вікно
async function createModal(bookId) {
    try {
        const data = await findBookById(bookId);

        AllModal.innerHTML = '';
        modalCheck();
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
        };

        return data;
    } catch (error) {
        console.error('Error', error);
        throw error;
    }
}

const AllModal = document.getElementById('my-modal-book')


function createModalMarkup(data) {
    const { book_image: bookModalImage, title: bookTitle, author: bookAuthor, buy_links: [marketAmazon, marketAppleBooks], description: bookDescription } = data;

    const html = `
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
                <img width="62" height="19" src="" alt="Amazon"/>
              </a>
            </li>
            <li class="shop-modal-item">
              <a href="${marketAppleBooks}" target="_blank">
                <img width="33" height="32" src="" alt="AppleBooks"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>`;

    AllModal.innerHTML = html;
}

// Закриваємо вікно
const closeBtn = document.querySelector('.about-close');
closeBtn.addEventListener('click', closeModal);

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
  document.body.style.overflow = 'auto';
}

export { openModalId };



