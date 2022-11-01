/*
Construct for loops that accomplish the following tasks:
1. Print the numbers 1 - 20, one number per line.
2. Print only the ODD values from 3 - 29, one number per line.
3. Print the EVEN numbers between 1 - 20 in a descending order, one number
per line.
4. Print the numbers 50 down to 20 in descending order, but only if the numbers
are multiples of 3.
48,45,42,39,36,33,30,27,24,21
*/

//1
for (let i = 1; i <= 20; i++) {
    console.log(i)
}
console.log(' ')

//2
for (let i = 3; i <= 29; i+=2) {
    console.log(i)
}
console.log(' ')

//3
for (let i = 2; i <= 20; i+=2) {
    console.log(i)
}
console.log(' ')

//4
for (let i = 50; i >= 20; i--) {
    if ( i % 3 == 0) {
        console.log(i)
    }
}