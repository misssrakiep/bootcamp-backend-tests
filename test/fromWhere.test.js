var assert = require('assert');

describe('fromWhere()',function(){
  it('Shows where the number plate is from', function(){
    assert.equal(fromWhere("5268 CY"), "Belville");
    assert.equal(fromWhere("5869 CJ"), "Paarl");
    assert.equal(fromWhere("6253 CA"), "Cape Town");
    //assert.equal(fromWhere("CN 5968"), "Some other place!");
  });
});
