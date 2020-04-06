var nombre:string[] = ["a","b","c"];

nombre.forEach(nombre => {
    console.log(nombre)
});


interface persona{
    nombre:string,
    apellido:string
}

var persona:persona[] = []

persona.push({
    nombre:"Raul",
    apellido:"Paez"
})

persona.push({
    nombre:"Paul",
    apellido:"Suarez"
})



persona.forEach(persona => {
    if (persona.nombre == "Paul"){
        console.log("Hola Sr:" + persona.apellido);
    }
    
});