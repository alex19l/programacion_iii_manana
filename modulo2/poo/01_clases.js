class Car{
    constructor(brand, model1){
        this.brand = brand;
        this.model1 = model1;
    }
    start(){
        console.log(`${this.brand} ${this.model1} está encendido`)
    }
    run(){
        console.log(`${this.brand} ${this.model1} está en movimiento`)
    }
    stop(){
        console.log(`${this.brand} ${this.model1} está apagado`)
    }
}
const miCarro = new Car("Toyota", "Corolla");
miCarro.start();
miCarro.run();
miCarro.stop();
console.log(miCarro.brand);
console.log(miCarro.model1);
