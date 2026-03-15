function validaf() {
	//alert("asdfga")
	var nom, ap, correo, user, tel, expresion,patron;
	var expnom;
	nom=document.getElementById("nombre").value;
	ap=document.getElementById("apellido").value;
	correo=document.getElementById("correo").value;
	user=document.getElementById("usuario").value;
	clave=document.getElementById("clave").value;
	tel=document.getElementById("telefono").value;

	if (nom==="") {
		alert("Falta ingresar el nombre");
		return false;
	}
	//validad longitud
	if (nom.length>30) {
		alert("El nombre es muy largo");
	}


var expnom =/[ a-zA-ZñÑ]+$/;
	if(!expnom.test(nom)){
		alert("Solo letras y espacio en blanco en el nombre");
		return false;
	}








	if (ap==="") {
		alert("Falta ingresar los apellidos");
		return false;
	}
   
   





		if (correo==="") {
		alert("Falta ingresar el correo");
		return false;
	}
		expresion= /\w+@+\w+\.+[a-z]/;
	if (!expresion.test(correo)) {
		alert("El correo es invalido");
		return false;
	} 




	if (user==="") {
		alert("Falta ingresar el usuario");
		return false;
	}
	if (clave==="") {
		alert("Falta ingresar la clave");
		return false;
	}
	if (tel==="") {
		alert("Falta ingresar el telefono");
		return false;
	}

	if (isNaN(tel)) {
		alert("Ingresar solo numeros, nada de espacios ni ningún otro caracter");
		return false;
	}



	if (tel.length !=10	) {//validar la longitud del campo: se utiliza .lengh
		alert("Deben ser 10 digitos");
		return false;
	}

	//validar solo numeros
	
	


	if (nom, ap, correo, user, clave, tel ==="") {
		alert("Algun dato no esta completo");
		return false;
	}



	var hombre = document.getElementById("sexh").checked;
	var mujer = document.getElementById("sexm").checked;
	if(hombre==false && mujer==false){
		alert("Debes seleccionar al menos un género");
		return false;
	}

		




	var terminos =document.getElementById("tercon").checked;
		if(terminos==false){
			alert("Debes seleccionar los terminos y condiciones");
			return false;
		}

   
let user = document.getElementById("usuario").value;

localStorage.setItem("usuarioSteelMind", user);
}

function limpiar(){
	



	var hombre = document.getElementById("sexh");
	var mujer = document.getElementById("sexm");
	var terminos =document.getElementById("tercon");



	hombre.checked = false;
	mujer.checked = false;
	terminos.checked = false;
}