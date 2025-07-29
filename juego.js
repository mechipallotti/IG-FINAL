const totalCartas = 12;
let cartas = [];
let cartasSeleccionadas = []; 
let valorUsado =[];
let movimientoActual= 0;
let intentoActual = 0;

let imagenes = [
    "../img/asieslavida01.jpg","../img/asieslavida01.jpg",
    "../img/asieslavida02.jpg","../img/asieslavida02.jpg",
    "../img/asieslavida03.jpg","../img/asieslavida03.jpg",
    "../img/asieslavida04.jpg","../img/asieslavida04.jpg",
    "../img/asieslavida05.jpg","../img/asieslavida05.jpg",
    "../img/asieslavida06.jpg","../img/asieslavida06.jpg",
]

imagenes = imagenes.sort(() => Math.random() - 0.5);

let visualizacionCartas = '<div class="carta"><div class="boca-arriba"></div><div class="boca-abajo"></div></div>';

function activate(e) {
    if (movimientoActual < 2) {

        if ((!cartasSeleccionadas[0] || cartasSeleccionadas[0] !== e.target) && !e.target.classList.contains('active')) {
            e.target.classList.add('active'); 
            cartasSeleccionadas.push(e.target);
        }
        if (++movimientoActual == 2){
           let img1 = cartasSeleccionadas[0].querySelector('.boca-arriba img').src;
           let img2 = cartasSeleccionadas[1].querySelector('.boca-arriba img').src;
           if (img1 === img2) {
              cartasSeleccionadas = [];
              movimientoActual = 0;
            }
            else {
                 intentoActual++;
                 document.querySelector('#intentos').innerHTML = intentoActual + ' intentos';

                 if (intentoActual >=15) {
                    alert('Perdiste, intenta de nuevo');
                    location.reload();
                    return;
                    }
                 setTimeout(() => {
                    cartasSeleccionadas[0].classList.remove('active');
                    cartasSeleccionadas[1].classList.remove('active');
                    cartasSeleccionadas = [];
                    movimientoActual = 0;
                }, 600);
        
            }
    }
  }
}



for (let i = 0; i < totalCartas; i++) {
    let div = document.createElement('div');
    div.innerHTML = visualizacionCartas;
    cartas.push(div);
    document.querySelector('#juego').append(cartas[i]);
  cartas[i].querySelector('.boca-arriba').innerHTML = `<img src="${imagenes[i]}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;">`;
  cartas[i].querySelector('.carta').addEventListener('click', activate);}