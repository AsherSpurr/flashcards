const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');
const { createCard } = require('../src/card');

describe('guess', function () {
    it('should return truthy if guess equals correct answer', function () {
        const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const guess = 'object';
        expect(evaluateGuess(guess, card.correctAnswer)).to.equal('correct!')
    });

    it('should return falsy is guess does not equal correct answer', function () {
        const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
        const guess = 'array';
        expect(evaluateGuess(guess, card.correctAnswer)).to.equal('incorrect!')
    })
});