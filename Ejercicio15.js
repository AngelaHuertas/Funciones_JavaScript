function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min )
} 


let cartasUsuario = [aleatorio(1,10), aleatorio(1,10)]
let cartasComputadora = [aleatorio(1,10), aleatorio(1,10)]
alert("Has tomado dos cartas") 

let terceraCartaUsuario = aleatorio(1,10) 
let terceraCartaComutadora = aleatorio(1,10)
alert("Has tomado tu tercera carta")


function calcularSuma(cartas) {
    return cartas.reduce((a, b) => a + b, 0);
}

let carUs = cartasUsuario +","+ terceraCartaUsuario
let carCom = cartasComputadora+","+terceraCartaComutadora


let a = cartasUsuario.reduce((a, b) => a + b, 0 + terceraCartaUsuario);
let b = cartasComputadora.reduce((a, b) => a + b, 0 + terceraCartaComutadora);

function determinarGanador(usuario, computadora) {
    const puntosUsuario = calcularSuma(usuario)
    const puntosComputadora = calcularSuma(computadora)

    if (puntosUsuario > 21 && puntosComputadora > 21) {
        return "Ambos pierden"
    } else if (puntosUsuario > 21) {
        return "Computadora gana"
    } else if (puntosComputadora > 21) {
        return "Usuario gana"
    } else if (puntosUsuario === puntosComputadora) {
        return "Empate"
    } else if (puntosUsuario > puntosComputadora) {
        return "Usuario gana"
    } else {
        return "Computadora gana"
    }
}
alert("¿Quieres revelar tus cartas?")

alert(determinarGanador(cartasUsuario, cartasComputadora) + `${". "}Tus cartas son: ${carUs} y Tu puntuaje es: ${a}. Las cartas del computador son: ${carCom} y su puntuaje es: ${b}`)