var esNuevo:boolean =false;
var deseaImprimir:boolean=true;
var juan = "Juan"
var juan2 = "Juan"

var aceptaDescuentos:boolean = (15 + 15 == 20);
var sonNombresIgual:boolean = (juan ==juan2);
var sonAmbosVerdaderos:boolean  = (aceptaDescuentos || sonNombresIgual);
var sonDiferentes:boolean  = (aceptaDescuentos != sonNombresIgual);
var esAlgunaVerdadera:boolean  = (aceptaDescuentos || sonNombresIgual || sonAmbosVerdaderos || sonDiferentes );
var esTodasVerdadera:boolean  = (aceptaDescuentos && sonNombresIgual && sonAmbosVerdaderos && sonDiferentes );


console.log("acepta descuentos? " + aceptaDescuentos);
console.log("Son nombres iguales? " + sonNombresIgual);
console.log("Son variables verdadderas? " + sonAmbosVerdaderos);
console.log("Son variables diferentes? " + sonDiferentes);
console.log("Alguna variable es verdadera? " + esAlgunaVerdadera);
console.log("todas las variables son verdadera? " + esTodasVerdadera);





