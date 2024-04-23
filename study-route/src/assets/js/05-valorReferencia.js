/*
 * EJERCICIO:
 * - Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
 *   su tipo de dato.
 * - Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
 *   "por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
 * (Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// VALOR Y REFERENCIA

console.log("\n ---------------- ASIGNACIÓN DE VARIABLES -----------------\n")
console.log("\n ---------------- Por valor : -----------------\n")
/* POR VALOR:
--Para tipos primitivos como números, cadenas de caracteres y booleanos.
--Se copia el valor almacenado en la variable.
--Los cambios en la copia no afectan a la variable original.
*/

//Números:
let num1 = 10;
let num2 = num1; // Se copia el valor de 'num1' en 'num2'
num2 = 20;       // Cambios en 'num2' no afectan a 'num1'
console.log(num1); // Salida: 10

//Cadenas de Caracteres:
let str1 = "Hello";
let str2 = str1;
str2 = "World";
console.log(str1); // Salida: "Hello"

//Booleanos:
let bool1 = true;
let bool2 = bool1;
bool2 = false;
console.log(bool1); // Salida: true

console.log("\n ---------------- Por referencia : -----------------\n")
/*
POR REFERENCIA:
Para objetos, matrices y funciones.
Se pasa una referencia a la ubicación de memoria donde se almacena el objeto.
Las variables apuntan al mismo objeto, por lo que los cambios se reflejan en ambas variables.
 */

//Objetos
let obj1 = { a: 1 };
let obj3 = obj1;
obj3.a = 2;
console.log(obj1.a); // Salida: 2

//Matrices
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2[0] = 0;
console.log(arr1[0]); // Salida: 0

//Funciones
let func1 = function() { console.log("Function 1"); };
let func2 = func1;
func2 = function() { console.log("Function 2"); };
func1(); // Salida: "Function 1"

console.log("\n ---------------- PASAR FUNCIONES -----------------\n")
console.log("\n ---------------- Por valor : -----------------\n")
/*
POR VALOR:
Para tipos primitivos.
Se pasa una copia del valor a la función, los cambios en los parámetros no afectan a las variables originales.
*/

//Números:
function modifyNumber(num) {
    num = 20;
}
let num3 = 10;
modifyNumber(num3);
console.log(num3); // Salida: 10

//Cadenas de caracteres:
function modifyString(str) {
    str = "World";
}
let str3 = "Hello";
modifyString(str3);
console.log(str3); // Salida: "Hello"

//Booleanos
function modifyBoolean(bool) {
    bool = false;
}
let bool3 = true;
modifyBoolean(bool3);
console.log(bool3); // Salida: true


console.log("\n ---------------- Por referencia : -----------------\n")
/*
POR REFERENCIA:
Para objetos, matrices y funciones.
Se pasa una referencia a la ubicación de memoria del objeto.
Los cambios en los parámetros afectan a los objetos originales.
*/

//Objetos:
function modifyObject(obj) {
    obj.a = 2;
}
let obj2 = { a: 1 };
modifyObject(obj2);
console.log(obj2.a); // Salida: 2

//Matrices
function modifyArray(arr) {
    arr[0] = 0;
}
let arr3 = [1, 2, 3];
modifyArray(arr3);
console.log(arr3[0]); // Salida: 0

//Funciones
function modifyFunction(func) {
    func = function() { console.log("Modified Function"); };
}
let func3 = function() { console.log("Original Function"); };
modifyFunction(func3);
func3(); // Salida: "Original Function"




//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")

console.log("\n ---------------- Por valor : -----------------\n")
let numOne = 20;
let numTwo = 12;
console.log("NumOne: " + numOne + ", NumTwo: " + numTwo);

function valor(paramValor1, paramValor2) {
    let param = paramValor1;
    paramValor1 = paramValor2;
    paramValor2 = param;

    return [paramValor1, paramValor2]
}
console.log(valor(numOne, numTwo));

console.log("DESPUÉS DE LA FUNCIÓN ---> NumOne: " + numOne + ", NumTwo: " + numTwo);


console.log("\n ---------------- Por referencia : -----------------\n")
let objOne = { value: 14 };
let objTwo = { value: 85 };
console.log("objOne: " + objOne.value + ", objTwo: " + objTwo.value);

function referencia(paramReferencia1, paramReferencia2) {
    let param = paramReferencia1.value;
    paramReferencia1.value = paramReferencia2.value;
    paramReferencia2.value = param;

    return [paramReferencia1, paramReferencia2];
}
console.log(referencia(objOne, objTwo));

console.log("DESPUÉS DE LA FUNCIÓN ---> objOne: " + objOne.value + ", objTwo: " + objTwo.value);