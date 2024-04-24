import { describe, expect, it, test, assert } from "vitest";
import { sum, diccionario } from './14-pruebas-unitarias';

//test se utiliza para realizar una única prueba
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3)
// })

//describe se utiliza para varias pruebas
describe('Función Suma', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('adds 3 + 2 to equal 5', () => {
        expect(sum(3,2)).toBe(5);
    });
});


console.log("\n ---------------- PROGRAMA -----------------\n")
test('Existen todos los campos', () => {
    expect(diccionario).to.have.all.keys(['name', 'age', 'birth_date', 'programming_languages']);
});

test('Los datos introducidos son correctos', () => {
    assert('El nombre es correcto', diccionario.name === 'Maider');
    assert('La edad es correcta', diccionario.age === 37);
    assert('La fecha de nacimiento es correcta', diccionario.birth_date.toISOString() === '1985-07-06T00:00:00.000Z');
    assert('Los lenguajes de programación son correctos', diccionario.programming_languages.length === 3 && diccionario.programming_languages.includes('JavaScript') && diccionario.programming_languages.includes('SQL') && diccionario.programming_languages.includes('Java'));
});



/*
VITEST:
Sitio web Oficial de Vitest: https://vitest.dev/guide/
*/
/* 
JEST:
Sitio web Oficial de Jest: https://jestjs.io/es-ES/docs/getting-started
*/
