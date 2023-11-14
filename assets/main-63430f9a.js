var X=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var i=(t,e,o)=>(X(t,e,"read from private field"),o?o.call(t):e.get(t)),v=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)};import{a as c}from"./vendor-1c5e86dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const C=document.querySelector(".about-book-modal"),Q=document.querySelector("#modal-close");document.querySelector(".fire-base-backdrop");const p=document.querySelector(".js-backdrop-modal");function R(t){t.preventDefault();const e=this.getAttribute("data-book-id");C.classList.remove("is-hidden"),p.classList.remove("is-hidden"),console.log(e),J(e)}function L(){C.classList.add("is-hidden"),p.classList.add("is-hidden")}Q.addEventListener("click",L);document.addEventListener("keydown",function(t){t.key==="Escape"&&L()});p.addEventListener("click",function(t){t.target===p&&L()});const O="data:image/png;base64,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",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",I=document.querySelector("#allModal"),d=document.querySelector(".add-storage-button"),g=document.querySelector(".remove-modal-btn"),V=document.querySelector(".storage-description"),u="storage-data";d.addEventListener("click",Z);g.addEventListener("click",F);async function J(t){I.innerHTML="";try{const e=await U(t);return S(),Y(e),e}catch(e){throw console.error("Error",e),e}}async function U(t){try{m={};const o=await(await fetch(`https://books-backend.p.goit.global/books/${t}`)).json();return m={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id},o}catch(e){throw console.error("Error",e),e}}function S(){const t=JSON.parse(localStorage.getItem(u)),e=m.id;if(!t||t.length===0){d.style.display="block",g.style.display="none";return}else t.find(n=>n.id===e)?(d.style.display="none",g.style.display="block"):(d.style.display="block",g.style.display="none")}function Y(t){const e=t.book_image,o=t.title,n=t.author,s=t.buy_links[0].url,l=t.buy_links[1].url,a=t.description,j=` <div class="modal" id="bookModal">
        <img src="${e}" alt="Book Cover" class="image-about-book-modal">
        <div class="modal-text">
        <h2 id="modalTitle" class="title-about-book-modal">${o}</h2>
        <p class="author-about-book-modal"> ${n}</p>
        <p class="text-about-book-modal">${a}</p>
        <div id="platformLinks">
        <ul class="shop-modal-list">
        <li class="shop-modal-item">
          <a href="${s}" target="_blank">
          <img width="62" height="19" src="${O}"alt="Amazon"/>
          </a>
        </li>
        <li class="shop-modal-item"><a href="${l}" target="_blank">
        <img width="33" height="32" src="${K}" alt="AppleBooks"/>
        </a>
        </li>
        </ul>
        </div>
        </div>`;I.innerHTML=j}let E=[],m={};function Z(){const t=m;!realStorageArr||realStorageArr.length===0?(E.push(t),localStorage.setItem(u,JSON.stringify(E))):(realStorageArr.push(t),localStorage.setItem(u,JSON.stringify(realStorageArr))),V.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",S()}function F(){localStorage.removeItem(localStorage.getItem(u)),S()}var r;class B{constructor(e,o){v(this,r,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=o}fetchBooksCategoryList(){return c.get(`${i(this,r)}books/category-list`)}fetchBestSellersBooks(){return c.get(`${i(this,r)}books/top-books`)}fetchBooksByCategory(e){return c.get(`${i(this,r)}books/category?category=${e}`)}fetchBookById(e){return c.get(`${i(this,r)}books/${e}`)}}r=new WeakMap;const M=document.querySelector(".best-sellers-books"),N=new B;T();async function T(){return await N.fetchBestSellersBooks().then(e=>e.data.map(o=>{const n=o.books.map(s=>`<li class="best-sellers-book js-open-modal" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");M.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${o.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${n} 
                </ul> 
                <button type="button" class="best-sellers-see-more-button" data-button-category-name="${o.list_name}">See more</button>
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(o){o.addEventListener("click",R)})}).catch(e=>{console.log(e.message),M.innerHTML="No information"})}const P=new B,A=document.querySelector(".best-sellers-books"),G=document.querySelector(".home-page-title");function D(t){const e=t.split(" "),o=e.pop(),s=`${e.join(" ")} <span class="home-page-title-accent">${o}</span>`;return t==="All categories"?`
    Best Sellers <span class="home-page-title-accent">Books</span>`:s}function x(t){t.preventDefault(),t.target.dataset.categoryName==="All categories"&&T();const e=this.getAttribute("data-category-name");G.innerHTML=D(e),A.innerHTML="",z(e)}async function z(t){await P.fetchBooksByCategory(t).then(e=>{const o=e.data.map(n=>`<li class="category-book js-open-modal" data-book-id="${n._id}">
             <img class="best-sellers-book-img" src="${n.book_image}" alt="${n.title}" />
             <p class="best-sellers-book-title">${n.title}</p>
             <p class="best-sellers-book-author">${n.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");A.classList.replace("best-sellers-books","category-books"),A.innerHTML=o})}const W=document.querySelector(".category");function $(t){t.sort((o,n)=>o.list_name.localeCompare(n.list_name));const e=t.map(o=>{const{list_name:n}=o;return`<li><a class='genre' href="#" target="_self" data-category-name="${n}">${n}</a></li>`}).join("");W.insertAdjacentHTML("beforeend",e)}function _(){new B().fetchBooksCategoryList().then(e=>{const o=e.data;$(o)}).then(()=>{document.querySelectorAll(".genre").forEach(function(o){o.addEventListener("click",x)})}).catch(e=>{console.error(e)})}_();const ee=document.querySelector(":root"),q=document.querySelector("#themeSwitch");q.addEventListener("change",te);function te(){event.preventDefault(),ee.classList.toggle("dark-theme",q.checked)}const h=document.querySelector(".header-modal"),oe=document.querySelector(".modal-open-btn"),w=document.querySelector("body"),y=document.querySelector(".open-icon");console.dir(y.innerHTML);oe.addEventListener("click",se);function se(t){if(h.classList.contains("hidden-modal")){h.classList.remove("hidden-modal"),w.classList.add("stop-scrolling"),y.innerHTML='<use href="./img/sprit.svg#icon-x"/>';return}else h.classList.add("hidden-modal"),w.classList.remove("stop-scrolling"),y.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const ne=document.querySelector(".js-home-link"),le=document.querySelector(".js-shopping-link"),re=location.pathname;re==="/project-DreamTeam/shoping-list.html"?le.classList.add("current"):ne.classList.add("current");const b=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const f=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(e){let o=H(k);o=o.filter(s=>s.id!==e),localStorage.setItem(k,JSON.stringify(o)),document.getElementById(""+e).remove(),o.length===0&&(b.style.display="none",f.style.display="block")};function ae(t){return t.map(e=>`
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
      </li>`).join("")}const k="storage-data";function H(t){const e=localStorage.getItem(t);e===null||JSON.parse(e)}function ie(){const t=H(k);t&&t.length>0?(f.style.display="none",b.innerHTML=ae(t)):(b.style.display="none",f.style.display="block")}ie();const ce={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};ce.addEventListener();const de=document.querySelector(".nav-btn");de.addEventListener("click",ge);function ge(){const t=document.querySelector(".fonds"),e=t.querySelector("li").offsetHeight,o=document.querySelector(".icon-down"),n=document.querySelector(".icon-up");if(t.scrollTop+t.clientHeight>=t.scrollHeight)for(;t.scrollTop!==0;)t.scrollTop-=e;else t.scrollTop+=2*e;t.scrollTop+t.clientHeight<t.scrollHeight?(o.classList.remove("is-hidden"),n.classList.add("is-hidden")):(o.classList.add("is-hidden"),n.classList.remove("is-hidden"))}
//# sourceMappingURL=main-63430f9a.js.map
