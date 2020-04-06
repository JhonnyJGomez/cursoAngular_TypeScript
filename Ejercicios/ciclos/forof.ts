interface listadoDeUsuarios{
        nombre:string,
        apellidos:string,
        perfil:number
}

var usuarios:Array<listadoDeUsuarios>; 


usuarios = [
    {
        nombre:"Jhonny",
        apellidos:"Gomez",
        perfil:12
    },
    {
        nombre:"Karen",
        apellidos:"Olaguibel",
        perfil:12
    },
    {
        nombre:"Maia",
        apellidos:"rossi",
        perfil:12
    },
    {
        nombre:"Haritol",
        apellidos:"Morales",
        perfil:12
    }
]


for (let user of  usuarios){
    console.log("Nombre del usuario es: " + user.nombre)
}

for(var indice:number=0;indice < usuarios.length; indice++){
    console.log("Apellido del ususario es: " + usuarios[indice].apellidos)
}

