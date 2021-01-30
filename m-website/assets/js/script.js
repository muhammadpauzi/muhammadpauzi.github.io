const hamMenu = document.querySelector('.ham-menu');

hamMenu.addEventListener('click', function () {
    this.previousElementSibling.classList.toggle('active');
});