/*
 Create a new array contain 5 numbers
 Print the index of each element in the array
 Filter every element that divided by 4 without remain
*/

let numbers = [10, 20, 30, 40, 50]

for (let e of numbers) [
    console.log(e)
]

console.log(' ')

let result = numbers.filter(filterby4)

function filterby4 (number) {
    if ( number % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(result);