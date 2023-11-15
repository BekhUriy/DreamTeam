
const root = document.querySelector(':root')
const themeSwitch = document.querySelector('#themeSwitch');

themeSwitch.addEventListener('change', changeTheme);


function changeTheme() {
    // event.preventDefault();
    root.classList.toggle('dark-theme', themeSwitch.checked);
}