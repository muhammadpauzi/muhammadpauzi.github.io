// Navbar / mobile hamburger menu
const list = document.getElementById("list");
const hitam = document.getElementById("hitam");
const ham = document.getElementById("ham");

ham.addEventListener("click", function () {
  list.classList.toggle("muncul");
  hitam.classList.toggle("muncul");
  ham.classList.toggle("active");
});
hitam.addEventListener("click", function () {
  if (hitam.classList.contains("muncul")) {
    ham.classList.remove("active");
    list.classList.remove("muncul");
    this.classList.remove("muncul");
  }
});

// banner
const banneritem = document.querySelectorAll(".banner *");

window.addEventListener("load", function () {
  banneritem.forEach((element) => {
    element.style.opacity = "1";
    element.style.transform = "translateY(0)";
  });
});

// product
const product = document.querySelector(".product");
const cards = document.querySelectorAll(".product .card-container .card");
window.addEventListener("scroll", function () {
  if (scrollY > product.offsetTop - 100) {
    cards.forEach(function (card, i) {
      setTimeout(() => {
        card.classList.add("muncul");
      }, 100 * i + 1);
    });
  }
});

// icon star
const stars = product.querySelectorAll(
  ".card-container .card:nth-child(1) .card-content .price .star span"
);
stars.forEach((star, i) => {
  star.addEventListener("click", function () {
    switch (i) {
      case 0:
        star.children[0].attributes[0].value = "far fa-star";
        break;
      case 1:
        star.children[0].attributes[0].value = "far fa-star";
        break;
      case 2:
        star.children[0].attributes[0].value = "far fa-star";
        break;
      case 3:
        star.children[0].attributes[0].value = "far fa-star";
        break;
      case 4:
        star.children[0].attributes[0].value = "far fa-star";
    }
  });
});
