  const imagen = document.getElementById("imagenEstrella");

  imagen.addEventListener("mouseenter", () => {
    imagen.src = "img/inicio-apertura.gif"; // imagen cuando pasás el mouse
  });

  imagen.addEventListener("mouseleave", () => {
    imagen.src = "img/estrella.gif"; // imagen original
  });