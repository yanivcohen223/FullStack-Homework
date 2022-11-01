/*
Write a function with switch-case.
The function receives 3 parameters(2 integer numbers and number between 1 to 4).
number 1 -> addition
number 2 -> subtraction
number 3 -> division
number 4 -> multiplication
For example, if the third parameter is 4, the function returns the first parameter * the second
parameter.
If the third parameter is 2, the function returns the first parameter - the second parameter.
*/

// num1 - has to be between 1 to 4
// num2 - choose your self
// num3 - choose your self
function Mathematical_operations(num1, num2, num3) {

    let sum = 0
    switch (true) {

        case num1 == 1 : console.log(`The result is ${sum = num2+num3}`);
            break;

        case num1 == 2 : console.log(`The result is ${sum = num2-num3}`);
            break;
        
        case num1 == 3 : console.log(`The result is ${sum = num2/num3}`);
            break;
        
        case num1 == 4 : console.log(`The result is ${sum = num2*num3}`);
            break;
    }
}

console.log(Mathematical_operations(4, 10, 2))