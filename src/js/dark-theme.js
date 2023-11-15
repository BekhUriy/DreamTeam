// const root = document.querySelector(':root')
// const themeSwitch = document.querySelector('#themeSwitch');

// themeSwitch.addEventListener('change', changeTheme);

// function changeTheme() {
//     event.preventDefault();
//     root.classList.toggle('dark-theme', themeSwitch.checked);
// }

const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme: dark)');
const root = document.querySelector(':root')
const themeSwitch = document.querySelector('#themeSwitch');

function setupSwitcher() {
    const savedScheme = getSavedScheme();

    if (savedScheme !== null) {
        themeSwitch.checked = savedScheme === 'dark';
    }

    themeSwitch.addEventListener('change', (event) => {
        const newScheme = event.target.checked ? 'dark' : 'light';
        setScheme(newScheme);
    });
}

function setupScheme() {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if (savedScheme === null) return;

    if (savedScheme !== systemScheme) {
        setScheme(savedScheme);
    }
}

function setScheme(scheme) {
    switchMedia(scheme);

    if (scheme === 'auto') {
        clearScheme();
    } else {
        saveScheme(scheme);
    }
}

function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;

    if (scheme === 'auto') {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
    } else {
        lightMedia = (scheme === 'light') ? 'all' : 'not all';
        darkMedia = (scheme === 'dark') ? 'all' : 'not all';
    }

    lightStyles.forEach((link) => {
        link.media = lightMedia;
    });

    darkStyles.forEach((link) => {
        link.media = darkMedia;
    });
}

function getSystemScheme() {
    const darkScheme = darkSchemeMedia.matches;

    return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
    localStorage.setItem('color-scheme', scheme);
}

function clearScheme() {
    localStorage.removeItem('color-scheme');
}
themeSwitch.addEventListener('change', changeTheme);

setupSwitcher();
setupScheme();
function changeTheme() {
    // event.preventDefault();
    root.classList.toggle('dark-theme', themeSwitch.checked);
}