/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

let num1 = 23;
let num2 = 5;

//Aritmeticos
const modulo = num1 % num2;  //num1 %= num2;  ---> num1 = num1 % num2;
console.log("Modulo: " + modulo);  

const exponenciacion = num1 ** num2; //Es igual a Math.pow(a, b) //num1 **= num2;  ---> num1 = num1 ** num2;
console.log("Exponenciación: " + exponenciacion);

const suma = num1 + num2; ////num1 += num2;  ---> num1 = num1 + num2;
console.log("Suma: " + suma);

const resta = num1 - num2; //num1 -= num2;  ---> num1 = num1 - num2;
console.log("Resta: " + resta);

const multiplicacion = num1 * num2; //num1 *= num2;  ---> num1 = num1 * num2;
console.log("Multiplicación: " + multiplicacion);

const division = num1 / num2; //num1 /= num2;  ---> num1 = num1 / num2;
console.log("Division: " + division);

//Asignación
let a;
a = num2; // Asignación simple
console.log("Asignación simple a = num2: " + a);

let b = 10;
b += num2; // num1 = num1 + num2; 
console.log("b += num2: " + b);

let c = 10;
c -= num2; // num1 = num1 - num2;
console.log("c -= num2: " + c);

let d = 10;
d *= num2; // num1 = num1 * num2;
console.log("d *= num2: " + d);

let e = 10;
e /= num2; // num1 = num1 / num2;
console.log("e /= num2: " + e);

let f = 10;
f %= num2; // num1 = num1 % num2; 
console.log("f %= num2: " + f);

//Logicos
const and = num1 && num2;
console.log("And: " + and);

const or = num1 || num2;
console.log("Or: " + or);

const not = !num1;
console.log("Not: " + not);

//Comparación
const igualdad = num1 === num2;
console.log("igualdad: " + igualdad);

const desigualdad = num1 !== num2;
console.log("desigualdad: " + desigualdad);

const mayor = num1 > num2;
console.log("mayor: " + mayor);

const menor = num1 < num2;
console.log("menor: " + menor);

const mayorIgual = num1 >= num2;
console.log("mayorIgual: " + mayorIgual);

const menorIgual =  num1 <= num2;
console.log("menorIgual: " + menorIgual);


//ESTRUCTURAS DE CONTROL

//1- Condicionales (if-else, switch)

//if-else
    console.log("\n------- if-else: ---------")
    const edad = 20;
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }

//if-elseif-else
    console.log("\n------- if-elseif-else: --------")
    const hora = 14;
    if (hora < 12) {
        console.log("Buenos días");
    } else if (hora < 18) {
        console.log("Buenas tardes");
    } else {
        console.log("Buenas noches");
    }

//Switch
console.log("\n------- switch: --------")
    let diaSemana = 3;
    switch (diaSemana) {
        case 1:
            diaSemana = "Lunes";
            break;
        case 2:
            diaSemana = "Martes";
            break;
        case 3:
            diaSemana = "Miércoles";
            break;
        case 4:
            diaSemana = "Jueves";
            break;
        case 5:
            diaSemana = "Viernes";
            break;
        default:
            diaSemana = "Fin de semana";
    }
    console.log("Hoy es: " + diaSemana);

//2- Iterativas (while, do-while, foreach, for-in y for-of)

//while
    console.log("\n------- while: --------")
    let contador1 = 0;
    while (contador1 < 5) {
        console.log("Numero " + contador1);
        contador1++;
    }

//do-while
    console.log("\n------- do-while: --------")
    let contador2 = 0;

    do {
        console.log("Numero " + contador2);
        contador2++;
    } while (contador2 < 3);

//for
    //Opción 1: Simple
    console.log("\n------- for simple: --------")
    for (let i = 0; i < 5; i++) {
        console.log("Numero " + i);
    }

    //Opción 2: Con continue y break
    console.log("\n------- for con continue y break: --------")
    for (let i = 0; i < 5; i++) {
        if (i === 2) {
            console.log("Iteración omitida con continue: " + i);
            continue; // Salta la iteración cuando i es igual a 2
        }
        if (i === 4) {
            console.log("Iteración terminada con break: " + i);
            break; // Sale del bucle cuando i es igual a 4
        }
        console.log("Iteración normal: " + i);
    }

//foreach
    console.log("\n------- foreach: --------")
    const nombres = ["Juan", "María", "Pedro"];

    nombres.forEach(function(nombre) {
        console.log("Hola, " + nombre);
    });

//for-in
    console.log("\n------- for in: --------")
    const persona = {
        nombre: "Juan",
        edad: 30,
        ciudad: "Madrid"
    };
    for (let propiedad in persona) {
        console.log(propiedad + ": " + persona[propiedad]);
    }

//for-of
    console.log("\n------- for-of: --------")
    const numeros = [1, 2, 3, 4, 5];
    for (let numero of numeros) {
        console.log(numero);
    }

//3- Excepciones
    console.log("\n------- Excepciones: --------")
    try {
        // Intenta ejecutar un código que puede lanzar una excepción
        const resultado = variableInexistente * 10;
        console.log("El resultado es: " + resultado);
    } catch (error) {
        // Captura y maneja la excepción si ocurre
        console.log("Se ha producido un error: " + error.message);
    } finally {
        // Se ejecuta siempre, independientemente de si se produjo una excepción o no
        console.log("Se ha terminado el proceso");
    }

//PROGRAMA
console.log("\n------- Programa que imprime numeros entre 10 y 55: --------")
for (let i = 10; i <=55; i++) {
    if (i % 2 === 0 && i !== 16  && i % 3 !== 0) {
        console.log(i)
    }
    
}