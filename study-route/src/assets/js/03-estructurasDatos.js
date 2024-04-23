/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */


//ESTRUCTURAS DE DATOS

console.log("\n------- Ejemplo de Array: ---------");

// Creación de un array
let miArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7];

console.log("Array original:", miArray);

// Inserción de elementos al final del array
miArray.push(0);

// Ordenación del array
miArray.sort((a, b) => a - b);

console.log("Array después de insertar 0 y ordenar:", miArray);

// Borrado de elementos del array (borra el último elemento)
miArray.pop();

console.log("Array después de eliminar el último elemento:", miArray);

// Inserción de elementos al inicio del array
miArray.unshift(10, 11);

console.log("Array después de insertar 10 y 11 al inicio:", miArray);

// Borrado de elementos del array (borra el primer elemento)
miArray.shift();

console.log("Array después de eliminar el primer elemento:", miArray);

// Obtener un subconjunto del array
let subArray = miArray.slice(2, 5);

console.log("Subarray desde el índice 2 al 4:", subArray);

// Buscar un elemento en el array
let indice = miArray.indexOf(5);

console.log("Índice del primer elemento igual a 5:", indice);

// Reemplazar elementos en el array
miArray.splice(2, 3, 100, 200);

console.log("Array después de reemplazar elementos:", miArray);

// Concatenar arrays
let otroArray = [50, 60, 70];
let arrayConcatenado = miArray.concat(otroArray);

console.log("Array después de concatenar:", arrayConcatenado);


console.log("\n------- Objetos: ---------")
// Creación de un objeto
let miObjeto = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

// Inserción de una nueva propiedad al objeto
miObjeto.trabajo = "Ingeniero";

// Borrado de una propiedad del objeto
delete miObjeto.edad;

// Actualización de una propiedad del objeto
miObjeto.ciudad = "Barcelona";

console.log("Objeto:", miObjeto);

console.log("\n------- strings: ---------")
// Creación de una cadena de texto
let miCadena = "Hola, mundo!";

// Borrado de parte de la cadena
miCadena = miCadena.substring(0, 5);

// Actualización de la cadena
miCadena += " JavaScript!";

console.log("Cadena:", miCadena);

console.log("\n------- Conjuntos (Sets): ---------")
// Creación de un conjunto
let miSet = new Set([1, 2, 3, 4, 5]);

// Inserción de elementos al conjunto
miSet.add(6);

// Borrado de elementos del conjunto
miSet.delete(3);

console.log("Conjunto:", miSet);

console.log("\n------- Mapas: ---------")
// Creación de un mapa
let miMapa = new Map();

// Inserción de elementos al mapa
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);

// Borrado de un elemento del mapa
miMapa.delete("edad");

// Actualización de un elemento del mapa
miMapa.set("ciudad", "Madrid");

console.log("Mapa:", miMapa);


//PROGRAMA
console.log("\n------- Agenda de contactos: ---------")
let contactos = [
    {nombre: "Maria", telefono: "654789123"},
    {nombre: "Miguel", telefono: "5478912365"},
    {nombre: "Miguel", telefono: "8778527455"}
];

console.log("\n------- Buscar contactos: ---------")
function searchContact(nombre) {
    let contactoElegido = contactos.filter(contacto => contacto.nombre === nombre);

    if (contactoElegido.length !== 0) {
        return contactoElegido; // Devuelve el primer contacto encontrado
    } else {
        return `El nombre "${nombre}" no está en la lista de contactos.`;
    }
}

console.log(searchContact("Miguel"));

console.log("\n------- Añadir contactos: ---------")
function addContact(contacto) {
    contactos.push(contacto);
}
let newContact = { nombre: "Juan", telefono: "123456789" };
addContact(newContact);
console.log(contactos)

console.log("\n------- Actualizar contactos: ---------")
function updateContact(nombre, nuevosDatos) {
    let contactoExistente = contactos.find(contacto => contacto.nombre === nombre);

    if (contactoExistente) {
        if (nuevosDatos.nombre) {
            contactoExistente.nombre = nuevosDatos.nombre;
        }
        if (nuevosDatos.telefono) {
            contactoExistente.telefono = nuevosDatos.telefono;
        }
        // Añade más líneas como las anteriores para otros campos que puedan ser actualizados
        console.log(`Contacto "${nombre}" actualizado correctamente.`);
    } else {
        console.log(`No se encontró el contacto "${nombre}" en la lista.`);
    }

}
updateContact("Juan", {telefono: "123456789"});
console.log(contactos)

console.log("\n------- Eliminar contactos: ---------")
function deleteContact(contact) {
    let contactoElegido = contactos.filter(contacto => contacto.nombre !== contact);
    if (contactoElegido.length !== 0) {
        return contactoElegido; // Devuelve el primer contacto encontrado
    } else {
        return `El nombre "${nombre}" no está en la lista de contactos.`;
    }
}
console.log(deleteContact("Maria"));

function validatePhoneNumber(params) {
    
}