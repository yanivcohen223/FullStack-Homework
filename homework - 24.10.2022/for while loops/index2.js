/*
Write a function `deleteElement()` that deletes all the occurrences of the given element from
the given array.
for example: var arr = [23,56,4,78,5,63,45,210,56] and number 4
if the given number appears in the array your function should delete
*/
let arr = [23,56,4,78,5,63,45,210,56]

function deleteElement(arr, a) {
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] == a) {
            arr.splice(i, 1)
            console.log(arr)
        }
    }
}
console.log(deleteElement(arr, 56))