let parrafo = null;
document.getElementById('crear').addEventListener('click', () => {
    parrafo = document.createElement('p');
    parrafo.textContent = "Párrafo dinamico desde JavaScript.";
    document.getElementById('contenedor').appendChild(parrafo);
}); 
document.getElementById('eliminar').addEventListener('click', () => {
    if (parrafo) parrafo.remove();
});