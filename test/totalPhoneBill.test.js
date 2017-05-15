var assert = require('assert');

describe('totalPhoneBill()', function(){
  it('Should return the users total phone bill', function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
  });
});
