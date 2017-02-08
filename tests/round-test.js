import { expect } from 'chai';
import Card from '../scripts/card'
import Deck from '../scripts/deck'
import Round from '../scripts/round'

describe('the object Round', () => {

    it('should have a constructor function called Round that instatiates new rounds', () => {
      let round = new Round()
      expect(round).to.be.an.instanceOf(Round);
    });

    it('should store the infomation for the deck passed into it', () => {
      let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let card2 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"})
      let deck  = new Deck([card1, card2])
      let round = new Round(deck)
      expect(round.deck).to.deep.equal(deck);
    });

    it('should have an array property that stores guesses', () => {
      let card1 = new Card("What is the capital of Alaska?", "Juneau")
      let card2 = new Card("Approximately how many miles are in one astronomical unit?", "93,000,000")
      let deck  = new Deck([card1, card2])
      let round = new Round(deck)
      expect(round.guesses).to.deep.equal([])
    });

    it('should have a function called currentCard that returns the first card in the deck', () => {
      let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let card2 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"})
      let deck  = new Deck([card1, card2])
      let round = new Round(deck)
      let currentCard = round.currentCard();
      expect(currentCard).to.equal(card1)

    });
})
