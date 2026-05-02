let cuenta = 0;

function aumentar() {
    cuenta++;
    document.getElementById("numero").innerHTML = cuenta;
    if (cuenta < 5) {
        document.getElementById("numero").style.color = "red";
    } else {
        document.getElementById("numero").style.color = "black";
    }
}

function disminuir() {
    cuenta--;
    document.getElementById("numero").innerHTML = cuenta;
    if (cuenta < 4) {
        document.getElementById("numero").style.color = "red";
    } else {
        document.getElementById("numero").style.color = "black";
    }
}

function resetear() {
    cuenta = 0;

    document.getElementById("numero").innerHTML = cuenta;
    document.getElementById("numero").style.color = "black";
}