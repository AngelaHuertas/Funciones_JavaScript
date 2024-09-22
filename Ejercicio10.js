/*let numeroDeCopias = 1800


let precioDeCopias = 120
let precioDeCopias2 = 100
let precioDeCopias3 = 80
let precioDeCopias4 = 50

if(numeroDeCopias <= 499){
console.log(`Su número de copias es ${numeroDeCopias} el precio por copia es de ${precioDeCopias} y el precio total es de ${numeroDeCopias*precioDeCopias}.`)
} else if(numeroDeCopias >=500 && numeroDeCopias<= 749 ){
    console.log(`Su número de copias es ${numeroDeCopias} el precio por copia es de ${precioDeCopias2} y el precio total es de ${numeroDeCopias*precioDeCopias2}.`)
} else if(numeroDeCopias >= 750 && numeroDeCopias <= 999){
    console.log(`Su número de copias es ${numeroDeCopias} el precio por copia es de ${precioDeCopias3} y el precio total es de ${numeroDeCopias*precioDeCopias3}.`)
} else if(numeroDeCopias >= 1000){
    console.log(`Su número de copias es ${numeroDeCopias} el precio por copia es de ${precioDeCopias4} y el precio total es de ${numeroDeCopias*precioDeCopias4}.`)
}*/

let precioDeCopias = 120;
let precioDeCopias2 = 100;
let precioDeCopias3 = 80;
let precioDeCopias4 = 50;

function calcularPrecioCopias(numeroDeCopias) {
    
    if (numeroDeCopias <= 499) {
        alert(`Su número de copias es ${numeroDeCopias}, el precio por copia es de ${precioDeCopias} y el precio total es de ${numeroDeCopias * precioDeCopias}.`);
    } else if (numeroDeCopias >= 500 && numeroDeCopias <= 749) {
        alert(`Su número de copias es ${numeroDeCopias}, el precio por copia es de ${precioDeCopias2} y el precio total es de ${numeroDeCopias * precioDeCopias2}.`);
    } else if (numeroDeCopias >= 750 && numeroDeCopias <= 999) {
        alert(`Su número de copias es ${numeroDeCopias}, el precio por copia es de ${precioDeCopias3} y el precio total es de ${numeroDeCopias * precioDeCopias3}.`);
    } else if (numeroDeCopias >= 1000) {
        alert(`Su número de copias es ${numeroDeCopias}, el precio por copia es de ${precioDeCopias4} y el precio total es de ${numeroDeCopias * precioDeCopias4}.`);
    }
}

calcularPrecioCopias(Number(prompt(`Numero de copias: `)));

