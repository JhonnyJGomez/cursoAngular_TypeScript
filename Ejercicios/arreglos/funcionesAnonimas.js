var nombre = ["a", "b", "c"];
nombre.forEach(function (nombre) {
    console.log(nombre);
});
var persona = [];
persona.push({
    nombre: "Raul",
    apellido: "Paez"
});
persona.push({
    nombre: "Paul",
    apellido: "Suarez"
});
persona.forEach(function (persona) {
    if (persona.nombre == "Paul") {
        console.log("Hola Sr:" + persona.apellido);
    }
});
