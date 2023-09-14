let intentos = 6;
let palabra;
fetch('https://random-word-api.herokuapp.com/word?length=5&lang=en')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        palabra = response[0].toUpperCase()
    })
    .catch(err => console.log(err));
const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
button.addEventListener('click', intentar);
input.addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        intentar();
    }
});
const BOTONAYUDA = document.getElementById("ayuda");
BOTONAYUDA.addEventListener('click', function() {
    window.location.href = 'ayuda.html';
});
function intentar() {
    const INTENTO = leerIntento();
    if (!INTENTO) {
        return;
    }
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
    intentos--;
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}
function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}
function terminar(mensaje){
    const input = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}