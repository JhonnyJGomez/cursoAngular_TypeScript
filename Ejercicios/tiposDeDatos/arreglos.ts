var listaDeJuegos:Array<string>; 
var listaDeJugadores:Array<players>

interface players {
    nombre:string,
    apellido:string,
    edad:number,
    peso:number,
    numero:number
}


listaDeJuegos = ["Fifa","Mario Bros","Teken","halo"];
listaDeJugadores = [
    {
        nombre: "Falcao",
        apellido: "Garcia",
        edad: 31,
        peso: 75,
        numero: 9 
    },
    {
        nombre: "James",
        apellido: "Rodriguez",
        edad: 29,
        peso: 72,
        numero: 10 
    }

]

console.log(listaDeJuegos);
console.log(listaDeJugadores[1].nombre +" - "+ listaDeJugadores[1].numero);
