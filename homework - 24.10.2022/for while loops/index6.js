/*
initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101',
'blue', 42], then construct for loops to accomplish the following tasks:
1. Print each element of the array to a new line.
2. Print each character of the 'LaunchCode' string in reverse order
Each letter should start a new line
*/
let launch = 'LaunchCode'
for (let i = launch.length; i >= 0; i--) {
    console.log(launch[i])
}

console.log(' ')

let array = [1, 5, 'LC101','blue', 42]
for(let e of array){
    console.log(e)
}