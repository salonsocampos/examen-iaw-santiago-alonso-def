const ejercicio1 = require("prompt-sync")({ signit: true })
const resultadoDeldado = Math.floor (Math.random()*7)
const ndados= ejercicio1("¿Cuantos dados quieres tirar? ->")

numerodados=(ndados)

function numerodados(x){
    let resultadoDeldado=x
    console.log ("Has tirado" + ndados +" de 6 caras")
}
function resultadodado(x){
    ndados= numerodados
}

console.log("Los resultados han sido :" + resultadoDeldado )
