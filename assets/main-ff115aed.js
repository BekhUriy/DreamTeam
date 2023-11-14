var M=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var c=(t,e,o)=>(M(t,e,"read from private field"),o?o.call(t):e.get(t)),y=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)};import{a as i}from"./vendor-1c5e86dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();var r;class f{constructor(e,o){y(this,r,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=o}fetchBooksCategoryList(){return i.get(`${c(this,r)}books/category-list`)}fetchBestSellersBooks(){return i.get(`${c(this,r)}books/top-books`)}fetchBooksByCategory(e){return i.get(`${c(this,r)}books/category?category=${e}`)}fetchBookById(e){return i.get(`${c(this,r)}books/${e}`)}}r=new WeakMap;function A(t){const e=document.querySelector(".category"),o=t.target;e.querySelectorAll("a").forEach(s=>{s.classList.remove("active")}),o.classList.add("active")}const C=new f,u=document.querySelector(".best-sellers-books"),I=document.querySelector(".home-page-title");function T(t){const e=t.split(" "),o=e.pop(),s=`${e.join(" ")} <span class="home-page-title-accent">${o}</span>`;return t==="All categories"?`
    Best Sellers <span class="home-page-title-accent">Books</span>`:s}function v(t){t.preventDefault(),t.target.dataset.categoryName==="All categories"&&L();const e=this.getAttribute("data-category-name");A(t),I.innerHTML=T(e),u.innerHTML="",H(e)}async function H(t){await C.fetchBooksByCategory(t).then(e=>{const o=e.data.map(l=>`<li class="category-book js-open-modal" data-book-id="${l._id}">
             <img class="best-sellers-book-img" src="${l.book_image}" alt="${l.title}" />
             <p class="best-sellers-book-title">${l.title}</p>
             <p class="best-sellers-book-author">${l.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");u.classList.replace("best-sellers-books","category-books"),u.innerHTML=o}).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(o){o.addEventListener("click",openModalId)})})}const b=document.querySelector(".best-sellers-books"),_=new f;L();async function L(){return await _.fetchBestSellersBooks().then(e=>e.data.map(o=>{const l=o.books.map(s=>`<li class="best-sellers-book js-open-modal" data-book-id="${s._id}">
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
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".best-sellers-see-more-button").forEach(function(o){o.addEventListener("click",v)})}).catch(e=>{console.log(e.message),b.innerHTML="No information"})}const j=document.querySelector(".category");function O(t){t.sort((o,l)=>o.list_name.localeCompare(l.list_name));const e=t.map(o=>{const{list_name:l}=o;return`<li><a class='genre' href="#" target="_self" data-category-name="${l}">${l}</a></li>`}).join("");j.insertAdjacentHTML("beforeend",e)}function N(){new f().fetchBooksCategoryList().then(e=>{const o=e.data;O(o)}).then(()=>{document.querySelectorAll(".genre").forEach(function(o){o.addEventListener("click",v)})}).catch(e=>{console.error(e)})}N();const P=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),W=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),z=matchMedia("(prefers-color-scheme: dark)"),k=document.querySelector("#themeSwitch");function R(){const t=B();t!==null&&(k.checked=t==="dark"),k.addEventListener("change",e=>{const o=e.target.checked?"dark":"light";$(o)})}function Y(){const t=B(),e=D();t!==null&&t!==e&&$(t)}function $(t){x(t),t==="auto"?K():J(t)}function x(t){let e,o;t==="auto"?(e="(prefers-color-scheme: light)",o="(prefers-color-scheme: dark)"):(e=t==="light"?"all":"not all",o=t==="dark"?"all":"not all"),P.forEach(l=>{l.media=e}),W.forEach(l=>{l.media=o})}function D(){return z.matches?"dark":"light"}function B(){return localStorage.getItem("color-scheme")}function J(t){localStorage.setItem("color-scheme",t)}function K(){localStorage.removeItem("color-scheme")}R();Y();const d=document.querySelector(".header-modal"),Q=document.querySelector(".modal-open-btn"),S=document.querySelector("body"),m=document.querySelector(".open-icon");console.dir(m.innerHTML);Q.addEventListener("click",F);function F(t){if(d.classList.contains("hidden-modal")){d.classList.remove("hidden-modal"),S.classList.add("stop-scrolling"),m.innerHTML='<use href="./img/sprit.svg#icon-x"/>';return}else d.classList.add("hidden-modal"),S.classList.remove("stop-scrolling"),m.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const U=document.querySelectorAll(".header-nav-link");console.log(location.pathname);const q=location.pathname;console.log(q);U.forEach(function(t){const e=t.getAttribute("href");console.log(e),`.${q}`===e&&t.classList.add("current")});const p=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const g=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(e){let o=w(h);o=o.filter(s=>s.id!==e),localStorage.setItem(h,JSON.stringify(o)),document.getElementById(""+e).remove(),o.length===0&&(p.style.display="none",g.style.display="block")};function V(t){return t.map(e=>`
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
      </li>`).join("")}const h="storage-data";function w(t){const e=localStorage.getItem(t);return e===null?[]:JSON.parse(e)}function G(){const t=w(h);t&&t.length>0?(g.style.display="none",p.innerHTML=V(t)):(p.style.display="none",g.style.display="block")}G();const X={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};X.addEventListener();const Z=document.querySelector(".nav-btn");Z.addEventListener("click",ee);function ee(){const t=document.querySelector(".fonds"),e=t.querySelector("li").offsetHeight,o=document.querySelector(".icon-down"),l=document.querySelector(".icon-up");if(t.scrollTop+t.clientHeight>=t.scrollHeight)for(;t.scrollTop!==0;)t.scrollTop-=e;else t.scrollTop+=2*e;t.scrollTop+t.clientHeight<t.scrollHeight?(o.classList.remove("is-hidden"),l.classList.add("is-hidden")):(o.classList.add("is-hidden"),l.classList.remove("is-hidden"))}const te=document.querySelector(".best-sellers-book-img"),E=document.getElementById(myModal);te.addEventListener("click",oe());function oe(){E.style.display="block"}const se=document.querySelector(".about-close");se.addEventListener("click",le());function le(){E.style.display="none"}
//# sourceMappingURL=main-ff115aed.js.map
