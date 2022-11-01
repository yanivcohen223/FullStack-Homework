/*
Write a function that receives 2 parameters of type int.
If the first parameter is equal to the second parameter -> the function should add 1 to
the first parameter and return it.
*/
function add_one(a, b) {
    if (a == b ) {
        a++
        console.log(a)
    }
    else {
        b++
        console.log(b)
    }
}
console.log(add_one(5, 6))