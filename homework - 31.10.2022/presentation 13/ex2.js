/* 
Create a function that generate a random number between 1-10.
If the number is 5 or higher → the function will return the number multiple by 2
If the number is less than 5 → the function will return the number itself
*/



function GetRandom() {
    let RandomNumber = Math.floor(Math.random() * 10) ; 

    if (RandomNumber >= 5) {
        return RandomNumber*2
    }
    else {
        return RandomNumber
    }
}

console.log(GetRandom());