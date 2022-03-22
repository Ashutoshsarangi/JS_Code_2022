class Car{
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

const mixins ={
    name: 'Ashu',
    show(){
        console.log(`The ${this.engine} isw the good one with ${this.doors} ${this.name}`);
    }
}

Object.assign(Car.prototype, mixins);

let c = new Car(4, 'VV11', 'red');

console.log(c);

c.show();
