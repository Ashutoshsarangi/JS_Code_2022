const User = function (userName, userEmail, score) {
  this.email = userEmail;
  this.score = score;

  this.setUserName = function (userName) {
    this.userName = userName;
    return this;
  };
};

const userOne = new User("Ashu", "ashu@gm.com", 234);

const temp = userOne.setUserName;
console.log("Without Bind ---> ", temp("Ashu")); // here this will be global Object

console.log("With Bind --> ", temp.bind(userOne)("Ashu")); // Here We are saing bind with this (userOne) Object
