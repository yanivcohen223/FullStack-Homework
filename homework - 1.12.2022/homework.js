/*
EX1
const { throws } = require('assert');
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt(`what is your age?`);
rl.prompt();

const your_age = new Promise((resolve, reject) => {

    let too_old = new Error ('your are is too old')
    let uncorrect_age = new Error ('no such age under zero')

    rl.on('line', (age) => {
        if (age >= 0 && age <= 99) {
            resolve(age)
        }
        else if (age >= 100) {
            reject(too_old)
        }
        else {
            reject(uncorrect_age)
        }
        rl.close
    })
})

//your_age.then(
//    (response) => {console.log(`age recived by the user: ${response}`)},
//    (error) => {console.log(error.message)}
//)

async function return_age() {
    try {
        const success = await your_age
        console.log(`age recived by the user: ${success}`);
    } catch (error) {
        console.log(`ERROR ${error.message}`);
    }

}
return_age()*/


//EX2
const fs = require('fs');

const my_files = new Promise ((resolve, reject) => {
    fs.readdir(__dirname, (err, files) => {
        if (err) {
            reject(err)}
    
        else {
            resolve(files)}
    });
})

//my_files.then(
//    (value) => {console.log(`[async] Files ${value}`)},
//    (err) => {console.log(`[async] Error ${err}`)}
//)

async function return_files() {
    try {
        const success = await my_files
        console.log(`[async] your Files ${success}`);
    } catch (error) {
        console.log(`ERROR ${error}`);
    }
}
return_files()