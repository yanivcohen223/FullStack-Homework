const os = require('os');

console.log(`free memory: ${os.freemem}`);

console.log(`free memory: ${os.totalmem}`);

const fs = require('fs');
const files = fs.readdirSync('./');

console.log(`[sync] ${files}`);

const sqlite3 = require('sqlite3').verbose();
const db_file_loc = './DataBase/db1.db'

const db = new sqlite3.Database (db_file_loc, (err) => {
    if (err) {
        console.log(`failed: ${err}, ${db_file_loc}`);
    }
    else {
        console.log(`succsessfully connected to ${db_file_loc}`);
    }
})

db.serialize(() => {
    db.each (`SELECT * FROM COMPANY
              WHERE SALARY > 30000;`, (err, row) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(row);
                }
              })  
})