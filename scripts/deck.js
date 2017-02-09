import Card from "./card"

class Deck {
  constructor(card) {
    this.cards = card;
  }

  count(){
    return this.cards.length;
  }
}

export default Deck
