/*
 * EJERCICIO:
 * Utilizando tu lenguaje crea un conjunto de datos y realiza las siguientes
 * operaciones (debes utilizar una estructura que las soporte):
 * - Añade un elemento al final.
 * - Añade un elemento al principio.
 * - Añade varios elementos en bloque al final.
 * - Añade varios elementos en bloque en una posición concreta.
 * - Elimina un elemento en una posición concreta.
 * - Actualiza el valor de un elemento en una posición concreta.
 * - Comprueba si un elemento está en un conjunto.
 * - Elimina todo el contenido del conjunto.
 *
 * DIFICULTAD EXTRA (opcional):
 * Muestra ejemplos de las siguientes operaciones con conjuntos:
 * - Unión.
 * - Intersección.
 * - Diferencia.
 * - Diferencia simétrica.
 */


console.log("\n----- Operaciones con Array -----\n");

let datos = [1, 2, 3, 4, 5]; // Conjunto inicial

// 1. Añade un elemento al final
datos.push(6); // Forma clásica con push
console.log("Añadir al final (push):", datos);

// Alternativa con spread operator
datos = [...datos, 7];
console.log("Añadir al final (spread):", datos);

// 2. Añade un elemento al principio
datos.unshift(0); // Forma clásica con unshift
console.log("Añadir al principio (unshift):", datos);

// Alternativa con spread operator
datos = [-1, ...datos];
console.log("Añadir al principio (spread):", datos);

// 3. Añade varios elementos en bloque al final
datos.push(8, 9, 10); // Forma clásica con push
console.log("Añadir varios al final (push):", datos);

// Alternativa con concat
datos = datos.concat([11, 12, 13]);
console.log("Añadir varios al final (concat):", datos);

// 4. Añade varios elementos en bloque en una posición concreta
datos.splice(3, 0, "a", "b", "c"); // Forma clásica con splice
console.log("Añadir varios en posición concreta (splice):", datos);

// Alternativa con slice
datos = [...datos.slice(0, 3), "x", "y", "z", ...datos.slice(3)];
console.log("Añadir varios en posición concreta (slice):", datos);

// 5. Elimina un elemento en una posición concreta
datos.splice(4, 1); // Forma clásica con splice
console.log("Eliminar en posición concreta (splice):", datos);

// Alternativa con filter
datos = datos.filter((_, index) => index !== 5); // Eliminar el elemento en la posición 5
console.log("Eliminar en posición concreta (filter):", datos);

// 6. Actualiza el valor de un elemento en una posición concreta
datos[2] = "modificado"; // Forma clásica
console.log("Actualizar elemento (índice directo):", datos);

// Alternativa con map
datos = datos.map((value, index) => (index === 3 ? "nuevo-valor" : value));
console.log("Actualizar elemento (map):", datos);

// 7. Comprueba si un elemento está en el conjunto
const contiene3 = datos.includes(3); // Forma clásica con includes
console.log("¿Contiene el 3 (includes)?", contiene3);

// Alternativa con some
const contieneModificado = datos.some((num) => num === "modificado");
console.log("¿Contiene 'modificado' (some)?", contieneModificado);

// 8. Elimina todo el contenido del conjunto
datos = []; // Forma clásica de limpiar el array
console.log("Eliminar todo el contenido:", datos);

// Alternativa con length
datos.length = 0;
console.log("Eliminar todo el contenido (length):", datos);



console.log("\n----- Operaciones con Set -----\n");

// Crear conjuntos iniciales
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// Unión: Combinar ambos conjuntos
const union = new Set([...set1, ...set2]);
console.log("Unión:", [...union]);

// Intersección: Elementos comunes entre ambos conjuntos
const interseccion = new Set([...set1].filter(x => set2.has(x)));
console.log("Intersección:", [...interseccion]);

// Diferencia: Elementos que están en set1 pero no en set2
const diferencia = new Set([...set1].filter(x => !set2.has(x)));
// console.log("Diferencia (set1 - set2):", [...diferencia]);
console.log("Diferencia (set1 - set2):", diferencia);

