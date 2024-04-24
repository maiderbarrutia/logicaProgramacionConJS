/*
 * EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función.
 *
 * DIFICULTAD EXTRA (opcional): Esto ya está hecho en 07-pilas-colas.js
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido.
 */

//CLASES

// Definición de la clase
class Persona {
    // Constructor para inicializar los atributos
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para imprimir los atributos
    imprimirDatos() {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}`;
    }

    // Método para modificar los atributos
    modificarDatos(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
  
// Creación de una instancia de la clase Persona
let persona = new Persona("Juan", 30);

// Imprimir los atributos utilizando el método imprimirDatos
persona.imprimirDatos();

// Modificar los atributos directamente
persona.nombre = "María";
persona.edad = 25;

//Modificar datos con un método creado
persona.modificarDatos("María", 25);

// Imprimirlos nuevamente
console.log(persona.imprimirDatos());
  

//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")

/*Esto está hecho en el ejercicio 07-pilas-colas.js. En js no hay opción de hacer pilas y colas 
por lo que se utilizan las clases para crear un programa que se asemeje */