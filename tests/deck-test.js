import { expect } from 'chai';
import Card from '../scripts/card'
import Deck from '../scripts/deck'

describe('the object Deck', () => {
it('should have a constructor function called Deck that instantiates new decks', () => {
  let card1 = new Card("What is the capital of Alaska?", "Juneau")
  let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
  let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")
  let deck = new Deck([card1, card2, card3])
  expect(deck).to.be.an.instanceof(Deck);
});

it('Deck should store cards passed into the function', () => {
  let card1 = new Card("What is the capital of Alaska?", "Juneau")
  let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
  let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")
  let deck = new Deck([card1, card2, card3])
  expect(deck.cards).to.deep.equal([card1, card2, card3,]);
});

it('should store the cards in an array that can be counted', () => {
  let card1 = new Card("What is the capital of Alaska?", "Juneau")
  let card2 = new Card("The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", "Mars")
  let card3 = new Card("Describe in words the exact direction that is 697.5° clockwise from due north?", "North north west")
  let deck = new Deck([card1, card2, card3])
  deck.count()
  expect(deck.count()).to.deep.equal(3);
});

});
