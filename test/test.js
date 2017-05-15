const assert = require('assert');
const countAllFromTown = require('../countAllFromTown');
const countAllPaarl = require('../countAllPaarl');
const countRegNumber = require('../countRegNumber');
const fromWhere = require('../fromWhere');
const greet = require('../greet');
const isFromBelville = require('../isFromBelville');
const isWeekday = require('../isWeekday');
const regCheck = require('../regCheck');
const totalPhoneBill = require('../totalPhoneBill');
const transportFee = require('../transportFee');
const yearsAgo = require('../yearsAgo');

describe('countAllFromTown()', function(){
  it('Should return all number plates from Stellies', function(){

    assert.equal(['CL 124', 'CL 345', 'CL 341'], true);
  });
});

describe('allPaarl()', function(){
  it('Collects all Paarl registration numbers', function(){
    assert.equal(allPaarl("CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864"), ['CJ 678 543 , CJ 67890']);
  });
});

describe('countRegNumber()', function(){
  it('Shows the amount of registration numbers in a string', function(){
    assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), '3');
  });
});

describe('fromWhere()',function(){
  it('Shows where the number plate is from', function(){
    assert.equal(fromWhere("5268 CY"), "Belville");
    assert.equal(fromWhere("5869 CJ"), "Paarl");
    assert.equal(fromWhere("6253 CA"), "Cape Town");
    assert.equal(fromWhere("CN 5968"), "Some other place!");
  });
});

describe('greet()',function(){
  it('should greet Rushdi correctly', function() {
    assert.equal(greet('Rushdi'), "Hello, Rushdi");
  });
});

describe('isFromBelville()', function(){
  it('Returns a number plate that starts with "CY"', function(){
    assert.equal(isFromBelville('CY 189-012, DV 23 LP GP, DV 23 NB GP'), true);
  });
});

describe('isWeekday()', function(){
  it('Shows all days during the week', function(){
    assert.equal(isWeekday('Saturday'), false);
    assert.equal(isWeekday('Monday'), true);;
  });
});

describe('regCheck()', function(){
  it('Should chould check registration numbers end with location', function(){
    assert.equal(regCheck("37856 MP","MP"), true);
  });
});

describe('totalPhoneBill()', function(){
  it('Should return the users total phone bill', function(){
    assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R7.45');
  });
});


describe('transportFee()', function(){
  it('States travelling fare according to shift',function(){
    assert.equal(transportFee("morning"), "R20");
    assert.equal(transportFee("afternoon"), "R10");
    assert.equal(transportFee("night"), "free");
  });
});

describe('yearsAgo()', function(){
  it('Calculates the number of years ago a given date was', function(){
  assert.equal(yearsAgo(1986), '31')
  })
})
