var assert = require('assert');

describe('transportFee()', function(){
  it('States travelling fare according to shift',function(){
    assert.equal(transportFee("morning"), "R20");
    assert.equal(transportFee("afternoon"), "R10");
    assert.equal(transportFee("night"), "free");
  });
});
