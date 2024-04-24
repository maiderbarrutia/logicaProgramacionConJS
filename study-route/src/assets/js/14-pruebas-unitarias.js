/*
 * EJERCICIO:
 * Crea una función que se encargue de sumar dos números y retornar
 * su resultado.
 * Crea un test, utilizando las herramientas de tu lenguaje, que sea
 * capaz de determinar si esa función se ejecuta correctamente.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un diccionario con las siguientes claves y valores:
 * "name": "Tu nombre"
 * "age": "Tu edad"
 * "birth_date": "Tu fecha de nacimiento"
 * "programming_languages": ["Listado de lenguajes de programación"]
 * Crea dos test:
 * - Un primero que determine que existen todos los campos.
 * - Un segundo que determine que los datos introducidos son correctos.
 */

export function sum(num1, num2) {
    return num1 + num2;
}


//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")

export const diccionario = {
    "name": "Maider",
    "age": 37,
    "birth_date": new Date("1985-07-06"),
    "programming_languages": ["JavaScript", "SQL", "Java"]
}
console.log(diccionario.name);
console.log(diccionario.age);
console.log(diccionario.birth_date);
console.log(diccionario.programming_languages);