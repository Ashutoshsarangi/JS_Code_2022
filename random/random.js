const min = 10;
const max = 100;
const result = [];

for (let i = 0; i < 100; i++) {
  result.push(Math.floor(Math.random() * (max - min) + min));
}

console.log(result);
