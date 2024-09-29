// database.objects.js

import {pool} from "./index.js";

async function getCollection(){
    const [rows] = await pool.query(`
        SELECT * 
        FROM cards`);
    return rows;
}

async function getCard(title){
    const [rows] = await pool.query(`
        SELECT * 
        FROM cards
        WHERE title = ?
        `, [title]);
    return rows[0];
}

async function addCard(title, color, cost, supertype, rarity){
    const [result] = await pool.query(`
        INSERT INTO cards
        (title, color, cost, supertype, rarity)
        VALUES
        (?, ?, ?, ?, ?)
        `, [title, color, cost, supertype, rarity]);
    return result;
}

/*
# Functions to add
* async function deleteCard(){}
* async function updateCard(){}
*/

/* 
# Test commands
* const collection = await getCollection();
* const card = await getCard("omniscience");
* const card = await addCard("helpful hunter", "w", 2, "creature", "c");
* console.log(card);
*/

export{getCollection, getCard, addCard};