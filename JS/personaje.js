window.onload = function(){

let nombre = localStorage.getItem("usuarioSteelMind");

let nivel = 1;
let experiencia = 1;
let vida = 1;
let clase = "Guerrero";

document.getElementById("nombre").value = nombre;
document.getElementById("nivel").value = nivel;
document.getElementById("exp").value = experiencia;
document.getElementById("vida").value = vida;
document.getElementById("clase").value = clase;

}