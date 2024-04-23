/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */



//PROGRAMA
class Contact{
    constructor(id, name, phone){
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}

class Agenda extends Contact{
    constructor() {
        super();
        // this.contactList = [];
        this.contactList = JSON.parse(localStorage.getItem('contacts')) || [];
        // this.nextId = 1;
        this.nextId = this.contactList.length > 0 ? Math.max(...this.contactList.map(contact => contact.id)) + 1 : 1;
    }
    saveContact(contact){
        const newContact = new Contact(this.nextId++, contact.name, contact.phone);
        this.contactList.push(newContact);
        this.saveToLocalStorage();
    }
    saveToLocalStorage() {
        localStorage.setItem('contacts', JSON.stringify(this.contactList));
    }
    searchContact(searchedContact){
        return this.contactList.filter(item => item.name.includes(searchedContact) || item.phone.includes(searchedContact));
    }
    clearContacts() {
        localStorage.removeItem('contacts'); // Borra los contactos del localStorage
        this.contactList = []; // Borra los contactos en la instancia de Agenda
        this.nextId = 1; // Reinicia el contador de IDs
    }
    showInfo(){
        let info = "";
        this.contactList.forEach(contact => {
            info += `<p><strong>Contacto ${contact.id}</strong>: Nombre: ${contact.name}, Teléfono: ${contact.phone}</p>`
        });
        return info;
    }
}

// const contact1 = new Contact("Juan", 30512525);
// const contact2 = new Contact("Pepe", 985984565569);
// const contact3 = new Contact("María", 30512525);
// const agenda = new Agenda();
// agenda.addContact(contact1); 
// agenda.addContact(contact2); 
// agenda.addContact(contact3); 

// console.log(agenda.showInfo())

const agenda = new Agenda();

window.addEventListener('load', () => {
    showContactList();
    search();
});

const button = document.getElementById("addButton");
button.addEventListener('click', (e)=>{
    e.preventDefault();
    addContact();
    showContactList()
});

function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    agenda.saveContact({ name, phone }); 
}

function showContactList() {
    const infoAgenda = document.getElementById("infoAgenda");
    infoAgenda.innerHTML =  agenda.showInfo();    
}

const searchButton = document.getElementById("searchButton");
searchButton.addEventListener('click', (e)=>{
    e.preventDefault();
    search()
});
function search() {
    const searchContact = document.getElementById("searchContact").value;
    const searchInfo =  document.getElementById("searchInfo");

    const contacts = agenda.searchContact(searchContact);
    searchInfo.innerHTML = "";

    if(contacts.length === 0){
        searchInfo.innerHTML ="No se encontraron resultados"
    }else{
        contacts.forEach(contact => {
            searchInfo.innerHTML += `<p><strong>Contacto ${contact.id}</strong>: Nombre: ${contact.name}, Teléfono: ${contact.phone}</p>`
        });
    }
}

// Botón para borrar todos los contactos
const clearButton = document.getElementById("clear");
clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearContacts();
    search();
    showContactList()
});

function clearContacts() {
    agenda.clearContacts();
    
}