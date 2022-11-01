/*
Write a function with switch-case.
The function receives one number, if the number is between 1 to 12, then the function will
return the specific month, otherwise the function will return “please enter another number”
*/

let months_array = ['jan', 'feb', ' mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

function even_odd(num1) {
    
    switch (true) {

        case  num1 > 0 && num1 <= 12:  console.log(`the month is ${months_array[num1-1]}`)
        break;

        case  num1 > 12 || num1 <= 0 :  console.log('please enter another number')
        break;

    }
}

console.log(even_odd(8));