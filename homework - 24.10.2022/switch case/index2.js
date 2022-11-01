/*
Write a function with switch-case.
The function receives a number and return string saying if the number given is negative or
positive.
*/
function even_odd(num1) {
    
    switch (true) {

        case  num1 < 0 :  console.log('negetiv')
        break;
    
        case  num1 > 0 :  console.log('positive')
        break;

        case num1 === 0 : console.log('zero')
        break;


    }
}

console.log(even_odd(200));