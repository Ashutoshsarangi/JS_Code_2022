class Car{
    constructor(doors, engine, brand){
        this.doors = doors;
        this.engine = engine;
        this.brand = brand;
    }
}

class Factory{
    createCar(type){
        switch(type){
            case 'TATA':
                return new Car(4, 'v8', 'tata');
            case 'BMW':
                return new Car(4, 'v11', 'BMW');
            default :
                return new Car(4, 'v2', 'NANO');
        }
    }
}

let factory = new Factory();
console.log(factory.createCar('TATA'));
console.log(factory.createCar());
