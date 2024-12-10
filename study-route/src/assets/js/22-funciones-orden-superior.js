/*
 * EJERCICIO:
 * Explora el concepto de funciones de orden superior en tu lenguaje 
 * creando ejemplos simples (a tu elección) que muestren su funcionamiento.
 *
 * DIFICULTAD EXTRA (opcional):
 * Dada una lista de estudiantes (con sus nombres, fecha de nacimiento y 
 * lista de calificaciones), utiliza funciones de orden superior para
 * realizar las siguientes operaciones de procesamiento y análisis:
 * - Promedio calificaciones: Obtiene una lista de estudiantes por nombre
 *   y promedio de sus calificaciones.
 * - Mejores estudiantes: Obtiene una lista con el nombre de los estudiantes
 *   que tienen calificaciones con un 9 o más de promedio.
 * - Nacimiento: Obtiene una lista de estudiantes ordenada desde el más joven.
 * - Mayor calificación: Obtiene la calificación más alta de entre todas las
 *   de los alumnos.
 * - Una calificación debe estar comprendida entre 0 y 10 (admite decimales).
 */

/*
 * EJEMPLOS SIMPLES DE FUNCIONES DE ORDEN SUPERIOR EN JAVASCRIPT
 */

// 1. `map`: Transforma elementos de un array
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(num => num ** 2); 
console.log("Ejemplo de map: ", cuadrados); // [1, 4, 9, 16, 25]

// 2. `filter`: Filtra elementos de un array según una condición
const mayoresQueTres = numeros.filter(num => num > 3);
console.log("Ejemplo de filter: ", mayoresQueTres); // [4, 5]

// 3. `reduce`: Acumula valores en un solo resultado
const sumaTotal = numeros.reduce((acum, num) => acum + num, 0);
console.log("Ejemplo de reduce: ", sumaTotal); // 15

// 4. `sort`: Ordena elementos de un array
const numerosDesordenados = [5, 2, 9, 1, 4];
const numerosOrdenados = numerosDesordenados.sort((a, b) => a - b);
console.log("Ejemplo de sort: ", numerosOrdenados); // [1, 2, 4, 5, 9]

// 5. `forEach`: Ejecuta una función por cada elemento (sin devolver nada)
numeros.forEach(num => console.log("Ejemplo de forEach: ", num * 2)); // Muestra el doble de cada número

// 6. `find`: Encuentra el primer elemento que cumpla con una condición
const primerMayorQueTres = numeros.find(num => num > 3);
console.log("Ejemplo de find: ", primerMayorQueTres); // 4

// 7. `every`: Verifica si todos los elementos cumplen una condición
const todosMayoresQueCero = numeros.every(num => num > 0);
console.log("Ejemplo de every: ", todosMayoresQueCero); // true

// 8. `some`: Verifica si al menos un elemento cumple una condición
const algunMayorQueCuatro = numeros.some(num => num > 4);
console.log("Ejemplo de some: ", algunMayorQueCuatro); // true

// 9. flat: Aplana un array eliminando niveles de anidamiento según la profundidad indicada
const matriz = [1, [2, 3], [4, [5]]];
const plano = matriz.flat(2);
console.log("Flat: ", plano); // [1, 2, 3, 4, 5]

// 10. `flatMap`: Aplana y transforma elementos de un array en un solo paso
const arraysAnidados = [[1, 2], [3, 4], [5]];
const aplanados = arraysAnidados.flatMap(arr => arr.map(num => num * 2)); // Aplana y multiplica
console.log("Ejemplo de flatMap: ", aplanados); // [2, 4, 6, 8, 10]

// 11. `includes`: Verifica si un elemento está en el array
const contieneCuatro = numeros.includes(4);
console.log("Ejemplo de includes: ", contieneCuatro); // true

// 12. findIndex: Encuentra el índice del primer elemento que cumple con una condición
const indice = numeros.findIndex(num => num > 3);
console.log("FindIndex: ", indice); // 3

// 13. splice: Permite agregar, eliminar o reemplazar elementos en un array
const nums = [1, 2, 3, 4, 5];
nums.splice(1, 2); // Elimina 2 elementos desde el índice 1
console.log("Splice (eliminar): ", nums); // [1, 4, 5]
nums.splice(1, 0, 2, 3); // Inserta 2 y 3 en el índice 1
console.log("Splice (insertar): ", nums); // [1, 2, 3, 4, 5]

// 14. slice: Extrae una porción del array sin modificar el original
const subarray = numeros.slice(1, 3);
console.log("Slice: ", subarray); // [2, 3]

// 15. concat: Combina dos o más arrays en uno nuevo
const masNumeros = [6, 7, 8];
const concatenados = numeros.concat(masNumeros);
console.log("Concat: ", concatenados); // [1, 2, 3, 4, 5, 6, 7, 8]

// 16. indexOf y lastIndexOf: Encuentran el índice de la primera y última aparición de un elemento
const numsRepetidos = [1, 2, 3, 2, 1];
console.log("IndexOf: ", numsRepetidos.indexOf(2)); // 1
console.log("LastIndexOf: ", numsRepetidos.lastIndexOf(2)); // 3

// 17. join: Convierte los elementos del array en una cadena, separados por un delimitador
const palabras = ["Hola", "mundo", "JavaScript"];
const frase = palabras.join(" ");
console.log("Join: ", frase); // "Hola mundo JavaScript"

