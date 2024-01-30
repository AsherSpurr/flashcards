const {createCard} = require('../src/card');
const {createDeck, countCards} = require('../src/deck');
const {evaluateGuess} = require('../src/turn');

function createRound(deck) {
    const round = {
        deck: deck,
        currentCard: deck[0],
    }
    return round
}

module.exports = {
    createRound,
    //takeTurn,
    //calculatePercentCorrect
}