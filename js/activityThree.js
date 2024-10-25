// Inicializamos un array con algunos elementos
let array = ['Manzana', 'Banana', 'Naranja', 'Uva', 'Pera'];

// Función para mostrar el array en el HTML
function mostrarArray() {
    const arrayContainer = document.getElementById('arrayContainer');
    arrayContainer.textContent = array.length > 0 ? array.join(', ') : 'El array está vacío';
}

// Función para eliminar y agregar elementos usando splice()
function modificarArray() {
    const posicionInput = document.getElementById('posicion').value;
    const cantidadEliminarInput = document.getElementById('cantidadEliminar').value;
    const elementosAgregarInput = document.getElementById('elementosAgregar').value.trim();

    const posicion = parseInt(posicionInput);  // Convertir posición a número
    const cantidadEliminar = parseInt(cantidadEliminarInput);  // Convertir cantidad a número
    const elementosAgregar = elementosAgregarInput.length > 0 ? elementosAgregarInput.split(',') : [];

    // Validar que la posición y la cantidad de elementos sean números válidos
    if (isNaN(posicion) || isNaN(cantidadEliminar) || posicion < 0 || cantidadEliminar < 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    // Realizamos la operación de splice
    array.splice(posicion, cantidadEliminar, ...elementosAgregar);
    mostrarArray();  // Actualizar el array en pantalla
}

// Inicializar mostrando el array
mostrarArray();
