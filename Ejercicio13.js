
function calcularCosto(operador) {
    let costoFijo
    let valorMinutoInternacional
    let valorPaqueteDatos
    
    if (operador === "Tigo") {
        costoFijo = 45000
        valorMinutoInternacional = 200
        valorPaqueteDatos = 12000}
    
    else if (operador === "Claro") {
        costoFijo = 30000
        valorMinutoInternacional = 100
        valorPaqueteDatos = 18000}
    
    else if (operador === "Movistar") {
        costoFijo = 40000
        valorMinutoInternacional = 250
        valorPaqueteDatos = 8000}
    
    else { 
        console.log("operador invalido")
    
        return
    } 
    
    
    let costoMinutos = minutosConsumidos * valorMinutoInternacional
    let costoTotal =  costoMinutos
    
    return costoTotal
    }
    
    let minutosConsumidos = 800
    let operador = "Movistar"
    let total = calcularCosto(operador, minutosConsumidos)
    
    console.log(`El total de minutos consumidos es ${minutosConsumidos} y su costo es de ${total}`)