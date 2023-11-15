var b=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var c=(o,e,t)=>(b(o,e,"read from private field"),t?t.call(o):e.get(o)),u=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};import"./assets/modal-about-0848409d.js";import{a as l}from"./assets/vendor-1c5e86dd.js";var r;class i{constructor(e,t){u(this,r,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=t}fetchBooksCategoryList(){return l.get(`${c(this,r)}books/category-list`)}fetchBestSellersBooks(){return l.get(`${c(this,r)}books/top-books`)}fetchBooksByCategory(e){return l.get(`${c(this,r)}books/category?category=${e}`)}fetchBookById(e){return l.get(`${c(this,r)}books/${e}`)}}r=new WeakMap;function y(o){const e=document.querySelector(".category"),t=o.target;e.querySelectorAll("a").forEach(a=>{a.classList.remove("active")}),t.classList.add("active")}const m=new i,n=document.querySelector(".best-sellers-books"),k=document.querySelector(".home-page-title");function h(o){const e=o.split(" "),t=e.pop(),a=`${e.join(" ")} <span class="home-page-title-accent">${t}</span>`;return o==="All categories"?`
    Best Sellers <span class="home-page-title-accent">Books</span>`:a}function p(o){o.preventDefault(),o.target.dataset.categoryName==="All categories"&&d();const e=this.getAttribute("data-category-name");y(o),k.innerHTML=h(e),n.innerHTML="",f(e)}async function f(o){await m.fetchBooksByCategory(o).then(e=>{const t=e.data.map(s=>`<li class="category-book js-open-modal" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");n.classList.replace("best-sellers-books","category-books"),n.innerHTML=t}).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(t){t.addEventListener("click",openModalId)})})}const g=document.querySelector(".best-sellers-books"),$=new i;d();async function d(){return await $.fetchBestSellersBooks().then(e=>e.data.map(t=>{const s=t.books.map(a=>`<li class="best-sellers-book js-open-modal" data-book-id="${a._id}">
             <img class="best-sellers-book-img" src="${a.book_image}" alt="${a.title}" />
             <p class="best-sellers-book-title">${a.title}</p>
             <p class="best-sellers-book-author">${a.author}</p>
             <p class="book-overlay">Quick view</p>

            </li>`).join("");g.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${t.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${s} 
                </ul> 

                <button type="button" class="best-sellers-see-more-button" data-category-name="${t.list_name}">See more</button>
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".best-sellers-see-more-button").forEach(function(t){t.addEventListener("click",p)})}).catch(e=>{console.log(e.message),g.innerHTML="No information"})}const B=document.querySelector(".category");function S(o){o.sort((t,s)=>t.list_name.localeCompare(s.list_name));const e=o.map(t=>{const{list_name:s}=t;return`<li><a class='genre' href="#" target="_self" data-category-name="${s}">${s}</a></li>`}).join("");B.insertAdjacentHTML("beforeend",e)}function C(){new i().fetchBooksCategoryList().then(e=>{const t=e.data;S(t)}).then(()=>{document.querySelectorAll(".genre").forEach(function(t){t.addEventListener("click",p)})}).catch(e=>{console.error(e)})}C();
//# sourceMappingURL=commonHelpers.js.map
