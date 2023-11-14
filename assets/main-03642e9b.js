var q=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var c=(t,e,o)=>(q(t,e,"read from private field"),o?o.call(t):e.get(t)),y=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)};import{a as i}from"./vendor-1c5e86dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();var r;class f{constructor(e,o){y(this,r,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=o}fetchBooksCategoryList(){return i.get(`${c(this,r)}books/category-list`)}fetchBestSellersBooks(){return i.get(`${c(this,r)}books/top-books`)}fetchBooksByCategory(e){return i.get(`${c(this,r)}books/category?category=${e}`)}fetchBookById(e){return i.get(`${c(this,r)}books/${e}`)}}r=new WeakMap;const k=document.querySelector(".best-sellers-books"),w=new f;L();async function L(){return await w.fetchBestSellersBooks().then(e=>e.data.map(o=>{const l=o.books.map(s=>`<li class="best-sellers-book js-open-modal" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");k.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${o.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${l} 
                </ul> 
                <button type="button" class="best-sellers-see-more-button" data-button-category-name="${o.list_name}">See more</button>
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(o){o.addEventListener("click",openModalId)})}).catch(e=>{console.log(e.message),k.innerHTML="No information"})}function E(t){const e=document.querySelector(".category"),o=t.target;e.querySelectorAll("a").forEach(s=>{s.classList.remove("active")}),o.classList.add("active")}const M=new f,p=document.querySelector(".best-sellers-books"),A=document.querySelector(".home-page-title");function T(t){const e=t.split(" "),o=e.pop(),s=`${e.join(" ")} <span class="home-page-title-accent">${o}</span>`;return t==="All categories"?`
    Best Sellers <span class="home-page-title-accent">Books</span>`:s}function C(t){t.preventDefault(),t.target.dataset.categoryName==="All categories"&&L();const e=this.getAttribute("data-category-name");E(t),A.innerHTML=T(e),p.innerHTML="",I(e)}async function I(t){await M.fetchBooksByCategory(t).then(e=>{const o=e.data.map(l=>`<li class="category-book js-open-modal" data-book-id="${l._id}">
             <img class="best-sellers-book-img" src="${l.book_image}" alt="${l.title}" />
             <p class="best-sellers-book-title">${l.title}</p>
             <p class="best-sellers-book-author">${l.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");p.classList.replace("best-sellers-books","category-books"),p.innerHTML=o}).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(o){o.addEventListener("click",openModalId)})})}const H=document.querySelector(".category");function _(t){t.sort((o,l)=>o.list_name.localeCompare(l.list_name));const e=t.map(o=>{const{list_name:l}=o;return`<li><a class='genre' href="#" target="_self" data-category-name="${l}">${l}</a></li>`}).join("");H.insertAdjacentHTML("beforeend",e)}function j(){new f().fetchBooksCategoryList().then(e=>{const o=e.data;_(o)}).then(()=>{document.querySelectorAll(".genre").forEach(function(o){o.addEventListener("click",C)})}).catch(e=>{console.error(e)})}j();const O=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),N=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),P=matchMedia("(prefers-color-scheme: dark)"),S=document.querySelector("#themeSwitch");function W(){const t=$();t!==null&&(S.checked=t==="dark"),S.addEventListener("change",e=>{const o=e.target.checked?"dark":"light";v(o)})}function z(){const t=$(),e=R();t!==null&&t!==e&&v(t)}function v(t){D(t),t==="auto"?x():Y(t)}function D(t){let e,o;t==="auto"?(e="(prefers-color-scheme: light)",o="(prefers-color-scheme: dark)"):(e=t==="light"?"all":"not all",o=t==="dark"?"all":"not all"),O.forEach(l=>{l.media=e}),N.forEach(l=>{l.media=o})}function R(){return P.matches?"dark":"light"}function $(){return localStorage.getItem("color-scheme")}function Y(t){localStorage.setItem("color-scheme",t)}function x(){localStorage.removeItem("color-scheme")}W();z();const d=document.querySelector(".header-modal"),J=document.querySelector(".modal-open-btn"),b=document.querySelector("body"),u=document.querySelector(".open-icon");console.dir(u.innerHTML);J.addEventListener("click",K);function K(t){if(d.classList.contains("hidden-modal")){d.classList.remove("hidden-modal"),b.classList.add("stop-scrolling"),u.innerHTML='<use href="./img/sprit.svg#icon-x"/>';return}else d.classList.add("hidden-modal"),b.classList.remove("stop-scrolling"),u.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const Q=document.querySelector(".js-home-link"),F=document.querySelector(".js-shopping-link"),U=location.pathname;U==="/project-DreamTeam/shoping-list.html"?F.classList.add("current"):Q.classList.add("current");const m=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const h=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(e){let o=B(g);o=o.filter(s=>s.id!==e),localStorage.setItem(g,JSON.stringify(o)),document.getElementById(""+e).remove(),o.length===0&&(m.style.display="none",h.style.display="block")};function V(t){return t.map(e=>`
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
      </li>`).join("")}const g="storage-data";function B(t){const e=localStorage.getItem(t);e===null||JSON.parse(e)}function G(){const t=B(g);t&&t.length>0?(h.style.display="none",m.innerHTML=V(t)):(m.style.display="none",h.style.display="block")}G();const X={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};X.addEventListener();const Z=document.querySelector(".nav-btn");Z.addEventListener("click",ee);function ee(){const t=document.querySelector(".fonds"),e=t.querySelector("li").offsetHeight,o=document.querySelector(".icon-down"),l=document.querySelector(".icon-up");if(t.scrollTop+t.clientHeight>=t.scrollHeight)for(;t.scrollTop!==0;)t.scrollTop-=e;else t.scrollTop+=2*e;t.scrollTop+t.clientHeight<t.scrollHeight?(o.classList.remove("is-hidden"),l.classList.add("is-hidden")):(o.classList.add("is-hidden"),l.classList.remove("is-hidden"))}
//# sourceMappingURL=main-03642e9b.js.map
