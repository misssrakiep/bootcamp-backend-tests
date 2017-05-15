module.exports = function(year){
  var date = new Date();
  var year1 = date.getFullYear();
  var yearsAgo1 = year1 - year;
  console.log(yearsAgo1);
  return yearsAgo1;
};
//yearsAgo(1986);
