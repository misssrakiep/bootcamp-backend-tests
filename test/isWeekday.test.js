var assert = require('assert');

describe('isWeekday()', function(){
  it('Shows all days during the week', function(){
    assert.equal(isWeekday('Saturday'), false);
    assert.equal(isWeekday('Monday'), true);;
  });
});
