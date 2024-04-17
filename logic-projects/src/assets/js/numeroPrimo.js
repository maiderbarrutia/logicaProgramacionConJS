/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Los números primos son aquellos que solo, muy importante, solo son divisibles 
   (al dividirse entre otro da un número entero) entre ellos mismos y el 1. 
 * Hecho esto, imprime los números primos entre 1 y 100.
 */
export function esPrimo(numero) {

    if (numero <= 1) {
        return false;
    }
    
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

export function listaNumerosPrimos() {
    const primos = []
    for (let i = 1; i <= 100; i++) {
        if (esPrimo(i)) {
            primos.push(i)
        }  
    }
    return primos;
}

