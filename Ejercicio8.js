function calcularCosto( dias ){
    let costo   

        if (dias === 15) {
                costo = "18.000"
        } else if (dias === 30) {
                costo = "35.000"
        } else if (dias === 90) {
                costo = "86.000"
        } else {
                costo = 'No existe mensualidad establecida'

        } return costo

}

let diasCliente = Number(prompt(`Ingrese mensualidad que desea por días (15 días, 30 días, 90 días): `))
let costoCliente = calcularCosto(diasCliente)

alert(`El costo para ${diasCliente} días es: $${costoCliente}`)

