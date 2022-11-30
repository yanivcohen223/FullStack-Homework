const sqlite3 = require('sqlite3').verbose();
const db_file_loc = './database/books_db.db'

function open_db(file_name) {
    return new sqlite3.Database(file_name, (err) => {
        if (err) {
            console.log(`Failed to connect to ${file_name}`);
        }
        else {
            console.log(`Successfully connected to ${file_name}`);
        }
    })
}

function get_all (db) {
    db.serialize(() => {
        db.each (`SELECT * FROM Books;`, (err, row) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.table(row);
                    }
                  })  
    })
}

function get_by_id (db, id) {
    const select_by_id = `SELECT * FROM Books
                            WHERE id = ?`
    db.serialize(() => {
        db.each (`SELECT * FROM Books
                    WHERE id = ${id}`, (err, row) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.table(row);
                    }
                  })  
    })
}

function find_by_title () {

}

function insert () {

}

function update () {

}

function delete_by_id () {

}

function close_db(db) {
    db.close(err => {
        if (err) {
            console.log(err.message);
        }
        else {
            console.log('Database closed!');
        }
    })
}

const db = open_db(db_file_loc)

setTimeout(() => {get_all (db)}, 500);
setTimeout(() => {get_by_id (db, id)}, 500);

setTimeout(() => {close_db(db)}, 1000);