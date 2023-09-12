const palabras = ["PERRO", "ANDRES", "GATO", "JUAN", "CONEJO", "MELON"];
let palabra = palabraRandom();
let intentos = 6;
const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
button.addEventListener('click', intentar);
console.log(palabra);
function palabraRandom() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}
function intentar() {
    const INTENTO = leerIntento();
    if (INTENTO === palabra) {
        console.log("Ganaste");
        return;
    }
    for (let i in palabra) {
        if (INTENTO[i] === palabra[i]) {
            console.log(INTENTO[i], "VERDE");
        } else if (palabra.includes(INTENTO[i])) {
            console.log(INTENTO[i], "AMARILLO");
        } else {
            console.log(INTENTO[i], "GRIS");
        }
    }
    intentos--;
    if (intentos === 0) {
        console.log("Perdiste. La palabra correcta era: " + palabra);
    }
}
function leerIntento() {
    let intento = document.getElementById("guess-input").value;
    intento = intento.toUpperCase();
    return intento;
}
