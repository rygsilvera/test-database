-- mtg-collection.sql
CREATE DATABASE mtg_cards;

USE mtg_cards;

CREATE TABLE cards (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    color VARCHAR(1) NOT NULL,
    cost INTEGER NOT NULL,
    supertype VARCHAR(50) NOT NULL,
    rarity VARCHAR(1) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO cards
(title, color, cost, supertype, rarity)
VALUES
("omniscience", "u", 10, "enchantment", "m"),
("anthem of champions", "m", 2, "enchantment", "r"),
("crossway troublemakers", "b", 6, "creature", "r"),
("day of judgement", "w", 4, "socery", "r"),
("bloodtithe collector", "b", 5, "creature", "u");