import"./assets/support-slider-ee0ae5e3.js";const l=document.querySelector(".shopping-list-cards");document.querySelector(".shopping-list-btn-delete");const i=document.querySelector(".shopping-list-storage");document.deleteCardItem=function(t){let s=o(a);s=s.filter(n=>n.id!==t),localStorage.setItem(a,JSON.stringify(s)),document.getElementById(""+t).remove(),s.length===0&&(l.style.display="none",i.style.display="block")};function p(e){return e.map(t=>`
  <li class="shopping-list-card" id="${t.id}">
       <div class="shopping-list-card-img">
          <img src="${t.book_image}" class="shopping-list-img" alt="${t.title}"/>
        </div>
        <div class="shopping-list-blok">
          <h2 class="shopping-list-book-title">"${t.title}"</h2>
          <p class="shopping-list-book-category">"${t.list_name}"</p>
          <p class="shopping-list-book-description">"${t.description}"</p>
          <p class="shopping-list-book-autor">"${t.author}"</p>
        </div>
        <ul class="shopping-list-shops">
          <li class="shop-modal-item">
              <a href="${marketAmazon}" target="_blank">
                 <img class="amazon" width="62" height="19" srcset="${amazonJpg} 1x,${amazonJpg2x} 2x"
                  src="${amazonJpg}"
                  alt="Amazon"/>
              </a>
            </li>
            <li class="shop-modal-item">
              <a href="${marketAppleBooks}" target="_blank">
                <img class="apple" width="33" height="32" srcset="${appleBookJpg} 1x,${appleBookJpg2x} 2x"
                  src="${appleBookJpg}"
                  alt="appleBookPng"/>
              </a>
            </li>
        </ul>
        <button
          type="button"
          onClick = "deleteCardItem('${t.id}')"
          class="shopping-list-btn-delete"
        >
          <svg class="shopping-list-btn-delete-icon" width="16" height="16">
            <use href="../img/sprit.svg#icon-trash"></use>
          </svg>
        </button>
  </li>`).join("")}const a="storage-data";function o(e){const t=localStorage.getItem(e);return t===null?[]:JSON.parse(t)}function c(){const e=o(a);e&&e.length>0?(i.style.display="none",l.innerHTML=p(e)):(l.style.display="none",i.style.display="block")}c();
//# sourceMappingURL=commonHelpers2.js.map
