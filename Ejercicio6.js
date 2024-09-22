/*let num1 = 101
let num2 = 20
let num3 = 30

if (num1 >= num2 && num1 >= num3){
    console.log(num1 + " es el mayor numero" )

} else if (num2 >= num1 && num2 >= num3){
    console.log(num2 + " es el mayor numero" )

} else {
    console.log(num3 + " es el mayor numero" )
}*/

let num1 = Number(prompt(`Ingrese un primer número: `))
let num2 = Number(prompt(`Ingrese un sengundo número: `))
let num3 = Number(prompt(`Ingrese un tercer número: `))

function tipoNum(){

    if (num1 >= num2 && num1 >= num3){
        alert(num1 + " es el mayor numero" )
    
    } else if (num2 >= num1 && num2 >= num3){
        alert(num2 + " es el mayor numero" )
    
    } else {
        alert(num3 + " es el mayor numero" )
    }
}
tipoNum()