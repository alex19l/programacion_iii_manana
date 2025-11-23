console.log("Objetos en JavaScript");
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Quito"
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.ciudad);
console.log(persona["edad"]);
persona.edad = ("Modificación del Objeto");
persona.nombre = "Maria";
console.log(persona);
console.log("Eliminar clave al Objeto");
delete persona.ciudad;
console.log(persona);

console.log ("Recoger un Objeto con un ciclo for...in");
for (let clave in persona) {
    console.log(clave);
}
console.log("Mostrar clave con Object.keys");
console.log(Object.keys(persona));
console.log("Mostrar valores con Object.values y Object.entries");
console.log(Object.values(persona));
console.log("Objetos Anidados");
let estudiante = {
    nombre: "Pedro",
    apellido: "Perez",
    contacto:{
        email: "pedro.perez@example.com",
        telefono: "123-456-7890",
        celular: "098-765-4321"
    },
    materia:[
        {
            nombre: "Programación III",
            nota: 8
        },
        {
            nombre: "Base de Datos II",
            nota: 9
        },
    ]
};
console.log("Estudiante: ", estudiante);