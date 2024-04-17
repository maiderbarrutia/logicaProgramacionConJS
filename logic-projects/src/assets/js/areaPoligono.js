/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

class Polygon {
    constructor(name) {
        this.name = name;
    }

    calculateArea() {}
    message() {}
}

export class Triangle extends Polygon {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return (this.base * this.height) / 2;
    }

    message() {
        console.log(`El área del ${this.name} es ${this.calculateArea()}`);
    }
}

export class Rectangle extends Polygon {
    constructor(name, length, width) {
        super(name);
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }

    message() {
        console.log(`El área del ${this.name} es ${this.calculateArea()}`);
    }
}

export class Square extends Polygon {
    constructor(name, side) {
        super(name);
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    message() {
        console.log(`El área del ${this.name} es ${this.calculateArea()}`);
    }
}

export function calcularAreaPoligono(polygon) {
    polygon.message();
    return polygon.calculateArea();
}