import"./assets/support-slider-2611f58d.js";const l=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const i=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(e){let s=a(n);s=s.filter(o=>o.id!==e),localStorage.setItem(n,JSON.stringify(s)),document.getElementById(""+e).remove(),s.length===0&&(l.style.display="none",i.style.display="block")};function p(t){return t.map(e=>`
  <li class="shopping-list-card" id="${e.id}">
       <div class="shopping-list-card-img">
          <img src="${e.book_image}" class="shopping-list-img" alt="${e.title}"/>
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
          <svg class="shopping-list-btn-delete-icon" width="16" height="16">
            <use href="../img/sprit.svg#icon-trash"></use>
          </svg>
        </button>
  </li>`).join("")}const n="storage-data";function a(t){const e=localStorage.getItem(t);return e===null?[]:JSON.parse(e)}function r(){const t=a(n);t&&t.length>0?(i.style.display="none",l.innerHTML=p(t)):(l.style.display="none",i.style.display="block")}r();
//# sourceMappingURL=commonHelpers2.js.map
