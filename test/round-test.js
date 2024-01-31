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
describe('createRound', () => {
    it('should create an object', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        
        expect(round).to.be.an('object');
    });
    it('should have deck property with deck object value', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        expect(round.deck).to.deep.equal([card1, card2, card3]);
    });
    it('should have current card property with value of 1st card', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        expect(round.currentCard).to.deep.equal({
            "id": 1,
            "question": "What allows you to define a set of related information using key-value pairs?",
            "answers": ["object", "array", "function"],
            "correctAnswer": "object"
          });
    });
    it('should have turns property that starts at 0', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        expect(round.turns).to.equal(0);
    });
    it('should have incorrect guesses property with value of empty array', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        expect(round.incorrectGuesses).to.deep.equal([]);
    });
});

describe('takeTurn', () => {
    it('should update turns count', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        // const guess = evaluateGuess('object', 'object')

        takeTurn('object', round)

        expect(round.turns).to.equal(1)
    });
    it('should take multiple turns', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);
        // const guess = evaluateGuess('object', 'object')

        takeTurn('object', round)
        takeTurn('array', round)
        takeTurn('function', round)

        expect(round.turns).to.equal(3)
    });
    it('should return feedback if correct', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        expect(takeTurn('object', round)).to.equal('correct!')
    });
    it('should return feedback if false', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        expect(takeTurn('fruit', round)).to.equal('incorrect!')

    });
    it('should update incorrectGuesses property if false', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        takeTurn('array', round)
        takeTurn('function', round)
        takeTurn('object', round)

        expect(round.incorrectGuesses).to.deep.equal([1, 1])

    });
    it.skip('should move current card to the next card if answer is correct', () => {
        const card1 = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const card2 = createCard(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
        const card3 = createCard(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
        
        const deck = createDeck([card1, card2, card3]);
        const round = createRound(deck);

        takeTurn('object', round)

        expect(round.currentCard).to.deep.equal({
            "id": 2,
            "question": "What is a comma-separated list of related values?",
            "answers": ["array", "object", "function"],
            "correctAnswer": "array"
          })
    });
});
    
// });