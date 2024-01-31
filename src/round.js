const {createCard} = require('../src/card');
const {createDeck, countCards, deck} = require('../src/deck');
const {evaluateGuess} = require('../src/turn');

function createRound(deck) {
    // let count = 0;
    const round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        correctGuesses: [],
        count: 0,
        isRound: true,
    }
    return round
}

function takeTurn(guess, round) {
    // let count = round.count
    round.count++
    round.turns++
    var evaluatedGuess = evaluateGuess(guess, round.currentCard.correctAnswer)
    if(evaluatedGuess === 'incorrect!'){
        round.incorrectGuesses.push(round.currentCard.id)
    }
    else {
        round.correctGuesses.push(round.currentCard.id)
    }
    round.currentCard = round.deck[round.count]
    return evaluatedGuess
}


module.exports = {
    createRound,
    takeTurn,
    //calculatePercentCorrect
    //endRound
}

//How the fuck do I change the current card to the next card in the array
//value of round.Current card is undefined after reassignment. KILL ME
//im going to light my computer on 
// fire then jump into the flames
//these are NOT live laugh love conditions
//live laugh LABOTOMIZE ME

/*const round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        correctGuesses: []
    }
    
    deck = [{
  "id": 1,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 2,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 3,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}
    */
