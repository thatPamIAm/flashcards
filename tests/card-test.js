import { expect } from 'chai';
import Card from '../scripts/card'

describe('the object Card', () => {
  it('should have a constructor function called Card that instatiates new objects', () => {
    let card = new Card("What is the capital of Alaska?", "Juneau")
    expect(card).to.be.an.instanceof(Card);
  });

  it('should allow you to pass in a question and a response when a new object is created', () => {
    let card = new Card ({question:"What is the capital of Alaska?", answer:"Juneau"});

    expect(card.question).to.deep.equal("What is the capital of Alaska?");
    expect(card.answer).to.deep.equal("Juneau");
  });
});
