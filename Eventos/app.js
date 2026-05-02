const boton=document.querySelector("button"); /*

boton.addEventListener("click", saludar);

function saludar() {
    console.log("Hola, soy un evento");
}

boton.addEventListener("mouseover", function() {
    boton.style.backgroundColor = "red";
});

boton.removeEventListener("mouseover", function() {
    boton.style.backgroundColor = "red";
}); */

boton.addEventListener("dblclick", saludar);

function saludar(event) {
    console.log("event.target");
}

/*document.addEventListener("DomContentLoaded", function() => {
    console.log("El DOM ha sido cargado");
});*/

