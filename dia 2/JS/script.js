//alert("¡Ajúa!");

const nombre = "Gerardo"; // String
let edad = 25; // Number
let mayorDeEdad = true; // Boolean // CamelCase = primera palabra minúscula, siguientes mayus.

let x = 7;
let y = 9;

let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;
let division = y / y;
let modulo = 25 % 5;

if (x % 2 === 0) {
    console.log("Es par")
} else {
    console.log("Es impar");
}

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);


//console.log(nombre);
//console.log(edad);
//console.log(mayorDeEdad);
//console.log(x);


//console.log ("Hola, mi nombre es " + nombre + " y me faltan " + x + " años para cumplir " + suma);

//if (edad >= 18) {
// mayorDeEdad = true;
//console.log ("Soy mayor de edad");
// if (mayorDeEdad === true) {
//    console.log ("Puedes ir a votar");
//}
//} else {
//mayorDeEdad = false;
//console.log ("No soy mayor de edad");
//}

for (let i = 1; i <= 100; i++) { //for es un ciclo, usado para repetir una instruccion en determinadas veces
    if (i % 5 && 3 === 0) {
        console.log("Fizz Buzz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}

