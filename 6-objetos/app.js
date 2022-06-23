//Los objetos son una pieza muy importante de javascript, en lugar de crear diferentes varibles...

let nombreProducto = "Mouse Gamer";
let precioVar = 2400;
let disponibleVar = true;

//podemos crear un objeto que agrupe toda informaciòn


//Cada propiedad de un objeto va a estar formado por el par clave: valor o llave: valor. key-value
//No se usa = para asignar el valor de cada llave si no que se usa :
//No finaliza cada par con ; sino que se utiliza ,
const producto = {
    nombre: "Mouse Gamer",//Propiedad
    precio: 2400,
    disponible: true
}
console.log(producto);

//--------------------------------------------
//Como acceder a un valor guardado en el objeto

console.log(producto.nombre);
console.log(producto.disponible);
console.log(producto.precio);

//Como agregar propiedades a un pnjeto
producto.color = "SUPER RGB ROJO VERDE AZUL";

console.log(producto);

//------------------------------------------

//Como asignar el valor de un objeto hacia una variable

//Destructuring
let { nombre } = producto;
console.log(nombre);

let { precio, disponible } = producto;
console.log(precio, disponible);

//-----------------------------------------
//Un objeto puede tener cualquier tipo de valor en tu interior incluso un objeto
const producto2 = {
    nombre: "Mouse Gamer",//Propiedad
    costo: 2400,
    disponible: true,
    informacion: {
        peso: "200gr",
        conexion: "Inhalambrico"
    }
}

console.log(producto2);
console.log(producto2.informacion.peso);

const { costo, informacion: { peso, conexion } } = producto2;

console.log(peso, conexion);

//------------------------------------