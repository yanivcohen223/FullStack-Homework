/*
Write a function that uses local variables.
*/

//a has to be between 0-4
//b has to be between 0-3
function combine_variables(a, b) {
    let kids = ['tal', 'maayan', 'lior', 'yuval', 'david']
    let task = ['do the dishes', 'make dinner', 'take thetrash', 'clean the house' ]

    if (a >= 0 && a <= 4 && b >=0 && b <= 2) {
    return `${kids[a]} has to ${task[b]}`
    }

    else {
        return 'error'
    }

}
console.log(combine_variables(a, b))