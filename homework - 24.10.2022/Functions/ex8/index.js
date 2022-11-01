/*
 Write a function that uses global variables.
 */

let teacher = 'itay'
let colours = ['pink', 'yellow', 'blue', 'red', 'black']
 
 function combine_variables(a){
    if (a > 1  || a < 0) {
        return 'try again'
    }
    else {
        return `currect itay's faivorite colour is ${colours[0]}`
    }

 }
 console.log(combine_variables(5))