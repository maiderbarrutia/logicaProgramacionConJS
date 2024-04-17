/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */
export function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        const number = i;
        if (number % 3 === 0 && number % 5 === 0) {
            console.log(number + " fizzbuzz");
        } else if (number % 3 === 0) {
            console.log(number + " fizz");
        } else if (number % 5 === 0) {
            console.log(number + " buzz");
        } else {
            console.log(number);
        }
    }
}

/* Encontrar de los números del 1 al 100 todos los que son pares */
export function numerosPares() {
    for (let i = 1; i <= 100; i++) {
        const number = i;
        if (number % 2 === 0) {
            console.log(number + " Es par");
        }  else {
            console.log(number);
        }
    }
}