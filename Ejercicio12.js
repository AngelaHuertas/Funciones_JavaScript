/*let numeroDeModelo = 119

if (numeroDeModelo === 119 || 
    numeroDeModelo === 179 || 
    numeroDeModelo === 189 || 
    numeroDeModelo === 195 || 
    numeroDeModelo === 221 || 
    numeroDeModelo === 780) {
console.log("el automóvil esta defectuoso, llevar a garantía")
}
else{
 console.log("el automóvil no esta defectuoso")
}*/

function verificarAutomovil(numeroDeModelo) {
    if (numeroDeModelo === 119 || 
        numeroDeModelo === 179 || 
        numeroDeModelo === 189 || 
        numeroDeModelo === 195 || 
        numeroDeModelo === 221 || 
        numeroDeModelo === 780) {
        alert("El automóvil está defectuoso, llevar a garantía");
    } else {
        alert("El automóvil no está defectuoso");
    }
}

verificarAutomovil(Number(prompt(`Ingrese numero de modelo: `)));
