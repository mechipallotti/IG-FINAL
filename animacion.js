const imagen = document.getElementById("imagenEstrella");
if (imagen) {
  imagen.addEventListener("mouseenter", () => {
    imagen.src = "img/inicio-apertura.gif";
  });
  imagen.addEventListener("mouseleave", () => {
    imagen.src = "img/estrella.gif";
  });
}
// Animacion de imagenes al hacer click 

document.addEventListener("DOMContentLoaded", function () {
  const imagenes = document.querySelectorAll(".animacion-img");

  imagenes.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.classList.add("hovered");
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("hovered");
    });
  });
});

const frasesPorCaja = [
  [
    "“And so it goes.”",
    "“If this isn't nice, I don't know what is.”",
    "“There's only one rule that I know of, babies—God damn it, you've got to be kind.”"
  ],
  [
    "“We are what we pretend to be, so we must be careful about what we pretend to be.”",
    "“The universe is a big place, perhaps the biggest.”",
    "“I want to stand as close to the edge as I can.”"
  ],
  [
    "“Everything was beautiful and nothing hurt.”",
    "“All this happened, more or less.”",
    "“So it goes.”"
  ],
  [
    "“I tell you, we are here on Earth to fart around, and don't let anybody tell you different.”",
    "“You were sick, but now you're well again, and there's work to do.”",
    "“Life happens too fast for you ever to think about it.”"
  ]
];

document.querySelectorAll(".frase-caja").forEach((caja, i) => {
  let index = 0;
  caja.addEventListener("click", () => {
    index = (index + 1) % frasesPorCaja[i].length;
    caja.innerHTML = frasesPorCaja[i][index];
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const imagenes = document.querySelectorAll(".imagen-ilustracion");

  const mostrarImagen = (entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observer.unobserve(entrada.target);
    }
  };

  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach(mostrarImagen);
  }, {
    threshold: 0.1
  });

  imagenes.forEach((img) => {
    observer.observe(img);
  });
});
