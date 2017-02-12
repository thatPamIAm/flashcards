import {expect} from 'chai';
import CardGenerator from '../scripts/card-generator';
import Card from '../scripts/card';

describe('Card Generator', () => {
  it('should have a constructor function', () => {
    let cardGenerator = new CardGenerator('./scripts/card.txt');
    console.log(cardGenerator.cards)
    expect(cardGenerator).to.be.an.instanceOf(CardGenerator)
  });

  // it('should have the ability to pull info from a txt file and create new cards', () => {
  //   let fileName = "./scripts/card.txt"
  //   let cardsGenerator = new CardGenerator(fileName)
  //   let cards = cardsGenerator.cards
    // let card1 = new Card({What is 5 + 5?,10})
    // let card2 = new Card({What is yung-jhuns favorite ice cream flavor?,vanilla})
    // let card3 = new Card({What is alter-nates middle name?,nobody knows})
    // let card4 = new Card({What cardboard cutout lives at Turing?,Pat Whey})
    // expect(cardsGenerator.card).to.deep.equal(4)

  // });

});
