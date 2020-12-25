const hamMenu = document.querySelector('nav .ham-menu');
const menuList = document.querySelector('nav .menu-list');
const navbar = document.querySelector('nav');
const banner = document.querySelector('.banner');

hamMenu.addEventListener('click', () => {
    menuList.classList.toggle('active');
});


// Animated for navbar
window.addEventListener('scroll', () => {
    if (scrollY > navbar.clientHeight) {
        navbar.classList.add('active');
        banner.classList.add('active');
    } else {
        navbar.classList.remove('active');
        banner.classList.remove('active');
    }
});