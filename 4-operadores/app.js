//Los operadores aritméticos los vimos anteriormente en la unidad de números...

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Operador Mayor a 
console.log( numero1 > numero3 );
console.log( numero3 > numero1 );


// Operador Menor que
console.log(numero3 < numero1);



//--------------------------------------------------------------------------


const num1 = 20;
const num2 = "20";
const num3 = 30;


// Revisar si 2 valores son iguales o diferentes
console.log(num1 == num3);
console.log(num1 == num2);


// Typeof
console.log( typeof(num1) );
console.log( typeof(num2) );

// Operador estricto (revisa valor y tipo de dato)
console.log(num1 === num2 );

// Diferente a 
console.log(num1 != num3); //! =
console.log(num1 != num2);
console.log(num1 !== num2);// ! ==

//--------------------------------------------------------------------------

// Null y Undefined

// En javascript existen diferentes tipos de datos primitivos a los que hemos visto, además de string y number se tienen booleans que son true o false,  y existen un par más llamados undefined y null


// veamos un ejemplo de undefined.
let numero;

console.log(numero); // La variable esta definida pero su valor no, por lo tanto es undefined...
console.log(typeof(numero))

// En el caso de null es más bien asignarlo
let numero4 = null;
console.log(numero4);
console.log(typeof(numero4)); // ahora esto nos dirá que es un objeto, la especificación de ecma que es quien define el standard del lenguaje dice que null debe ser un objeto

// Comparando null y undefined - Comparar un valor null y un undefined puede ser de las cosas más complicadas
console.log (numero == numero4);

// Puedes ver que el resultado es true, a pesar de que numero  no tiene un valor, eso usualmente nos lleva a ejecución de código no deseada o con comportamientos extraños ya que comparamos un valor que no existe, y nos retorna true

// para ello llega a ser muy  util el comparador estricto
console.log(numero === numero4);

// De esta forma no comparamos un falso positivo y evitamos errores.

//-------------------------------

// Y --> &&
//O --> ||
// No --> !