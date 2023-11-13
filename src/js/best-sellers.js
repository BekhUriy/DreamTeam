import { API_SERVICE} from "./api-requests";
import { openModalId } from "./modals";
// import Notiflix from "notiflix";

const topBooksByCategories = document.querySelector('.best-sellers-books')
const apiCategories = new API_SERVICE();

 bestSellersMarkup();

async function bestSellersMarkup () {
    let result = await apiCategories
    .fetchBestSellersBooks()
    // console.log(result)
    .then(topCategories => {
        return topCategories.data
        .map((topCategory) => {
            // const {book} = bookAttributes;

            // console.log(topCategory);
            const booksArr = topCategory.books.map((book)=>
             `<li class="best-sellers-book js-open-modal" data-book-id="${book._id}">
             <img class="best-sellers-book-img" src="${book.book_image}" alt="${book.title}" />
             <p class="best-sellers-book-title">${book.title}</p>
             <p class="best-sellers-book-author">${book.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`
            ).join('');
            // console.log(booksArr);

            topBooksByCategories.insertAdjacentHTML('beforeend', 
            `<li class="best-seller-category"> 
                <p class="category-title"> ${topCategory.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${booksArr} 
                </ul> 
                <button type="button" class="best-sellers-see-more-button" data-button-category-name="${topCategory.list_name}">See more</button>
                    </li>`)
        }).join('')
    })
    .then(()=>{
       const openBookEl = document.querySelectorAll('.js-open-modal');
        openBookEl.forEach(function(item){
                //  console.log(item);
                 item.addEventListener('click', openModalId);
    })
    })
    .catch(error => {
        console.log(error.message);
        topBooksByCategories.innerHTML = 'No information';
      });

    return result;
    }

    export{bestSellersMarkup};
// Books in category

// function updatePageTitle(selectedCategory) {
//     const homePageTitle = document.querySelector('.home-page-title');
//     const homePageTitleAccent = document.querySelector('.home-page-title-accent');

//     const lastWord = selectedCategory.split(' ').pop();
//     homePageTitleAccent.textContent = lastWord;
//     const pageTitleWithoutLastWord = selectedCategory.replace(new RegExp(`${lastWord}`), '');
//     homePageTitle.textContent = pageTitleWithoutLastWord;
// }

// function createList() {

//         const apiService = new API_SERVICE();
//         apiService.fetchBooksCategoryList()
//             .then(response => {
//                 const data = response.data
//                 console.log(data);
//                 listMarkup(data);
//             }

//             )
//             .catch(error => { console.error(error) });
//     }

//     createList();


//     category.addEventListener('click', function (event) {
//         if (event.target.classList.contains('genre')) {
//             const selectedGenres = document.querySelectorAll('.genre');
//             selectedGenres.forEach(genre => genre.classList.remove('genre-selected'));

//             event.target.classList.add('genre-selected');

//             const selectedCategory = event.target.textContent;
//             categoryMarkup(selectedCategory);

//             updatePageTitle(selectedCategory);
//         }
//     });

//     async function categoryMarkup(selectedCategory) {
//         try {
//             selectedBooksByCategories.innerHTML = '';

//             const selectionCategories = await apiCategories.fetchBooksByCategory(selectedCategory);

//             const markup = selectionCategories.data.map((selectedCategory) => {
//                 const booksArr = selectedCategory.books.map((book) =>
//                     `<li class="best-sellers-book" data-book-id="${book._id}">
//                      <img class="best-sellers-book-img" src="${book.book_image}" alt="${book.title}" />
//                      <p class="best-sellers-book-title">${book.title}</p>
//                      <p class="best-sellers-book-author">${book.author}</p>
//                     </li>`
//                 ).join('');

//                 return `<li class="best-seller-category"> 
//                             <p class="category-title">${topCategory.list_name}</p> 
//                             <ul class="best-sellers-list-in-category">${booksArr}</ul> 
//                             <button type="button" class="best-sellers-see-more-button" data-button-category-name="${topCategory.list_name}">See more</button>
//                         </li>`;
//             }).join('');

//             selectedBooksByCategories.insertAdjacentHTML('beforeend', markup);
//         } catch (error) {
//             console.error(error.message);
//             selectedBooksByCategories.innerHTML = 'No information';
//         }
//     }

    