function *NumberOfStops(){
    yield 'Kadua';
    yield 'Narendra Pur';
    yield 'Jodabandha';
    yield 'Routi';
    yield 'Bhabasar';
    yield 'Charikonia';
    yield 'Agya Prasad';
    yield 'Jagannath Prasad';
}

let tempStops = NumberOfStops();
let currentStop = tempStops.next();

while(!currentStop.done){
    console.log(currentStop.value);
    currentStop = tempStops.next()
}
console.log('We Made it');
