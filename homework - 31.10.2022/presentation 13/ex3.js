/*
Create a function that receive 2 strings 
If 1 of them is part of the other string → the function will return true
If not → the function will return false
The check should include lowercase and uppercase
*/

let str1 = 'sTrinG onE'
let str2 = 'StrIng'

function checkStrings (str1, str2) {

    str1.toLowerCase().includes(str2.toLowerCase()) ? console.log(true): console.log(false); 
    str1.toUpperCase().includes(str2.toUpperCase()) ? console.log(true): console.log(false);

}

console.log(checkStrings(str1, str2));