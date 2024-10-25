// Inicializamos el array vacío
let array = [];

// Función para mostrar el array
function mostrarArray() {
    console.log("Array actual: ", array);
}

// Función para agregar elementos al array
function agregarElemento(elemento) {
    array.push(elemento);
    console.log(`Elemento '${elemento}' agregado.`);
    mostrarArray();
}

// Función para eliminar el último elemento del array
function eliminarUltimoElemento() {
    if (array.length > 0) {
        let elementoEliminado = array.pop();
        console.log(`Elemento '${elementoEliminado}' eliminado.`);
    } else {
        console.log("No hay elementos para eliminar.");
    }
    mostrarArray();
}

// Simulando la interacción del usuario
agregarElemento("Manzana");
agregarElemento("Banana");
agregarElemento("Naranja");

eliminarUltimoElemento(); // Elimina "Naranja"
eliminarUltimoElemento(); // Elimina "Banana"
eliminarUltimoElemento(); // Elimina "Manzana"
eliminarUltimoElemento(); // No hay más elementos para eliminar
