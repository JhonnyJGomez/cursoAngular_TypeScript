var listaDeObjetos;
listaDeObjetos = [{
        nombre: "Vaso",
        objetivo: "Mantener agua en su interior"
    },
    {
        nombre: "Tenedor",
        objetivo: "Utencilio para comer"
    },
    {
        nombre: "celular",
        objetivo: "comunicar"
    }
];
for (var posicion in listaDeObjetos) {
    console.log(listaDeObjetos[posicion].nombre + "=" + listaDeObjetos[posicion].objetivo);
}
