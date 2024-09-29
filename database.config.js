import mysql from '/Users/ryansilvera/node_modules/mysql2/index.js';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'mtg_cards'
}).promise()

export {pool};