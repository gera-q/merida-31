let j1 = "tijera";
let j2 = "piedra";


if (j1 === "papel" && j2 === "papel") {
    console.log ("¡Empate!");

} else if(j1 === "piedra" && j2 === "piedra") {
    console.log ("¡Empate!");

} else if(j1 === "tijera" && j2 === "tijera") {
    console.log ("¡Empate!");

}

if (j1 === "piedra" && j2 === "tijera") {
    console.log ("El Jugador 1 ganó");

} else if(j1 === "tijera" && j2 === "papel") {
    console.log ("El Jugador 1 ganó");

} else if(j1 === "papel" && j2 === "piedra") {
    console.log ("El Jugador 1 ganó");
}

if (j1 === "tijera" && j2 === "piedra") {
    console.log ("El Jugador 2 ganó");

} else if(j1 === "papel" && j2 === "tijera") {
    console.log ("El Jugador 2 ganó");

} else if(j1 === "piedra" && j2 === "papel") {
    console.log ("El Jugador 2 ganó");
}