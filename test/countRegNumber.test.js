var assert = require('assert');

describe('countRegNumber()', function(){
  it('Shows the amount of registration numbers in a string', function(){
    assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), '3');
  });
});
