import { API_SERVICE } from "./api-requests";

const category = document.querySelector('.category');


function listMarkup(genre) {

    genre.sort((a, b) => a.list_name.localeCompare(b.list_name));
    const markup = genre.map(genre => {
        const { list_name } = genre;
        return `<li><a class='genre' href="#" target="_self">${list_name}</a></li>`
    }).join('');
    category.insertAdjacentHTML('beforeend', markup);
   
}

function createList() {

    const apiService = new API_SERVICE();
    apiService.fetchBooksCategoryList()
        .then(response => {
            const data = response.data
            console.log(data);
            listMarkup(data);
        }
        
        )
        .catch(error => { console.error(error) });
}

createList();