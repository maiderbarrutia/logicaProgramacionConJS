/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
export function sonAnagramas(palabra1, palabra2) { //llenaba, ballena
    const palabraLimpia1 = limpiarPalabra(palabra1);
    const palabraLimpia2 = limpiarPalabra(palabra2);
    if (longitudPalabra(palabraLimpia1) !== longitudPalabra(palabraLimpia2)) {
        return false;
    }
    const letrasOrdenadas1 = ordenarLetras(palabraLimpia1)
    const letrasOrdenadas2 = ordenarLetras(palabraLimpia2)
    for (let i = 0; i < letrasOrdenadas1.length; i++) {
        if (letrasOrdenadas1[i] !== letrasOrdenadas2[i]) {
            return false;
        }
        
    }
    return true;
}

//pasar las palabras a minusculas las dos y quitar espacios si los hubiera al final y al inicio
function limpiarPalabra(palabra) {
    return palabra.toLowerCase().replace(/\s/g, "");
}
    
    //verificar longitud
function longitudPalabra(palabra) {
    return palabra.length;
}
    //contar las letras de ambas palabras
function ordenarLetras(palabra) {
    //Opcion 1:
    const letrasPalabra = [];
    for (let i = 0; i < palabra.length; i++) {
        letrasPalabra.push(palabra[i]);
    }

    //Opción 2:
    // const letrasPalabra = palabra.split('');

    letrasPalabra.sort();
    return letrasPalabra;
}
