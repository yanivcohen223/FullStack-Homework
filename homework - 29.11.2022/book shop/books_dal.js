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

function find_by_title (db, find_title) {
    db.serialize(() => {
        db.each (`SELECT * FROM Books 
                    WHERE title GLOB '${find_title}*';`, (err, row) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        console.log(row);
                    }
                  })  
    })
}

function insert (db, data) {
    const insert_book = `INSERT INTO Books (title,author,publish_year,price,left_in_stock,book_image_src)
                        VALUES (?, ?, ?, ?, ?, ? );`

    db.run (insert_book, data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('insert succeeded' + ' ' + data);
        }
    })
}

function update (db, where_to_up, what_to_up, id) {
    let update_book = `UPDATE Books
                         SET ${where_to_up} = ?
                         WHERE id = ?`

    db.run(update_book, what_to_up, id, err => {

        if(err) {
            console.log('error' + ' ' + err);
        }
        else {
            console.log('value updated' + get_by_id (db, id) );
        }
    }) 
}

function delete_by_id (db, id) {
    let delete_book = `DELETE FROM Books
                      WHERE ID = ?`

    db.run(delete_book,id, err => {
        if (err) {
            console.log('error' + ' ' + err);
        }
        else {
            console.log(id + ' ' + 'deleted');
        }
    })
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

//setTimeout(() => {get_all (db)}, 500);
//setTimeout(() => {get_by_id (db, 1)}, 500);
//setTimeout(() => {find_by_title (db, 'li')}, 500);
//setTimeout(() => {insert (db, ['lion king', 'bibi', 2000, 20,3])}, 500);
//setTimeout(() => {update (db,'author', 'idan', 1)}, 500);
//setTimeout(() => {delete_by_id (db, id)}, 500);
setTimeout(() => {close_db(db)}, 1000);