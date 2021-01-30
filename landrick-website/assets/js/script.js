const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function () {
    if (scrollY > 0) {
        navbar.classList.add('stiky');
    } else {
        navbar.classList.remove('stiky');
    }
});

const hamMenu = document.querySelector('.navbar .ham-menu-navbar');
const navGroupItem = document.querySelector('.nav-group-item');

hamMenu.addEventListener('click', () => {
    navGroupItem.classList.toggle('active');
})