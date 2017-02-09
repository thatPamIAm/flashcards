import { expect } from 'chai';
import Card from '../scripts/card'
import Deck from '../scripts/deck'
import Round from '../scripts/round'
import Guess from '../scripts/guess'

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
      let currentCard = round.currentCard()
      expect(currentCard).to.equal(card1)
    });

    it('should have a function called recordGuess that pushes guesses into the guesses array', () => {
      let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1])
      let round = new Round(deck)
      round.recordGuess("Juneau", card1)
      expect(round.guesses.length).to.equal(1)
    });

    it('should give feedback when guesses are true', () => {
      let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1])
      let round = new Round(deck)
      round.recordGuess("Juneau", card1)
      expect(round.guesses[0].feedback()).to.equal('Correct!')
    });

    it('should give feedback when guesses are false', () => {
      let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1])
      let round = new Round(deck)
      round.recordGuess("Denver", card1)
      expect(round.guesses[0].feedback()).to.equal('Incorrect.')
    });

    it('should have a property that tracks guesses that are correct', () => {
      let card1 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1])
      let round = new Round(deck)
      round.recordGuess("Juneau", card1)
      expect(round.numberCorrect).to.equal(1)
    });

    it('should be able to track the number of guesses', () => {
      let card1 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"})
      let card2 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1])
      let round = new Round(deck)
      round.recordGuess("Juneau", card1)
      round.recordGuess(2, card1)
      expect(round.guesses.length).to.equal(2)
    });

    it('should be able to pull feedback from a second card passed in', () => {
      let card1 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"})
      let card2 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1])
      let round = new Round(deck)
      round.recordGuess("Juneau", card1)
      round.recordGuess(2, card1)
      expect(round.guesses[1].feedback()).to.equal("Incorrect.")
    });

    it('should only put correct answers into the property of numberCorrect', () => {
      let card1 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"})
      let card2 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1, card2])
      let round = new Round(deck)
      round.recordGuess("Juneau", card2)
      round.recordGuess(2, card1)
      expect(round.numberCorrect).to.equal(1)
    });

    it('should have a function called percentCorrect that returns the percentage of correct answers', () => {
      let card1 = new Card({question:"Approximately how many miles are in one astronomical unit?", answer:"93,000,000"})
      let card2 = new Card({question:"What is the capital of Alaska?", answer:"Juneau"})
      let deck  = new Deck([card1, card2])
      let round = new Round(deck)
      round.recordGuess("Juneau", card2)
      round.recordGuess(2, card1)
      expect(round.percentCorrect()).to.equal(.5)
    });
});
