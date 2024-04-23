/*
 * EJERCICIO:
 * Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
 * en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
 * - Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
 *   recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
 *   interpolación, verificación...
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

// CADENAS DE CARÁCTERES

// Concatenación de cadenas
const str1 = "Hola";
const str2 = "mundo";
const concatenacion = str1 + ", " + str2 + "!";
console.log(concatenacion); // Output: Hola, mundo!

// Interpolación de cadenas (template literals)
const nombre = "María";
const saludo = `¡Hola, ${nombre}!`;
console.log(saludo); // Output: ¡Hola, María!

// Longitud de una cadena
const texto = "JavaScript";
const longitud = texto.length;
console.log(longitud); // Output: 10

// Acceso a un carácter específico
const textoCompleto = "JavaScript";
const primerCaracter = textoCompleto[0];
console.log(primerCaracter); // Output: J

// Subcadena
const textoLargo = "Hola mundo";
const subcadena = textoLargo.substring(5, 10); // Desde la posición 5 hasta la 9 (mundo)
console.log(subcadena); // Output: mundo

// Búsqueda de una subcadena
const frase = "Hola mundo";
const indice = frase.indexOf("mundo");
console.log(indice); // Output: 5

// Reemplazo de subcadena
const mensaje = "Hola mundo";
const nuevoMensaje = mensaje.replace("mundo", "JavaScript");
console.log(nuevoMensaje); // Output: Hola JavaScript

// Mayúsculas y minúsculas
const textoOriginal = "Hola";
const mayusculas = textoOriginal.toUpperCase();
const minusculas = textoOriginal.toLowerCase();
console.log(mayusculas); // Output: HOLA
console.log(minusculas); // Output: hola

// Eliminar espacios en blanco al principio y al final
const textoConEspacios = "   Hola mundo   ";
const textoSinEspacios = textoConEspacios.trim();
console.log(textoSinEspacios); // Output: Hola mundo

// División de una cadena en un array de subcadenas
const listaDeFrutas = "manzana,pera,naranja";
const frutas = listaDeFrutas.split(",");
console.log(frutas); // Output: ["manzana", "pera", "naranja"]

// Comparación de cadenas
const strg1 = "abc";
const strg2 = "def";
const result = strg1 === strg2;
console.log(result); // Output: false

// Verificación de si una cadena comienza o termina con ciertos caracteres
const str = "Hello world";
const startsWithHello = str.startsWith("Hello");
const endsWithWorld = str.endsWith("world");
console.log(startsWithHello); // Output: true
console.log(endsWithWorld); // Output: true

// Obtención de un carácter en una posición específica
const strForChar = "Hello";
const charAtIndex2 = strForChar.charAt(2);
console.log(charAtIndex2); // Output: l

// Reversión de una cadena
const strToReverse = "Hello";
const reversedStr = strToReverse.split("").reverse().join("");
console.log(reversedStr); // Output: olleH

// Comprobación de si una cadena contiene otra cadena
const strToCheck = "Hello world";
const containsWorld = strToCheck.includes("world");
console.log(containsWorld); // Output: true

// Extracción de una subcadena a partir de una posición específica
const strToSlice = "Hello world";
const subStr = strToSlice.slice(6); // A partir de la posición 6 hasta el final
console.log(subStr); // Output: world

// División de una cadena en un array de caracteres
const strToSplit = "Hello";
const chars = strToSplit.split("");
console.log(chars); // Output: ["H", "e", "l", "l", "o"]

// Verificación de si una cadena es igual a otra sin tener en cuenta mayúsculas/minúsculas
const str1IgnoreCase = "Hello";
const str2IgnoreCase = "hello";
const isEqualIgnoreCase = str1IgnoreCase.toLowerCase() === str2IgnoreCase.toLowerCase();
console.log(isEqualIgnoreCase); // Output: true


//PROGRAMA

console.log("\n ---------------- PROGRAMA -----------------\n")

function cleanText(text) {
    const textWithoutAccent = text.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Elimina acentos
    const normalizedText = textWithoutAccent.replace(/[\s,]+/g,'').toLowerCase();   //Eliminar espacios y convertir todo a minúscula
    return normalizedText;
}

console.log("\n ---------------- Palíndromo -----------------\n")
/*Un palíndromo es una palabra, frase u otro tipo de secuencia de caracteres 
que se lee igual tanto de izquierda a derecha como de derecha a izquierda.*/
const palindrome = analyzePalindrome("Romá ni se conoce sin oro, ni se conoce sin amore");

//Opción 1:
// if (!palindrome.isPalindrome) {
//     console.log(`"${palindrome.text}" NO es un palíndromo`);
// }else{
//     console.log(`"${palindrome.text}" es un palíndromo`);
// }

//Opción 2:
console.log(`"${palindrome.text}" ${palindrome.isPalindrome ? 'es' : 'NO es'} un palíndromo`);


function analyzePalindrome(text) {
    const normalizedText = cleanText(text);
     const textReverse = normalizedText.split('').reverse().join('');

    //Opción 1:
    //  if (normalizedText === textReverse) {
    //     return { text, isPalindrome: true };
    //  } else{
    //     return { text, isPalindrome: false };
    //  }

    //Opción 2: 
    // return ((normalizedText === textReverse) ? { text, isPalindrome: true } : { text, isPalindrome: false });

    //Opción 3: 
    return { text, isPalindrome: normalizedText === textReverse };

}


console.log("\n ---------------- Anagrama -----------------\n")
/*Un anagrama es una palabra o frase que se forma reordenando las letras de otra palabra 
o frase utilizando todas las letras originales exactamente una vez.*/
const anagram = analyzeAnagram("Ballena", "llenaba");
console.log(`"${anagram.text1}" y "${anagram.text2}" ${anagram.isAnagram ? 'son' : 'NO son'} un anagrama`);

function analyzeAnagram(text1, text2) {
    const normalizedText1 = cleanText(text1);
    const normalizedText2 = cleanText(text2);
    const text1Sorted = normalizedText1.split('').sort().join('');
    const text2Sorted = normalizedText2.split('').sort().join('');
    
    return { text1, text2, isAnagram: text1Sorted === text2Sorted };
    
}

console.log("\n ---------------- Isograma -----------------\n")
/*Un isograma es una palabra en la que no hay letras repetidas.*/
const isogram = analyzeIsogram("murciélago");
console.log(`"${isogram.text}" ${isogram.isIsogram ? 'es' : 'NO es'} un isograma`);

function analyzeIsogram(text) {
    const normalizedText = cleanText(text);
    
    // Iterar sobre cada letra del texto
    for (let i = 0; i < normalizedText.length; i++) {
        const letter = normalizedText[i];
        
        // Verificar si la letra aparece más de una vez en el texto
        if (normalizedText.indexOf(letter) !== normalizedText.lastIndexOf(letter)) {
            return { text, isIsogram: false };
        }
    }
    return { text, isIsogram: true };
}