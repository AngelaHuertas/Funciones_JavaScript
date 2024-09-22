/*let ladoA = 50
let ladoB = 30
let ladoC = 8
let total = ladoA + ladoB + ladoC
if(total === 180 && int){
console.log("triangulo válido")
}else{
console.log("triangulo Inválido")
}*/

let ladoA = Number(prompt(`Medida de lado A: `))
let ladoB = Number(prompt(`Medida de lado B: `))
let ladoC = Number(prompt(`Medida de lado C: `))
let total = ladoA + ladoB + ladoC;

function esTrianguloValido() {
    if (total === 180) {
        alert("Triángulo válido");
    } else {
        alert("Triángulo inválido");
    }
}

esTrianguloValido();