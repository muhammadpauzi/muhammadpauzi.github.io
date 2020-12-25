window.addEventListener("load", function () {
  const logo = document.querySelector("nav .logo");
  const ul = document.querySelector("nav ul");
  const judul = document.querySelector("section h1");
  const parag = document.querySelector("section p");
  const link = document.querySelector("section a");
  const footer = document.querySelector("footer");
  logo.classList.add("logo-muncul");
  ul.classList.add("ul-muncul");
  judul.classList.add("judul-muncul");
  parag.classList.add("parag-muncul");
  link.classList.add("link-muncul");
  footer.classList.add("footer-muncul");
});


const nav = document.querySelector("nav");
const ul = document.querySelector("nav ul");
const ham = document.querySelector("nav .ham");

ham.addEventListener("click", function () {
  ul.classList.toggle("navmuncul");
});
