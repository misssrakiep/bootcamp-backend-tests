var assert = require('assert');

describe('allPaarl()', function(){
  it('Collects all Paarl registration numbers', function(){
    assert.equal(allPaarl("CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864"), ['CJ 678 543 , CJ 67890']);
  });
});
