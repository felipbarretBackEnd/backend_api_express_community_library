//01 min 30seg AULA 42

import db from '../config/database.js'

db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            avatar TEXT
        )
    `)

//06min 48
function createUserRepository (newUser) {
    const {username, email, password, avatar} = newUser
    return new Promise((resolve, reject) => {
        db.run(                                 //09MIN 16
            `
                INSERT INTO users (username, email, password, avatar)
                VALUES (?, ?, ?, ?)
            `,
            [username, email, password, avatar],
            (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve({id: this.lastID, ...newUser})
                }
            }
        );
    });
}

export default {
    createUserRepository
}