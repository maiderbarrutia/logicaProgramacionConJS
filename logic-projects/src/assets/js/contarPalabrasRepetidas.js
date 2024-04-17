/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */
export function contarPalabrasRepetidas(texto) {

    const textoLimpio = limpiartexto(texto)
    const palabrasSeparadas = separarPalabras(textoLimpio)
    const numeroPalabrasRepetidas = calcularRecuento(palabrasSeparadas)

    let resultado= "";
    // return numeroPalabrasRepetidas
    for (const palabra in numeroPalabrasRepetidas) {
        resultado += `${palabra}: ${numeroPalabrasRepetidas[palabra]}\n`;
        
    }
    return resultado
}
export function limpiartexto(texto) {
    let textoLimpio = texto.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "").toLowerCase();

    //En caso de querer eliminar acentos:
    // textoLimpio = textoLimpio.replace(/[áÁ]/g, "a").replace(/[éÉ]/g, "e").replace(/[íÍ]/g, "i").replace(/[óÓ]/g, "o").replace(/[úÚ]/g, "u");
    return textoLimpio;
}

function separarPalabras(texto) {
    const palabras = texto.split(/\s+/); // Separar con uno o más espacios en blanco
    const palabrasSeparadas = [];

    for (let i = 0; i < palabras.length; i++) {
        if (palabras !== "") { // Ignoramos las palabras vacías (espacios en blanco)
            palabrasSeparadas.push(palabras[i]);
        }
    }

    return palabrasSeparadas;
}

function calcularRecuento(palabras) {
    const recuentoPalabras = {};

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];

        // Si la palabra ya está en el recuento, incrementar su contador
        if (recuentoPalabras[palabra]) {
            recuentoPalabras[palabra]++;
        } else {
            // Si la palabra no está en el recuento, agregarla con un contador inicial de 1
            recuentoPalabras[palabra] = 1;
        }
    }
    return recuentoPalabras;
}

