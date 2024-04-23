/*
 * EJERCICIO:
 * Implementa los mecanismos de introducción y recuperación de elementos propios de las
 * pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
 * o lista (dependiendo de las posibilidades de tu lenguaje).
 *
 * DIFICULTAD EXTRA (opcional):
 * - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
 *   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
 *   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
 *   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
 *   el nombre de una nueva web.
 * - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
 *   impresora compartida que recibe documentos y los imprime cuando así se le indica.
 *   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
 *   interpretan como nombres de documentos.
 */


//PILAS Y COLAS

console.log("\n ---------------- PILAS Y COLAS con arrays: -----------------")
// Creamos un array llamado "lista" con tres elementos
let lista = new Array("Maria", "Pedro", "Julio"); 

// Eliminamos el último elemento del array y lo almacenamos en la variable "ultimo"
let ultimo = lista.pop();
console.log(ultimo); // Julio

// Añadimos dos nuevos elementos al final del array
lista.push("Luisa", "Ana");
console.log(lista); // Maria, Pedro, Luisa, Ana

// Añadimos dos nuevos elementos al principio del array
lista.unshift("Pepe", "Juan") 
console.log("Después de agregar dos elementos al principio: " + lista);

// Eliminamos el primer elemento del array y lo almacenamos en la variable "quitados"
let quitados = lista.shift();
console.log("Después de quitar un elemento del principio: " + lista);
console.log("Se extrajo " + quitados);

console.log("\n ---------------- PILAS -----------------\n")
/*
PILAS:
Modalidad LIFO (Last In First Out): el dato ingresado más recientemente es el primero que sacaremos y mostraremos.
CUANDO USAR: 
    - el historial de nuestro navegador Web (Cada nueva página que visitamos se monta encima de la anterior 
    y van generando una pila de registros, sobre los que podemos ir retrocediendo uno a uno 
    (con el botón back del navegador).)
    - una lista de últimos tweets o artículos
*/

console.log("\n ---------------- Con clases (Usando un array): -----------------");
class Stack {
    constructor() {
        this.stack = [];
    }
    //push: Agrega un nuevo valor a la pila, ubicándolo al final de ésta.
    push(element){
        this.stack.push(element);
        return this.stack;
    }
    //pop: Retorna el último valor ingresado a la pila, sacándolo de ésta.
    pop(){
        return this.stack.pop();
    }
    //peek: Retorna el último valor ingresado a la pila, sin sacarlo de ésta.
    peek(){
        return this.stack[this.stack.length-1];
    }
    //size: Retorna el número de elementos que contiene la pila.
    size(){
        return  this.stack.length;
    }

    //
    isEmpty(){
        if(this.size() ==  0){
            console.log('La pila está vacía');
            return true;
        }else{
            return false;
        }
        
    }
    //print: Muestra el contenido de la pila.
    print(){
        console.log(this.stack);
    }

    toString(){
        let elementList = '';
        for (let i = 0; i < this.size(); i++) {
            const element = this.stack[i];
            elementList += `Elemento ${i+1}: ${element}\n`;
        }
        return elementList;
    }
}
const stack = new Stack();
console.log(stack.size()) //0
console.log(stack.push("John Cena")) //[ "John Cena" ]
console.log(stack.push("The Rock")) // [ "John Cena", "The Rock" ]
console.log(stack.size()) //2
stack.print(); // [ "John Cena", "The Rock" ]
console.log(stack.peek()); // The Rock
console.log(stack.pop()); //The Rock
console.log(stack.peek()); //John Cena
console.log(stack.toString()); // Elemento 1: John Cena

console.log("\n ---------------- Con clases (Usando un objeto): -----------------");
class StackObject {
    constructor() {
        this.stack = {};
        this.count = 0;
    }
    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
    pop(){
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek(){
        return  this.stack[this.count-1];
    }
    size() {
        return this.count;
    }

    print(){
        console.log(this.stack)
    }
    toString(){
        let elementList = '';
        for (let i = 0; i < this.size(); i++) {
            const element = this.stack[i];
            elementList += `Elemento ${i+1}: ${element}\n`;
        }
        return elementList;
    }
}

const stackObject = new StackObject();
console.log(stack.size()); // 0
console.log(stack.push('John Cena')); // { '0': 'John Cena' }
console.log(stack.size()); // 1
console.log(stack.peek()); // John Cena
console.log(stack.push('The Rock')); // { '0': 'John Cena', '1': 'The Rock' }
console.log(stack.size()); // 2
stack.print(); // { '0': 'John Cena', '1': 'The Rock' }
console.log(stack.toString())
console.log(stack.peek()); // The Rock
console.log(stack.pop()); // The Rock
stack.print(); // { '0': 'John Cena' }
console.log(stack.size()); // 1
console.log(stack.peek()); // John Cena

console.log("\n ---------------- COLAS -----------------\n")
/* COLAS:
Modalidad FIFO (First In First Out): los primeros datos que ingresen sean los primeros en salir 
y estén ordenados de forma cronológica y por orden de llegada.
CUANDO USAR: la cola del supermercado o del banco, en la cual la persona que está al inicio de la cola, 
es la primera en ser atendida.
*/

console.log("\n ---------------- Con clases: -----------------")
class Queue {
    constructor() { 
        this.queue = [];
    }
    //enqueue: Agrega un nuevo elemento a la cola, situándolo al final de ésta.
    enqueue(element){
        this.queue.push(element);
        return this.queue;
    }
    //dequeue: Retorna el primer elemento de la cola, quitándolo de ésta.
    dequeue(){
        return this.queue.shift();
    }
    //peek: Retorna el primer elemento de la cola, sin quitarlo de ésta.
    peek(){
        return this.queue[0];
    }

