/*
Write a function that receives a parameter of type int.
The number has to be between 1 to 7 and each number represents each day of the
week.
The function has to return the specific day that represents the number. If the number
is not between 1 to 7, the function has to return the string “Error”.
Ex: if the number is 2, the function returns “Monday”,
if the number is 3, the function returns “Tuesday”.....
*/

function days_ (a) {
    let days = [' ', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    if (a > 7 || a <= 0) {
        return 'error'
    }
    else {
        return days[a]
    }
}
console.log(days_(a))
