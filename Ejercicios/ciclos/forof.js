var usuarios;
usuarios = [
    {
        nombre: "Jhonny",
        apellidos: "Gomez",
        perfil: 12
    },
    {
        nombre: "Karen",
        apellidos: "Olaguibel",
        perfil: 12
    },
    {
        nombre: "Maia",
        apellidos: "rossi",
        perfil: 12
    },
    {
        nombre: "Haritol",
        apellidos: "Morales",
        perfil: 12
    }
];
for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
    var user = usuarios_1[_i];
    console.log("Nombre del usuario es: " + user.nombre);
}
for (var indice = 0; indice < usuarios.length; indice++) {
    console.log("Apellido del ususario es: " + usuarios[indice].apellidos);
}
