var w=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var c=(t,e,o)=>(w(t,e,"read from private field"),o?o.call(t):e.get(t)),y=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)};import{a as i}from"./vendor-1c5e86dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();var n;class f{constructor(e,o){y(this,n,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=o}fetchBooksCategoryList(){return i.get(`${c(this,n)}books/category-list`)}fetchBestSellersBooks(){return i.get(`${c(this,n)}books/top-books`)}fetchBooksByCategory(e){return i.get(`${c(this,n)}books/category?category=${e}`)}fetchBookById(e){return i.get(`${c(this,n)}books/${e}`)}}n=new WeakMap;function E(t){const e=document.querySelector(".category"),o=t.target;e.querySelectorAll("a").forEach(s=>{s.classList.remove("active")}),o.classList.add("active")}const M=new f,u=document.querySelector(".best-sellers-books"),A=document.querySelector(".home-page-title");function C(t){const e=t.split(" "),o=e.pop(),s=`${e.join(" ")} <span class="home-page-title-accent">${o}</span>`;return t==="All categories"?`
    Best Sellers <span class="home-page-title-accent">Books</span>`:s}function L(t){t.preventDefault(),t.target.dataset.categoryName==="All categories"&&v();const e=this.getAttribute("data-category-name");E(t),A.innerHTML=C(e),u.innerHTML="",T(e)}async function T(t){await M.fetchBooksByCategory(t).then(e=>{const o=e.data.map(l=>`<li class="category-book js-open-modal" data-book-id="${l._id}">
             <img class="best-sellers-book-img" src="${l.book_image}" alt="${l.title}" />
             <p class="best-sellers-book-title">${l.title}</p>
             <p class="best-sellers-book-author">${l.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");u.classList.replace("best-sellers-books","category-books"),u.innerHTML=o}).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(o){o.addEventListener("click",openModalId)})})}const k=document.querySelector(".best-sellers-books"),I=new f;v();async function v(){return await I.fetchBestSellersBooks().then(e=>e.data.map(o=>{const l=o.books.map(s=>`<li class="best-sellers-book js-open-modal" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
             <p class="book-overlay">Quick view</p>

            </li>`).join("");k.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${o.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${l} 
                </ul> 

                <button type="button" class="best-sellers-see-more-button" data-category-name="${o.list_name}">See more</button>
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".best-sellers-see-more-button").forEach(function(o){o.addEventListener("click",L)})}).catch(e=>{console.log(e.message),k.innerHTML="No information"})}const H=document.querySelector(".category");function _(t){t.sort((o,l)=>o.list_name.localeCompare(l.list_name));const e=t.map(o=>{const{list_name:l}=o;return`<li><a class='genre' href="#" target="_self" data-category-name="${l}">${l}</a></li>`}).join("");H.insertAdjacentHTML("beforeend",e)}function j(){new f().fetchBooksCategoryList().then(e=>{const o=e.data;_(o)}).then(()=>{document.querySelectorAll(".genre").forEach(function(o){o.addEventListener("click",L)})}).catch(e=>{console.error(e)})}j();const O=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),N=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),P=matchMedia("(prefers-color-scheme: dark)"),b=document.querySelector("#themeSwitch");function W(){const t=B();t!==null&&(b.checked=t==="dark"),b.addEventListener("change",e=>{const o=e.target.checked?"dark":"light";$(o)})}function z(){const t=B(),e=R();t!==null&&t!==e&&$(t)}function $(t){D(t),t==="auto"?x():Y(t)}function D(t){let e,o;t==="auto"?(e="(prefers-color-scheme: light)",o="(prefers-color-scheme: dark)"):(e=t==="light"?"all":"not all",o=t==="dark"?"all":"not all"),O.forEach(l=>{l.media=e}),N.forEach(l=>{l.media=o})}function R(){return P.matches?"dark":"light"}function B(){return localStorage.getItem("color-scheme")}function Y(t){localStorage.setItem("color-scheme",t)}function x(){localStorage.removeItem("color-scheme")}W();z();const d=document.querySelector(".header-modal"),J=document.querySelector(".modal-open-btn"),S=document.querySelector("body"),p=document.querySelector(".open-icon");console.dir(p.innerHTML);J.addEventListener("click",K);function K(t){if(d.classList.contains("hidden-modal")){d.classList.remove("hidden-modal"),S.classList.add("stop-scrolling"),p.innerHTML='<use href="./img/sprit.svg#icon-x"/>';return}else d.classList.add("hidden-modal"),S.classList.remove("stop-scrolling"),p.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const Q=document.querySelector(".js-home-link"),F=document.querySelector(".js-shopping-link"),U=location.pathname;U==="/project-DreamTeam/shoping-list.html"?F.classList.add("current"):Q.classList.add("current");const m=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const h=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(e){let o=q(g);o=o.filter(s=>s.id!==e),localStorage.setItem(g,JSON.stringify(o)),document.getElementById(""+e).remove(),o.length===0&&(m.style.display="none",h.style.display="block")};function V(t){return t.map(e=>`
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
      </li>`).join("")}const g="storage-data";function q(t){const e=localStorage.getItem(t);return e===null?[]:JSON.parse(e)}function G(){const t=q(g);t&&t.length>0?(h.style.display="none",m.innerHTML=V(t)):(m.style.display="none",h.style.display="block")}G();const X={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};X.addEventListener();const Z=document.querySelector(".nav-btn");Z.addEventListener("click",ee);function ee(){const t=document.querySelector(".fonds"),e=t.querySelector("li").offsetHeight,o=document.querySelector(".icon-down"),l=document.querySelector(".icon-up");if(t.scrollTop+t.clientHeight>=t.scrollHeight)for(;t.scrollTop!==0;)t.scrollTop-=e;else t.scrollTop+=2*e;t.scrollTop+t.clientHeight<t.scrollHeight?(o.classList.remove("is-hidden"),l.classList.add("is-hidden")):(o.classList.add("is-hidden"),l.classList.remove("is-hidden"))}
//# sourceMappingURL=main-7eebe0eb.js.map
