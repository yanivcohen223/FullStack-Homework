/* 
Write a function with switch-case.
The function receives a number and return string saying if the number given is even or odd.
*/

function even_odd(num1) {
    
    switch (true) {

        case  num1 % 2 == 0 :  console.log('even')
        break;
    
        case  num1 % 2 == 1 :  console.log('odd')
        break;

        case num1 < 0 : console.log('under zero')
        break;

    }
}

console.log(even_odd(0));