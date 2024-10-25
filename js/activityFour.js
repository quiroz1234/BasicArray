// Inicializamos un array con nombres de frutas
let frutas = ['Manzana', 'Banana', 'Naranja', 'Uva', 'Pera', 'Mango', 'Piña'];

// Función para mostrar el array original y el nuevo array en el HTML
function mostrarArrays(nuevoArray = []) {
    const arrayOriginalContainer = document.getElementById('arrayOriginal');
    const arrayNuevoContainer = document.getElementById('arrayNuevo');

    // Mostrar el array original
    arrayOriginalContainer.textContent = `Array original: ${frutas.join(', ')}`;

    // Mostrar el nuevo array si se ha generado
    if (nuevoArray.length > 0) {
        arrayNuevoContainer.textContent = `Nuevo array: ${nuevoArray.join(', ')}`;
    } else {
        arrayNuevoContainer.textContent = 'Nuevo array: (Vacío)';
    }
}

// Función para crear un nuevo array usando slice() a partir del rango proporcionado por el usuario
function crearNuevoArray() {
    const inicioInput = document.getElementById('inicio').value;
    const finInput = document.getElementById('fin').value;

    const inicio = parseInt(inicioInput);  // Convertir el índice inicial a número
    const fin = parseInt(finInput);  // Convertir el índice final a número

    // Validar que los valores sean números válidos y estén dentro del rango del array
    if (isNaN(inicio) || isNaN(fin) || inicio < 0 || fin > frutas.length || inicio >= fin) {
        alert('Por favor, ingrese un rango de índices válido.');
        return;
    }

    // Usar slice para crear un nuevo array
    const nuevoArray = frutas.slice(inicio, fin);
    mostrarArrays(nuevoArray);  // Actualizar el array original y el nuevo array en pantalla
}

// Inicializar mostrando solo el array original
mostrarArrays();
