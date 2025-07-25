  const imagen = document.getElementById("imagenEstrella");

  imagen.addEventListener("mouseenter", () => {
    imagen.src = "img/inicio-apertura.gif"; // imagen cuando pasás el mouse
  });

  imagen.addEventListener("mouseleave", () => {
    imagen.src = "img/estrella.gif"; // imagen original
  });


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

