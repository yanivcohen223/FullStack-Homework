/*
Write a function that receives one parameter of type int.
If the number is even then return the string : “even”, otherwise “not even”.
*/
function odd_even(a) {
    let even = 'even'
    let odd = 'odd'
        if (a % 2 == 0) {
            return even
        }
        else {
            return odd
        }
}