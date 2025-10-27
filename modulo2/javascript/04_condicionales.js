let temperatura = 35;

if (temperatura > 30) {
    console.log("Hace calor");
} 

let password = "pass123";
if (password === "pass12345") {
    console.log("Usuario Autorizado");
} else {
    console.log("Usuario Denegado");
} 

let nota = 7;
if (nota >= 9) {
    console.log("Sobresaliente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

let edad = 7;
let tiene_licencia = true;
if (edad >= 18) {
    if (tiene_licencia) {
        console.log("Puede conducir");
    } else {
        console.log("Necesita licencia para conducir");
    }
} else {
    console.log("Es menor de edad, no puede conducir");
}

let edad2 = 7;
let tiene_licencia2 = true;
if (edad >= 18 && tiene_licencia) {
    console.log("Puede conducir");
} else if (edad >= 18 && !tiene_licencia) {
    console.log("Necesita licencia para conducir");
} else {
    console.log("Es menor de edad, no puede conducir");
}

// Estructura switch
let dia = "lunes";
switch(dia){
    case "lunes":
        console.log("Ultimo dia de la semana");
        break;
    case "viernes":
        console.log("Ultimo dia laboral");
        break;
    default:
        console.log("Dia Normal");
}

// Ejercicio en Clase.
let num = 1;
let num1 = 2;
let num2 = 3;

mayor = 0
if (num > num1){
    mayor = num;
} if (num2>mayor){
    mayor = num2;
}
console.log("El numero MAYOR es", mayor); 