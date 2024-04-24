/*
 * EJERCICIO:
 * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
 * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
 * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
 * Calcula cuántos años han transcurrido entre ambas fechas.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
 * 10 maneras diferentes. Por ejemplo:
 * - Día, mes y año.
 * - Hora, minuto y segundo.
 * - Día de año.
 * - Día de la semana.
 * - Nombre del mes.
 * (lo que se te ocurra...)
 */

//FECHAS

// Obtiene la fecha actual
// const fechaActual = new Date();
// console.log(fechaActual)

// // Define la fecha de nacimiento
// const fechaNacimiento = new Date('1987-05-12T10:00:00');
// console.log(fechaNacimiento)

// // Calcula la diferencia en milisegundos entre las dos fechas
// const diferenciaMilisegundos = fechaActual - fechaNacimiento;
// console.log(diferenciaMilisegundos)

// // Convierte la diferencia de milisegundos a años
// const milisegundosEnUnAño = 1000 * 60 * 60 * 24 * 365.25; // Teniendo en cuenta los años bisiestos
// const añosTranscurridos = Math.floor(diferenciaMilisegundos / milisegundosEnUnAño);

// console.log('Años transcurridos:', añosTranscurridos);

// Obtiene la fecha actual
const fechaActual = new Date();

// Define la fecha de nacimiento
const fechaNacimiento = new Date('1987-05-12T10:00:00');

// Calcula la diferencia en años entre las dos fechas
let aniosTranscurridos = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
console.log(fechaNacimiento.getDate())

//Verifica si la fecha de nacimiento ya ha ocurrido este año
if (fechaNacimiento.getMonth() > fechaActual.getMonth() ||
    (fechaNacimiento.getMonth() === fechaActual.getMonth() && fechaNacimiento.getDate() > fechaActual.getDate())) {
    aniosTranscurridos--;
}

console.log('Años transcurridos:', aniosTranscurridos);




//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")

const fechaCumpleanios = new Date('1987-05-12T10:00:00');

console.log('1. toDateString():', 'Devuelve la fecha en formato de cadena de texto, excluyendo la hora y el tiempo universal.', fechaCumpleanios.toDateString());
console.log('2. toISOString():', 'Devuelve la fecha en formato de cadena de texto ISO8601 (YYYY-MM-DDTHH:mm:ss.sssZ).', fechaCumpleanios.toISOString());
console.log('3. toJSON():', 'Devuelve la fecha en formato de cadena de texto JSON (YYYY-MM-DDTHH:mm:ss.sssZ).', fechaCumpleanios.toJSON());
console.log('4. toLocaleDateString():', 'Devuelve la fecha en formato de cadena de texto local, excluyendo la hora y el tiempo universal.', fechaCumpleanios.toLocaleDateString());
console.log('5. toLocaleString():', 'Devuelve la fecha en formato de cadena de texto local, incluyendo la hora y el tiempo universal.', fechaCumpleanios.toLocaleString());
console.log('6. toLocaleTimeString():', 'Devuelve la hora en formato de cadena de texto local.', fechaCumpleanios.toLocaleTimeString());
console.log('7. toString():', 'Devuelve la fecha en formato de cadena de texto.', fechaCumpleanios.toString());
console.log('8. toTimeString():', 'Devuelve la hora en formato de cadena de texto.', fechaCumpleanios.toTimeString());
console.log('9. toUTCString():', 'Devuelve la fecha en formato de cadena de texto UTC (GMT).', fechaCumpleanios.toUTCString());
console.log('10. valueOf():', 'Devuelve el valor numérico de la fecha (milisegundos desde el 1 de enero de 1970 UTC).', fechaCumpleanios.valueOf());
console.log('11. getDate():', 'Devuelve el día del mes (del 1 al 31).', fechaCumpleanios.getDate());
console.log('12. getDay():', 'Devuelve el día de la semana (del 0 al 6, siendo 0 domingo).', fechaCumpleanios.getDay());
console.log('13. getFullYear():', 'Devuelve el año (cuatro dígitos).', fechaCumpleanios.getFullYear());
console.log('14. getHours():', 'Devuelve la hora (del 0 al 23).', fechaCumpleanios.getHours());
console.log('15. getMilliseconds():', 'Devuelve los milisegundos (del 0 al 999).', fechaCumpleanios.getMilliseconds());
console.log('16. getMinutes():', 'Devuelve los minutos (del 0 al 59).', fechaCumpleanios.getMinutes());
console.log('17. getMonth():', 'Devuelve el mes (del 0 al 11, siendo 0 enero).', fechaCumpleanios.getMonth());
console.log('18. getSeconds():', 'Devuelve los segundos (del 0 al 59).', fechaCumpleanios.getSeconds());
console.log('19. getTime():', 'Devuelve el número de milisegundos desde el 1 de enero de 1970 UTC.', fechaCumpleanios.getTime());
console.log('20. getTimezoneOffset():', 'Devuelve la diferencia en minutos entre la hora local y UTC.', fechaCumpleanios.getTimezoneOffset());

//Estas no se utilizan mucho:
// console.log('21. getUTCDate():', 'Devuelve el día del mes en hora UTC (del 1 al 31).', fechaCumpleanios.getUTCDate());
// console.log('22. getUTCDay():', 'Devuelve el día de la semana en hora UTC (del 0 al 6, siendo 0 domingo).', fechaCumpleanios.getUTCDay());
// console.log('23. getUTCFullYear():', 'Devuelve el año en hora UTC (cuatro dígitos).', fechaCumpleanios.getUTCFullYear());
// console.log('24. getUTCHours():', 'Devuelve la hora en hora UTC (del 0 al 23).', fechaCumpleanios.getUTCHours());
// console.log('25. getUTCMilliseconds():', 'Devuelve los milisegundos en hora UTC (del 0 al 999).', fechaCumpleanios.getUTCMilliseconds());
// console.log('26. getUTCMinutes():', 'Devuelve los minutos en hora UTC (del 0 al 59).', fechaCumpleanios.getUTCMinutes());
// console.log('27. getUTCMonth():', 'Devuelve el mes en hora UTC (del 0 al 11, siendo 0 enero).', fechaCumpleanios.getUTCMonth());
// console.log('28. getUTCSeconds():', 'Devuelve los segundos en hora UTC (del 0 al 59).', fechaCumpleanios.getUTCSeconds());