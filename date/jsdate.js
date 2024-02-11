let date = new Date();

console.log("new Date() ---> ", date);
console.log("new Date().toDateString ---> ", date.toDateString());
console.log("new Date().toISOString ---> ", date.toISOString());
console.log("new Date().toJSON ---> ", date.toJSON());
console.log("new Date().toLocaleDateString ---> ", date.toLocaleDateString());
console.log("new Date().toLocaleString ---> ", date.toLocaleString());
console.log("new Date().toLocaleTimeString ---> ", date.toLocaleTimeString());
console.log("new Date().toString ---> ", date.toString());
console.log("new Date().toTimeString ---> ", date.toTimeString());
console.log("new Date().getTimezoneOffset ---> ", date.getTimezoneOffset());
console.log("new Date().getTime ---> ", date.getTime());

console.log(
  "change it to dd/mm/yyyy using new Date() ----> ",
  `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} ${date.toLocaleTimeString()}`
);
