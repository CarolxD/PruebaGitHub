// //Esto comenta una linea

// /*
// TODO
//    ESTO
//       ES 
//         UN 
//           COMENTARIO
// */


// //VARIABLES
// var NOMBRE_PROGRAMA = "MiPrimerPrograma";
// var MAYORIA_EDAD = 18;

// var nombre = "Carolina";
// var apellido = "Corredor";
// var edad = 29;
// var aficiones = ["patinaje", "natacion", "spinning"];

// //TYPEOF
// console.log(nombre);
// console.log(typeof(nombre));

// //LLAMAR A UNA FUNCION   nombredelafuncion(parametros_si_los_hay)
// //Asignacion 
// var tipo = typeof(nombre);

// //FUNCIONES que no come nada (parametros) y no devuelve nada (resultados)
// function helloWorld(){
// 	console.log("Hello World!!!!");
// 	console.log("Nuestra primera function!");
// }

// //FUNCIONES que coma algo (parametros) y que devuelva algo (resultados)
// function nombreCompleto(nombre_a_juntar, apellido_a_juntar){
// 	var temporal = nombre_a_juntar + " " + apellido_a_juntar;
// 	return temporal;
// }

// var nombre_completo_jefe = nombreCompleto("Victor", "Sanchez");
// var nombre_completo_carolina = nombreCompleto(nombre, apellido);

// function datosPersona(nombre_persona, apellido_persona, edad_persona){
// 	var informacion = "Soy " + nombre_persona + " " + apellido_persona + " y tengo " + edad_persona + " años.";
	
// 	if(edad_persona >= MAYORIA_EDAD){
// 		informacion += " Soy mayor de edad.";
// 	}else {
// 		informacion += " Soy menor de edad";
// 	}
	
// 	return informacion;
// }

// var datos_persona = datosPersona(nombre, apellido, edad);
// console.log(datos_persona);

// //CONDICIONALES Y COMPARACIONES
// var verdad = true;
// var mentira = false;

// console.log("5" == "6"); //igual ==
// console.log(3 != 3); // !=
// console.log(typeof(3) == "number");

// console.log(1 > 10); // mayor que
// console.log(3 < 3);  // menor que
// console.log(3 <= 3); // menor o igual que
// console.log(3 >= 1); // mayor o igual que

// //ESTRUCTURA DE CONTROL
// var numero = 5;

// if(3 < numero){
// 	console.log(" 3 es menor que "+numero);
// } else{
// 	console.log(" 3 es mayor que "+numero);
// }

// //var aficiones = ["patinaje", "natacion", "spinning"];
// for(var indice = 0; indice < 3; indice++){
// 	console.log(aficiones[indice]);
// }

// var lista = ["leche", "huevos", "barrita cereales", "agua", "ternera"];

// var compra = "Tenemos que comprar: ";
// for(var indice = 0; indice < lista.length; indice++){
// 	compra += lista[indice];

// 	if(indice == lista.length-2){
// 		compra += " y ";
// 	} else{
// 		if(indice == lista.length-1){
// 			compra += ".";
// 		} else{
// 			compra += ", ";
// 		}
// 	}
// }
// console.log(compra);

// //TABLAS DE MULTIPLICAR
// var limite_tabla = 10;
// var numero_tablas = 9;

// for(var indice_tabla = 0; indice_tabla <= numero_tablas; indice_tabla++){
// 	for(var multiplicador = 0; multiplicador <= limite_tabla; multiplicador++){
// 		var resultado = multiplicador * indice_tabla;
// 		console.log(indice_tabla + "x" + multiplicador + "= " + resultado);
// 	}
// }

// //No tengo dinero para la compra
// //Solo 3 cosas
// for(var indice = 0; indice < lista.length; indice++){

// 	console.log("Compro " + lista[indice]);
// 	console.log("embolsado!");

// 	if(indice == 2){
// 		break;
// 	}

// }

// // La tercera cosa no la embolso, PERO SIGO COMPRANDO
// for(var indice = 0; indice < lista.length; indice++){

// 	console.log("Compro " + lista[indice]);

// 	if(indice == 2){
// 		continue;
// 	}

// 	console.log("embolsado!");
// }

// //for pijo
// for(var indice in lista){
// 	console.log(lista[indice]);
// }

// var cartera = 36;

// function aleatorio(inferior, superior){
// 	numPosibilidades = superior - inferior;
// 	aleat = Math.random() * numPosibilidades;
// 	aleat = Math.round(aleat);
// 	return parseInt(inferior, 10) + aleat;
// }

// while(cartera > 0){
// 	var robo = aleatorio(1 ,5);
// 	console.log("Me intentan robar!! " + robo + " $");

// 	if(robo <= cartera){
// 		cartera -= robo;
// 		console.log("Pero aun me quedan: " + cartera + "$");
// 	}else{
// 		console.log("AVARICIOSO!!");
// 		break;
// 	}
// }

// console.log("Estoy sin dinero :( ");

// //SWITCH CASE, haz algo en cada caso
// var opcion = parseInt(prompt("Elige una opcion:"), 10);

// switch(opcion){
// 	case 0:
// 		console.log("has elegido 0");
// 		break;
// 	case 1:
// 		console.log("has elegido 1");
// 		break;
// 	default:
// 		console.log("opcion desconocida");
// 		break;
// }

//DICCIONARIOS
var estanteria = {
	"libro diseño": "adakdad adadjad ajdadad",
	"chistes": "jajajajaajajaja",
	"cosas serias": "blu blu blu blu"
};

//FUNCIONES - OBJETOS
function Persona(param_nombre, param_apellido, param_edad){
	//this.nombre = param_nombre;
	//this.apellido = param_apellido;
	//this.edad = param_edad;
	//this.humor = "feliz";
	var nombre = param_nombre;
	var apellido = param_apellido;
	var edad = param_edad;
	var humor = "feliz";

	var saluda = function(){
		console.log("Hola soy "+nombre);
	}

	var dimeTuEdad = function(){
		console.log("Tengo "+(edad-1)+" años.");
	}

	var setHumor = function(humor){
		if(typeof(humor) == "string"){
			humor = humor;
		} else{
			console.log("tu estaaas tonto!");
		}
	}

	var getHumor = function(){
		return humor
	}

	return{
		'saluda': saluda,
		'dimeTuEdad': dimeTuEdad
	}
}

var victor = new Persona("Victor","Sanchez",26);
var carol = new Persona("Carolina","Corredor",29);

victor.saluda();
victor.dimeTuEdad();

carol.saluda();
carol.dimeTuEdad();

//CLOSURES y NAMESPACES
var CAROLINALAND = CAROLINALAND || {};

CAROLINALAND.Screen = (function(cl){

	var resizeScreen = function(desiredWidth, desiredHeight){
		window.resizeTo(desiredWidth, desiredHeight);
	};

	var changeColor = function(color){
		document.bgColor = color;
	};

	var randomColor = function(){
		//continuara
	}

	return {
		'resizeScreen': resizeScreen,
		'color': changeColor
	}

})(CAROLINALAND)














