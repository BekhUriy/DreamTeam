const navBTN = document.querySelector('.nav-btn');

navBTN.addEventListener('click', scrollDown);

function scrollDown() {
    const fondsList = document.querySelector('.fonds');
    const liHeight = fondsList.querySelector('li').offsetHeight;
    const down = document.querySelector('.icon-down');
    const up = document.querySelector('.icon-up');

      
        if (fondsList.scrollTop + fondsList.clientHeight >= fondsList.scrollHeight) {
          
             
            while (fondsList.scrollTop !== 0) {
                
                fondsList.scrollTop -= liHeight;

            }
            
        } else {
            
         
            fondsList.scrollTop += 2*liHeight;
        }
    
    if (fondsList.scrollTop + fondsList.clientHeight < fondsList.scrollHeight) {
        down.classList.remove('is-hidden');
        up.classList.add('is-hidden');
    }
    else {
        down.classList.add('is-hidden');
        up.classList.remove('is-hidden');
    }
}

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

function fondMarkup(donate) {
    const markup = donate.map((el, index) => {
        const { title, url, img } = el;
        const orderNumber = ('0' + (index + 1)).slice(-2);
        return `<li class="fonds-elm">
                <a class="fonds-link" href="${url}" target="_blank" rel="noopener noreferrer">
                    <div class="num-order">${orderNumber}</div>
                <img src="./img/support-ua/${img}.png" alt="${title}" srcset="./img/support-ua/${img}.png 1x, ./img/support-ua/${img}@2x.png 2x">
            </a></li>`
    }).join('');
    const fonds = document.querySelector('.fonds');
    fonds.insertAdjacentHTML('beforeend', markup)
}

fondMarkup(donate)