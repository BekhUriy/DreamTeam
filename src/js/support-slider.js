

const donate = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'save',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'hope',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'imc',
    },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'razom',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'aahunger',
    },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'prytula',
    },
      {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'medsfront',
    },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'worldvision',
  },
  
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'united',
  },
]



const supportListEl = document.querySelector('.support-list');

function supportListCreateMarkup(donate) {
    return donate.map(({ title, url, img, img2x }, index) => `
        <li class="support-item">
            <span class='support-item-num'>0${index + 1}</span>
            <a class="support-link" target='blank' href="${url}">
                <img
                    class="support-img"
                    src="${img}"
                    srcset="${img} 1x, ${img2x} 2x"
                    alt="${title}"
                />
            </a>
        </li>`).join('');
}

supportListEl.innerHTML = supportListCreateMarkup(donate);

const supportSlideEl = document.querySelector('.support-slide');
const supportSlideDownBtnEl = document.querySelector('.support-slide-down-btn');
const supportSlideUpBtnEl = document.querySelector('.support-slide-up-btn');

supportSlideEl.addEventListener('click', slideTo);

function slideTo() {
    if (supportSlideEl.classList.contains('top')) {
        supportSlideEl.classList.remove('top');
        supportSlideUpBtnEl.style.display = 'none';
        supportSlideDownBtnEl.style.display = 'block';
        slideToTop();
    } else {
        slideToBottom();
        supportSlideEl.classList.add('top');
        supportSlideDownBtnEl.style.display = 'none';
        supportSlideUpBtnEl.style.display = 'block';
    }
}

function slideToTop() {
    supportListEl.scrollTop = 0;
}

function slideToBottom() {
    supportListEl.scrollTop = supportListEl.scrollHeight;
}