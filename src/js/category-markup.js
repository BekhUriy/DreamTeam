import { API_SERVICE } from "./api-requests";
import { bestSellersMarkup } from "./best-sellers";

const apiByCategory = new API_SERVICE();
const topBooksByCategories = document.querySelector('.best-sellers-books');
// const bestSellersRef = document.querySelector('.best-sellers');
const titleRef = document.querySelector('.home-page-title');



function selectedCategory(event){
    event.preventDefault();
    // if (event.currentTarget.nodeName !== 'LI') {
    //     return;
    //   }
      //функція, яка міняє головний title*//
      if (event.target.dataset.categoryName === 'All categories') {
        bestSellersMarkup()
      }
      const categoryName = this.getAttribute('data-category-name');
console.log(categoryName);

topBooksByCategories.innerHTML ='';
onCategoryMarkup(categoryName);

}

async function onCategoryMarkup(selectedOption){
 let result = await apiByCategory
 .fetchBooksByCategory(selectedOption)
 .then((categoryBooks)=>{
    console.log(categoryBooks)
    const booksArr = categoryBooks.data.map((book)=>
             `<li class="category-book js-open-modal" data-book-id="${book._id}">
             <img class="best-sellers-book-img" src="${book.book_image}" alt="${book.title}" />
             <p class="best-sellers-book-title">${book.title}</p>
             <p class="best-sellers-book-author">${book.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`
            ).join('');
            topBooksByCategories.classList.replace("best-sellers-books","category-books")
            topBooksByCategories.innerHTML = booksArr;
 })
}

export {selectedCategory};