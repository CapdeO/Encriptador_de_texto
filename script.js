var chequeo;

function chequearTexto(){
	var texto = document.getElementById("texto1").value;
	//Descartando mayúsculas, números y carácteres especiales
	if (/[A-Z]|\d|[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(texto)) {
        alert("Sólo se permiten ingresar letras minúsculas y sin acentos. Inténtelo nuevamente.");    
        chequeo = false;
	}
	else if (/[a-z]/.test(texto)) {
		chequeo = true;
	}
	//Por si el usuario no escribe nada, sólo hace espacios o saltos de línea y presiona encriptar
	else {
		alert("Es necesario ingresar un mensaje para encriptar/desencriptar.");
		chequeo = false;
		limpiar();
	}
}

function encriptar() {
	var texto = document.getElementById("texto1").value;
	chequearTexto();
	if (chequeo == true) {
		let texto1 = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
		document.getElementById("texto2").value = texto1;
		document.getElementById("texto1").value = "";
		document.getElementById("label2").textContent = "Mensaje encriptado:";
	}
}

function desencriptar () {
	var texto = document.getElementById("texto1").value;
	chequearTexto();
	if (chequeo == true) {
		let texto1 = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
		document.getElementById("texto2").value = texto1;
		document.getElementById("texto1").value = "";
		document.getElementById("label2").textContent = "Mensaje desencriptado:";
	}
}

function copiar () {
	var mensaje = document.getElementById("texto2");
	if (mensaje.value == "") {
		alert("No hay mensaje para copiar.");
	}
	else {
		mensaje.select();
		navigator.clipboard.writeText(mensaje.value);
		alert("Mensaje copiado.");
	}
	
}

function limpiar() {
	document.getElementById("texto1").value = "";
	document.getElementById("texto2").value = "";
	document.getElementById("label2").textContent = "Mensaje:";
}
