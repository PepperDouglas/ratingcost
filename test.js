var assert = require('assert');
var answers = require('./src/functions.js');

describe('Its a boolean then', function(){
    it('should return correct sum', function() {
        assert.equal(answers.addition(3, 4), 7);
    });
    it('should with negatives too', function() {
        assert.equal(answers.addition(3, -4), -1);
    });
    it('tell user to use numbers', function() {
        assert.equal(answers.addition('a', 4), 'Use only numbers');
    });
});