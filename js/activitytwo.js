// Inicializamos la lista de tareas vacía
let tareas = [];

// Función para mostrar la lista de tareas en el HTML
function mostrarTareas() {
    const listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = '';  // Limpiar la lista

    if (tareas.length > 0) {
        tareas.forEach((tarea, index) => {
            const tareaElemento = document.createElement('li');
            tareaElemento.textContent = `${index + 1}. ${tarea}`;
            listaTareas.appendChild(tareaElemento);
        });
    } else {
        listaTareas.textContent = 'No hay tareas en la lista.';
    }
}

// Función para agregar una nueva tarea al principio de la lista
function agregarTarea() {
    const inputTarea = document.getElementById('tareaInput');
    const nuevaTarea = inputTarea.value.trim();  // Eliminar espacios en blanco

    if (nuevaTarea) {
        tareas.unshift(nuevaTarea);  // Agregar al principio
        mostrarTareas();
        inputTarea.value = '';  // Limpiar el input
    } else {
        alert('Por favor, ingrese una tarea.');
    }
}

// Función para eliminar la tarea más antigua (la última)
function eliminarTareaAntigua() {
    if (tareas.length > 0) {
        tareas.shift();  // Eliminar la tarea más antigua (primer elemento)
        mostrarTareas();
    } else {
        alert('No hay tareas para eliminar.');
    }
}

// Inicializar mostrando la lista vacía
mostrarTareas();
