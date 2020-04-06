var numero = 2;
var tipoDeMenu;
(function (tipoDeMenu) {
    tipoDeMenu[tipoDeMenu["canciones"] = 1] = "canciones";
    tipoDeMenu[tipoDeMenu["albums"] = 2] = "albums";
    tipoDeMenu[tipoDeMenu["perfil"] = 3] = "perfil";
})(tipoDeMenu || (tipoDeMenu = {}));
switch (numero) {
    case 25: {
        console.log("--> 25");
        break;
    }
    case 16: {
        console.log("--> 16");
        break;
    }
    case 10: {
        console.log("--> 10");
        break;
    }
    default: {
        console.log("no es ni 25, ni 16, ni 10");
    }
}
switch (numero) {
    case tipoDeMenu.canciones: {
        console.log("Canciones");
        break;
    }
    case tipoDeMenu.albums: {
        console.log("albums");
        break;
    }
    case tipoDeMenu.perfil: {
        console.log("perfil");
        break;
    }
    default: {
        console.log("Menu invalido");
    }
}
