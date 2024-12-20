"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// * BEFORE
var sqlite3_1 = require("sqlite3");
// Open a SQLite database, stored in the file db.sqlite
var db = new sqlite3_1.Database('db.sqlite');
db.serialize(function () {
    db.run("CREATE TABLE IF NOT EXISTS task(id INTEGER NOT NULL PRIMARY KEY, name VARCHAR(255), description VARCHAR(255) )", function (err) {
        if (err) {
            throw err;
            return;
        }
        console.log("tables created");
    });
    db.run("INSERT INTO task(name, description) VALUES(\"to do list\", \"developp a to do list app\")", function (err) {
        if (err) {
            throw err;
            return;
        }
        console.log("item added");
    });
    db.run("INSERT INTO task(name, description) VALUES(\"front\", \"make the front\")", function (err) {
        if (err) {
            throw err;
            return;
        }
        console.log("item added");
    });
    db.run("INSERT INTO task(name, description) VALUES(\"backend\", \"make the backend\")", function (err) {
        if (err) {
            throw err;
            return;
        }
        console.log("item added");
    });
});
db.close();
