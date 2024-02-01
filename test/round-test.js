const chai = require('chai');
const expect = chai.expect;


const { createRound, takeTurn, calculatePercentCorrect, endRound } = require('../src/round')
const { createCard } = require('../src/card');
const { createDeck, countCards } = require('../src/deck');
const { evaluateGuess } = require('../src/turn');

describe('Tests with beforeEach', () => {
    var deck;
    var card1;
    var card2;
    var card3;
    var round;
    beforeEach(() => {
        console.log('success')
        card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

        deck = createDeck([card1, card2, card3]);

        round = createRound(deck)
    });
    describe('createRound', () => {

        it('should create an object', () => {
            expect(round).to.be.an('object');
        });

        it('should have deck property with deck object value', () => {
            expect(round.deck).to.deep.equal([card1, card2, card3]);
        });

        it('should have current card property with value of 1st card', () => {
            expect(round.currentCard).to.deep.equal({
                "id": 1,
                "question": "What allows you to define a set of related information using key-value pairs?",
                "answers": ["object", "array", "function"],
                "correctAnswer": "object"
            });
        });

        it('should have turns property that starts at 0', () => {
            expect(round.turns).to.equal(0);
        });

        it('should have incorrect guesses property with value of empty array', () => {
            expect(round.incorrectGuesses).to.deep.equal([]);
        });
    });

    describe('takeTurn', () => {
        it('should update turns count', () => {
            takeTurn('object', round)
            takeTurn('array', round)

            expect(round.turns).to.equal(2)
        });

        it('should return feedback if correct', () => {
            expect(takeTurn('object', round)).to.equal('correct!')
        });

        it('should return feedback if false', () => {
            expect(takeTurn('fruit', round)).to.equal('incorrect!')
        });

        it('should update incorrectGuesses property if false', () => {
            takeTurn('array', round)

            expect(round.incorrectGuesses).to.deep.equal([1])
        });

        it('should update correctGuesses property if true', () => {
            takeTurn('object', round)
            takeTurn('array', round)

            expect(round.correctGuesses).to.deep.equal([1, 2])
        });

        it('should move current card to the next position', () => {
            takeTurn('object', round)
            takeTurn('array', round)

            expect(round.currentCard).to.deep.equal({
                "id": 3,
                "question": "What type of prototype method directly modifies the existing array?",
                "answers": ["mutator method", "accessor method", "iteration method"],
                "correctAnswer": "mutator method"
            });
        });
    });

    describe('calculatePercentCorrect', () => {
        it('should calculate percent correct', () => {
            takeTurn('object', round)
            takeTurn('array', round)
            takeTurn('accessor method', round)

            expect(calculatePercentCorrect(round)).to.equal(67)
        });
    });

    describe('endRound', () => {

        it('should print message with score to console', () => {
            takeTurn('object', round)
            takeTurn('array', round)
            takeTurn('accessor method', round)

            expect(endRound(round)).to.equal('**Round over!**You answered 67% of the questions correctly!')
        });

        it('should reset turns value', () => {
            takeTurn('object', round)
            takeTurn('array', round)
            takeTurn('accessor method', round)

            endRound(round)
            expect(round.turns).to.equal(0)
        });

        it('should reset correct and incorrect arrays', () => {
            takeTurn('object', round)
            takeTurn('array', round)
            takeTurn('accessor method', round)

            endRound(round)
            expect(round.incorrectGuesses).to.deep.equal([])
            expect(round.correctGuesses).to.deep.equal([])
        });
    });

});