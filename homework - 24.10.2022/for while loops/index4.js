/*
Write a function called findDup() that returns all the elements that are repeated more than
once in a given array.
Return the result as a Javascript object (the key should be the repeated element, the value
should be the amount of times this element repeated).
If an element appears only once it should not be added to the result object.
*/

const arr = [23,56,4,78,5,63,45,210,56]

function findDup(arr) {
    let result = {}
    for (e of arr) {
        if (result[e] == undefined) {
            result[e] = 1
        }
        else {
            result[e] += 1
        }
    }
    for (e in result) {
        if (result[e] == 1) {
            delete result[e]
        }
    }
    return result

}
console.log(findDup(arr))