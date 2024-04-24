/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

class Animal{
    constructor(nombre){
        this.nombre = nombre;
    }

    getNombre(){
        return `Mi nombre es ${this.nombre}`;
    }

    imprimirSonido(){
        console.log(`${this.getNombre()} y estoy haciendo sonido`);
    }
}

class Perro extends Animal{
    imprimirSonido() {
        console.log(`${this.getNombre()} y mi sonido es: ¡Guau!`);
    }
}

class Gato extends Animal{
    imprimirSonido() {
        console.log(`${this.getNombre()} y mi sonido es: ¡Miau!`);
    }
}

class Pajaro extends Animal{

}

const perro = new Perro("Toby");
const gato = new Gato("Garfield");
const pajaro = new Pajaro("Pio");

perro.imprimirSonido();
gato.imprimirSonido(); 
pajaro.imprimirSonido();

//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")

class Empleado {
    constructor(id, nombre, salario) {
        this.id = id;
        this.nombre = nombre;
        this.salario = salario;
        this.empleadosACargo = []; // Lista de empleados a cargo
    }
  
    getSalario() {
        return this.salario;
    }
  
    setSalario(nuevoSalario) {
        this.salario = Math.round(nuevoSalario);
    }

    getNombre() {
        return this.nombre;
    }
  
    agregarEmpleadoACargo(empleado) {
        this.empleadosACargo.push(empleado);
    }
  
    obtenerEmpleadosACargo() {
        return this.empleadosACargo;
    }
}

class Gerente extends Empleado {
    constructor(id, nombre, salario, departamento) {
       super(id, nombre, salario);
       this.departamento = departamento;
    }

    getDepartamento() {
        return `El gerente ${this.nombre} se encarga del Departamento: ${this.departamento}`;
    }
    
    aumentarSalario(porcentaje) {
        let nuevoSalario = this.getSalario() * (1 + porcentaje / 100);
        this.setSalario(nuevoSalario);
    }
}

class GerenteProyectos extends Empleado {
    constructor(id, nombre, salario, proyecto) {
        super(id, nombre, salario);
        this.proyecto = proyecto;
    }

    getProyecto() {
        return `${this.nombre} está trabajando en el Proyecto: ${this.proyecto}`;
    }

    asignarEmpleado(empleado) {
        this.agregarEmpleadoACargo(empleado);
    }
}

class Programador extends Empleado {
    constructor(id, nombre, salario, lenguaje) {
        super(id, nombre, salario);
        this.lenguaje = lenguaje;
    }

    getLenguaje() {
        return `El programador ${this.nombre} usa como lenguaje de programación: ${this.lenguaje}`;
    }
}

// Ejemplo de uso
const gerente = new Gerente(1, "Pepe", 1500, "Marketing");
gerente.aumentarSalario(10);
console.log(gerente.getSalario());
console.log(gerente.getDepartamento());

const gerenteProyectos = new GerenteProyectos(2, "Maria", 2000, "Campaña Publicitaria");
gerenteProyectos.asignarEmpleado(new Programador(3, "Juan", 1300, "JavaScript"));
gerenteProyectos.asignarEmpleado(new Programador(4, "Lucía", 1400, "Python"));
console.log(gerenteProyectos.getProyecto());
console.log("Empleados a cargo: ")
console.log(gerenteProyectos.obtenerEmpleadosACargo());

const programador = new Programador(5, "Carlos", 1200, "Java");
console.log(programador.getLenguaje());


