function multiplicar(numero1:number, numero2:number) : number{
    var total = numero2*numero1 
    return total    
}

var numeroResultado:number = multiplicar(2223213213123132123,457256)
var promedio:number = 0

console.log(numeroResultado)


function calcularPromedio(nota1:number, nota2:number, nota3:number): number{
    var total:number = (nota1+nota2+nota3)/3
    return total
}

console.log(calcularPromedio(23,334,3443))