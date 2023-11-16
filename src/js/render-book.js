
import { API_SERVICE } from "./api-requests";

// const title = document.querySelector('h1')
// const main = document.querySelector('.best-sellers-books')
// const category = document.querySelector('.category');

// category.addEventListener('click', renderGenre)


// function renderGenre(evt) {
//   evt.preventDefault()
//   const apiService = new API_SERVICE();
//   if (evt.target.tagName.toLowerCase() !== 'a') {
//     return;
//   }

//   const selectedCategory = evt.target.innerHTML
//   console.log(selectedCategory)
//   title.innerHTML = selectedCategory;
//   if (selectedCategory === 'All categories') {
//     console.log('there must be function for best sellers')
//   }
//   apiService.fetchBooksByCategory(selectedCategory)
//     .then(response => {

//       console.log(response.data)
//       const data = response.data
//       main.innerHTML=''
//       renderBooks(data)
      
//       setActive()
      
//     })
    
//     .catch(error => {
//       console.error(error)
//     })
  
//   function setActive() {
//     const activeCategory = evt.target
//     console.log(activeCategory)
//       const allCategories = evt.target.parentElement.querySelectorAll('a');
//   console.log(allCategories)
//   // Remove the .active class from all 'a' elements
//   let i = 0;
//   for (i = 0; i < allCategories.length; i++){
//     allCategories[i].classList.remove('active')
//   }
//     activeCategory.classList.add('active')
    
//   }

//   function renderBooks(data) {
//     const markup = data.map(data => {
//       const { _id, book_image, author, title } = data;
//       return `<li class="best-sellers-book js-open-modal" data-book-id="${_id}">
//              <img class="best-sellers-book-img" src="${book_image}" alt="${title}" />
//              <p class="best-sellers-book-title">${title}</p>
//              <p class="best-sellers-book-author">${author}</p>
//              <p class="book-overlay">Quick view</p>
// </li>`
//     }).join('');
//     main.insertAdjacentHTML('beforeend', markup);
//   }
// }