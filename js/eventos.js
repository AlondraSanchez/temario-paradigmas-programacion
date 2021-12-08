function activarEventoFocus() {
    document.getElementById("msgFocus").innerHTML = "Este texto desaparecerá cuando quites el focus al campo de texto de arriba";
}

function desactivarEventoFocus() {
    document.getElementById("msgFocus").innerHTML = "";
}

function activarEventoClick() {
    alert("Este mensaje fue activado mediante el evento click");
}

function activarDobleClick() {
    alert("Este mensaje fue activado con un doble click");
}

function activarEventoTeclaPresionada() {
    //document.getElementById("msgTecla").setAttribute("class = 'w3-text-blue'");
    document.getElementById("msgTecla").className = "w3-text-indigo";
}

function desactivarEventoTeclaPresionada() {
    //document.getElementById("msgTecla").setAttribute("class = 'w3-text-blue'");
    document.getElementById("msgTecla").className = "w3-text-red";
}