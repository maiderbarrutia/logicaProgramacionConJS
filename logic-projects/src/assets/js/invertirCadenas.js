/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
export function invertirCadenas(palabra) {
    let palabraInvertida = "";

    for (let i = palabra.length-1; i >= 0; i--) {
        const letras = palabra[i];
        palabraInvertida += letras;
        // palabraInvertida = palabraInvertida.concat(letras);
    
    }
    return palabraInvertida;
    
}
// export function invertirCadenas(palabra) {
//     let palabraInvertida = "";

//     for (let i = 0; i < palabra.length; i++) {
//          const letras = palabra[i];
//          palabraInvertida = letras + palabraInvertida;
//     }

//     return palabraInvertida;
// }
