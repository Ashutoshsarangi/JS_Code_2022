// New keyword is used for constructing the Object and because of that it has the capabilities to link the
// Prototype Object

const userInfo = function (userName, score) {
  this.userName = userName;
  this.score = score;
};

userInfo.prototype.printScore = function () {
  console.log(`The Score of ${this.userName} is ${this.score}`);
};

const trueLength = function () {
  console.log(
    `True length of user name is ${this.userName} --> ${
      this.userName.trim().length
    }`
  );
};

Object.prototype.trueLength = trueLength;

// Object.setPrototypeOf(trueLength); // Not Working

// Object.__proto__.trueLength = trueLength; // NOt working

const userOne = new userInfo("Ashu        ", 12);
const userTwo = new userInfo("Anshu         ", 120);
console.log(userOne);

userOne.printScore();
userTwo.printScore();

userOne.trueLength();
userTwo.trueLength();
