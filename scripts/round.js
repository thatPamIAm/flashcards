import Guess from "./guess"

class Round {
  constructor(deck){
    this.deck = deck;
    this.guesses = [];
    this.numberCorrect = 0;
  }

  currentCard(){
    return this.deck.cards[0]
  }

  recordGuess(response, card){
    let guess = new Guess(response, card)
    this.guesses.unshift(guess)
      if(this.guesses[0].feedback() === "Correct!") {
        this.numberCorrect++
      }
      this.deck.cards.shift()
    return this.guesses
  }

  percentCorrect(){
    return this.numberCorrect / this.guesses.length
  }
}

export default Round
