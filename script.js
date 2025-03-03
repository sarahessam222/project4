const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const header = document.querySelector('.header');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
});