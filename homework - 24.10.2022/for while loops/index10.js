/*
write a function that receives an array of strings.
If the string “Hello” appears and the index is odd then stop the loop and return the index.
*/

let strings_array = [ 'my', 'name', 'is', 'hello', 'charlie']

function strings_func(strings_array) {
    let i = 1
    while(true) {
        if (strings_array[i] === "hello") {
            return console.log(i);
        }
        else {
            i+=2;
            if (i >= strings_array.length) {
                return console.log('hello dosent appears');
            }
        }
    }
}

console.log(strings_func(strings_array));