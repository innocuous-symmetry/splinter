import Card from "../Cards/Card";

export default class Inventory {
    constructor(state) {
        this.state = {
            materials: {
                acorns: state.acorns,
                pineCones: state.pineCones,
                walnuts: state.walnuts,
                apples: state.apples,
                twigs: state.twigs,
                resin: state.resin
            },
            reservedCards: [],
            cardsInInventory: []
        };
    }

    sortCards() {
        for (let card of this.cardsInInventory) {
            // sorting algorithm of some kind
            return card;
        }
    }

    pickUpCard(card) {
        if (!card instanceof Card) {
            throw new Error("card is not card!");
        }

        this.state.cardsInInventory.push(card);
        this.sortCards();
    }

    reserveCard(card) {
        if (!this.state.materials.resin) {
            return;
        }
    }
}