let darkMode = localStorage.getItem('darkMode');
const darkModeToogle = document.querySelector('#themeSwitch')


function enableDarkMode () {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled')
}

function disableDarkMode  () {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enadled') {
    enableDarkMode()
}

darkModeToogle.addEventListener('change', () => {

    darkMode=localStorage.getItem('darkMode')
if (darkMode!=='enabled') {
    enableDarkMode()
    // console.log(darkMode);
} else {
    disableDarkMode()
    // console.log(darkMode);
}
})