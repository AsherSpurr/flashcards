const {evaluateGuess} = require('../src/turn');

function createRound(deck) {
    const round = {
        deck: deck,
        currentCard: deck[0],
        turns: 0,
        incorrectGuesses: [],
        correctGuesses: [],
        // count: 0,
        // isRound: true,
    }
    return round
}

function takeTurn(guess, round) {
    var evaluatedGuess = evaluateGuess(guess, round.currentCard.correctAnswer)
    if(evaluatedGuess === 'incorrect!'){
        round.incorrectGuesses.push(round.currentCard.id)
    }
    else {
        round.correctGuesses.push(round.currentCard.id)
    }
    round.turns++
    round.currentCard = round.deck[round.turns]
    return evaluatedGuess
}

function calculatePercentCorrect(round) {
    let percent = (round.correctGuesses.length / round.turns) * 100
    let wholeInt = Math.round(percent)
    return wholeInt
}

function endRound(round) {
    let int = calculatePercentCorrect(round)
    round.turns = 0
    round.incorrectGuesses.splice(0)
    round.correctGuesses.splice(0)
    console.log(`**Round over!**You answered ${int}% of the questions correctly!`)
    return `**Round over!**You answered ${int}% of the questions correctly!`
}

module.exports = {
    createRound,
    takeTurn,
    calculatePercentCorrect,
    endRound,
}


