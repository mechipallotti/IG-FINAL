const totalCartas = 12;
let cartas = [];
let cartasSeleccionadas = [];
let movimientoActual = 0;
let intentoActual = 0;

let imagenes = [
  "juego-img/asieslavida01.jpg", "juego-img/asieslavida01.jpg",
  "juego-img/asieslavida02.jpg", "juego-img/asieslavida02.jpg",
  "juego-img/asieslavida03.jpg", "juego-img/asieslavida03.jpg",
  "juego-img/asieslavida04.jpg", "juego-img/asieslavida04.jpg",
  "juego-img/asieslavida05.jpg", "juego-img/asieslavida05.jpg",
  "juego-img/asieslavida06.jpg", "juego-img/asieslavida06.jpg",
];

let intentoMaximo = null;

// Pantallas y botones
const pantallaInicio = document.getElementById("pantalla-inicio");
const botonesIntento = document.querySelectorAll(".intento-btn");
const botonJugar = document.getElementById("btn-jugar");

const pantallaFinal = document.getElementById('pantalla-final');
const mensajeFinal = document.getElementById('mensaje-final');
const btnReiniciar = document.getElementById('btn-reiniciar');

// Ocultar tablero e intentos al inicio
document.querySelector('#wrapped').style.display = "none";
document.querySelector('#intentos').style.display = "none";

// Manejar selección de intentos
botonesIntento.forEach(boton => {
  boton.addEventListener("click", () => {
    intentoMaximo = parseInt(boton.getAttribute("data-intentos"));
    botonesIntento.forEach(b => b.classList.remove("active"));
    boton.classList.add("active");
    botonJugar.disabled = false;
  });
});

// Iniciar juego
botonJugar.addEventListener("click", () => {
  pantallaInicio.style.display = "none";
  document.querySelector('#wrapped').style.display = "block";
  document.querySelector('#intentos').style.display = "block";
  intentoActual = 0;
  movimientoActual = 0;
  cartasSeleccionadas = [];
  document.querySelector('#intentos').textContent = '0 intentos';
  reiniciarCartas();
});

// Barajar imágenes
imagenes = imagenes.sort(() => Math.random() - 0.5);

let visualizacionCartas = `
  <div class="carta">
    <div class="boca-arriba"></div>
    <div class="boca-abajo"></div>
  </div>
`;

// Función para crear y mostrar cartas
function reiniciarCartas() {
  cartas = [];
  const contenedorJuego = document.querySelector('#juego');
  contenedorJuego.innerHTML = ""; // limpio el contenedor

  for (let i = 0; i < totalCartas; i++) {
    let div = document.createElement('div');
    div.innerHTML = visualizacionCartas;

    const carta = div.querySelector('.carta');
    carta.setAttribute("data-imagen", imagenes[i]);
    carta.querySelector('.boca-arriba').innerHTML = `<img src="${imagenes[i]}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`;

    contenedorJuego.appendChild(div);
    cartas.push(carta);

    carta.classList.remove("active"); // por si quedan clases
    carta.addEventListener('click', activate);
  }
}

// Función para activar carta al clic
function activate(e) {
  const carta = e.currentTarget;

  if (
    movimientoActual < 2 &&
    !carta.classList.contains("active") &&
    !cartasSeleccionadas.includes(carta)
  ) {
    carta.classList.add("active");
    cartasSeleccionadas.push(carta);
    movimientoActual++;
  }

  if (movimientoActual === 2) {
    const img1 = cartasSeleccionadas[0].getAttribute("data-imagen");
    const img2 = cartasSeleccionadas[1].getAttribute("data-imagen");

    if (img1 === img2) {
      // Pareja correcta, reseteo para siguiente turno
      cartasSeleccionadas = [];
      movimientoActual = 0;

      // Verifico si ganaste
      if (document.querySelectorAll(".carta.active").length === totalCartas) {
        setTimeout(() => {
          mostrarPantallaFinal(true);
        }, 800);
      }
    } else {
      // Pareja incorrecta: aumento intento y espero para voltear cartas
      intentoActual++;
      document.querySelector('#intentos').textContent = intentoActual + ' intentos';

      setTimeout(() => {
        cartasSeleccionadas[0].classList.remove("active");
        cartasSeleccionadas[1].classList.remove("active");
        cartasSeleccionadas = [];
        movimientoActual = 0;

        // Verifico si perdiste
        if (intentoActual >= intentoMaximo) {
          mostrarPantallaFinal(false);
        }
      }, 800);
    }
  }
}

// Mostrar pantalla final (true=gano, false=perdio)
function mostrarPantallaFinal(gano) {
  document.querySelector('#wrapped').style.display = "none";
  document.querySelector('#intentos').style.display = "none";
  mensajeFinal.innerHTML = gano ? 'ASÍ ES LA VIDA:<br>¡GANASTE!' : 'ASÍ ES LA VIDA:<br>PERDISTE';
  pantallaFinal.style.display = "flex";
}

// Botón reiniciar
btnReiniciar.addEventListener('click', () => {
  pantallaFinal.style.display = "none";
  pantallaInicio.style.display = "flex";
  // Reset valores para volver a empezar
  intentoActual = 0;
  movimientoActual = 0;
  cartasSeleccionadas = [];
  botonJugar.disabled = true;
  botonesIntento.forEach(b => b.classList.remove("active"));
  document.querySelector('#wrapped').style.display = "none";
  document.querySelector('#intentos').style.display = "none";
});
