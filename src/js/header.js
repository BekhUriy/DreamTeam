const modalW = document.querySelector('.header-modal');
const modalWinBtn = document.querySelector('.modal-open-btn');
const allbody = document.querySelector('body');
const burger = document.querySelector('.open-icon');
console.dir(burger.innerHTML);
modalWinBtn.addEventListener('click', modWin);
function modWin(event) {
  if (modalW.classList.contains('hidden-modal')) {
    modalW.classList.remove('hidden-modal');
    allbody.classList.add('stop-scrolling');
    burger.innerHTML = `<use href="./img/sprit.svg#icon-x"/>`;
    return;
  } else {
    modalW.classList.add('hidden-modal');
    allbody.classList.remove('stop-scrolling');
    burger.innerHTML = `<use href="./img/sprit.svg#icon-burger"/>`;
  }
}


const currentPage = location.pathname;
console.log('current page:', currentPage);
const homePage = document.querySelector('.js-home-link'); 
const shoppingListPage = document.querySelector('.js-shopping-link'); 


if (currentPage === '/DreamTeam/shoping-list.html') { 
  shoppingListPage.classList.add('current'); 
  shoppingListPage.style.paddingBottom = '7px';
  shoppingListPage.style.paddingTop = '7px';
  } else { 
      homePage.classList.add('current'); 
}

