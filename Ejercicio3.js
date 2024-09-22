/*function calcularCosto(tipoLavadora, horas, cantidad) {
    const precioGrande = 4000
    const precioPequena = 3000
    let costoTotal = 0
  
    if (tipoLavadora === 1) {
      costoTotal = precioGrande * horas * cantidad
    } else if (tipoLavadora === 2) {
      costoTotal = precioPequena * horas * cantidad
    } else {
      console.log("Tipo de lavadora no válido. Use 1 para grande y 2 para pequeña.")
    }
  
    if (cantidad >= 3) {
      const descuento = costoTotal * 0.03
      costoTotal -= descuento
    }
  
    return costoTotal
  }
  
  
  let tipoLavadora = 2
  let horas = 5
  let cantidad = 3
  
  const costo = calcularCosto(tipoLavadora, horas, cantidad)
  console.log(`El costo total a pagar es: ${costo} pesos`)*/


  let tipoLavadora = Number(prompt(`Eliga los tipos de lavadora: 1 si es Lavadora grande y 2 si es pequeña`))
  let horas = Number(prompt(`Cantidad de horas que desea utilizarla: `))
  let cantidad = Number(prompt(`Cuantas lavadoras desea: `))

function calcularCosto(tipoLavadora, horas, cantidad) {
    const precioGrande = 4000
    const precioPequena = 3000
    let costoTotal = 0


    if (tipoLavadora === 1) {
      costoTotal = precioGrande * horas * cantidad
    } else if (tipoLavadora === 2) {
      costoTotal = precioPequena * horas * cantidad
    } else {
      alert("Tipo de lavadora no válido. Use 1 para grande y 2 para pequeña.")
    }
  
    if (cantidad >= 3) {
      const descuento = costoTotal * 0.03
      costoTotal -= descuento
    }
  
    return costoTotal
    
  }

  const costo = calcularCosto(tipoLavadora, horas, cantidad)
  alert(`El costo total a pagar es: ${costo} pesos`)