// 18. reverse: Invierte el orden de los elementos en un array
const invertidos = numeros.reverse();
console.log("Reverse: ", invertidos); // [5, 4, 3, 2, 1]

// 19. keys: Devuelve un iterador con los índices del array
const keys = numeros.keys();
for (let key of keys) {
    console.log("Key: ", key); // Índices: 0, 1, 2, 3, 4
}

// 20. values: Devuelve un iterador con los valores del array
const valores = numeros.values();
for (let value of valores) {
    console.log("Value: ", value); // Valores: 5, 4, 3, 2, 1
}

// 21. entries: Devuelve un iterador con pares `[índice, valor]`
const entradas = numeros.entries();
for (let [index, value] of entradas) {
    console.log(`Index ${index}, Value ${value}`);
}

// 22. copyWithin: Copia una parte del array dentro de sí mismo, sin cambiar su longitud
const copiaDentro = [1, 2, 3, 4, 5];
copiaDentro.copyWithin(0, 3);
console.log("CopyWithin: ", copiaDentro); // [4, 5, 3, 4, 5]

// 23. fill: Llena un array con un valor específico
const rellenado = new Array(5).fill(0);
console.log("Fill: ", rellenado); // [0, 0, 0, 0, 0]

// 24. isArray: Verifica si el valor es un array
console.log("isArray: ", Array.isArray(numeros)); // true

// 25. toString: Convierte el array en una cadena de texto
console.log("toString: ", numeros.toString()); // "5,4,3,2,1"

// 26. reduceRight: Acumula valores desde el final del array hacia el inicio
const resta = numeros.reduceRight((acum, num) => acum - num, 0);
console.log("ReduceRight: ", resta); // Resultado de resta desde derecha



//PROGRAMA

console.log("\n ---------------- PROGRAMA -----------------\n")

const estudiantes = [
    { 
        nombre: "Ana", 
        fechaNacimiento: new Date(2002, 5, 15),
        calificaciones: [8.5, 9.2, 7.8] 
    },
    { 
        nombre: "Carlos", 
        fechaNacimiento: new Date(2000, 10, 21), 
        calificaciones: [9.1, 9.8, 9.5] 
    },
    { 
        nombre: "Luisa", 
        fechaNacimiento: new Date(2003, 8, 10), 
        calificaciones: [6.8, 7.2, 6.9] 
    },
    { 
        nombre: "Pedro", 
        fechaNacimiento: new Date(2001, 3, 2), 
        calificaciones: [10.0, 9.5, 9.7] 
    }
];

// 1. Promedio de calificaciones: Obtiene una lista de estudiantes por nombre y promedio de sus calificaciones.

const obtenerPromedio = (calificaciones) => {
    const suma = calificaciones.reduce((acum, cal) => acum + cal, 0); // Sumamos todas las calificaciones
    return suma / calificaciones.length; // Dividimos entre el número de calificaciones
};

const estudiantesConPromedio = estudiantes.map(est => ({
    nombre: est.nombre,
    promedio: obtenerPromedio(est.calificaciones)
}));

console.log("Promedio de calificaciones por estudiante:");
console.log(estudiantesConPromedio);

// 2. Mejores estudiantes: Obtiene una lista con el nombre de los estudiantes que tienen calificaciones con un 9 o más de promedio.
const mejoresEstudiantes = estudiantesConPromedio.filter(est => est.promedio >= 9);

console.log("\nMejores estudiantes (promedio >= 9):");
console.log(mejoresEstudiantes);

// 3. Nacimiento: Obtiene una lista de estudiantes ordenada desde el más joven.
const estudiantesOrdenadosPorNacimiento = [...estudiantes].sort(
    (a, b) => b.fechaNacimiento - a.fechaNacimiento
);

console.log("\nEstudiantes ordenados por fecha de nacimiento (más joven primero):");
console.log(estudiantesOrdenadosPorNacimiento.map(est => est.nombre));

// 4. Mayor calificación: Obtiene la calificación más alta de entre todas las de los alumnos.
const todasLasCalificaciones = estudiantes.flatMap(est => est.calificaciones);
const mayorCalificacion = Math.max(...todasLasCalificaciones);

console.log("\nCalificación más alta entre todos los estudiantes:");
console.log(mayorCalificacion);

// 5. Una calificación debe estar comprendida entre 0 y 10 (admite decimales).
const calificacionesValidas = todasLasCalificaciones.every(cal => cal >= 0 && cal <= 10);
if (calificacionesValidas) {
    console.log("\nTodas las calificaciones son válidas (entre 0 y 10).");
} else {
    console.log("\nAlgunas calificaciones están fuera del rango permitido.");
}

// function verificarCalificaciones(estudiantes) {
//     const calificacionesInvalidas = estudiantes
//         .map(estudiante => ({
//             nombre: estudiante.nombre,
//             calificacionesInvalidas: estudiante.calificaciones.filter(cal => cal < 0 || cal > 10)
//         }))
//         .filter(est => est.calificacionesInvalidas.length > 0); // Filtramos solo los que tienen calificaciones inválidas

//     if (calificacionesInvalidas.length > 0) {
//         console.log("\nCalificaciones fuera del rango (0-10):");
//         calificacionesInvalidas.forEach(est => {
//             console.log(`Estudiante: ${est.nombre}, Calificaciones inválidas: ${est.calificacionesInvalidas.join(", ")}`);
//         });
//     } else {
//         console.log("\nTodas las calificaciones son válidas.");
//     }
// }
// verificarCalificaciones(estudiantes);