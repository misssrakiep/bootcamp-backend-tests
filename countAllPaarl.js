module.exports = function(regNo){
  var newReg = regNo.split(',');
  fromPaarl = [];
  for (var i=0; i<newReg.length; i++){
    fromPaarl2 = newReg[i].trim();
    if (fromPaarl2.startsWith('CJ')){
      fromPaarl.push(fromPaarl2);
    }
  }
//  console.log(fromPaarl);
  return fromPaarl;
};

//allPaarl("CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864");

 
