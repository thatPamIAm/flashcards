import Card from "../scripts/card";
var fs = require('fs')
require('locus')

class CardGenerator {
  constructor(fileName){
    this.fileName = fileName
    this.cards = this.textFileLoader()
  }

  textFileLoader(){
    //implement node file system
    //return contents of (file) as a single array
    let words = fs.readFileSync(`${this.fileName}`, 'utf8').trim().split('\n')
    //iterate over words to create new array that splits each Q/A into own array
    let newWords = words.map((elem,index,array) => {
      let card = elem.split(',')
      return new Card({question: card[0], answer: card})
    })

    return newWords

    // Instatiate a new card by taking element (Q/A by index and pushing to accumulator)
    // let newWordsReduced = newWords.reduce((a, b) => {
    // let card = new Card({question: b[0], answer:b[1]})
    //   a.push(card)
    //   return a
    // }, []);
  }
}

export default CardGenerator
