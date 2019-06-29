function jugar(j1, j2) {
    if (j1 === 'piedra' && j2 === 'piedra') {
        console.log('Empate');
    } else if (j1 === 'papel' && j2 === 'papel') {
        console.log('Empate');
    } else if (j1 === 'tijeras' && j2 === 'tijeras') {
        console.log('Empate');
    }

    // GANA J1
    if (j1 === 'piedra' && j2 === 'tijeras') {
        console.log('Gana J1');
    } else if (j1 === 'papel' && j2 === 'piedra') {
        console.log('Gana J1');
    } else if (j1 === 'tijeras' && j2 === 'papel') {
        console.log('Gana J1');
    }

    // GANA J2
    if (j1 === 'piedra' && j2 === 'papel') {
        console.log('Gana J2');
    } else if (j1 === 'papel' && j2 === 'tijeras') {
        console.log('Gana J2');
    } else if (j1 === 'tijeras' && j2 === 'piedra') {
        console.log('Gana J2');
    }
}

//        j1       j2
jugar("piedra", "papel");
jugar("papel", "papel");
jugar("papel", "tijeras");

function Nombre(a,b,c) {
    console.log (a + b + c);
}

let nombre = "Gerardo "; // "a" se va a llamar así.
let paterno = "Quintero "; // "b" se va a llamar así.
let materno = "Escalante"; // "c" se va a llamar así.

Nombre (nombre, paterno, materno);