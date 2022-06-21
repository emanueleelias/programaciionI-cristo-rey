// El tipo de dato boolean solo puede tener 2 valores, true o false, 

//Creación de booleanos

const boolean1 = true;
const boolean2 = false;

console.log(boolean1);
console.log(boolean2);


console.log(typeof(boolean2));

//También un Boolean se puede crear con la palabra new

const boolean3 = new Boolean(true);
console.log(boolean3);
console.log(typeof(boolean3));


//---------------------------------------------------------------------

// Comparar booleans es exactamente igual que cualquier comparación de números o strings

const boolean4 = false;
const boolean5 = false;

console.log(boolean4 === boolean5); // comparar 2 variables

console.log(boolean4 === true); // comparar si un boolean es verdadero
console.log(boolean5 === true);// comparar si un boolean es verdadero

// Aún no hemos llegado a ello, pero muchas personas cometen el siguiente error cuando escriben código javascript en un if

if (boolean4 === true) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

// Pero este código se puede simplificar quitando el === true porque ya sabemos que la variable es true

// Este mismo ejemplo aplica si un usuario esta autenticado puede darle me gusta a una foto o ver una página, así como si ya tienes una cuenta en netflix y pagaste la suscripción..

//---------------------------------------------------------------------

// Existe otra forma de comparar si un valor es verdadero y es por medio de algo llamado un operador ternario

const bool1 = true;

if(bool1) {
    console.log('si es true')
} else {
    console.log('no, no es true')
}

//El código anterior es fácil de leer no?, pero se puede simplificar un poco más
console.log( bool1  ? 'Si es true' : 'No no es true' );