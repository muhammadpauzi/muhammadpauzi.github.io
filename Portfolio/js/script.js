const hamMenu = document.querySelector('.ham-menu');
const navList = document.querySelector('.nav-lists');

hamMenu.addEventListener('click', function () {
    navList.classList.toggle('active');
});



// Link
const allLink = document.querySelectorAll('nav a');
// Dijalankan pertama kali agar jika halaman direfresh class stickynya akan muncul

// Berikan tiap link event click
for (const link of allLink) {
    link.addEventListener('click', clickHandler)
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - 20;
    changeActiveClass(this);
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

function changeActiveClass(link) {
    for (const link of allLink) {
        link.parentElement.classList.remove('active');
    }
    link.parentElement.classList.add('active');
}

