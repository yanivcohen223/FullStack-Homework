/*
Write a function that receives an array and a number.
As long as the sum of the array is lower than the number, the loop will add the next number,
if the sum with the next number will be greater than the number given as a parameter then
return the sum.
*/

let arr = [23,56,4,78,5,63,45,210,56]

function sum_(arr, a){
   let sum = 0
   let index = 0
   
    while (true) {
        while (sum < a) {
        sum = sum + arr[index]
        index++
        }
            return console.log(sum)
            
    
    }
}
console.log(sum_(arr, 300))