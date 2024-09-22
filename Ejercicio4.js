/*let numero = 5

if(numero % 2 === 0 ){
    console.log(numero + " es par")
} else {
    console.log(numero + " es impar")
}*/

function numeroPar(){
    let numero = Number(prompt(`Ingrese un número: `))
    if(numero % 2 === 0 ){
        alert(numero + " es par")
    } 
   else {
        alert(numero + " es impar")
    }
}
numeroPar()