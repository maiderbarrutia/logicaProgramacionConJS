/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */

//EXCEPCIONES

try {
    //En javascript este resultado no lanza error:
    let resultado = 10 / 0; 
    console.log("El resultado es:", resultado);

    // Realizamos una operación que podría causar un error:
    let objeto = {};
    console.log(objeto.propiedad.inexistente); 
} catch (error) {
    // Capturamos cualquier error que ocurra y lo manejamos aquí:
    console.error("Se produjo un error:", error.message);
} finally {
    // El bloque finally se ejecutará siempre, independientemente de si hay un error o no:
    console.log("El bloque finally se ejecuta siempre");
}

//LISTA DE TIPOS DE ERRORES EN JAVASCRIPT:
/*
- *RangeError: Se lanza cuando se establece una variable con un valor fuera de su rango de valores legales.
- *ReferenceError: Se produce cuando algo está mal con la referencia de una variable en tu código.
- *TypeError: Se produce cuando algún valor no resulta ser de un determinado tipo esperado
- InternalError: se utiliza cuando se produce una excepción en el motor de ejecución de JavaScript. 
- URIError: se produce cuando se utiliza de forma ilegal una función global de manejo de URI como decodeURIComponent
- EvalError: se produce cuando se produce un error en una llamada a la función eval()
*/


//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")

// function TooLargeError(mensaje) {
//     this.name = "¡Error!";
//     this.message = mensaje || "¡Ocurrió un error!";
// }
// TooLargeError.prototype = Object.create(Error.prototype);
// TooLargeError.prototype.constructor = TooLargeError;

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "¡ValidationError!";
    }
}

function excepciones(parametro1, parametro2) {
    if (typeof parametro1 !== "number" || typeof parametro2 !== "number") {
        throw new TypeError("Los parámetros deben ser números");
    }
    if (parametro1 < 0 || parametro2 < 0) {
        throw new RangeError("Los parámetros no pueden ser negativos");
    }
    if (parametro1 > 100000000 || parametro2 > 100000000) {
    // throw new TooLargeError("Los parametros no pueden ser tan grandes");
        throw new ValidationError("Los parámetros no pueden ser tan grandes")
    }
}

try {
    // excepciones(10, -5);
    // excepciones("10", -5);
    excepciones(200000000000, 5);
    console.log("No se produjo ningún error");
} catch (error) {
    console.error(error.name + " " + error.message);
} finally {
    console.log("La ejecución ha finalizado");
}
