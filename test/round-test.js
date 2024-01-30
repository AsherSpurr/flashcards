const chai = require('chai');
const expect = chai.expect;


const {createRound, takeTurn, calculatePercentCorrect} = require('../src/round')
const {createCard} = require('../src/card');
const {createDeck, countCards} = require('../src/deck');
const {evaluateGuess} = require('../src/turn');

// describe('Tests with beforeEach', () => {
//     beforeEach(() => {
        // console.log('success')
        // const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        // const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        // const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        // const deck = createDeck([card1, card2, card3]);

        // const round = createRound(deck)
    // });
describe('rounds', () => {
    it('should create an object', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck)
        
        expect(round).to.be.an('object')
    });
    it('should have deck property with deck object value', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck)

        expect(round.deck).to.deep.equal([card1, card2, card3])
    });
    it.skip('should have current card property with value of 1st card', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck)
        expect(round.currentCard).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
          })
    });
    it.skip('should have turns property that starts at 0', () => {
        expect(round.turns).to.equal(0)
    });
    it.skip('should have incorrect guesses property with value of empty array', () => {
        expect(round.incorrectGuesses).to.deep.equal([])
    });
});
    
// });