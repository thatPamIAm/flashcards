class Guess {
  constructor(response, options){
    this.response = response;
    this.question = options.question;
    this.answer = options.answer;
    this.card = options;
    if(this.response === options.answer) {
      this.correct =  true
    } else {
      this.correct = false
    }
  }

  feedback(){
    if (this.response === this.answer) {
      return "Correct!"
    } else {
      return "Incorrect."
    }
  }
}

export default Guess
