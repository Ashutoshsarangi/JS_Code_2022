// Object Singletone
const singletoneObj = Object.create({}); // {}
// OBject Literals

const literalObj = {};

const symbolKey = Symbol("key1");

const JsonData = {
  [symbolKey]: "Hekki",
  name: "Ashu",
  "full name": "Ashutosh Sarangi",
};

console.log("Symbol key access ---> ", JsonData[symbolKey]);
console.log("Full name key access ---> ", JsonData["full name"]);
console.log("Complete Json Data ---> ", JsonData);
