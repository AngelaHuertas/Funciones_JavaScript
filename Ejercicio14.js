function calcular(tamañoSandwich, ingrediente1, ingrediente2, ingrediente3, ingrediente4) {  
    let precioBase;

    if (tamañoSandwich === "grande") {
        precioBase = 12000
    } else if (tamañoSandwich === "pequeño") {
        precioBase = 6000
    } else { 
        console.log("opción inválida")
        return
    }

    let costoTotal = precioBase + ingrediente1 + ingrediente2 + ingrediente3 + ingrediente4
    return costoTotal
} 

const jalapeño = 0
const tocineta = 3000
const pavo = 3000
const queso = 2500

let tamañoSandwich = "grande"
let ingrediente1 = jalapeño
let ingrediente2 = tocineta
let ingrediente3 = pavo
let ingrediente4 = queso

let costoTotal = calcular(tamañoSandwich, ingrediente1, ingrediente2, ingrediente3, ingrediente4)
console.log(`El valor de su sándwich es de $${costoTotal}`)