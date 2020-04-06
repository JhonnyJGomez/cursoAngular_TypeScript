var Alumno = /** @class */ (function () {
    function Alumno() {
        this.nombre = "";
        this.apellido = "";
        this.peso = 0;
    }
    Alumno.prototype.mostrarMensaje = function () {
        console.log("Hola", this.nombre + " " + this.apellido + " tu peso es: " + this.peso);
    };
    Alumno.prototype.mostrarMensaje2 = function () {
        console.log("Ey you", this.nombre + " " + this.apellido + " tu peso es: " + this.peso);
    };
    Alumno.prototype.asignar = function (nombreParaetro, apellidoParametro, pesoParametro) {
        this.nombre = nombreParaetro;
        this.apellido = apellidoParametro;
        this.peso = pesoParametro;
        this.mostrarMensaje2();
    };
    return Alumno;
}());
var alumno1 = new Alumno();
alumno1.asignar("Juan", "Torres", 80);
alumno1.mostrarMensaje();
var alumno2 = new Alumno();
alumno2.asignar("Sofia", "Torres", 50);
alumno2.mostrarMensaje();
var alumno3 = new Alumno();
alumno3.asignar("Daniela", "Rodriguez", 50);
alumno3.mostrarMensaje();
