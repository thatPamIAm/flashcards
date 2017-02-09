import {expect} from 'chai';
import CardGenerator from '../scripts/card-generator'
import Card from '../scripts/card'

var fs = require('fs');
let words = fs.readFileSync('./scripts/card.txt', 'utf8').trim().split('\n')

let newWords = words.map((elem,index,array) => {
  return elem.split(',')
})

let newWordsReduced = newWords.reduce((a, b) => {
  let card = new Card({question: b[0], answer:b[1]})
  a.push(card)
  return a
}, []);

console.log(newWordsReduced);
