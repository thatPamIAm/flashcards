import Card from "./card"

class Guess {
  constructor(response, card){
    this.response = response;
    this.card = card;
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
  }
}

export default Guess
