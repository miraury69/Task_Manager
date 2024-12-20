// * BEFORE
import { Database } from 'sqlite3';

// Open a SQLite database, stored in the file db.sqlite
const db = new Database('db.sqlite');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS task(id INTEGER NOT NULL PRIMARY KEY, name VARCHAR(255), description VARCHAR(255) )`, (err) => {
        if (err) {
            throw err;
            return;
        }
        console.log("tables created");
    });
    db.run(`INSERT INTO task(name, description) VALUES("to do list", "developp a to do list app")`,(err) => {
        if (err) {
            throw err;
            return;
        }
        console.log("item added");
    });
    db.run(`INSERT INTO task(name, description) VALUES("front", "make the front")`,(err) => {
        if (err) {
            throw err;
            return;
        }
        console.log("item added");
    });
    db.run(`INSERT INTO task(name, description) VALUES("backend", "make the backend")`,(err) => {
        if (err) {
            throw err;
            return;
        }
        console.log("item added");
    });
})

db.close();

