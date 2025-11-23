const cursos = [
  { nombre: "JavaScript Básico", descripcion: "Fundamentos del lenguaje", precio: 50, duracion: 40, ubicacion: "Aula Virtual A" },
  { nombre: "React.js", descripcion: "Desarrollo de interfaces modernas", precio: 120, duracion: 25, ubicacion: "Aula Virtual B" },
  { nombre: "Node.js", descripcion: "Backend con JavaScript", precio: 100, duracion: 20, ubicacion: "Aula Virtual C" },
  { nombre: "Python Avanzado", descripcion: "Automatización y análisis de datos", precio: 150, duracion: 15, ubicacion: "Aula Virtual D" },
  { nombre: "Bases de Datos SQL", descripcion: "Modelado y consultas", precio: 80, duracion: 30, ubicacion: "Aula Virtual E" },
  { nombre: "Git y GitHub", descripcion: "Control de versiones", precio: 40, duracion: 50, ubicacion: "Aula Virtual F" },
  { nombre: "Arquitectura de Software", descripcion: "Patrones y buenas prácticas", precio: 200, duracion: 10, ubicacion: "Aula Virtual G" },
  { nombre: "Desarrollo Móvil", descripcion: "Apps con Flutter", precio: 180, duracion: 12, ubicacion: "Aula Virtual H" },
  { nombre: "Inteligencia Artificial", descripcion: "Machine Learning con Python", precio: 250, duracion: 8, ubicacion: "Aula Virtual I" },
  { nombre: "DevOps", descripcion: "Integración y despliegue continuo", precio: 220, duracion: 6, ubicacion: "Aula Virtual J" }
];

const tabla = document.getElementById('cuerpoTabla');

cursos.forEach(curso => {
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${curso.nombre}</td>
    <td>${curso.descripcion}</td>
    <td>$${curso.precio.toFixed(2)}</td>
    <td>${curso.duracion} horas</td>
    <td>${curso.ubicacion}</td>
  `;
  tabla.appendChild(fila);
});