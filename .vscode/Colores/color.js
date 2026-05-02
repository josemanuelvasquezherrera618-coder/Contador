const boton = document.getElementById("btn-cambiar");
const textoColor = document.getElementById("texto-color");

boton.addEventListener("click", function() {
    const color = prompt("Ingrese un color (en inglés o código hexadecimal):");
    if (color) {
        textoColor.style.color = color;
    }
});
