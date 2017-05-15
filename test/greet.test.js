var assert = require('assert');

describe('greet()',function(){
  it('should greet Rushdi correctly', function() {
    assert.equal(greet('Rushdi'), "Hello, Rushdi");
  });
});
