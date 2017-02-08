import { expect } from 'chai';
import Card from '../scripts/card'
import Guess from '../scripts/guess'

describe('the object Guess', () => {

it('should have a constructor function called Guess that instatiates new objects', () => {
  let card = new Card ("What is the capital of Alaska?", "Juneau");
  let guess = new Guess("Juneau", card)
  expect(guess).to.be.an.instanceof(Guess)
});

it('should be able to pull back the object passed into the class of Guess', () => {
  let card = new Card ("What is the capital of Alaska?", "Juneau");
  let guess = new Guess("Juneau", card)
  expect(guess.card).to.deep.equal({ answer: "Juneau", question:"What is the capital of Alaska?"})
});

it('should be able to take in a response from the game player', () => {
  let card = new Card ("What is the capital of Alaska?", "Juneau");
  let guess = new Guess("Juneau", card)
  expect(guess.response).to.deep.equal('Juneau')
});

it('should be able to tell the player if their guess was correct', () => {
  let card = new Card ("What is the capital of Alaska?", "Juneau");
  let guess = new Guess("Juneau", card)
  expect(guess.correct).to.deep.equal(true)
});

it('should be able to tell the player if their guess was incorrect', () => {
  let card = new Card("Which planet is closest to the sun?", "Mercury")
  let guess = new Guess("Saturn", card)
  expect(guess.correct).to.deep.equal(false)
});

it('should be able to give a player feedback based on having a correct answer', () => {
  let card = new Card ("What is the capital of Alaska?", "Juneau");
  let guess = new Guess("Juneau", card)
  guess.feedback()
  expect(guess.feedback()).to.deep.equal('Correct!')
});

it('should be able to give a player feedback based on having an incorrect answer', () => {
  let card = new Card("Which planet is closest to the sun?", "Mercury")
  let guess = new Guess("Saturn", card)
  guess.feedback()
  expect(guess.feedback()).to.deep.equal("Incorrect.")
});

})
