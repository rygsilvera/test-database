// mtg-collection.test.js

import { expect } from 'chai';
import { getCollection, getCard, addCard } from "./database.objects.js";

describe("Magic the Gathering Database", () => {

    it("Should contain the Omniscience card object @p1", async () => {
        const card = await getCard("omniscience");
        expect(card).to.be.an("object");
        //console.log(card);
    });

    it("Omniscience's title is 'omniscience' @p1", async () => {
        const card = await getCard("omniscience");
        expect(card.title).to.equal("omniscience");
        //console.log(card.title);
    });

    it("Omniscience's color is 'u' (Blue) @p1", async () => {
        const card = await getCard("omniscience");
        expect(card.color).to.equal("u");
    });

    it("Omniscience's cost is 10 @p1", async () => {
        const card = await getCard("omniscience");
        expect(card.cost).to.equal(10);
    });

    it("Omniscience's rarity is 'm' (Mythic) @p1", async () => {
        const card = await getCard("omniscience");
        expect(card.rarity).to.equal("m");
    });
});

/*
# Test cases to add
* Add card
* Update card
* Delete card
*/