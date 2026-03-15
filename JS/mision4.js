var preguntas = [

{
pregunta:"HTML se usa para estructurar páginas web.",
correcta:true
},

{
pregunta:"CSS sirve para programar la lógica de una página.",
correcta:false
},

{
pregunta:"JavaScript agrega interactividad a una página web.",
correcta:true
},

{
pregunta:"La etiqueta <img> crea enlaces.",
correcta:false
},

{
pregunta:"CSS puede cambiar colores y tamaños.",
correcta:true
},

{
pregunta:"<p> se usa para crear párrafos.",
correcta:true
},

{
pregunta:"JavaScript es un lenguaje de estilos.",
correcta:false
}

];

var indice = 0;
var xp = 0;

var preguntaHTML = document.getElementById("pregunta");
var progreso = document.getElementById("progreso");
var mensaje = document.getElementById("mensaje");
var xpHTML = document.getElementById("xp");

var botonV = document.getElementById("verdadero");
var botonF = document.getElementById("falso");


function mostrarPregunta(){

if(indice >= preguntas.length){

preguntaHTML.innerHTML="⭐ MISIÓN COMPLETADA";
mensaje.innerHTML="";
progreso.innerHTML="";
xpHTML.innerHTML="XP TOTAL: "+xp;

botonV.style.display="none";
botonF.style.display="none";

return;

}

preguntaHTML.innerHTML = preguntas[indice].pregunta;

progreso.innerHTML = "Pregunta "+(indice+1)+" / "+preguntas.length;

mensaje.innerHTML="";

}

function verificar(respuesta){

var correcta = preguntas[indice].correcta;

if(respuesta == correcta){

mensaje.innerHTML="✔ Correcto +10 XP";
xp +=10;

}else{

mensaje.innerHTML="❌ Incorrecto";

}

setTimeout(function(){

indice++;
mostrarPregunta();

},1000);

}

botonV.onclick = function(){

verificar(true);

}

botonF.onclick = function(){

verificar(false);

}

mostrarPregunta();