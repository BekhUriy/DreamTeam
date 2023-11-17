var v=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var i=(o,e,t)=>(v(o,e,"read from private field"),t?t.call(o):e.get(o)),b=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};import{o as y}from"./assets/support-slider-162acd66.js";import{a as d}from"./assets/vendor-1c5e86dd.js";var c;class u{constructor(e,t){b(this,c,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=t}fetchBooksCategoryList(){return d.get(`${i(this,c)}books/category-list`)}fetchBestSellersBooks(){return d.get(`${i(this,c)}books/top-books`)}fetchBooksByCategory(e){return d.get(`${i(this,c)}books/category?category=${e}`)}fetchBookById(e){return d.get(`${i(this,c)}books/${e}`)}}c=new WeakMap;function S(o){const e=document.querySelector(".category"),t=o.target;e.querySelectorAll("a").forEach(r=>{r.classList.remove("active")}),t.classList.add("active")}const E=new u,g=document.querySelector(".best-sellers-books"),C=document.querySelector(".home-page-title");function A(o){const e=o.split(" "),t=e.pop(),r=`${e.join(" ")} <span class="home-page-title-accent">${t}</span>`;return o==="All categories"?`
    Best Sellers <span class="home-page-title-accent">Books</span>`:r}function h(o){o.preventDefault(),o.target.dataset.categoryName==="All categories"&&f();const e=this.getAttribute("data-category-name");S(o),C.innerHTML=A(e),g.innerHTML="",w(e)}async function w(o){await E.fetchBooksByCategory(o).then(e=>{const t=e.data.map(s=>`<li class="category-book js-open-modal" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");g.classList.replace("best-sellers-books","category-books"),g.innerHTML=t}).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(t){t.addEventListener("click",y)})})}const m=document.querySelector(".best-sellers-books"),M=new u;f();async function f(){return await M.fetchBestSellersBooks().then(e=>e.data.map(t=>{const s=t.books.map(r=>`<li class="best-sellers-book js-open-modal" data-book-id="${r._id}">
             <img class="best-sellers-book-img" src="${r.book_image}" alt="${r.title}" />
             <p class="best-sellers-book-title">${r.title}</p>
             <p class="best-sellers-book-author">${r.author}</p>
             <p class="book-overlay">Quick view</p>

            </li>`).join("");m.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${t.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${s} 
                </ul> 

                <button type="button" class="best-sellers-see-more-button" data-category-name="${t.list_name}">See more</button>
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(t){t.addEventListener("click",y)})}).then(()=>{document.querySelectorAll(".best-sellers-see-more-button").forEach(function(t){t.addEventListener("click",h)})}).catch(e=>{m.innerHTML="No information"})}const q=document.querySelector(".category");function j(o){o.sort((t,s)=>t.list_name.localeCompare(s.list_name));const e=o.map(t=>{const{list_name:s}=t;return`<li><a class='genre' href="#" target="_self" data-category-name="${s}">${s}</a></li>`}).join("");q.insertAdjacentHTML("beforeend",e)}function _(){new u().fetchBooksCategoryList().then(e=>{const t=e.data;j(t)}).then(()=>{document.querySelectorAll(".genre").forEach(function(t){t.addEventListener("click",h)})}).catch(e=>{console.error(e)})}_();const T=document.querySelector("h1"),k=document.querySelector(".best-sellers-books"),H=document.querySelector(".category");H.addEventListener("click",I);function I(o){o.preventDefault();const e=new u;if(o.target.tagName.toLowerCase()!=="a")return;const t=o.target.innerHTML;console.log(t),T.innerHTML=t,t==="All categories"&&console.log("there must be function for best sellers"),e.fetchBooksByCategory(t).then(a=>{console.log(a.data);const l=a.data;k.innerHTML="",r(l),s()}).catch(a=>{console.error(a)});function s(){const a=o.target;console.log(a);const l=o.target.parentElement.querySelectorAll("a");console.log(l);let n=0;for(n=0;n<l.length;n++)l[n].classList.remove("active");a.classList.add("active")}function r(a){const l=a.map(n=>{const{_id:B,book_image:L,author:$,title:p}=n;return`<li class="best-sellers-book js-open-modal" data-book-id="${B}">
             <img class="best-sellers-book-img" src="${L}" alt="${p}" />
             <p class="best-sellers-book-title">${p}</p>
             <p class="best-sellers-book-author">${$}</p>
             <p class="book-overlay">Quick view</p>
</li>`}).join("");k.insertAdjacentHTML("beforeend",l)}}const N={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};N.addEventListener();
//# sourceMappingURL=commonHelpers.js.map
