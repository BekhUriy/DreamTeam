// Функція для відкриття модального вікна
const up = document.querySelector('.best-sellers-book-img')
const modal = document.getElementById(myModal)
up.addEventListener('click', openModal())
    function openModal() {
        modal.style.display = 'block';
    }

// Функція для закриття модального вікна
const down = document.querySelector('.about-close')
down.addEventListener('click', closeModal() )
    function closeModal() {
       modal.style.display = 'none';
    }