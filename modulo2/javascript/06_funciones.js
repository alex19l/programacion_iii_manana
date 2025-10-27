console.log("Funciones en JavaScript");

console.log("----- Declaración de función forma Clásica-----");
function saludar(nombre) {
    console.log("Hola desde una Función Clásica");
}
saludar();

console.log("----- Función con Parámetros y Retorno -----");
function sumar(a, b) {
    return a + b;
}
resultado = sumar(4, 9);
console.log("El resultado de la suma es: " + resultado);

console.log("----- Función Flecha -----");
const resta = (a, b) => {
    return a - b;
}
let resultadoResta = resta(9, 5);
console.log("El resultado de la resta es: ", resultadoResta);

console.log("----- Función Flecha con Retorno -----");
const cuadrado = x => x * x;
console.log("El cuadrado de 5 es: ", cuadrado(5));

console.log("----- Función con Parámetros por Defecto -----");
function saludar (nombre, saludo = "Hola") {
    return saludo + " " + nombre;
}
let saludo1 = saludar("Juan");
let saludo2 = saludar("Pedro");
console.log(saludo1);
console.log(saludo2);

console.log("----- Función Flecha -----");
const esPar = (numero) => numero % 2 === 0;
console.log(esPar(4)); 
console.log(esPar(7)); 

//
const calcularAreaTriangulo = (base, altura) => (base * altura) / 2;
const baseTriangulo = 10;
const alturaTriangulo = 5;
const area = calcularAreaTriangulo(baseTriangulo, alturaTriangulo);
console.log("El área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${area}");

