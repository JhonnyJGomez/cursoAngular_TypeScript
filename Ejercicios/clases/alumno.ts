
class Alumno{
    private nombre:string;
    private apellido:string;
    private peso:number;

    constructor()
    {
        this.nombre = ""
        this.apellido = ""
        this.peso = 0
    }

    mostrarMensaje():void{
        console.log("Hola", this.nombre +" "+ this.apellido +" tu peso es: "+ this.peso)
    }

    private mostrarMensaje2():void{
        console.log("Ey you", this.nombre +" "+ this.apellido +" tu peso es: "+ this.peso)
    }

    asignar(nombreParaetro:string, apellidoParametro:string, pesoParametro:number){

        this.nombre = nombreParaetro
        this.apellido = apellidoParametro
        this.peso = pesoParametro
        this.mostrarMensaje2()
    }
}

var alumno1:Alumno = new Alumno();
alumno1.asignar("Juan","Torres",80);
alumno1.mostrarMensaje();


var alumno2:Alumno = new Alumno();
alumno2.asignar("Sofia","Torres",50);
alumno2.mostrarMensaje();


var alumno3:Alumno = new Alumno();
alumno3.asignar("Daniela","Rodriguez",50);
alumno3.mostrarMensaje();

