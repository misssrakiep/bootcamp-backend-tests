
module.exports = function(data,cost){
  var dataSplit = data.split(', ');

  var calls = [];
  var sms = [];
  for(var i=0; i<dataSplit.length; i++){

    if(dataSplit[i]==='call'){
      calls.push(dataSplit);
    }
    else{
      sms.push(sms);
    }
  }
 var totalCall = calls.length*2.75;
    var totalSMS = sms.length*0.65;
    var total = totalCall+totalSMS;
  var totalTwo=total.toFixed(2);
  console.log("R" + totalTwo);
    return "R" + totalTwo;

};
//totalPhoneBill('call, sms, call, sms, sms');
