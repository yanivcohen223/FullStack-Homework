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

function update_salary (db, id, new_salary) {
    let update_sal = `UPDATE COMPANY
                         SET SALARY = ?
                         WHERE id = ?`

    db.run(update_sal, [new_salary, id] , err => {

        if(err) {
            console.log('error' + ' ' + err);
        }
        else {
            console.log('succsseed' + ' ' + new_salary);
        }
    }) 
}

function delete_section(db, id) {
    let delete_sec = `DELETE FROM COMPANY
                      WHERE ID = ?`

    db.run(delete_sec,id, err => {
        if (err) {
            console.log('error' + ' ' + err);
        }
        else {
            console.log(id + ' ' + 'deleted');
        }
    })
}

setTimeout(() => update_salary(db, 1, 50000), 100);
setTimeout(() => delete_section(db, 9), 100);
setTimeout(() => 
    db.close((err) => {
        if (err) {
            console.log('db didnt close' + err);
        }
        else {
            console.log('db closed');
        }
    })
, 500);
/*
const insert_sql = `INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (?, ?, ?, ?, ? );`
const data = [11, 'idan', 18, 'new york', 35000]
db.run (insert_sql, data, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('succseed' + ' ' + data);
    }
})
*/
/*
db.serialize(() => {
    db.each (`SELECT * FROM COMPANY
              WHERE SALARY > 30000;`, (err, row) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.table(row);
                }
              })  
})
*/


