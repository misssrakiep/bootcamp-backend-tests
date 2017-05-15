var assert = require('assert');

describe('isFromBelville()', function(){
  it('Returns a number plate that starts with "CY"', function(){
    assert.equal(isFromBelville('CY 189-012, DV 23 LP GP, DV 23 NB GP'), true);
  });
});
