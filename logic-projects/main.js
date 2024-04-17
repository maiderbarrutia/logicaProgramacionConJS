import { fizzBuzz, numerosPares } from './src/assets/js/fizzBuzz';
import { sonAnagramas } from './src/assets/js/anagrama'
import { calcularAreaPoligono, Triangle, Rectangle, Square } from './src/assets/js/areaPoligono'
import { esPrimo, listaNumerosPrimos } from './src/assets/js/numeroPrimo'
import { invertirCadenas } from './src/assets/js/invertirCadenas';
import { contarPalabrasRepetidas, limpiartexto } from './src/assets/js/contarPalabrasRepetidas';



//1- fizzBuzz.js
    // fizzBuzz()
    // numerosPares();

//2- anagrama.js
    // const palabra1 = "llenaba";
    // const palabra2 = "Ballen a "
    // const anagrama = sonAnagramas(palabra1, palabra2)
    // if (anagrama === true) {
    //     console.log("Son Anagramas")
    // } else{
    //     console.log("No Son Anagramas");
    // }

//4- numeroPrimo.js
    // const numero = 4;
    // console.log(esPrimo(numero));
    // console.log(listaNumerosPrimos());

//5- areaPoligono.js
    // const triangle = new Triangle("triángulo", 10, 5);
    // const rectangle = new Rectangle("rectángulo", 5, 7);
    // const square = new Square("cuadrado", 4);

    // calcularAreaPoligono(triangle);
    // calcularAreaPoligono(rectangle);
    // calcularAreaPoligono(square);

//7- invertirCadenas.js
    // const palabra = "Hola mundo";
    // invertirCadenas(palabra);
    // console.log(invertirCadenas(palabra))

//8- contarPalabrasRepetidas.js
    const texto = `En un rincón del alma, se esconde la esperanza, la fe y el amor. 
    En ese rincón, encontramos la fuerza para seguir adelante, para enfrentar los desafíos que la vida nos presenta. 
    La esperanza nos sostiene en los momentos difíciles, la fe nos guía en nuestro camino y el amor nos da la fuerza 
    para superar cualquier obstáculo. En ese rincón del alma, encontramos la paz y la serenidad que tanto anhelamos. 
    Aprendemos a valorar cada instante, cada experiencia, cada encuentro. 
    En ese rincón, descubrimos la belleza de la vida y la magia que hay en cada pequeño detalle.`;
    console.log(contarPalabrasRepetidas(texto));