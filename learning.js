//Esto comenta una linea

/*
TODO
   ESTO
      ES 
        UN 
          COMENTARIO
*/


//VARIABLES
var NOMBRE_PROGRAMA = "MiPrimerPrograma";
var MAYORIA_EDAD = 18;

var nombre = "Carolina";
var apellido = "Corredor";
var edad = 29;
var aficiones = ["patinaje", "natacion", "spinning"];

//TYPEOF
console.log(nombre);
console.log(typeof(nombre));

//LLAMAR A UNA FUNCION   nombredelafuncion(parametros_si_los_hay)
//Asignacion 
var tipo = typeof(nombre);

//FUNCIONES que no come nada (parametros) y no devuelve nada (resultados)
function helloWorld(){
	console.log("Hello World!!!!");
	console.log("Nuestra primera function!");
}

//FUNCIONES que coma algo (parametros) y que devuelva algo (resultados)
function nombreCompleto(nombre_a_juntar, apellido_a_juntar){
	var temporal = nombre_a_juntar + " " + apellido_a_juntar;
	return temporal;
}

var nombre_completo_jefe = nombreCompleto("Victor", "Sanchez");
var nombre_completo_carolina = nombreCompleto(nombre, apellido);

function datosPersona(nombre_persona, apellido_persona, edad_persona){
	var informacion = "Soy " + nombre_persona + " " + apellido_persona + " y tengo " + edad_persona + " años.";
	
	if(edad_persona >= MAYORIA_EDAD){
		informacion += " Soy mayor de edad.";
	}else {
		informacion += " Soy menor de edad";
	}
	
	return informacion;
}

var datos_persona = datosPersona(nombre, apellido, edad);

