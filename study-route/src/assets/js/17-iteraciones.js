/*
 * EJERCICIO:
 * Utilizando tu lenguaje, emplea 3 mecanismos diferentes para imprimir
 * números del 1 al 10 mediante iteración.
 *
 * DIFICULTAD EXTRA (opcional):
 * Escribe el mayor número de mecanismos que posea tu lenguaje
 * para iterar valores. ¿Eres capaz de utilizar 5? ¿Y 10?
 */

//ITERACIONES
console.log("\n ---------------- ITERACIONES -----------------\n")

console.log("\n ---------------- for: -----------------\n")
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}


console.log("\n ---------------- while: -----------------\n")
let i = 1;
while (i <= 10) {
    // console.log(i);
    i++;
}


console.log("\n ---------------- do...while: -----------------\n")
let j = 1;
do {
    // console.log(j);
    j++;
} while (j <= 10);


console.log("\n ---------------- for...of: -----------------\n")
//Modo 1:
for (const num of Array.from({ length: 10 }, (_, index) => index + 1)) {
    // console.log(num);
}

//Modo 2:
const numeros = [];
for (let i = 1; i <= 10; i++) {
    // numeros.push(i);
}

for (const num of numeros) {
    // console.log(num);
}


console.log("\n ---------------- foreach: -----------------\n")
//Modo 1:
Array.from({ length: 10 }, (_, index) => index + 1).forEach((num) => {
    // console.log(num);
});

//Modo 2:
const numeros2 = [];
for (let i = 1; i <= 10; i++) {
    // numeros2.push(i);
}

numeros2.forEach((num) => {
    // console.log(num);
});


console.log("\n ---------------- map: -----------------\n")
//Modo 1:
Array.from({ length: 10 }, (_, index) => index + 1).map((num) => {
    // console.log(num);
});

//Modo 2:
const numeros3 = [];
for (let i = 1; i <= 10; i++) {
    numeros3.push(i);
}

numeros3.map((num) => {
    // console.log(num);
});


console.log("\n ---------------- Array.prototype.keys: -----------------\n")
//Modo 1:
for (const key of Array.from({ length: 10 }).keys()) {
    // console.log(key + 1);
}

//Modo 2:
const numeros4 = Array(10).fill(0);
for (const key of numeros4.keys()) {
    // console.log(key + 1);
}


console.log("\n ---------------- Función recursiva: -----------------\n")
function imprimirRecursivo(n = 1) {
    if (n > 10) return;
    console.log(n);
    imprimirRecursivo(n + 1);
}

// imprimirRecursivo();

console.log("\n ---------------- Reduce: -----------------\n")
//Modo 1:
Array.from({ length: 10 }, (_, index) => index + 1).reduce((_, num) => {
    // console.log(num);
}, 0);

//Modo 2:
Array(10).fill(0).map((_, index) => index + 1).reduce((acc, num) => {
    // console.log("acumulador: " + num);
    return acc; // Retornas el acumulador tal cual, si decides usarlo.
}, []);



//Modo 3:
const numeros5 = [];
for (let i = 1; i <= 10; i++) {
    numeros5.push(i);
}

numeros5.reduce((_, num) => {
    // console.log(num);
    return null;
}, null);

//Modo 4:
const numeros6 = [];
for (let i = 1; i <= 10; i++) {
    numeros6.push(i);
}

numeros6.reduce((acc, num) => {
    // console.log("acumulador for: " + num);
    return acc;
}, []);

console.log("\n ---------------- Generadores: -----------------\n")
function* generadorNumeros() {
    for (let i = 1; i <= 10; i++) {
        yield i;
    }
}

for (const num of generadorNumeros()) {
    // console.log(num);
}

console.log("\n ---------------- setTimeout: -----------------\n")
let l = 1;
function imprimirConDelay() {
    if (l > 10) return;
    console.log(l++);
    setTimeout(imprimirConDelay, 100); // Llama la función nuevamente después de 100ms
}

// imprimirConDelay();

console.log("\n ---------------- Promise: -----------------\n")
function imprimirConPromesa(n = 1) {
    if (n > 10) return;
    return Promise.resolve().then(() => {
        console.log(n);
        return imprimirConPromesa(n + 1);
    });
}

// imprimirConPromesa();

console.log("\n ---------------- Objetos iterables personalizados: -----------------\n")
const rango = {
    desde: 1,
    hasta: 10,
    [Symbol.iterator]() {
        let actual = this.desde;
        const fin = this.hasta;

        return {
            next() {
                if (actual <= fin) {
                    return { value: actual++, done: false };
                }
                return { done: true };
            },
        };
    },
};

for (const num of rango) {
    // console.log(num);
}
