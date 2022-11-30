const sqlite3 = require('sqlite3').verbose();
const db_file_loc = './database/orders_db.db'

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

function get_all () {

}

function get_by_id () {

}

function find_by_lname () {

}

function insert () {

}

function update () {

}

function delete_by_id () {

}

const db = open_db(db_file_loc)