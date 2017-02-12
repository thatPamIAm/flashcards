import Card from "./card";

class Guess {
  constructor(response, card){
    this.response = response;
    this.card = card;

    // this.correct = response === card.answer ? true : false

      if(response === card.answer) {
        this.correct =  true
      } else {
        this.correct = false
      }
    }

  feedback(){
    if (this.correct) {
      return "Correct!"
    } else {
      return "Incorrect."
    }

    // return this.correct ? 'Correct!' : 'Incorrect.'
  }
}

export default Guess
