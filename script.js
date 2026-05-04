// SOMBRA AL HACER SCROLL
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    } else {
        header.style.boxShadow = "none";
    }
});

// BOTONES PRINCIPALES
const botones = document.querySelectorAll(".card button");

botones[0].onclick = () => window.location.href = "planes.html";
botones[1].onclick = () => window.location.href = "guiones.html";
botones[2].onclick = () => window.location.href = "diplomas.html";

// BOTÓN PORTAFOLIO DOCENTE (ABRIR EN MISMA PESTAÑA)
const btnPortafolio = document.querySelector(".hero button");

btnPortafolio.onclick = () => {
    window.location.href = "Portafolio docente.pdf";
};

// ABRIR DOCUMENTOS
function abrirDoc(ruta, tipo) {
    window.location.href = ruta;
}


// GALERÍA DE IMÁGENES
const imagenes = document.querySelectorAll('.galeria img');
const visor = document.getElementById('visor');
const imgGrande = document.getElementById('imgGrande');
const cerrar = document.querySelector('.cerrar');

imagenes.forEach(img => {
  img.addEventListener('click', () => {
    visor.style.display = 'flex';
    imgGrande.src = img.src;
  });
});

cerrar.addEventListener('click', () => {
  visor.style.display = 'none';
});

/* cerrar al hacer clic fuera */
visor.addEventListener('click', (e) => {
  if(e.target === visor){
    visor.style.display = 'none';
  }
});