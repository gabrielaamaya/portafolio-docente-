// SOMBRA AL HACER SCROLL
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});


// BOTONES EXPLORAR
const botones = document.querySelectorAll(".card button");

botones[0].addEventListener("click", function () {
    window.location.href = "planes.html";
});

botones[1].addEventListener("click", function () {
    window.location.href = "guiones.html";
});

botones[2].addEventListener("click", function () {
    window.location.href = "diplomas.html";
});