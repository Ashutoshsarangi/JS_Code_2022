// i/n:- "My Blog's Name ! 67";
// o/p:- 'My-Blogs-Name;

let input = "My Blog's Name ! 67";
let removePanchuation = input.replace(/[,!@#$%^&*():''"{}||]/g, '');
console.log(removePanchuation);
let urlfy = removePanchuation.toLowerCase().trim().replaceAll(" ", '-');
console.log('Final Result ===> ', urlfy);
