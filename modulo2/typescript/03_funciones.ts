function saludar(nombre?: string): string {
    return 'Hola, ${nombre}';
}
console.log(saludar('Alexander'));

console.log(saludar('Alexander'));
// funcion flecha
const sumar = (a: number, b: number): number => {
    return a + b;
}
console.log(sumar(3, 2));

function saludarDeNuevo(): void {
    console.log('Hola de nuevo');
    console.log('Bienvenido a TypeScript');
    console.log('Espero que disfrutes aprendiendo');
}
saludarDeNuevo();

function calcularAreaCirculo(radio: number): number {
    return Math.PI * radio * radio;
}
function calcularAreaCirculoVoid(radio: number): void {
    console.log(Math.PI * radio * radio);
}
console.log(calcularAreaCirculo(5));
calcularAreaCirculoVoid(5);