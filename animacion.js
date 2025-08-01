// CAMBIO DE IMAGEN EN HOMEPAGE

const imagen = document.getElementById("imagenEstrella");
if (imagen) {
  imagen.addEventListener("mouseenter", () => {
    imagen.src = "img/inicio-apertura.gif";
  });
  imagen.addEventListener("mouseleave", () => {
    imagen.src = "img/estrella.gif";
  });
}
// CAMBIO DE FRASES EN FRASES.HTML

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


// INTERACCION IMAGEN EN ABOUT ME.

const aboutImage = document.getElementById('change-img');
if (aboutImage) {
        const originalSrc = aboutImage.src;
        const newSrc = '../about-me/aboutme-img/yo2.gif'; 

        aboutImage.addEventListener('click', function() {
            aboutImage.src = (aboutImage.src === originalSrc) ? newSrc : originalSrc;
        });
      }

// ANIMACION EN SUBPAGINA BILLY

 function saltarEnElTiempo() {
      const secciones = ['#a1922', '#a1944', '#a1948', '#a1955', '#a1967', '#a1976'];
      const destino = secciones[Math.floor(Math.random() * secciones.length)];
      location.href = destino;
    }


// GALERIA DE FOTOS
document.addEventListener("DOMContentLoaded", () => {

  const imagenesGaleria = [
     {
      src: "../fragmento/fragmento-img/fragmento1.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento2.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento3.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento4.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento5.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento6.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento7.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento8.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento9.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento10.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento11.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento12.jpg",
    },
    {
      src: "../fragmento/fragmento-img/fragmento13.jpg",

    },
    
  ];
let indice = 0;

  const imgEl = document.getElementById("galeria-img");

  const mostrarImagen = () => {
    imgEl.src = imagenesGaleria[indice].src;
  };

  mostrarImagen();

  document.getElementById("anterior").addEventListener("click", () => {
    indice = (indice - 1 + imagenesGaleria.length) % imagenesGaleria.length;
    mostrarImagen();
  });

  document.getElementById("siguiente").addEventListener("click", () => {
    indice = (indice + 1) % imagenesGaleria.length;
    mostrarImagen();
  });
});

// ANIMACION EN  SUBPAGINA: LINEA DE TIEMPO DE KURT VONNEGUT

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach(item => observer.observe(item));
});
