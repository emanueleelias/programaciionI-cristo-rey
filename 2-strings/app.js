//Los strings o cadena de caracteres representan un texto que se puede asignar a una variable
//Existen 3 forma de crear los strings
const producto = 'Playstation 6';
const producto2 = String("Play 5");
//La menos comun
const producto3 = new String("MOTO G5");
console.log(producto);
console.log(producto2);
console.log(producto3);

//Alguna de las reglas para los strings es que se pueden usar comillas dobles o simples pero siempre la misma, es decir, no se pueden mezclar..
//Ejemplo para usar las comillas dentro del string
const producto4 = "monitor 24\"";
console.log(producto4);

//-------------------------------------

//Veamos algunos metodos para trabajar con los strings

const nombre = "Juan Facundo";
const edad = "40 años";

//Conocer la extensión de una cadena de caracteres
console.log(nombre.length);

//indexOf - Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(nombre.indexOf("Facundo"));
console.log(nombre.indexOf("Elias"));

//-------------------------------------

//Metodo para concatener o unir textos o variables

console.log(nombre.concat(" de los andes"));
console.log(nombre.concat(edad));

//Otras formas de concatenar
console.log("El actor se llama " + nombre + " y tiene " + edad);
console.log("asdasdsad" , nombre , edad);

//En nuevas versiones se agrego una mejor forma que se conoce como Template String o Template literal - backticks
console.log(`El actor se llama ${nombre} y tiene ${edad}`);

//-------------------------------------
//3  Metodos más
const nombreMascota = "    Artur   ";
//Elimina los espacios al inicio
console.log(nombreMascota)
console.log(nombreMascota.trimStart());
//cortar los espacios al final
console.log(nombreMascota.trimEnd());
//Corta los espacios tanto al inicio como al final
console.log(nombreMascota.trim());