const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log("Math.PI descriptor ----> ", descripter);

//  {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const userOne = {
  name: "Ashu",
  age: 123,
  score: 23,
  email: "ashu@gm.com",
};

Object.defineProperty(userOne, "score", {
  writable: false,
  enumerable: false,
});

Object.defineProperty(userOne, "name", {
  writable: false,
});

for (let item in userOne) {
  console.log(`${item} : ${userOne[item]}`);
}

userOne.name = "Ashutosh Sarangi";

console.log(userOne);
