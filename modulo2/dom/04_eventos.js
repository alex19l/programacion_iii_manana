let parrafo = null;
document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Párrafo dinamico desde JavaScript.";
    document.getElementById('contenedor').appendChild(parrafo);
}); 
document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});

function saludar() {
    alert('Hola desde la función saludar()');
}

document.getElementById('parrafo').addEventListener('click', () => {
    alert('Se hizo doble Click en el párrafo');
});

document.getElementById('nombre').addEventListener('input', (e) => {
    console.log('Escribiendo:', e.target.value);
});

