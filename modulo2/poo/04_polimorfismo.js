class Empleado {
    constructor(nombre, salario){
        this.nombre = nombre;
        this.salario = salario;
    }
    trabajo(){
        console.log("Empleado trabajando...");
    }
    calcularVacaciones(){
        return this.salario * 0.15;
    }
    horasExtra(horas){
        return ((this.salario/30/8)*horas * 2);
    }
}

class Programador extends Empleado {
    calcularVacaciones(){
        return this.salario * 0.20;
    }
    horasExtra(horas){
        return ((this.salario/30/8)*horas * 3);
    }
}

class Diseñador extends Empleado {
    calcularVacaciones(){
        return this.salario * 0.10;
    }
}

const programadorPedro = new Programador("Pedro", 2000);
const diseñadorJuan = new Diseñador("Juan", 1200);
programadorPedro.trabajo();
diseñadorJuan.trabajo();
console.log(programadorPedro.calcularVacaciones());
console.log(diseñadorJuan.calcularVacaciones());
console.log(programadorPedro.horasExtra(5));
console.log(diseñadorJuan.horasExtra(4));


