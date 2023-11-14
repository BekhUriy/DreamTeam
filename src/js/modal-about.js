// const bookId = this.getAttribute('data-book-id');

const bestSellerElements = document.querySelectorAll('.category-book');
bestSellerElements.forEach(element => {
  element.addEventListener('click', () => {
    const bookId = element.dataset.bookId; // Додайте data-атрибут "data-book-id" до елементу, щоб визначити ID книги
    createModal(bookId);
  });
});

function openModalId() {
  idModal.classList.remove('is-hidden');
  idBackdropModal.classList.remove('is-hidden');
}
