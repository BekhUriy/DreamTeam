import axios from 'axios';

export class API_SERVICE {
  #BASE_URL = 'https://books-backend.p.goit.global/';

  constructor(selectedCategory, bookId) {
    this.selectedCategory = selectedCategory;
    this.bookId = bookId;
  }
  // -------------Запит на категорії-----------------------------
  fetchBooksCategoryList() {
    return axios.get(`${this.#BASE_URL}books/category-list`);
  }

  // ---------------Запит на ТОП книги(бестселлери)-----------------

  fetchBestSellersBooks() {
    return axios.get(`${this.#BASE_URL}books/top-books`);
  }

  // -------------Запит на категорію книги, примає назву категорії книги (категорії в сайд барі і по кнопці see more) -----------------

  fetchBooksByCategory(selectedCategory) {
    return axios.get(
      `${this.#BASE_URL}books/category?category=${selectedCategory}`
    );
  }
  // -------------Запит на інформацію про книгу (приймає ID книги) -----------------
  fetchBookById(bookId) {
    return axios.get(`${this.#BASE_URL}books/${bookId}`);
  }
}
