/* 
Create a function that get the current date and print only the month name 
*/

let date1 = new Date().getMonth()


 function newDate(date) {
    let months = ["January", "February", "March", "April", "May", "June", "July",
 "August", "September", "October", "November", "December"]
    for (let i = 0; i < months.length; i++) {
        if (i == date1) {
            console.log(months[i])
        }
    }
 }

console.log(newDate(date1))
