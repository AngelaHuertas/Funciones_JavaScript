/*let numero = -1

if(numero < 0){
console.log(`El número es negativo`)
} 
else {
console.log(`El número es positivo`)
}*/

function darTipo(){
    let numero = Number(prompt(`Ingrese un número`))
    if(numero < 0){
        alert(`El número es negativo`)
        }else if (numero === 0){
            alert(`el numero es neutro`)
        } else {
        alert(`El número es positivo`)
        } 

}

darTipo()