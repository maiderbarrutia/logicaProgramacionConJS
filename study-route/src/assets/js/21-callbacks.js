/*
 * EJERCICIO:
 * Explora el concepto de callback en tu lenguaje creando un ejemplo
 * simple (a tu elección) que muestre su funcionamiento.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un simulador de pedidos de un restaurante utilizando callbacks.
 * Estará formado por una función que procesa pedidos.
 * Debe aceptar el nombre del plato, una callback de confirmación, una
 * de listo y otra de entrega.
 * - Debe imprimir un confirmación cuando empiece el procesamiento.
 * - Debe simular un tiempo aleatorio entre 1 a 10 segundos entre
 *   procesos.
 * - Debe invocar a cada callback siguiendo un orden de procesado.
 * - Debe notificar que el plato está listo o ha sido entregado.
 */

console.log("\n----- CALLBACKS -----\n");
/* Un callback es una función que se pasa a otra función como argumento y se invoca después de que se completa una operación. */

function procesarMensaje(mensaje, callback) {
    console.log("Procesando el mensaje...");

    setTimeout(() => {
        console.log(`Mensaje procesado: ${mensaje}`);
        callback(mensaje);
    }, 2000);
}

function mostrarConfirmacion(mensaje) {
    console.log(`Confirmación: El mensaje "${mensaje}" ha sido procesado.`);
}

// procesarMensaje("Hola, ¿cómo estás?", mostrarConfirmacion);

  //PROGRAMA

  console.log("\n ---------------- PROGRAMA -----------------\n")

function prepararPedido(pedido, tiempoPreparacion) {
    return new Promise(resolve => {
        setTimeout(() => {
            pedido.listo(pedido.nombrePlato);
            resolve();
        }, tiempoPreparacion * 1000);
    });
}

function entregarPedido(pedido, tiempoPreparacion) {
    return new Promise(resolve => {
        setTimeout(() => {
            pedido.entrega(pedido.nombrePlato);
            resolve();
        }, tiempoPreparacion * 1000);
    });
}

async function procesarPedido(nombrePlato, pedido) {
    pedido.nombrePlato = nombrePlato;
    console.log(`Procesando el pedido para: ${pedido.nombrePlato}`);

    const tiempoPreparacion = Math.floor(Math.random() * 10) + 1;

    pedido.confirmacion(pedido.nombrePlato);

    try {
        await prepararPedido(pedido, tiempoPreparacion);

        await entregarPedido(pedido, tiempoPreparacion);
    } catch (error) {
        console.error('Hubo un error al procesar el pedido:', error);
    }
}

// function procesarPedido(nombrePlato, pedido) {
//     pedido.nombrePlato = nombrePlato;
    
//     console.log(`Procesando el pedido para: ${pedido.nombrePlato}`);
    
//     const tiempoPreparacion = Math.floor(Math.random() * 10) + 1;

//     pedido.confirmacion(pedido.nombrePlato);

//     setTimeout(() => {
//         pedido.listo(pedido.nombrePlato);
    
//         setTimeout(() => {
//             pedido.entrega(pedido.nombrePlato);
//         }, tiempoPreparacion * 1000);

//     }, tiempoPreparacion * 1000);
// }

const pedido = {
    confirmacion: function(nombrePlato) {
        console.log(`Confirmación: El pedido de ${nombrePlato} ha comenzado.`);
    },
    listo: function(nombrePlato) {
        console.log(`Listo: El pedido de ${nombrePlato} está listo para servir.`);
    },
    entrega: function(nombrePlato) {
        console.log(`Entrega: El pedido de ${nombrePlato} ha sido entregado.`);
    }
};

procesarPedido("Pizza Margherita", pedido);

