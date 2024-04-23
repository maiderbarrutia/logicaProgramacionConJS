/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 */

//FUNCIONES

console.log("\n------- Función sin parámetros ni retorno: ---------")
function saludar() {
    console.log("¡Hola, mundo!");
}

saludar();

console.log("\n------- Función con un parámetro pero sin retorno: ---------")
function saludar2(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

saludar2("Juan");


console.log("\n------- Función con uno o varios parámetros y con retorno: ---------")
function sumar(a, b) {
    return a + b;
}

const resultadoSuma = sumar(5, 3);
console.log("La suma es: " + resultadoSuma);

console.log("\n------- Función que llama a otra función: ---------")
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}

function saludar3() {
    mostrarMensaje("¡Hola, mundo!");
}

saludar3();

console.log("\n------- Función con una variable local y una variable global: ---------")
let globalVariable = "Variable global";

function mostrarVariables() {
    let localVariable = "Variable local";
    console.log("Variable global: " + globalVariable);
    console.log("Variable local: " + localVariable);
}

mostrarVariables();
console.log("Variable global fuera de la función: " + globalVariable);
// La siguiente línea dará un error porque localVariable está fuera del alcance
//console.log("Variable local fuera de la función: " + localVariable);

console.log("\n------- Función que retorna otra función (funciones dentro de funciones): ---------")
function crearSaludo(saludo) {
    return function(nombre) {
        console.log(saludo + ", " + nombre + "!");
    };
}

const decirHola = crearSaludo("¡Hola");
decirHola("Juan");

console.log("\n------- Función por expresión, lo metemos dentro de una variable: ---------")
const saludo = function saludar4() {
    return "Hola";
};
console.log(saludo());

console.log("\n------- Arrow function: ---------")
const sumar2 = (a, b) => {
    return a + b;
}  //Se puede hacer así tambien: const sumar = (a, b) => a + b; (No hace falta poner el return)

const resultadoSuma2 = sumar2(5, 3);
console.log("La suma es: " + resultadoSuma2);

console.log("\n------- Callbacks: ---------")
const fB = function () {
    console.log("Función B ejecutada.");
};
const fA = function (callback) {
    callback();
};
fA(fB);

  console.log("\n------- Funciones autoejecutables: ---------")
// Función autoejecutable
// (function () {
//     console.log("Hola!!");
// })();

// Función autoejecutable con parámetros
// (function (name) {
//     console.log(`¡Hola, ${name}!`);
// })("Manz");

//Dentro de una variable
const f = (function (name) {
    return `¡Hola, ${name}!`;
})("Manz");

console.log(f); // '¡Hola, Manz!`

console.log("\n------- Funciones recursivas: ---------")
function cuentaAtras(numero) {
    // Condición base: Si el número que recibe es menor de 0 entonces salimos de la función
    if (numero < 0) { return } //Es importante poner la condición sino estaría en bucle infinito
  
    // Si el número era mayor o igual a 0, lo mostramos
    console.log(numero)
  
    // Y llamamos a la función con el número anterior
    cuentaAtras(numero - 1)
  }
  cuentaAtras(3)


  //PROGRAMA
  console.log("\n------- función que reciba dos parámetros de tipo cadena de texto y retorne un número: ---------")
  function vecesImpresoNumero(param1, param2) {
    let contador = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 ===  0 ) {
            console.log(`${i}: ${param1} ${param2}`);
        }else if(i % 3 === 0){
            console.log(`${i}: ${param1}`);
        } else if(i % 5 === 0) {
            console.log(`${i}: ${param2}`);
        }
        else{
            console.log(`${i}`);
            contador++;
        }
    }
    return contador;
  }
  console.log(vecesImpresoNumero("texto1", "texto2"));

  
