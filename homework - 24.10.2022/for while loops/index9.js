/*
Write a function that receives an array of Boolean type.
As long as the value is true, the loop should continue, if the value is false, then return the
first index of the false value
*/

let Boolean_array = [true, true, true, true, false]

function Boolean_fun(Boolean_array) {
    let i = 0
    while (true) {
        if (Boolean_array[i] == false) {
            return console.log(i);
        }
        else {
            i++;
            if (i >= Boolean_array.length) {
                return console.log('no false values');
            }
        }
    }
}
console.log(Boolean_fun(Boolean_array));