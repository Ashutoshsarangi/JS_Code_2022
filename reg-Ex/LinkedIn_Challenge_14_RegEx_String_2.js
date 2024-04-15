/*
1. atleast 1 lower case
2. at least 1 Upper case
3. at least 1 digit
4. at least 1 special character
5. minimum 8 character long

if satisfy valid else invalid
*/

let password = 'Ashu@1995';
let atleastOneLowerCasePattern = /(?=.+[a-z])/;
let atleastOneUpperCasePattern = /(?=.+[A-z])/;
let atleastOneNumberPattern = /(?=.+[0-9])/;
let atleastOneSpecialCharPattern = /(?=.+[!@#$%^&*()_?|":>"])/;
let minCharPattern = /(?=.{8,})/;
let output = atleastOneLowerCasePattern.test(password) && atleastOneNumberPattern.test(password) && atleastOneSpecialCharPattern.test(password)
                && atleastOneUpperCasePattern.test(password) && minCharPattern.test(password);


console.log(output);
