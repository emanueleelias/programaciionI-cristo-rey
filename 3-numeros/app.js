//Algo interesante es que en la consola los numeros se ven de color azul y los strings se ven de color negro

//Creación de números
let numero1 = 30;
let numero2 = 10;
let numero3 = 30.40;
let numero4 = .40;
let numero5 = -4;

//otra forma de crear numeros
const numero7 = new Number(20);

//----------------------------

//Operadores
let resultado;

resultado = numero1 + numero2;
resultado = numero1 - numero2;
resultado = numero1 * numero2;
resultado = numero1 / numero2;
resultado = numero1 % numero2;

//-------------------------------

// Math es parte de la ventana global de javascript, tiene una serie de operaciones muy utiles..

let num = 3.9;
let num22 = 5;
// PI
console.log(Math.PI);
//Redondeo
console.log(Math.round(num));
//redondeo hacia abajo o arriba
console.log(Math.ceil(num));
console.log(Math.floor(num));
//Raiz cuadrada
console.log(Math.sqrt(num));
//valor absoluto
console.log(Math.abs(num22));
//Potencia 
console.log(Math.pow(num22, 3));
//Minimo
console.log(Math.min(5,4 ,3 ,2, 5, 6, 1,2 ,3));
//Maximo
console.log(Math.max(5,4 ,3 ,2, 5, 6, 1,6 ,3));
//Aleatorio
console.log(Math.random());
//aleatorio dentro de un rango
console.log(Math.floor(Math.random() * 30));

//----------------------------------------------

//El orden en que se ejecutan las operaciones en javascript es igual que en la primaria

let res;
res = 20 + 30 * 2;
res = (20 + 30) * 2;

let carrito = (4000 + 1500 + 500 ) * .50;
console.log(carrito);

//----------------------------------

let puntaje = 10;
puntaje++;
++puntaje;
puntaje--;
--puntaje;

//puntaje = puntaje + 5;
puntaje += 5;
puntaje -= 5;

console.log(puntaje)

//----------------------------

// Funciones para convertir a números
const num1 = "20";
const num2 = "20.2";
const num3 = "Uno";
const num4 = 20;

console.log(num1);
// Convertir de Strings a Números flotantes o Enteros

console.log(parseInt(num1)); // Convertir de String a Número
console.log(Number.parseFloat(num2)); // Convertir a número con decimales 
console.log(Number.parseInt(num3)); 

// Revisar si un número es entero
console.log(Number.isInteger(num4) ); // Revisar si un número es entero o no
console.log(Number.isInteger(num3) ); //

// Convertir String a numero
console.log(numero4.toString());
