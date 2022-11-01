/*
Write a function with switch-case.
The function receives one number, if the number is between 1 to 7, then the function will
return the specific day, otherwise the function will return “please enter another number”.
*/

let days_array = ['sunday', 'monday', ' tuesday', 'wednesday', 'thursday', 'friday', 'saturday']

function even_odd(num1) {
    
    switch (true) {

        case  num1 >= 1 && num1 <= 7:  console.log(`the day is ${days_array[num1-1]}`)
        break;

        case  num1 > 7 || num1 <= 0 :  console.log('please enter another number')
        break;

    }
}

console.log(even_odd(8));