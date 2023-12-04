const scanner = require("prompt-sync")({ signit: true })

let cadenaInput = scanner("Introduce un texto -> ")
let novocales = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPKRSTVWXYZ1234567890"
let caracateresTotales = 0
let palabra
let cadena ="" 

while (cadenaInput != "cancelar" ) {
    if (String(cadenaInput)) {
        palabra = String(cadenaInput)
        cadena = (cadena + palabra)
        
    } else {novocales 
        console.log('Solo se aceptan valores alfabeticos ')
    }
    cadenaInput = scanner("Introduce un texto -> ")
}

console.log('Has llegado al final, este es el resultado de la cadena= ' + cadena)

function contar(x){
    for (let i = 0; i < cadenaInput.length; i++){
        for (let j = 0; j < texto.length; j++){
            if( cadenaInput.charAt(j) == novocales.charAt(i)){
                caracateresTotales = caracateresTotales + 1
            }
        }
    }
    }
    console.log("La suma de los carcteres que no son vocales es de: " + caracateresTotales)