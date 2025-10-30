interface Usuario {
    id: number;
    nombre: string;
    correo?: string;
}

const usuario1: Usuario = {
    id: 12,
    nombre: 'Jose Garcia Marquez',
    correo: 'jose.marquez@example.com'
}

const usuario2: Usuario = {
    id: 15,
    nombre: 'Ana Maria Souza',
    correo: 'ana.souza@example.com'
}

console.log(usuario1);
console.log(usuario1.id);
console.log(usuario1.nombre);
console.log(usuario1.correo);

console.log(usuario2);
console.log(usuario2.id);
console.log(usuario2.nombre);
console.log(usuario2.correo);
