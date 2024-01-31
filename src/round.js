const {createCard} = require('../src/card');
const {createDeck, countCards} = require('../src/deck');
const {evaluateGuess} = require('../src/turn');

function createRound(deck) {
    const round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        correctGuesses: []
    }
    return round
}

function takeTurn(guess, round) {
    var count = 0
    round.turns++
    var evaluatedGuess = evaluateGuess(guess, round.currentCard.correctAnswer)
    if(evaluateGuess(guess, round.currentCard.correctAnswer) === 'incorrect!'){
        round.incorrectGuesses.push(round.currentCard.id)
    }
    else {
        round.correctGuesses.push(round.currentCard.id)
        // count++
        // console.log(round.currentCard)
        // var nextCard = round.currentCard.find(() => {
        //     return round.currentCard !== 'deck[0]'
        // })
        // round.currentCard = nextCard
    }
    return evaluatedGuess
}

module.exports = {
    createRound,
    takeTurn,
    //calculatePercentCorrect
    //endRound
}