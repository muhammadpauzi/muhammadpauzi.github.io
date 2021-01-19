// Navbar
const navbar = document.querySelector('.navbar');
// Link
const allLink = document.querySelectorAll('.navbar .navbar-nav a');
// Dijalankan pertama kali agar jika halaman direfresh class stickynya akan muncul
stickyNavbar();
// Event scroll
window.addEventListener('scroll', stickyNavbar);
// Berikan tiap link event click
for (const link of allLink) {
    link.addEventListener('click', clickHandler)
}

function stickyNavbar() {
    this.scrollY > 0 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop + 15;
    changeActiveClass(this);
    scroll({
        top: offsetTop,
        behavior: "smooth"
    })
}

function changeActiveClass(link) {
    for (const link of allLink) {
        link.parentElement.classList.remove('active');
    }
    link.parentElement.classList.add('active');
}

