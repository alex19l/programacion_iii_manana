const formulario = document.getElementById('formulario');
const contenedor = document.getElementById('contenedorInscripcion');
let cursos = [];

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nombre = document.getElementById('direccion').value.trim();
  const apellido = document.getElementById('descripcion').value.trim();
  const edad = parseFloat(document.getElementById('precio').value.trim());

  if (nombre && apellido && !isNaN(edad)) {
    const nuevaCurso = { id: Date.now(), nombre, apellido, edad };
    cursos.push(nuevaCurso);
    renderizarCasa(nuevaCurso);
    formulario.reset();
  }
});

function renderizarCasa({ id, direccion, descripcion, precio }) {
  const div = document.createElement('div');
  div.className = 'curso';
  div.setAttribute('data-id', id);
  div.innerHTML = `
    <h3>${direccion}</h3>
    <p>${descripcion}</p>
    <p><strong>Precio: $${precio.toFixed(2)}</strong></p>
    <div class="acciones"><button class="eliminar">Eliminar</button></div>
  `;
  contenedor.appendChild(div);
}

contenedor.addEventListener('click', (e) => {
  if (e.target.classList.contains('eliminar')) {
    const tarjeta = e.target.closest('.curso');
    const id = parseInt(tarjeta.getAttribute('data-id'));
    cursos = cursos.filter(c => c.id !== id);
    tarjeta.remove();
  }
});
 