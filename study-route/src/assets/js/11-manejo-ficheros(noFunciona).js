/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
 *
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un programa de gestión de ventas que almacena sus datos en un 
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */


//MANEJO DE FICHEROS
const fs = require('fs');

const nombreArchivo = "manejoFicheros.txt"; // Nombre del archivo a crear

// Contenido del archivo
const contenidoArchivo = `
Nombre: Archivo prueba
Edad: 37
Lenguaje de programación favorito: JavaScript
`;

// Abrir el archivo
fs.open(nombreArchivo, "w", (err, file) => {
    if (err) throw err;
    console.log(file);
 });

 //Agrega contenido al final del archivo
 fs.appendFile(nombreArchivo, contenidoArchivo, (err) => {
    if (err) throw err;
    console.log("Completed!");
 });

 //Escribir el contenido del archivo
 fs.writeFile(nombreArchivo, contenidoArchivo, (err) => {
    if (err) throw err;
    console.log("Completed!");
 });

 //Leer el contenido del archivo
 fs.readFile(nombreArchivo, (err, data) => {
    if (err) throw err;
    console.log(data.toString());
 });

 //Eliminar el archivo
 fs.unlink(nombreArchivo, (err) => {
    if (err) throw err;
    console.log("File deleted!");
 });


 //Para cambiar el nombre del archivo
 fs.rename(nombreArchivo, "manejoFicheros2.txt", (err) => {
    if (err) throw err;
    console.log("File renamed!");
 });

 /* No puedo crear los ficheros porque es para back y vite es front, 
 he puesto ejemplos de como seria pero no funciona*/