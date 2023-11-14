var E=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var c=(t,e,o)=>(E(t,e,"read from private field"),o?o.call(t):e.get(t)),y=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)};import{a as i}from"./vendor-1c5e86dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();var r;class f{constructor(e,o){y(this,r,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=o}fetchBooksCategoryList(){return i.get(`${c(this,r)}books/category-list`)}fetchBestSellersBooks(){return i.get(`${c(this,r)}books/top-books`)}fetchBooksByCategory(e){return i.get(`${c(this,r)}books/category?category=${e}`)}fetchBookById(e){return i.get(`${c(this,r)}books/${e}`)}}r=new WeakMap;function A(t){const e=document.querySelector(".category"),o=t.target;e.querySelectorAll("a").forEach(s=>{s.classList.remove("active")}),o.classList.add("active")}const M=new f,u=document.querySelector(".best-sellers-books"),C=document.querySelector(".home-page-title");function T(t){const e=t.split(" "),o=e.pop(),s=`${e.join(" ")} <span class="home-page-title-accent">${o}</span>`;return t==="All categories"?`
    Best Sellers <span class="home-page-title-accent">Books</span>`:s}function v(t){t.preventDefault(),t.target.dataset.categoryName==="All categories"&&L();const e=this.getAttribute("data-category-name");A(t),C.innerHTML=T(e),u.innerHTML="",I(e)}async function I(t){await M.fetchBooksByCategory(t).then(e=>{const o=e.data.map(l=>`<li class="category-book js-open-modal" data-book-id="${l._id}">
             <img class="best-sellers-book-img" src="${l.book_image}" alt="${l.title}" />
             <p class="best-sellers-book-title">${l.title}</p>
             <p class="best-sellers-book-author">${l.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");u.classList.replace("best-sellers-books","category-books"),u.innerHTML=o}).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(o){o.addEventListener("click",openModalId)})})}const b=document.querySelector(".best-sellers-books"),H=new f;L();async function L(){return await H.fetchBestSellersBooks().then(e=>e.data.map(o=>{const l=o.books.map(s=>`<li class="best-sellers-book js-open-modal" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
             <p class="book-overlay">Quick view</p>

            </li>`).join("");b.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${o.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${l} 
                </ul> 

                <button type="button" class="best-sellers-see-more-button" data-category-name="${o.list_name}">See more</button>
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".best-sellers-see-more-button").forEach(function(o){o.addEventListener("click",v)})}).catch(e=>{console.log(e.message),b.innerHTML="No information"})}const _=document.querySelector(".category");function j(t){t.sort((o,l)=>o.list_name.localeCompare(l.list_name));const e=t.map(o=>{const{list_name:l}=o;return`<li><a class='genre' href="#" target="_self" data-category-name="${l}">${l}</a></li>`}).join("");_.insertAdjacentHTML("beforeend",e)}function O(){new f().fetchBooksCategoryList().then(e=>{const o=e.data;j(o)}).then(()=>{document.querySelectorAll(".genre").forEach(function(o){o.addEventListener("click",v)})}).catch(e=>{console.error(e)})}O();const N=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),P=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),W=matchMedia("(prefers-color-scheme: dark)"),k=document.querySelector("#themeSwitch");function z(){const t=B();t!==null&&(k.checked=t==="dark"),k.addEventListener("change",e=>{const o=e.target.checked?"dark":"light";$(o)})}function R(){const t=B(),e=x();t!==null&&t!==e&&$(t)}function $(t){Y(t),t==="auto"?J():D(t)}function Y(t){let e,o;t==="auto"?(e="(prefers-color-scheme: light)",o="(prefers-color-scheme: dark)"):(e=t==="light"?"all":"not all",o=t==="dark"?"all":"not all"),N.forEach(l=>{l.media=e}),P.forEach(l=>{l.media=o})}function x(){return W.matches?"dark":"light"}function B(){return localStorage.getItem("color-scheme")}function D(t){localStorage.setItem("color-scheme",t)}function J(){localStorage.removeItem("color-scheme")}z();R();const d=document.querySelector(".header-modal"),K=document.querySelector(".modal-open-btn"),S=document.querySelector("body"),p=document.querySelector(".open-icon");console.dir(p.innerHTML);K.addEventListener("click",Q);function Q(t){if(d.classList.contains("hidden-modal")){d.classList.remove("hidden-modal"),S.classList.add("stop-scrolling"),p.innerHTML='<use href="./img/sprit.svg#icon-x"/>';return}else d.classList.add("hidden-modal"),S.classList.remove("stop-scrolling"),p.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const F=document.querySelectorAll(".header-nav-link");console.log(location.pathname);const q=location.pathname;console.log(q);F.forEach(function(t){const e=t.getAttribute("href");console.log(e),`.${q}`===e&&t.classList.add("current")});const m=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const h=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(e){let o=w(g);o=o.filter(s=>s.id!==e),localStorage.setItem(g,JSON.stringify(o)),document.getElementById(""+e).remove(),o.length===0&&(m.style.display="none",h.style.display="block")};function U(t){return t.map(e=>`
  <li class="shopping-list-card" id="${e.id}">
        <div class="shopping-list-card-img">
          <img src="${e.book_image}" alt="${e.title}"/>
        </div>
        <div class="shopping-list-blok">
          <h2 class="shopping-list-book-title">"${e.title}"</h2>
          <p class="shopping-list-book-category">"${e.list_name}"</p>
          <p class="shopping-list-book-description">"${e.description}"</p>
          <p class="shopping-list-book-autor">"${e.author}"</p>
        </div>
        <ul class="shopping-list-shops">
          <li class="shopping-list-shop">
            <a
              href="${e.marketAmazon}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/amazon.png" class="amazon" alt="${e.marketAmazon}" />
            </a>
          </li>
          <li class="shopping-list-shop">
            <a
              href="${e.marketAppleBooks}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/appleBook.png" class="appleBook" alt="${e.marketAppleBooks}" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick = "deleteCardItem('${e.id}')"
          class="shopping-list-btn-delete"
        >
          <svg class="shopping-list-btn-delete-icon" width="18" height="18">
            <use href=./img/sprit.svg#icon-trash-03"></use>
          </svg>
        </button>
      </li>`).join("")}const g="storage-data";function w(t){const e=localStorage.getItem(t);return e===null?[]:JSON.parse(e)}function V(){const t=w(g);t&&t.length>0?(h.style.display="none",m.innerHTML=U(t)):(m.style.display="none",h.style.display="block")}V();const G={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};G.addEventListener();const X=document.querySelector(".nav-btn");X.addEventListener("click",Z);function Z(){const t=document.querySelector(".fonds"),e=t.querySelector("li").offsetHeight,o=document.querySelector(".icon-down"),l=document.querySelector(".icon-up");if(t.scrollTop+t.clientHeight>=t.scrollHeight)for(;t.scrollTop!==0;)t.scrollTop-=e;else t.scrollTop+=2*e;t.scrollTop+t.clientHeight<t.scrollHeight?(o.classList.remove("is-hidden"),l.classList.add("is-hidden")):(o.classList.add("is-hidden"),l.classList.remove("is-hidden"))}
//# sourceMappingURL=main-fe79244a.js.map
