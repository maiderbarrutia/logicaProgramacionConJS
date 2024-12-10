/*
 * EJERCICIO:
 * Empleando tu lenguaje, explora la definición del tipo de dato
 * que sirva para definir enumeraciones (Enum).
 * Crea un Enum que represente los días de la semana del lunes
 * al domingo, en ese orden. Con ese enumerado, crea una operación
 * que muestre el nombre del día de la semana dependiendo del número entero
 * utilizado (del 1 al 7).
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un pequeño sistema de gestión del estado de pedidos.
 * Implementa una clase que defina un pedido con las siguientes características:
 * - El pedido tiene un identificador y un estado.
 * - El estado es un Enum con estos valores: PENDIENTE, ENVIADO, ENTREGADO y CANCELADO.
 * - Implementa las funciones que sirvan para modificar el estado:
 *   - Pedido enviado
 *   - Pedido cancelado
 *   - Pedido entregado
 *   (Establece una lógica, por ejemplo, no se puede entregar si no se ha enviado, etc...)
 * - Implementa una función para mostrar un texto descriptivo según el estado actual.
 * - Crea diferentes pedidos y muestra cómo se interactúa con ellos. 
 */

// Enum simulado para los días de la semana
const DaysOfWeek = Object.freeze({  // Object.freeze() se usa para asegurarnos de que el objeto DaysOfWeek no pueda ser modificado, emulando la inmutabilidad típica de los Enums.
    LUNES: 1,
    MARTES: 2,
    MIERCOLES: 3,
    JUEVES: 4,
    VIERNES: 5,
    SABADO: 6,
    DOMINGO: 7
});

function getDayName(dayNumber) {
    switch(dayNumber) {
        case DaysOfWeek.LUNES:
            return 'Lunes';
        case DaysOfWeek.MARTES:
            return 'Martes';
        case DaysOfWeek.MIERCOLES:
            return 'Miércoles';
        case DaysOfWeek.JUEVES:
            return 'Jueves';
        case DaysOfWeek.VIERNES:
            return 'Viernes';
        case DaysOfWeek.SABADO:
            return 'Sábado';
        case DaysOfWeek.DOMINGO:
            return 'Domingo';
        default:
            return 'Número de día no válido';
    }
}

console.log(getDayName(1));
console.log(getDayName(5));
console.log(getDayName(8));


//PROGRAMA

console.log("\n ---------------- PROGRAMA -----------------\n")

const OrderStatus = Object.freeze({
    PENDIENTE: 'Pendiente',
    ENVIADO: 'Enviado',
    ENTREGADO: 'Entregado',
    CANCELADO: 'Cancelado'
});


class Pedido {
    constructor(id) {
        this.id = id;
        this.estado = OrderStatus.PENDIENTE; // Por defecto, el estado es "Pendiente"
    }

    // Cambiar el estado a Enviado
    enviar() {
        if (this.estado === OrderStatus.PENDIENTE) {
            this.estado = OrderStatus.ENVIADO;
            console.log(`Pedido ${this.id} marcado como ENVIADO.`);
        } else {
            console.log(`No se puede enviar el pedido ${this.id} porque ya está en estado ${this.estado}.`);
        }
    }

    // Cambiar el estado a Entregado
    entregar() {
        if (this.estado === OrderStatus.ENVIADO) {
            this.estado = OrderStatus.ENTREGADO;
            console.log(`Pedido ${this.id} marcado como ENTREGADO.`);
        } else {
            console.log(`No se puede entregar el pedido ${this.id} porque no ha sido enviado.`);
        }
    }

    // Cambiar el estado a Cancelado
    cancelar() {
        if (this.estado !== OrderStatus.ENTREGADO) {
            this.estado = OrderStatus.CANCELADO;
            console.log(`Pedido ${this.id} marcado como CANCELADO.`);
        } else {
            console.log(`No se puede cancelar el pedido ${this.id} porque ya ha sido entregado.`);
        }
    }

    // Mostrar el estado del pedido
    mostrarEstado() {
        console.log(`El estado del pedido ${this.id} es: ${this.estado}`);
    }
}

const pedido1 = new Pedido(82);
const pedido2 = new Pedido(105);

pedido1.mostrarEstado(); // "Pendiente"
pedido1.enviar(); // "Pedido 82 marcado como ENVIADO."
pedido1.entregar(); // "Pedido 82 marcado como ENTREGADO."
pedido1.cancelar(); // "No se puede cancelar el pedido 82 porque ya ha sido entregado."
pedido1.mostrarEstado(); // "El estado del pedido 82 es: Entregado."

pedido2.mostrarEstado(); // "Pendiente"
pedido2.cancelar(); // "Pedido 105 marcado como CANCELADO."
pedido2.mostrarEstado(); // "El estado del pedido 105 es: Cancelado."
