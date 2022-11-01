/*
Write a function with switch-case.
The function receives a letter and has to check if the letter is a vowel or a consonant.
The vowel letters are : a,e,i,o,u,y and the rest of the letters a consonant.
*/

function letter_(letter) {

    switch(letter) {
        case 'a': console.log(`${letter} its avowel letter`);
            break;
        
        case 'e': console.log(`${letter} its avowel letter`);
            break;

        case 'i': console.log(`${letter} its avowel letter`);
            break;
            
        case 'o': console.log(`${letter} its avowel letter`);
            break;
            
        case 'u': console.log(`${letter} its avowel letter`);
            break;
            
        case 'y': console.log(`${letter} its avowel letter`);
            break;

        default:
            console.log(`${letter} its a consonant letter`);
    }

}

console.log(letter_('x'));