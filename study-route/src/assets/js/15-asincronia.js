/*
 * EJERCICIO:
 * Utilizando tu lenguaje, crea un programa capaz de ejecutar de manera
 * asíncrona una función que tardará en finalizar un número concreto de
 * segundos parametrizables. También debes poder asignarle un nombre.
 * La función imprime su nombre, cuándo empieza, el tiempo que durará
 * su ejecución y cuando finaliza.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando el concepto de asincronía y la función anterior, crea
 * el siguiente programa que ejecuta en este orden:
 * - Una función C que dura 3 segundos.
 * - Una función B que dura 2 segundos.
 * - Una función A que dura 1 segundo.
 * - Una función D que dura 1 segundo.
 * - Las funciones C, B y A se ejecutan en paralelo.
 * - La función D comienza su ejecución cuando las 3 anteriores han finalizado.
 */

console.log("\n ---------------- ASINCRONÍA -----------------\n")
//ASINCRONÍA: es una forma en que un programa de computadora gestiona múltiples tareas simultáneamente en lugar de ejecutarlas una tras otra. 
// Función para ejecutar una tarea después de un tiempo específico



//Promesa (const myPromise = new Promise(function(resolve, reject) => {resolve("Resuelto")}))
    /* Una promesa tiene tres estados:
    - Pendiente: es el estado inicial, ni cumplida ni rechazada.
    - Cumplida: significa que la operación se completó con éxito.
    - Rechazada: significa que la operación falló.
    */
function ejecutarTarea(nombre, segundos) {
    console.log(`${nombre}: Empieza ahora.`);
    const inicio = new Date();
  
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fin = new Date();
            const duracion = (fin - inicio) / 1000;
            if (duracion > 4) { //Si tarda más de 3 segundos en ejecutarse salta un error (reject)
                reject(`Promesa --> ${nombre}: Error - La tarea tardó más de lo esperado.`);
            } else {
                console.log(`Promesa --> ${nombre}: Termina. Duración: ${duracion} segundos.`);
                resolve(); // Resolvemos la promesa sin error
            }
        }, segundos * 1000);
    });
}

function ejecutarPromesa() {
    ejecutarTarea('Promesa --> Tarea 1', 3)
        .then(() => ejecutarTarea('Promesa --> Tarea 2', 2))
        .then(() => ejecutarTarea('Promesa --> Tarea 3', 4))
        .catch(error => console.error('Promesa --> Ocurrió un error:', error));
}

// ejecutarPromesa()

//Async /await (https://lenguajejs.com/javascript/asincronia/async-await/)
async function ejecutarTarea2(nombre, segundos) {
    console.log(`async /await --> ${nombre}: Empieza ahora.`);
    // await new Promise(resolve => setTimeout(resolve, segundos * 1000));
    // console.log(`async /await --> ${nombre}: Termina.`);
    await new Promise((resolve) => {
        setTimeout(() => {
            console.log(`async /await --> ${nombre}: Termina.`);
            resolve();
        }, segundos * 1000);
    });
}
  

async function ejecutarAsync() {
    try {
      await ejecutarTarea2('Tarea 1', 3);
      await ejecutarTarea2('Tarea 2', 2);
      await ejecutarTarea2('Tarea 3', 4);
    } catch (error) {
        console.error('async /await--> Ocurrió un error:', error);
    } finally{
        console.log("async /await--> Ejecuciones sin mirar el error");
    }
}
  
// ejecutarAsync();

//Callback
function operacionAsincrona(callback) {
    setTimeout(() => {
        console.log("Callback --> Operación asíncrona completada.");
        callback();
    }, 1000);
}
  
// console.log("Callback --> Inicio de la operación.");
// operacionAsincrona(() => {
//     console.log("Callback --> Fin de la operación.");
// });
  
console.log("\n ---------------- LLAMADA A API: -----------------\n")

//Con promesas
function obtenerDatosConPromesa() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return respuesta.json();
        })
        .then(datos => {
            console.log('Datos obtenidos con promesa:', datos);
        })
        .catch(error => {
            console.error('Ocurrió un error al obtener los datos con promesa:', error.message);
        })
        .finally(()=>{
            console.log('Fin de la llamada a la api');
        });
}

// obtenerDatosConPromesa();

//Con async / await
async function obtenerDatosConAsyncAwait() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!respuesta.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        const datos = await respuesta.json();
        console.log('Datos obtenidos con async / await:', datos);
    } catch (error) {
        console.error('Ocurrió un error al obtener los datos con async / await:', error.message);
    }
}

// obtenerDatosConAsyncAwait();

//Con callbacks
function obtenerDatosConCallback(callback) {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('La solicitud no fue exitosa');
            }
            return respuesta.json();
        })
        .then(datos => {
            callback(null, datos);
        })
        .catch(error => {
            callback(error, null);
        });
}

// obtenerDatosConCallback((error, datos) => {
//     if (error) {
//         console.error('Ocurrió un error al obtener los datos con callback:', error.message);
//     } else {
//         console.log('Datos obtenidos con callback:', datos);
//     }
// });

//Con biblioteca AXIOS
import axios from "axios";

async function obtenerDatosConAxios() {
    try {
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Datos obtenidos con Axios:', respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.error('Ocurrió un error al obtener los datos con Axios:', error.message);
        throw new Error("Error al obtener los personajes");
    }
}

// obtenerDatosConAxios();

//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")

// Función C que simula una tarea que dura 3 segundos
function funcionC(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Función C terminada');
            resolve();
        }, segundos * 1000);
    });
}

// Función que simula una tarea que dura 2 segundos
function funcionB(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Función B terminada');
            resolve();
        }, segundos * 1000);
    });
}

// Función que simula una tarea que dura 1 segundo
function funcionA(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Función A terminada');
            resolve();
        }, segundos * 1000);
    });
}

// Función que simula una tarea que dura 1 segundo
function funcionD(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Función D terminada');
            resolve();
        }, segundos * 1000);
    });
}

async function ejecutarFunciones() {
    try{
        // Ejecutar las funciones C, B y A en paralelo
        await Promise.all([funcionC('Promesa --> Funcion C', 3), funcionB('Promesa --> Funcion B', 2), funcionA('Promesa --> Funcion A', 1)]);
        
        // Una vez que todas las funciones C, B y A han terminado, ejecutar la función D
        await funcionD('Promesa --> Funcion D', 1);
    } catch (error){
        console.error('Ocurrió un error durante la ejecución:', error);
    }
}

// Ejecutar el programa
ejecutarFunciones();
