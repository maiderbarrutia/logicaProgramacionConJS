/*
 * EJERCICIO:
 * Entiende el concepto de recursividad creando una función recursiva que imprima
 * números del 100 al 0.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el concepto de recursividad para:
 * - Calcular el factorial de un número concreto (la función recibe ese número).
 * - Calcular el valor de un elemento concreto (según su posición) en la 
 *   sucesión de Fibonacci (la función recibe la posición).
 */

//RECURSIVIDAD
let imprimirNumeros = numero => {

    //caso base:  evita que la recursión continúe indefinidamente.
    if (numero === 0) {
        return;
    }

    //Si el número no es cero, la función se llama a sí misma con el argumento numero - 1.
    imprimirNumeros(numero - 1);
    console.log(numero);
};

// imprimirNumeros(100);

//PROGRAMA

console.log("\n ---------------- PROGRAMA -----------------\n")

console.log("\n ---------------- Calcular el factorial de un número: -----------------\n")
/*NUMERO FACTORIAL: En la fórmula Factorial se deben multiplicar todos los números enteros 
y positivos que hay entre el número que aparece en la fórmula y el número  --> 7! = 1 * 2 * 3 * 4 * 5 * 6 * 7 = 5.040 */

console.log("\n ---------------- Factorial sin recursividad: -----------------")
const calcularFactorialSinRecursividad = n =>{
    if (n < 0) {
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
    // console.log(`El factorial de ${n} es: ${factorial}`);
}
console.log(calcularFactorialSinRecursividad(7))

console.log("\n ---------------- Factorial con recursividad: -----------------")
const calcularFactorial = n =>{
    
    // Caso base: si el número es menor a cero
    if (n < 0) {
        return; /* Podría ser "return -1;" lo que indica que no es válido para números negativos. 
        Con return indicamos que lafuncion debe salir sin devolver ningun valor*/
    } 
    if (n === 0) {
        return 1;
    }

    return (n * calcularFactorial(n - 1));
 
}
console.log(calcularFactorial(7))



console.log("\n ---------------- Calcular el valor de un elemento en una sucesión fibonacci : -----------------\n")
/*SUCESIÓN FIBONACCI: comienza por el número 0 seguido del 1, y a partir de estos se suma cada numero con el anterior 
y se agrega a la secuencia, y repetimos la operación -->  0, 1, 1, 2, 3, 5, 8, 13, 21, 34  */
//f(0) = 0, f(1) = 1, f(2) = f(1) + f(0) hasta f(x) = f(x-1) + f(x-2).

console.log("\n ---------------- Fibonacci sin recursividad: -----------------")
const calcularFibonacciSinRecursividad = n =>{
    let fibonacci = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        let numero = fibonacci[i-1] + fibonacci[i-2];
        fibonacci.push(numero);
    }
    return fibonacci


}
console.log(calcularFibonacciSinRecursividad(10));

console.log("\n ---------------- Fibonacci con recursividad: -----------------")
const calcularFibonacci = n => {
    // if (n <= 1) return n;
    if(n === 0) return 0
    if(n === 1) return 1

    return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
}

const numFibo = 10;

function mostrarFiboRecursivo(num) {
    let fiboArray = [];
    for (let i = 0; i < num; i++) {
        let fibo = calcularFibonacci(i);
        fiboArray.push(fibo);
    }
    return fiboArray
}
console.log(mostrarFiboRecursivo(numFibo))
