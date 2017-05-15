var assert = require('assert');

describe('regCheck()', function(){
  it('Should chould check registration numbers end with location', function(){
    assert.equal(regCheck("37856 MP","MP"), true);
  });
});
