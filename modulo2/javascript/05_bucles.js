console.log("Bucles for");
for (let i = 1; i <= 10; i++){
    console.log("numero", i);
}

suma = 0;
for (let i = 1; i <= 10; i++){
    suma += i;
}
console.log("Sumatoria indices", suma)
let nombre = "Alexander";
for (let i = 0; i < nombre.length; i++){
    console.log(nombre[i]);
}

console.log("Bucles while");
let i = 1;
while (i <= 6){
    console.log("indice", i);
    i++;
} 
let miArreglo = [-2,3,1,2,3];
let indice = 1;
while (indice < miArreglo.length){
    console.log("El valor del indice:", indice, "es", miArreglo[indice]);
    indice++;
}
let numero = 1;
while (numero <= 10){
    if(numero % 2 === 0)
        console.log("Numero:", numero, "es par.");
    numero++;
}
let x = 5
do {
    console.log("El valor de x es:", x);
    x--;
} while (x !== 0);

let multiplicacion = 1;
while (multiplicacion <= 10){
        console.log(multiplicacion, "* 5 =", multiplicacion * 5);
    multiplicacion++;
}

let miArreglo2 = [1,2,3,4,5];
let indice2 = 1
let mayor = 0
while (miArreglo2 < miArreglo2.length){
    if (miArreglo2 [indice2] > mayor){
        mayor = miArreglo2 [indice2]
    }
    indice2++;
}
console.log("El numero mayor es:", mayor);

