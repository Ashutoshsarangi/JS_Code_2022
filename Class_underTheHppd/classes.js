// class User {
//   constructor(userName, userEmail, score) {
//     this.userName = userName;
//     this.userEmail = userEmail;
//     this.score = score;
//   }

//   showUserName() {
//     console.log("user Name is  ---> ", this.userName);

//     return "something"; // if we don't return by default it returns undefined
//   }

//   printScore() {
//     console.log(`My score is ${this.score}`);
//     // return this;
//   }
// }

// const userOne = new User("Ashu", "Ashu@gmail.com", 123);

// console.log(userOne);

// console.log(userOne.showUserName());
// console.log(userOne.printScore());

// Under the Hood

function User(userName, userEmail, score) {
  this.userName = userName;
  this.userEmail = userEmail;
  this.score = score;
}

User.prototype.showUserName = function () {
  console.log("user Name is  ---> ", this.userName);

  return "xyz";
};

User.prototype.printScore = function () {
  console.log(`My score is ${this.score}`);
};

const userOne = new User("Ashu", "Ashu@gmail.com", 123);

console.log(userOne);

console.log(userOne.showUserName());
console.log(userOne.printScore());
