interface Ipersonas{
    nombre:string,
    apellido:string,
    edad:number,
    peso:number
}

var persona1: Ipersonas = {
    nombre: "Karen",
    apellido: "Olaguibel",
    edad: 29,
    peso: 56

}

console.log("nombre de la person por interface " + persona1.nombre);

