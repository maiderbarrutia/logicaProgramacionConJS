/*
 * EJERCICIO:
 * Utilizando tu lenguaje, explora el concepto de expresiones regulares,
 * creando una que sea capaz de encontrar y extraer todos los números
 * de un texto.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea 3 expresiones regulares (a tu criterio) capaces de:
 * - Validar un email.
 * - Validar un número de teléfono.
 * - Validar una url.
 */


//EXPRESIONES REGULARES
console.log("\n ---------------- EXPRESIONES REGULARES -----------------\n")
let regex = /\d+/g;
let texto = "En este texto hay varios números como 123456";
let numeros = texto.match(regex);
console.log(numeros); // Imprimimos los numeros

//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")
function validarEmail(email) {
    const regexEmail = /^[\w.-]+@[\w-]+\.[a-z]{2,4}$/;              
    /*
    ^ : Inicio del string
    hola --> [\w.-]+  (\w.- -->coincide con cualquier caracter alfanumerico, puntos y guiones (guiones bajos tambien incluyen) | + --> coincide una o más veces)
    @ --> @
    gmail --> [\w-]+
    . --> \. (coincide con un punto)
    com --> [a-z]{2,4} ([a-z] --> Solo acepta carácteres en minuscula | {2,4} --> Es el rango de longitud permitido, mas de 2 letras y menos de 4 letras)
    $: Fin del string

    */
    return regexEmail.test(email);
}

const email = 'hola@gmail.com';
function mensajesEmail() {
    validarEmail(email) ? console.log(`El email "${email}" es válido.`) : console.log(`El email "${email}" NO es válido.`);
}
mensajesEmail();

function validarTelefono(telefono) {
    const tel = telefono.toString();
    const regexTelefono = /^\d{9}$/;
    tel.match(regexTelefono) ? console.log(`El teléfono "${telefono}" es válido.`) : console.log(`El teléfono "${telefono}" no es válido.`);
}
validarTelefono(684791142);

function validarUrl(url) {
    const regexUrl = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,4}(\/[\w/.-]*)?$/
    url.match(regexUrl) ? console.log(`La url "${url}" es válida.`) : console.log(`La url "${url}" no es válida.`);
}
validarUrl('http://lenguajejs.com/');

