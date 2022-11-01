/*
Write a function that receives an array of integers and returns how many numbers are odd
and how many are even.
Return an object the contain this data
*/
const arr = [23,56,4,78,5,63,45,210,56]
function odd_even(arr) {

    let odd = 0 
    let even = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
        even++
        }
        else {
            odd++
        }

    }
    return console.log(`odds: ${odd}, evens: ${even}`)
}

console.log(odd_even(arr))