// Las variables son una caracteristica de cualquier lenguaje de programación

// existen 3 formas de crear variables en JavaScript, en nuevas versiones solo se utilizan 2:

// Variables con var

var producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

console.log(producto);

// Javascript es un lenguaje de tIpo Dinamico,
// No se especifican tipos de datos cuando
// se crea la variable
var precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después

var disponible;
disponible = true;


// Inicializar múltiples variables 
var categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)


// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero
var 99dias;
var dias99;

var _01;
var 01_;

// Estilos para nombrar variables con más de una palabra

// más de una palabra.
var  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
var nombre_producto = 'Monitor 30 Pulgadas'; //underscore
var NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
var nombreproducto = 'Monitor 30 Pulgadas';

//-------------------------------------------------------------------------------------------------------

// var era la forma de crear variables en versiones anteriores de ECMASscript hoy en día las opciones se reducen a 2
// Las reglas son básicamente las mismas con let 

let producto = 'Monitor 23 Pulgadas'; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = 'Monitor de 19 Pulgadas';

// Incluso a pesar de que la variable se le asigno un valor de tipo string o cadena, puedes asignarle un tipo de dato totalmente diferente
producto = 20;
producto = true;
producto = null;

console.log(producto);

// Javascript es un lenguaje de tIpo Dinamico,
// No se especifican tipos de datos cuando
// se crea la variable
let precio = 200;
console.log(precio);

// También se puede inicializar una variable sin valor y asignarlo después
let disponible;
disponible = true;


// Inicializar múltiples variables 
let categoria = 'Computadoras',
    marca = 'Marca Famosa',
    calificacion = 5;

console.log(categoria)
console.log(marca)
console.log(calificacion)


// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero
let 99dias;
let dias99;

let _01;
let 01_;

// Estilos para nombrar variables con más de una palabra

// más de una palabra.
let  nombreProducto = 'Monitor 30 Pulgadas'; // CamelCase
let nombre_producto = 'Monitor 30 Pulgadas'; //underscore
let NombreProducto = 'Monitor 30 Pulgadas'; // pascal case
let nombreproducto = 'Monitor 30 Pulgadas';

//-------------------------------------------------------------------------------------------------------

// El 3er tipo de formas de crear variables es con const
// Existen pocas diferencias entre let y const, asi que vamos a verlas:

// primero una variable con const su valor no puede ser re-asignado:

const producto = 'Monitor 30 Pulgadas';
console.log(producto);
producto = 'Monitor 23 Pulgadas';

// Por otro lado, las variables con const, deben iniciarse con un valor:
const precio;
precio = 20;
console.log(precio);

// Existen otras diferencias entre const y let especialmente cuando se trabajan con arreglos y objetos, se estudiaran más adelante...