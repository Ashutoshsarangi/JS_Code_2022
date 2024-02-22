// class User {
//   constructor(userEmail) {
//     this.userEmail = userEmail;
//   }

//   logMe() {
//     console.log(this.userEmail);
//   }
// }

// class Teacher extends User {
//   constructor(userName, userEmail, score) {
//     super(userEmail);
//     this.userName = userName;
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

// const teacherOne = new Teacher("Ashu", "as@gmail.com", 455);

// console.log(teacherOne);

// Under the Hood How it is working

function User(userEmail) {
  this.userEmail = userEmail;
}

function Teacher(userName, userEmail, score) {
  User.call(this, userEmail);
  this.userName = userName;
  this.score = score;
}

Teacher.prototype.showUserName = function () {
  console.log("user Name is  ---> ", this.userName);

  return "xyz";
};

Teacher.prototype.printScore = function () {
  console.log(`My score is ${this.score}`);
};

const teacherOne = new Teacher("Ashu", "Ashu@gmail.com", 123);

console.log(teacherOne);

console.log(teacherOne.showUserName());
console.log(teacherOne.printScore());
