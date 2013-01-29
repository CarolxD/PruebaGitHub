function persona(nombre_persona, edad_persona, actividad_persona, deporte_persona){
	this.nombre_persona = nombre;
	this.edad_persona = edad;
	this.actividad_persona = actividad;
	this.deporte_persona = deporte;
}
Persona.prototype = {
	datos: function(){
		return this.nombre_persona + " tiene " + this.edad_persona + " años, es " + this.actividad_persona + " y le gusta el" + this.deporte_persona; + ".";
	}
}
var alejandra = new Persona("Alejandra", 22, estudiante, patinaje);
console.log(alejandra.datos());



