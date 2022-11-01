/*
 Write a function that receives four parameters of type int.
The function has to return the smaller value between all of them.
If one of the parameters is between 1 to 5, then return -1.
*/

function The_smaller(a, b, c, d) {
    const list1 = [a, b, c, d]
    
    for ( let e of list1) {
        if ( e >= 1 && e <= 5) {
            return -1
        }
    }
    let smaller = Math.min(...list1)
    return smaller
}