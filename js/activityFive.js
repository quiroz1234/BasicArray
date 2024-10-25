// Inicializamos un array vacío para la lista de contactos
let contactos = [];

// Función para mostrar la lista de contactos en la consola
function mostrarContactos() {
    if (contactos.length > 0) {
        console.log("Lista de contactos:");
        contactos.forEach((contacto, index) => {
            console.log(`${index + 1}. ${contacto}`);
        });
    } else {
        console.log("No hay contactos en la lista.");
    }
}

// Función para agregar un nuevo contacto al final usando push()
function agregarContacto(contacto) {
    if (contacto.trim()) {
        contactos.push(contacto);  // Agregar al final de la lista
        console.log(`Contacto "${contacto}" agregado.`);
    } else {
        console.log("Por favor, ingrese un nombre de contacto válido.");
    }
    mostrarContactos();
}

// Función para eliminar el último contacto usando pop()
function eliminarUltimoContacto() {
    if (contactos.length > 0) {
        const eliminado = contactos.pop();  // Eliminar el último contacto
        console.log(`Contacto "${eliminado}" eliminado.`);
    } else {
        console.log("No hay contactos para eliminar.");
    }
    mostrarContactos();
}

// Función para agregar un nuevo contacto al principio usando unshift()
function agregarContactoAlPrincipio(contacto) {
    if (contacto.trim()) {
        contactos.unshift(contacto);  // Agregar al principio de la lista
        console.log(`Contacto "${contacto}" agregado al principio.`);
    } else {
        console.log("Por favor, ingrese un nombre de contacto válido.");
    }
    mostrarContactos();
}

// Función para eliminar el primer contacto usando shift()
function eliminarPrimerContacto() {
    if (contactos.length > 0) {
        const eliminado = contactos.shift();  // Eliminar el primer contacto
        console.log(`Contacto "${eliminado}" eliminado del principio.`);
    } else {
        console.log("No hay contactos para eliminar.");
    }
    mostrarContactos();
}

// Función para eliminar un contacto en una posición específica usando splice()
function eliminarContactoEnPosicion(posicion) {
    if (posicion >= 0 && posicion < contactos.length) {
        const eliminado = contactos.splice(posicion, 1);  // Eliminar en la posición especificada
        console.log(`Contacto "${eliminado}" eliminado en la posición ${posicion + 1}.`);
    } else {
        console.log("Posición inválida.");
    }
    mostrarContactos();
}

// Función para agregar un contacto en una posición específica usando splice()
function agregarContactoEnPosicion(contacto, posicion) {
    if (contacto.trim() && posicion >= 0 && posicion <= contactos.length) {
        contactos.splice(posicion, 0, contacto);  // Agregar en la posición especificada
        console.log(`Contacto "${contacto}" agregado en la posición ${posicion + 1}.`);
    } else {
        console.log("Por favor, ingrese un contacto y una posición válida.");
    }
    mostrarContactos();
}

// Función para obtener un rango de contactos usando slice()
function obtenerRangoDeContactos(inicio, fin) {
    if (inicio >= 0 && fin <= contactos.length && inicio < fin) {
        const nuevoArray = contactos.slice(inicio, fin);  // Obtener un nuevo array en el rango
        console.log(`Contactos en el rango seleccionado (${inicio + 1} a ${fin}): ${nuevoArray.join(', ')}`);
    } else {
        console.log("Rango inválido.");
    }
}

// --- Ejemplos de uso ---

// Agregar contactos
agregarContacto('Juan');
agregarContacto('Ana');
agregarContacto('Pedro');

// Eliminar el último contacto
eliminarUltimoContacto();

// Agregar contacto al principio
agregarContactoAlPrincipio('Laura');

// Eliminar el primer contacto
eliminarPrimerContacto();

// Eliminar un contacto en una posición específica
eliminarContactoEnPosicion(1);

// Agregar un contacto en una posición específica
agregarContactoEnPosicion('Carlos', 1);

// Obtener un rango de contactos
obtenerRangoDeContactos(0, 2);
