let instance = null;

class Car{
    constructor(doors, engine, brand){
        if(!instance){
            this.doors = doors;
            this.engine = engine;
            this.brand = brand;
            instance = this;
        }else{
            return instance;
        }
        
    }
}


let BmwCar = new Car(4, 'v8', 'BMW');
let tataCar = new Car(10, 'v11', 'TATA');
console.log(BmwCar);
console.log(tataCar);
