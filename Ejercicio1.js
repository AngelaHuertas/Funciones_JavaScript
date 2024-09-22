
/*let nombre = "Luis"
let horasLunes = 5
let horasMartes = 6
let horasMiercoles = 5
let horasJueves = 12
let horasViernes = 5
let horasSabado = 3
let totalDeHoras = (horasLunes + horasMartes + horasMiercoles + horasJueves + horasViernes + horasSabado)

let resp = (horasLunes <= 10)? horasLunes*30000 : horasLunes*33000
let resp2 = (horasMartes <= 10)? horasMartes*30000 : horasMartes*33000
let resp3 = (horasMiercoles <= 10)? horasMiercoles*30000 : horasMiercoles*33000
let resp4 = (horasJueves <= 10)? horasJueves*30000 : horasJueves*33000
let resp5 = (horasViernes <= 10)? horasViernes*30000 : horasViernes*33000
let resp6 = (horasSabado <= 10)? horasSabado*30000 : horasSabado*33000


console.log(`Señor/a ${nombre} el número de horas es ${totalDeHoras} y su salario equivale a ${resp + resp2 + resp3 + resp4 + resp5 +resp6}`)*/

    let nombre = prompt (`Ingrese su nombre: `)
    
    function calcularHora (horasSemanales, salario){

        horasSemanales = Number(prompt(`Ingrese numero de horas trabajadas: `))
        if (horasSemanales >= 10){
         salario = horasSemanales * 33000
        }else if(horasSemanales <= 10){
         salario = horasSemanales * 30000
        }

        alert(`Señor/a ${nombre} el número de horas es ${horasSemanales} y su salario equivale a ${salario}`) 
    }

    calcularHora()
   
    