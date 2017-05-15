module.exports = function(regNr){
  if(regNr.endsWith("CY")){
    return "Belville";
  }
  else if(regNr.endsWith("CJ")){
          return "Paarl";
          }

          else if(regNr.endsWith("CA")){
    return "Cape Town";
  }
  else{
    return "Some other place!";
  }
};
