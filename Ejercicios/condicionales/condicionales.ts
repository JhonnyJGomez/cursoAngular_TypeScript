var aplicarDescuento:number = 0
var imprimir:boolean = true

if (aplicarDescuento > 0){
    console.log("aplicar descuento")
}else{
    console.log("NO aplicar descuento")
}

if (imprimir){
    console.log("estamos imprimiendo")
}else if(aplicarDescuento<0){
    console.log("No estamos imprimiendo y tampoco aplica descuento")
}