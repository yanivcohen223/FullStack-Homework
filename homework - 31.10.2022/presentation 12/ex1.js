/*
● Create 3 new variables that each of them holding a 3X3 matrix
● Create new object that has 3 properties. each property will contain each matrix 
you created

● Write a function that get the object you created as a parameter and print all the 
elements inside the matrix that you saved in it’s second property

*/

let A = [ [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9] ]

let B = [ [10, 11, 12,],
          [13, 14, 15],
          [16, 17, 18] ]

let C = [ [19, 20, 21],
          [22, 23, 24],
          [25, 26, 27] ]

const new_object = {a: A, b: B, c: C }


console.log(' ');

function printObject(new_object) {
    for (let i = 0; i < new_object.b.length; i++) {
        for (let j = 0; j < new_object.b[i].length; j ++) {
            console.log(new_object.b[i][j])
        }
    }
}

console.log(printObject(new_object));



