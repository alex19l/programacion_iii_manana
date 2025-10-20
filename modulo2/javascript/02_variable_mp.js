console.log ("Variables en JavaScript");

saludo="Hola a todos usando una variable";
console.log ("Variable saludo", saludo);
console.log ("Tipo de Variable", typeof (saludo));

numero=256;
console.log ("Variable numero", numero);
console.log ("Tipo de Variable", typeof (numero));

booleana=false;
console.log ("Variable Boolean", booleana);
console.log ("Tipo de Variable", typeof (booleana));

indefinida=undefined;
console.log ("Variable Indefinida", indefinida);
console.log ("Tipo de Variable", typeof (indefinida));

nula=null;
console.log ("Variable Nula", nula);
console.log ("Tipo de Variable", typeof (nula));

bigentor=9007199254740991n;
console.log ("Variable BigInt", bigentor);
console.log ("Tipo de Variable", typeof (bigentor));

persona={
    nombre:"Juan", 
    apellido:"Perez",
    edad:30
}
console.log ("Variable Objeto", persona);
console.log ("Tipo de Variable", typeof (persona));

numeros=[1,2,3,4,8,8,5];
console.log ("Variable Array", numeros);
console.log ("Tipo de Variable", typeof (numeros));

fecha=new Date();
console.log ("Variable Fecha", fecha);
console.log ("Tipo de Variable", typeof (fecha));

funcion=function(){
    console.log ("Hola desde la función");
}

