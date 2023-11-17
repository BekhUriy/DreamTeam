import { API_SERVICE } from "./api-requests";
import { selectedCategory } from "./category-markup";

const category = document.querySelector('.category');


function listMarkup(genre) {

    genre.sort((a, b) => a.list_name.localeCompare(b.list_name));
    const markup = genre.map(genre => {
        const { list_name } = genre;
        return `<li><a class='genre' href="#" target="_self" data-category-name="${list_name}">${list_name}</a></li>`
    }).join('');
    category.insertAdjacentHTML('beforeend', markup);
   
}

function createList() {

    const apiService = new API_SERVICE();
    apiService.fetchBooksCategoryList()
        .then(response => {
            const data = response.data;
            
            listMarkup(data);
        })
        .then(()=>{
            const categoryOption = document.querySelectorAll('.genre');
           
            categoryOption.forEach(function(item){
                
                item.addEventListener('click', selectedCategory);
                

               
            })
        })
        
        .catch(error => { console.error(error) });
}

createList();




