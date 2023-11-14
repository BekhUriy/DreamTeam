(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const v=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=light]"),L=document.querySelectorAll("link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]"),k=matchMedia("(prefers-color-scheme: dark)"),u=document.querySelector("#themeSwitch");function b(){const e=g();e!==null&&(u.checked=e==="dark"),u.addEventListener("change",t=>{const s=t.target.checked?"dark":"light";p(s)})}function q(){const e=g(),t=E();e!==null&&e!==t&&p(e)}function p(e){w(e),e==="auto"?$():M(e)}function w(e){let t,s;e==="auto"?(t="(prefers-color-scheme: light)",s="(prefers-color-scheme: dark)"):(t=e==="light"?"all":"not all",s=e==="dark"?"all":"not all"),v.forEach(l=>{l.media=t}),L.forEach(l=>{l.media=s})}function E(){return k.matches?"dark":"light"}function g(){return localStorage.getItem("color-scheme")}function M(e){localStorage.setItem("color-scheme",e)}function $(){localStorage.removeItem("color-scheme")}b();q();const i=document.querySelector(".header-modal"),B=document.querySelector(".modal-open-btn"),h=document.querySelector("body"),r=document.querySelector(".open-icon");console.dir(r.innerHTML);B.addEventListener("click",I);function I(e){if(i.classList.contains("hidden-modal")){i.classList.remove("hidden-modal"),h.classList.add("stop-scrolling"),r.innerHTML='<use href="./img/sprit.svg#icon-x"/>';return}else i.classList.add("hidden-modal"),h.classList.remove("stop-scrolling"),r.innerHTML='<use href="./img/sprit.svg#icon-burger"/>'}const T=document.querySelectorAll(".header-nav-link");console.log(location.pathname);const f=location.pathname;console.log(f);T.forEach(function(e){const t=e.getAttribute("href");console.log(t),`.${f}`===t&&e.classList.add("current")});const a=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const d=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(t){let s=y(m);s=s.filter(o=>o.id!==t),localStorage.setItem(m,JSON.stringify(s)),document.getElementById(""+t).remove(),s.length===0&&(a.style.display="none",d.style.display="block")};function H(e){return e.map(t=>`
  <li class="shopping-list-card" id="${t.id}">
        <div class="shopping-list-card-img">
          <img src="${t.book_image}" alt="${t.title}"/>
        </div>
        <div class="shopping-list-blok">
          <h2 class="shopping-list-book-title">"${t.title}"</h2>
          <p class="shopping-list-book-category">"${t.list_name}"</p>
          <p class="shopping-list-book-description">"${t.description}"</p>
          <p class="shopping-list-book-autor">"${t.author}"</p>
        </div>
        <ul class="shopping-list-shops">
          <li class="shopping-list-shop">
            <a
              href="${t.marketAmazon}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/amazon.png" class="amazon" alt="${t.marketAmazon}" />
            </a>
          </li>
          <li class="shopping-list-shop">
            <a
              href="${t.marketAppleBooks}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./img/appleBook.png" class="appleBook" alt="${t.marketAppleBooks}" />
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick = "deleteCardItem('${t.id}')"
          class="shopping-list-btn-delete"
        >
          <svg class="shopping-list-btn-delete-icon" width="18" height="18">
            <use href=./img/sprit.svg#icon-trash-03"></use>
          </svg>
        </button>
      </li>`).join("")}const m="storage-data";function y(e){const t=localStorage.getItem(e);return t===null?[]:JSON.parse(t)}function A(){const e=y(m);e&&e.length>0?(d.style.display="none",a.innerHTML=H(e)):(a.style.display="none",d.style.display="block")}A();const O={btn:document.querySelector(".scrollBtn"),show(){this.btn.classList.remove("scrollBtn-hide")},hide(){this.btn.classList.add("scrollBtn-hide")},addEventListener(){this.btn&&(window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>100?this.show():this.hide()}),this.btn.onclick=()=>{window.scrollTo({top:0,behavior:"smooth"})})}};O.addEventListener();const N=document.querySelector(".nav-btn");N.addEventListener("click",P);function P(){const e=document.querySelector(".fonds"),t=e.querySelector("li").offsetHeight,s=document.querySelector(".icon-down"),l=document.querySelector(".icon-up");if(e.scrollTop+e.clientHeight>=e.scrollHeight)for(;e.scrollTop!==0;)e.scrollTop-=t;else e.scrollTop+=2*t;e.scrollTop+e.clientHeight<e.scrollHeight?(s.classList.remove("is-hidden"),l.classList.add("is-hidden")):(s.classList.add("is-hidden"),l.classList.remove("is-hidden"))}const C=document.querySelector(".best-sellers-book-img"),S=document.getElementById(myModal);C.addEventListener("click",z());function z(){S.style.display="block"}const _=document.querySelector(".about-close");_.addEventListener("click",W());function W(){S.style.display="none"}
//# sourceMappingURL=modal-about-913dac3b.js.map
