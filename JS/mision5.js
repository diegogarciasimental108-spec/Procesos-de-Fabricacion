var preguntas = [

{
pregunta:"¿Para qué se usa HTML?",
opciones:[
"Estructurar páginas web",
"Crear videojuegos",
"Administrar bases de datos"
],
correcta:0
},

{
pregunta:"¿Qué se usa para cambiar el diseño y colores?",
opciones:[
"CSS",
"HTML",
"Java"
],
correcta:0
},

{
pregunta:"¿Qué usa HTML para organizar contenido?",
opciones:[
"Etiquetas",
"Variables",
"Servidores"
],
correcta:0
},

{
pregunta:"¿Qué permite CSS cambiar?",
opciones:[
"Colores y diseño",
"Base de datos",
"Sistema operativo"
],
correcta:0
},

{
pregunta:"¿HTML sirve para estructurar contenido?",
opciones:[
"Sí",
"No",
"Solo en videojuegos"
],
correcta:0
}

];

var indice = 0;
var xp = 0;

var empezar = document.getElementById("empezar");
var resumen = document.getElementById("act5");

var preguntaHTML = document.getElementById("act2");
var opcionesHTML = document.getElementById("act3");

var mensaje = document.getElementById("mensaje");
var progreso = document.getElementById("progreso");
var xpHTML = document.getElementById("xp");


empezar.onclick = function(){

resumen.style.display="none";

mostrarPregunta();

}


function mostrarPregunta(){

if(indice >= preguntas.length){

preguntaHTML.innerHTML="⭐ MISIÓN COMPLETADA";
opcionesHTML.innerHTML="";
mensaje.innerHTML="";
xpHTML.innerHTML="XP TOTAL: "+xp;

return;

}

var actual = preguntas[indice];

preguntaHTML.innerHTML = actual.pregunta;

progreso.innerHTML = "Pregunta "+(indice+1)+" / "+preguntas.length;

opcionesHTML.innerHTML="";

for(var i=0;i<actual.opciones.length;i++){

var boton = document.createElement("button");

boton.innerHTML = actual.opciones[i];

boton.onclick = function(){

verificarRespuesta(this);

};

opcionesHTML.appendChild(boton);

}

}


function verificarRespuesta(boton){

var actual = preguntas[indice];

var respuesta = boton.innerHTML;

if(respuesta == actual.opciones[actual.correcta]){

boton.classList.add("correcta");

mensaje.innerHTML="✔ Correcto +10 XP";

xp +=10;

}else{

boton.classList.add("incorrecta");

mensaje.innerHTML="❌ Incorrecto";

}

setTimeout(function(){

indice++;

mostrarPregunta();

mensaje.innerHTML="";

},1000);

}