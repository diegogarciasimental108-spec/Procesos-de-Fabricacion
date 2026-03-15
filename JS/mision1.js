var textarea = document.getElementById("resumenUsuario");
var botonBorrar = document.getElementById("borrar");
var botonCompletar = document.getElementById("completar");
var mensaje = document.getElementById("mensaje");


/* CARGAR RESUMEN GUARDADO */

function cargarResumen(){

var guardado = localStorage.getItem("resumenCSS");

if(guardado){

textarea.value = guardado;

}

}


/* BORRAR TEXTO */

function borrarTexto(){

textarea.value = "";

localStorage.removeItem("resumenCSS");

mensaje.innerHTML = "🧹 Texto borrado";

}


/* COMPLETAR MISION */

function completarMision(){

if(textarea.value.trim() === ""){

mensaje.innerHTML = "⚠️ Escribe un resumen primero";

return;

}

localStorage.setItem("resumenCSS", textarea.value);

mensaje.innerHTML = "⭐ MISIÓN COMPLETADA +20 XP";

}


/* EVENTOS */

botonBorrar.onclick = borrarTexto;

botonCompletar.onclick = completarMision;


/* CARGAR AL INICIAR */

window.onload = cargarResumen;