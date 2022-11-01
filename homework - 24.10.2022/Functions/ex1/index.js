/*
 Write a function that receives two parameters of type int.
If the first parameter is bigger than the second parameter -> the function should
returns the first parameter
else -> the function should return the second parameter
*/
function Bigger_than (a , b) {
    if (a > b) {
        console.log(a)
    }
    else {
        console.log(b)
    }
}
console.log(Bigger_than(6, 4))