let temp = [2,3,1,5];
let coffeePrice = 1.25;

let totalPrice = temp.reduce((acc, curr)=>{
    return acc+ curr*coffeePrice;
}, 0);
console.log(`The total bill is $${totalPrice}`);
