const chai = require('chai');
const expect = chai.expect;

const {createDeck,
       countCards} = require('../src/deck');
const {createCard} = require('../src/card')

describe('createDeck', function() {
    it('should create a deck from cards', function() {
        const card1 = createCard( 1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
        const card2 = { "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"}
        const card3 = { "id": 3,
        "question": "What type of prototype method directly modifies the existing array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "mutator method"}
        
        const expected = [{
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
          }]

        const deck = createDeck([card1, card2, card3])

        expect(deck).to.be.an('array')
        expect(createDeck([card1, card2, card3])).to.deep.equal(expected)
    });

describe('countCards', function() {
    it('should count the cards in a deck', function() {
        const card1 = createCard( 1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
        const card2 = { "id": 2,
        "question": "What is a comma-separated list of related values?",
        "answers": ["array", "object", "function"],
        "correctAnswer": "array"}
        const card3 = { "id": 3,
        "question": "What type of prototype method directly modifies the existing array?",
        "answers": ["mutator method", "accessor method", "iteration method"],
        "correctAnswer": "mutator method"}

        const deck = createDeck([card1, card2, card3])

        expect(countCards(deck)).to.equal(3)
    });
});
});