var X=(t,e,o)=>{if(!e.has(t))throw TypeError("Cannot "+o)};var a=(t,e,o)=>(X(t,e,"read from private field"),o?o.call(t):e.get(t)),S=(t,e,o)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,o)};import{a as c}from"./assets/vendor-1c5e86dd.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const M=document.querySelector(".about-book-modal"),Q=document.querySelector("#modal-close");document.querySelector(".fire-base-backdrop");const u=document.querySelector(".js-backdrop-modal");function R(t){t.preventDefault();const e=this.getAttribute("data-book-id");M.classList.remove("is-hidden"),u.classList.remove("is-hidden"),console.log(e),V(e)}function f(){M.classList.add("is-hidden"),u.classList.add("is-hidden")}Q.addEventListener("click",f);document.addEventListener("keydown",function(t){t.key==="Escape"&&f()});u.addEventListener("click",function(t){t.target===u&&f()});const j="data:image/png;base64,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",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOASURBVHgB7VdLaBRBEH3Vm91V/KwK/mIOcQ/GXPwgQQ8qSLz4QUWEXMSLIHjLxd/FY0CCSrxoQJEc1VMgIDkYEURCVEyCEA8aI35WQ0STYEyyO132zOzOdk9mZicQbykYZrrnddXrV101u8CiuUZRL7kjvcWShb0EWiuAlORovG6CwFIiz+BviaT1ks5gCPMhwfdQx0g+UI/bsXA2TLP5RjqPEVQiwe3YyiLZC6JMcQbBXMPmI3F5Im6gs/kBHVE1ZwmlHqt1GWdtMM8K85G4pMroQ2ZsJSpHEDqicCd1kiXVqguQdlLNe+mZfe/C5kLwW6z29CE9rkGCmA4oKWw5wAH30rMfEzYXjhdH9LhGOhTLLAXJXLUCyB4FVS1TAws8PgJ8eaJYCxO3aT9oRRZIpMBTOWD0FfAnh4AMVYeSEExpZh++4TJoRzOQXqn5UPbjNWT3aWDiE7C8BnTwLqhmv4mZGQf3XQMPtqkd6o5puRFXH0hLjbX8U+1x0O6rBgHP1u9Sge8rnHJyrNMg4Fk6A9rXAsqegu5XMItQJcA+eZfVIMqoeg84Uw+sqY/EYcl69yyUTJopN0lYtmcqVzbHKMPV2ypj2Dlvjk92Q4ST8E5vEWxLXZEGVVVCuH5luTFIcDgJVyYydhArQEUQzBREKQFL2M2iiOJ46YhBdA6JSCXsd17gmG05Nglt7OsvPiXILdqS41hKxMSUlCAfIQQowZpsJFHZ4mBYOzts84goURtIPL+DGY8EGWfC7zbgYPoWl2z6N3hs2Cly2rQzGFPIg39+UNhx0Lo6YOmqIlGa06BCSSgV2KBpy/h1ALLrCjj3RjkquJNLVkHsPgfReNHbluy5Ae69Df77y+tGNllx4tb8qoMltL6m1r3tBPo6ysFd18DUOOTTVvWYcKZldwvk85tFCHl3/twPq22vUiRjpI2jzoRSYtILZDuaHNPfwm+yRxGp3Qfuf6Q+3wkEm0rx9GTZJzmbnQklYUnKGRVc8WAqwPtnTuu2K0nTylhq9z+vBTrVgY8+mmVLsOjSP7mxLvvLG/ATEAFj7w7u0eOSb1+Uv7BhSD3U4X8ZYSTV+n0zwpRwsmbJJiVZwW3hC3xJTDDR4bm8AowvbajNz8L+EZnFghkPsqCm9PXcO8Qh4S1r3lhvCdHALKvViUrO52+gXaEq/3kSNMoJfhEUfNH89g83+MD9ZjdiQAAAAABJRU5ErkJggg==",w=document.querySelector("#allModal"),d=document.querySelector(".add-storage-button"),g=document.querySelector(".remove-modal-btn"),K=document.querySelector(".storage-description"),p="storage-data";d.addEventListener("click",U);g.addEventListener("click",Y);async function V(t){w.innerHTML="";try{const e=await J(t);return k(),O(e),e}catch(e){throw console.error("Error",e),e}}async function J(t){try{m={};const o=await(await fetch(`https://books-backend.p.goit.global/books/${t}`)).json();return m={book_image:o.book_image,title:o.title,author:o.author,marketAmazon:o.buy_links[0].url,marketAppleBooks:o.buy_links[1].url,marketBookshop:o.buy_links[4].url,list_name:o.list_name,id:o._id},o}catch(e){throw console.error("Error",e),e}}function k(){const t=JSON.parse(localStorage.getItem(p)),e=m.id;if(!t||t.length===0){d.style.display="block",g.style.display="none";return}else t.find(r=>r.id===e)?(d.style.display="none",g.style.display="block"):(d.style.display="block",g.style.display="none")}function O(t){const e=t.book_image,o=t.title,r=t.author,s=t.buy_links[0].url,n=t.buy_links[1].url,i=t.description,q=` <div class="modal" id="bookModal">
        <img src="${e}" alt="Book Cover" class="image-about-book-modal">
        <div class="modal-text">
        <h2 id="modalTitle" class="title-about-book-modal">${o}</h2>
        <p class="author-about-book-modal"> ${r}</p>
        <p class="text-about-book-modal">${i}</p>
        <div id="platformLinks">
        <ul class="shop-modal-list">
        <li class="shop-modal-item">
          <a href="${s}" target="_blank">
          <img width="62" height="19" src="${j}"alt="Amazon"/>
          </a>
        </li>
        <li class="shop-modal-item"><a href="${n}" target="_blank">
        <img width="33" height="32" src="${H}" alt="AppleBooks"/>
        </a>
        </li>
        </ul>
        </div>
        </div>`;w.innerHTML=q}let L=[],m={};function U(){const t=m;!realStorageArr||realStorageArr.length===0?(L.push(t),localStorage.setItem(p,JSON.stringify(L))):(realStorageArr.push(t),localStorage.setItem(p,JSON.stringify(realStorageArr))),K.textContent="Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.",k()}function Y(){localStorage.removeItem(localStorage.getItem(p)),k()}var l;class I{constructor(e,o){S(this,l,"https://books-backend.p.goit.global/");this.selectedCategory=e,this.bookId=o}fetchBooksCategoryList(){return c.get(`${a(this,l)}books/category-list`)}fetchBestSellersBooks(){return c.get(`${a(this,l)}books/top-books`)}fetchBooksByCategory(e){return c.get(`${a(this,l)}books/category?category=${e}`)}fetchBookById(e){return c.get(`${a(this,l)}books/${e}`)}}l=new WeakMap;const v=document.querySelector(".best-sellers-books"),Z=new I;F();async function F(){return await Z.fetchBestSellersBooks().then(e=>e.data.map(o=>{const r=o.books.map(s=>`<li class="best-sellers-book js-open-modal" data-book-id="${s._id}">
             <img class="best-sellers-book-img" src="${s.book_image}" alt="${s.title}" />
             <p class="best-sellers-book-title">${s.title}</p>
             <p class="best-sellers-book-author">${s.author}</p>
             <p class="book-overlay">Quick view</p>
