import { getCurrentYear } from './utils.js';

/* Footer Year */

const currentYear = document.querySelector('#currentYear');

if (currentYear) {
    currentYear.textContent = getCurrentYear();
}

/* Last Modified */

const footer = document.querySelector('footer');

if (footer) {
    const modified = document.createElement('p');
    modified.textContent = `Last Modified: ${document.lastModified}`;
    footer.appendChild(modified);
}

/* Navigation */

const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

if (menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');

    if (navMenu.classList.contains('open')) {
        menuButton.textContent = '✕';
        menuButton.setAttribute('aria-label', 'Close navigation menu');
    } else {
        menuButton.textContent = '☰';
        menuButton.setAttribute('aria-label', 'Open navigation menu');
    }
});
}