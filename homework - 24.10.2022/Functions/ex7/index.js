/*
 Write a function that receives a number between 1 to 12.
Each number represents each month of the year.
The function has to return the number of the days in the month. If the number given
is not between 1 to 12, then the functions -1.
January, March, May, July, August, October, December -> 31 days in a month.
February -> 28 days in a month.
April, June, September, November -> 30 days in a month.
Ex:
if the number is 1, it means that the user wants to know how many days there are in
January month.
if the number is 2, it means that the user wants to know how many days there is in
February month.
If the input is 7, the output must be 31.
If the input is 2, the output must be 28.
*/

 function months_(a) {
    let days_in_month = [-1, 31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31]
        if (a <= 0 ||  a >= 13) {
            return days_in_month[0]
        }
        
        
        else {
            return ` ${days_in_month[a]} days`
        }
 }
 console.log(months_(2))