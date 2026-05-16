const hamBtn = document.querySelector('#ham-btn');
const nav = document.querySelector('#navMenu');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    hamBtn.setAttribute('aria-expanded', isOpen);
});