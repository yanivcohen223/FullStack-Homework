/*
White a function that receives 4 parameters of type int.
If all the four numbers are equal, the function returns the string “all equals”.
If 2 of the four numbers are equals, the function returns the string “only 2 numbers
are equals”.
If none of the two cases happened, the function returns the string “all numbers not
equals”.
*/
function equals (a, b, c, d) {
    if (a == b == c == d) {
        return 'all equals'
    }
    else if (a == b || b == c || c == d || d == a || a == c || b == d) {
        return 'only 2 are equals'
    }
    else {
        return 'all numbers not equals'
    }
}
