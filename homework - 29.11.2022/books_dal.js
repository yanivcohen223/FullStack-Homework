const sqlite3 = require("sqlite3").verbose();
const db_file_loc = "./database/books_db.db";

function open_db(file_name) {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(file_name, (err) => {
      if (err) {
        console.log(`Failed to connect to ${file_name}`);
        reject(err);
      } else {
        console.log(`Successfully connected to ${file_name}`);
        resolve(db);
      }
    });
  });
}

function get_all(db) {
  db.serialize(() => {
    db.each(`SELECT * FROM Books;`, (err, row) => {
      if (err) {
        console.log(err);
      } else {
        console.table(row);
      }
    });
  });
}

function get_by_id(db, id) {
  const select_by_id = `SELECT * FROM Books
                            WHERE id = ?`;
  db.serialize(() => {
    db.each(
      `SELECT * FROM Books
                    WHERE id = ${id}`,
      (err, row) => {
        if (err) {
          console.log(err);
        } else {
          console.table(row);
        }
      }
    );
  });
}

function find_by_title(db, find_title) {
  const result = [];
  db.serialize(() => {
    db.each(
      `SELECT * FROM Books 
                    WHERE title GLOB '*${find_title}*';`,
      (err, row) => {
        if (err) {
          console.log(err);
        } else {
          result.push(row);
          console.log(row);
        }
      }
    );
    return result;
  });
}

function insert(db, data) {
  const insert_book = `INSERT INTO Books (title,author,publish_year,price,left_in_stock,book_image_src)
                        VALUES (?, ?, ?, ?, ?, ? );`;

  db.run(insert_book, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("insert succeeded" + " " + data);
    }
  });
}

function update_price(db, what_to_up, id) {
  return new Promise((resolve, reject) => {
    let update_book = `UPDATE Books
                         SET price = ?
                         WHERE id = ?`;
1
    db.run(update_book, what_to_up, id, (err) => {
      if (err) {
        console.log("error" + " " + err);
        reject(err)
      } else {
        console.log("value updated" + get_by_id(db, id));
        resolve()
      }
    });
  });
}

function delete_by_id_async(db, id) {
  return new Promise((resolve, reject) => {
    let delete_book = `DELETE FROM Books
                      WHERE ID = ?`;

    db.run(delete_book, id, (err) => {
      if (err) {
        console.log("error" + " " + err);
        reject(err);
      } else {
        console.log(id + " " + "deleted");
        resolve();
      }
    });
  });
}

function close_db(db) {
  return new Promise((resolve, reject) => {
    db.close((err) => {
      if (err) {
        console.log(err.message);
        reject(err);
      } else {
        console.log("Database closed!");
        resolve();
      }
    });
  });
}

async function book_main() {
  const db = await open_db(db_file_loc);
  console.log(db);

  await update_price(db, what_to_up, id)
  await delete_by_id_async(db, id);
  await close_db(db);
}

book_main();
//setTimeout(() => {get_all (db)}, 500);
//setTimeout(() => {get_by_id (db, 1)}, 500);
//setTimeout(() => {find_by_title (db, 'ki')}, 500);
//setTimeout(() => {insert (db, ['the kignt', 'fda', 20100, 220,3])}, 500);
//setTimeout(() => {update (db,'author', 'idan', 2)}, 500);
//setTimeout(() => {delete_by_id (db, 2)}, 500);
//setTimeout(() => {
//  close_db(db);
//}, 1000);
