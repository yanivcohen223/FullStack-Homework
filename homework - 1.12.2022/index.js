const sqlite3 = require("sqlite3").verbose();
const db_file_loc = "./db1.db";

function open_db(file_name) {
  return new sqlite3.Database(file_name, (err) => {
    if (err) {
      console.log(`Failed to connect to ${file_name}`);
    } else {
      console.log(`Successfully connected to ${file_name}`);
    }
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

function update(db, where_to_up, what_to_up, id) {
  let update_book = `UPDATE Books
                         SET ${where_to_up} = ?
                         WHERE id = ?`;

  db.run(update_book, what_to_up, id, (err) => {
    if (err) {
      console.log("error" + " " + err);
    } else {
      console.log("value updated" + get_by_id(db, id));
    }
  });
}

function close_db(db) {
  db.close((err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Database closed!");
    }
  });
}

const db = open_db(db_file_loc);

//setTimeout(() => {get_all (db)}, 500);
//setTimeout(() => {get_by_id (db, 1)}, 500);
//setTimeout(() => {find_by_title (db, 'ki')}, 500);
//setTimeout(() => {insert (db, ['the kignt', 'fda', 20100, 220,3])}, 500);
//setTimeout(() => {update (db,'author', 'idan', 2)}, 500);
//setTimeout(() => {delete_by_id (db, 2)}, 500);
setTimeout(() => {
  close_db(db);
}, 1000);

/*
table costumers
CREATE TABLE COSTUMERS (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
fname TEXT NOT NULL,
lname TEXT NOT NULL,
phone_num TEXT NOT NULL
)

insert cosumers
INSERT INTO COSTUMERS (fname, lname, phone_num)
VALUES ("yaniv", "cohen", "053-822-8058");
INSERT INTO COSTUMERS (fname, lname, phone_num)
VALUES ("Bradd", "Pitt", "052-321-9982");
INSERT INTO COSTUMERS (fname, lname, phone_num)
VALUES ("Jason", "Fridman", "054-252-4655");

table orders
CREATE TABLE ORDERS (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
costumer_id INTEGER  NOT NULL,
total_price REAL NOT NULL,
FOREIGN KEY (costumer_id) REFERENCES COSTUMERS(id)
)

insert orders
INSERT INTO ORDERS (costumer_id,total_price)
VALUES (3, 3800.900);
INSERT INTO ORDERS (costumer_id,total_price)
VALUES (1, 100.50);
INSERT INTO ORDERS (costumer_id,total_price)
VALUES (2, 15500.20);

CREATE TABLE PRODUCTS (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
name TEXT NOT NULL,
price REAL NOT NULL
)

INSERT INTO PRODUCTS (name,price)
VALUES ("iphone 14+", 3800.900);
INSERT INTO PRODUCTS (name, price)
VALUES ("computer mouse", 100.50);
INSERT INTO PRODUCTS (name, price)
VALUES ("LG tv", 15500.20);

CREATE TABLE CATALOG (
id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
order_id TEXT NOT NULL,
product_id INTEGER NOT NULL,
total_price REAL NOT NULL,
FOREIGN KEY (order_id) REFERENCES ORDERS(id),
FOREIGN KEY (product_id) REFERENCES PRODUCTS(id)
)

INSERT INTO CATALOG (order_id, product_id,total_price)
VALUES (1, 1, 3800.900);
INSERT INTO CATALOG (order_id, product_id,total_price)
VALUES (2, 2, 100.50);
INSERT INTO CATALOG (order_id, product_id,total_price)
VALUES (3, 3, 15500.20);

join
SELECT * FROM CATALOG
NATURAL JOIN PRODUCTS

count
SELECT count(*) FROM CATALOG
WHERE order_id = 1

sum
UPDATE CATALOG
SET total_price = (SELECT sum(total_price) FROM CATALOG
                   WHERE order_id = 1)
WHERE order_id = 1

max
SELECT max(total_price) FROM CATALOG

min
SELECT min(total_price) FROM CATALOG

avg
SELECT avg(total_price) FROM CATALOG

*/