// Diferencia simétrica: Elementos exclusivos de cada conjunto
// const diferenciaSimetrica = new Set(
//     [...set1].filter(x => !set2.has(x)).concat([...set2].filter(x => !set1.has(x)))
// );
const diferenciaSimetrica = new Set([
    ...[...set1].filter((x) => !set2.has(x)),
    ...[...set2].filter((x) => !set1.has(x)),
]);
console.log("Diferencia Simétrica:", [...diferenciaSimetrica]);

// Comprueba si un elemento está en el conjunto
console.log("¿El conjunto contiene el número 3?", set1.has(3));

//Obtener el tamaño de un conjunto
console.log("Tamaño del conjunto:", set1.size);

//Añadir
set1.add(11);
console.log("Añadir:", set1);

//Eliminar
set1.delete(11);
console.log("Eliminar:", set1);

// Elimina todo el contenido del conjunto
set1.clear();
console.log("Conjunto vacío:", [...set1]);


console.log("\n----- Operaciones con weakSet -----\n");
/*
WeakSet solo admite objetos como elementos (no permite valores primitivos como números, cadenas, etc.).
*/

// 1- Crear un WeakSet

// Crear un WeakSet vacío
const weakSet = new WeakSet();
console.log("WeakSet vacío:", weakSet);

// Crear un WeakSet con algunos objetos inicializados
const obj1 = { name: "Objeto 1" };
const obj2 = { name: "Objeto 2" };
const weakSet2 = new WeakSet([obj1, obj2]);
console.log("WeakSet con objetos:", weakSet2);


// 2- Añadir un objeto al WeakSet
const obj3 = { name: "Objeto 3" };
weakSet2.add(obj3);
console.log("WeakSet después de añadir obj3:", weakSet2);

// 3- Comprobar si un objeto está en el WeakSet
console.log("¿Está obj3 en el WeakSet?", weakSet2.has(obj3));
console.log("¿Está obj1 en el WeakSet?", weakSet2.has(obj1));

// 4- Eliminar un objeto del WeakSet
weakSet2.delete(obj3);
console.log("WeakSet después de eliminar obj3:", weakSet2);

// 5- Intentar verificar si un objeto está en el WeakSet después de eliminarlo
console.log("¿Está obj3 en el WeakSet después de eliminarlo?", weakSet.has(obj3));

// 6- Recolección automática de basura (Garbage Collection) - WeakSet solo guarda referencias débiles
let weakSetGC = new WeakSet();
let obj4 = { id: 4 };
weakSetGC.add(obj4);
console.log("¿Está obj4 en el WeakSet antes de eliminar la referencia?", weakSetGC.has(obj4));

// 7- Eliminar la referencia al objeto
obj4 = null;

// El objeto será automáticamente recogido por el garbage collector cuando ya no haya ninguna referencia
// En este momento, el objeto ya no estará en el WeakSet
console.log("¿Está obj4 en el WeakSet después de eliminar la referencia?", weakSetGC.has(obj4));

// -------------------- Métodos que NO están disponibles en WeakSet --------------------

// - size: No existe la propiedad `size` en WeakSet. No se puede saber cuántos elementos contiene.
console.log("No existe el método `size` en WeakSet");

// - clear: No existe el método `clear` en WeakSet. No se puede limpiar todos los elementos del WeakSet a la vez.
console.log("No existe el método `clear` en WeakSet");

// -------------------- Resumen --------------------

// WeakSet se utiliza principalmente para almacenar referencias débiles a objetos, lo que significa que si un objeto es eliminado y no tiene más referencias, será recogido automáticamente por el Garbage Collector.
// WeakSet NO soporta operaciones de acceso directo como `size`, `clear`, o `forEach` (que sí tiene `Set`).
// Es útil cuando deseas trabajar con un conjunto de objetos pero sin evitar que estos objetos sean recolectados por el garbage collector cuando ya no estén siendo utilizados.