    //size: Retorna el número de elementos que contiene la cola.
    size(){
        return this.queue.length;
    }

    //isEmpty: Retorna true/false dependiendo si la cola está vacía.
    isEmpty(){
        return this.queue.length === 0;
    }
    //print: Muestra el contenido de la cola.
    print(){
        return this.queue;    
    }
    toString(){
        // return this.queue.toString();
        let elementList = '';
        for (let i = 0; i < this.size(); i++) {
            const element = this.queue[i];
            elementList += `Elemento ${i+1}: ${element}\n`;
        }
        return elementList;
    }
}

const queue = new Queue();
console.log(queue.enqueue("The Rock")); //[ "The Rock" ]
console.log(queue.enqueue("John Cena")); //Array [ "The Rock", "John Cena" ]
console.log(queue.enqueue("Stone Cold Steve Austin")); //[ "The Rock", "John Cena", "Stone Cold Steve Austin" ]

console.log(queue.toString());  /*  Elemento 1: The Rock
                                    Elemento 2: John Cena
                                    Elemento 3: Stone Cold Steve Austin 
                                */
console.log(queue.dequeue()) //The Rock
console.log(queue.peek()); //John Cena
console.log(queue.size()) //2
console.log(queue.isEmpty()); //false
console.log(queue.print()); //[ "John Cena", "Stone Cold Steve Austin" ]


//PROGRAMA
console.log("\n ---------------- PROGRAMA -----------------\n")


console.log("\n ---------------- Navegador web: -----------------")

class WebBrowser {
    constructor() {
      this.history = [];
      this.currentPage = null;
    }
  
    visitPage(url) {
      if (this.currentPage) {
        this.history.push(this.currentPage);
      }
      this.currentPage = url;
    }

    size() {
        return this.history.length;
    }

    isEmpty() {
        if (this.size() === 0) {
            console.log('The history is empty');
            return true;
        } else {
            return false;
        }
    }
  
    forward() {
      if (!this.isEmpty()) {
        this.currentPage = this.history.pop();
      }
    }
  
    back() {
      if (!this.isEmpty()) {
        const aux = this.history.pop();
        this.currentPage = this.history.pop();
        this.history.push(aux);
      }
    }
}
  
const browser = new WebBrowser();
  
browser.visitPage("https://javascript.info/");
browser.visitPage("https://javascript.info/document");
browser.visitPage("https://www.google.com/");
console.log("Página anterior: " + browser.currentPage);
  
browser.back();
  
console.log("Página actual: " + browser.currentPage);
  
browser.forward();
  
console.log("Página siguiente: " + browser.currentPage);


console.log("\n ---------------- Impresora compartida: -----------------")

class SharedPrinter {
    constructor() {
        this.documents = [];
    }

    // Método para recibir documentos y almacenarlos en la cola
    receiveDocuments(document) {
        this.documents.push(document);
        return this.documents;
    }

    // Método para imprimir el siguiente documento en la cola
    printNextDocument() {
        if (this.documents.length === 0) {
            return `No hay documentos en espera para imprimir.`
        } 
        const document = this.documents.shift(); // Sacar el primer documento de la cola
        return document;
    }

    // Método para imprimir todos los documentos en la cola
    printAllDocuments(){
        if (this.documents.length === 0) {
            return "No hay documentos para imprimir.";
        }
        const printedDocuments = this.documents.slice().join(', '); // Copiar la lista de documentos para saber todos los que se van a imprimir
        this.documents = []; // Vaciar la lista de documentos
        return printedDocuments;
    }

    // Método para mostrar todos los documentos de la cola
    showAllDocuments(){
        let documentList = '';
        if (this.documents.length === 0) {
            return "No hay documentos en la bandeja.";
        }
        for (let i = 0; i < this.documents.length; i++) {
            const document = this.documents[i];
            documentList += `Documento ${i+1}: ${document}\n`;
        }
        return documentList;
    }
}

// Ejemplo de uso
const printer = new SharedPrinter();
printer.receiveDocuments("documento1.pdf");
printer.receiveDocuments("documento2.pdf");
printer.receiveDocuments("documento3.pdf");

console.log("Mostrar todos los documentos antes de imprimir:");
console.log(printer.showAllDocuments()); /* 
                                            Documento 1: documento1.pdf
                                            Documento 2: documento2.pdf
                                            Documento 3: documento3.pdf
                                            */


console.log("Imprimir de uno en uno:");
console.log(printer.printNextDocument()); // documento1.pdf
console.log(printer.printNextDocument()); // documento2.pdf

console.log("Imprimir todos los documentos:");
console.log(printer.printAllDocuments());

console.log("Mostrar todos los documentos que quedan después de imprimir:");
console.log(printer.showAllDocuments());