const {createCard} = require('../src/card');
const {createDeck, countCards} = require('../src/deck');
const {evaluateGuess} = require('../src/turn');

function createRound(deck) {
    const round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
    }
    return round
}

function takeTurn(guess, round) {
    round.turns++
    return evaluateGuess(guess, round.currentCard.correctAnswer)
}

module.exports = {
    createRound,
    takeTurn,
    //calculatePercentCorrectn
    //endRound
}