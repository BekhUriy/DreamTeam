import { openModalId } from './modals';

import amazonPng from '../img/modal/amazon.png';

import appleBookPng from '../img/modal/applebook.png';


const allModal = document.querySelector('#allModal');

const storageButton = document.querySelector('.add-storage-button');

const removeStorageBtn = document.querySelector('.remove-modal-btn');

const storageDescription = document.querySelector('.storage-description');

const STORAGE_KEY = 'storage-data';


storageButton.addEventListener('click', onStorageAdd);

removeStorageBtn.addEventListener('click', onStorageDelete);

async function createModal(bookId) {
  allModal.innerHTML = '';

  try {
    const data = await fetchBookById(bookId);

    storageCheck();

    createMarkup(data);

    return data;
  } catch (error) {
    console.error('Error', error);

    throw error;
  }
}

async function fetchBookById(bookId) {
  try {
    storageObj = {};

    const response = await fetch(
      `https://books-backend.p.goit.global/books/${bookId}`
    );

    const data = await response.json();

    storageObj = {
      book_image: data.book_image,

      title: data.title,

      author: data.author,

      marketAmazon: data.buy_links[0].url,

      marketAppleBooks: data.buy_links[1].url,

      marketBookshop: data.buy_links[4].url,

      list_name: data.list_name,

      id: data._id,
    };

    return data;
  } catch (error) {
    console.error('Error', error);

    throw error;
  }
}

function storageCheck() {
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const idToFind = storageObj.id;

  if (!storageArr || storageArr.length === 0) {
    storageButton.style.display = 'block';

    removeStorageBtn.style.display = 'none';

    return;
  } else {
    const objToFind = storageArr.find(obj => obj.id === idToFind);

    if (!objToFind) {
      storageButton.style.display = 'block';

      removeStorageBtn.style.display = 'none';
    } else {
      storageButton.style.display = 'none';

      removeStorageBtn.style.display = 'block';
    }
  }
}

function createMarkup(data) {
  const bookModalImage = data.book_image;

  const bookTitle = data.title;

  const bookAuthor = data.author;

  const marketAmazon = data.buy_links[0].url;

  const marketAppleBooks = data.buy_links[1].url;

  const bookDescription = data.description;

  const html = ` <div class="modal" id="bookModal">
        <img src="${bookModalImage}" alt="Book Cover" class="image-about-book-modal">
        <div class="modal-text">
        <h2 id="modalTitle" class="title-about-book-modal">${bookTitle}</h2>
        <p class="author-about-book-modal"> ${bookAuthor}</p>
        <p class="text-about-book-modal">${bookDescription}</p>
        <div id="platformLinks">
        <ul class="shop-modal-list">
        <li class="shop-modal-item">
          <a href="${marketAmazon}" target="_blank">
          <img width="62" height="19" src="${amazonPng}"alt="Amazon"/>
          </a>
        </li>
        <li class="shop-modal-item"><a href="${marketAppleBooks}" target="_blank">
        <img width="33" height="32" src="${appleBookPng}" alt="AppleBooks"/>
        </a>
        </li>
        </ul>
        </div>
        </div>`;
  allModal.innerHTML = html;
}

let storageArr = [];

let storageObj = {};

function onStorageAdd() {
  // const realStorageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));

  const dataToSave = storageObj;

  if (!realStorageArr || realStorageArr.length === 0) {
    storageArr.push(dataToSave);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  } else {
    realStorageArr.push(dataToSave);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(realStorageArr));
  }

  storageDescription.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';

  storageCheck();
}

function onStorageDelete() {
  // storageDescription.textContent = '';

  // const idToDelete = storageObj.id;

  // const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));

  // const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);

  // storageArr.splice(indexToDelete, 1);

  // localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));

  localStorage.removeItem(localStorage.getItem(STORAGE_KEY))


  storageCheck();
}


export { createModal };

