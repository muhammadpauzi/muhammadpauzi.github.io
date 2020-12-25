const check = document.querySelector(".dark-check");
const gambar = document.querySelector(".gambar");
const ul = document.querySelector("nav ul");
const img = document.querySelector("nav .ham");

// check.addEventListener("click", function () {
//     document.body.classList.toggle("dark");
//     if (check.checked == true) {
//         gambar.src = "img/Group3.png";
//     } else {
//         gambar.src = "img/Group2.png";
//     }
// });

img.addEventListener("click", function (e) {
    if (ul.className == "muncul") {
        img.src = "img/ham.png";
    } else {
        img.src = "img/close.png";
    }
    ul.classList.toggle("muncul");
});

document.body.addEventListener("click", function (e) {
    if (e.target == check) {
        document.body.classList.toggle("dark");
        if (check.checked == true) {
            gambar.src = "img/Group3.png";
        } else {
            gambar.src = "img/Group2.png";
        }
    }
});