function setUserName(userName) {
  this.userName = userName;
}

function userInfo(userName, password, score) {
  //   setUserName(userName);
  //If we call this we never get the this.userName because EC (Execution context)
  // Will Out of stack from here, hence this reference is also out of stack

  //   To resolve this Above Scenario I need to Say use current this context

  setUserName.call(this, userName); // Now Even the Execution Context is Out of stack this is current context.

  this.password = password;
  this.score = score;

  //   return this;  No need this when we have new we get this by default
}

const userOne = new userInfo("Ashu", "Ashu@123", 123);

console.log(userOne);