</li>`).join("");v.insertAdjacentHTML("beforeend",`<li class="best-seller-category"> 
                <p class="category-title"> ${o.list_name} </p> 
                <ul class="best-sellers-list-in-category">
                ${r} 
                </ul> 
                <button type="button" class="best-sellers-see-more-button" data-button-category-name="${o.list_name}">See more</button>
                    </li>`)}).join("")).then(()=>{document.querySelectorAll(".js-open-modal").forEach(function(o){o.addEventListener("click",R)})}).catch(e=>{console.log(e.message),v.innerHTML="No information"})}const N=document.querySelector(".category");function G(t){t.sort((o,r)=>o.list_name.localeCompare(r.list_name));const e=t.map(o=>{const{list_name:r}=o;return`<li><a class='genre' href="#" target="_self">${r}</a></li>`}).join("");N.insertAdjacentHTML("beforeend",e)}function P(){new I().fetchBooksCategoryList().then(e=>{const o=e.data;console.log(o),G(o)}).catch(e=>{console.error(e)})}P();document.querySelector(".best-sellers-books");document.querySelector(".home-page-title");const D=document.querySelector(":root"),C=document.querySelector("#themeSwitch");C.addEventListener("change",z);function z(){event.preventDefault(),D.classList.toggle("dark-theme",C.checked)}const h=document.querySelector(".header-modal"),x=document.querySelector(".modal-open-btn"),B=document.querySelector("body"),E=document.querySelector(".open-icon");x.addEventListener("click",W);function W(t){if(h.classList.contains("hidden-modal")){h.classList.remove("hidden-modal"),B.classList.add("stop-scrolling"),E.innerHTML='<use href="./img/sprit.svg#icon-x"/>';return}else h.classList.add("hidden-modal"),B.classList.remove("stop-scrolling"),E.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const $=document.querySelector(".js-home-link"),_=document.querySelector(".js-home-link"),ee=location.pathname;ee==="/project-DreamTeam09/home.html"?$.classList.add("active"):_.classList.add("current");const A=document.querySelector(".shopping-cards");document.querySelector(".shopping-btn-delete");const b=document.querySelector(".shopping-storage");document.deleteCardItem=function(e){let o=T(y);o=o.filter(s=>s.id!==e),localStorage.setItem(y,JSON.stringify(o)),document.getElementById(""+e).remove(),o.length===0&&(A.style.display="none",b.style.display="block")};function te(t){return t.map(e=>`
  <li class="shopping-card" id="${e.id}">
        <div class="shopping-card-img">
          <img src="${e.book_image}" alt="${e.title}"/>
        </div>
        <div class="shopping-blok">
          <h2 class="shopping-book-title">"${e.title}"</h2>
          <p class="shopping-book-category">"${e.list_name}"</p>
          <p class="shopping-book-description">"${e.description}"</p>
          <p class="shopping-book-autor">"${e.author}"</p>
        </div>
        <ul class="shopping-shops">
          <li class="shopping-shop">
            <a
              href="${e.marketAmazon}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Amazon-book site"
            >
              <img src="./img/amazon.png" class="shopping-shop-amazon" alt="${e.marketAmazon}" />
            </a>
          </li>
          <li class="shopping-shop">
            <a
              href="${e.marketAppleBooks}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apple-book site"
            >
              <img src="./img/appleBook.png" class="shopping-shop-appleBook" alt="${e.marketAppleBooks}" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick = "deleteCardItem('${e.id}')"
          class="shopping-btn-delete"
          aria-label="Delete the book from shopping list"
        >
          <svg class="shopping-btn-delete-icon" width="18" height="18">
            <use href=./img/sprit.svg#icon-trash-03"></use>
          </svg>
        </button>
      </li>`).join("")}const y="storage-data",T=t=>{try{const e=localStorage.getItem(t);return e===null?[]:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}};function oe(){const t=T(y);t&&t.length>0?(b.style.display="none",A.innerHTML=te(t)):(A.style.display="none",b.style.display="block")}oe();const se={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};se.addEventListener();const re=document.querySelector(".nav-btn");re.addEventListener("click",ne);function ne(){const t=document.querySelector(".fonds"),e=t.querySelector("li").offsetHeight,o=document.querySelector(".icon-down"),r=document.querySelector(".icon-up");if(t.scrollTop+t.clientHeight>=t.scrollHeight)for(;t.scrollTop!==0;)t.scrollTop-=e;else t.scrollTop+=2*e;t.scrollTop+t.clientHeight<t.scrollHeight?(o.classList.remove("is-hidden"),r.classList.add("is-hidden")):(o.classList.add("is-hidden"),r.classList.remove("is-hidden"))}
//# sourceMappingURL=commonHelpers.js.map
