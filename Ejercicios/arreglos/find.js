var alumnos = [];
alumnos.push({
    nombre: "Raul",
    apellido: "Paez",
    alumnoID: 1
});
alumnos.push({
    nombre: "Paul",
    apellido: "Suarez",
    alumnoID: 2
});
//var alumnoEncontrado = alumnos.find(x=>x.nombre=="Paul");
var alumnoEncontrado = alumnos.find(function (x) { return x.alumnoID == 1; }).alumnoID;
console.log(alumnoEncontrado);
