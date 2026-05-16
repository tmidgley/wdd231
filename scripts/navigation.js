const hamBtn = document.querySelector('#ham-btn');
const nav = document.querySelector('#nav');

hamBtn.addEventListener('click', () => {
    nav.classList.toggle('open');

    const isOpen = nav.classList.contains('open');
    hamBtn.setAttribute('aria-expanded', isOpen);
});