/*
Write a function with switch-case.
The function receives a number between 0 to 100.
If the number is between 0 to 20, the function returns : “D”.
If the function is between 21 to 55, the function returns : “C ”.
If the function is between 56 to 70, the function returns : “B ”.
If the function is between 71 to 90, the function returns : “A ”.
If the function is between 90 to 100, the function returns : “A+ ”.
*/

function grade_position(number) {
    switch (true) {
        case number <= 20 : console.log(`D`);
            break;

        case number <= 55 : console.log(`C`);
            break;
        
        case number <= 70 : console.log(`B`);
            break;
        
        case number <= 90 : console.log(`A`);
            break;

        case number <= 100 : console.log(`A+`);
            break;

    }
}

console.log(grade_position(100))