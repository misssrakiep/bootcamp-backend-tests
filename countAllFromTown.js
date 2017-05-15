module.exports = function(regNum , location){
 var fromWhere = [];
 var fromTown = regNum.split(',');
  for(var i=0; i<fromTown.length ; i++){
 if(fromTown[i].startsWith(location)){
     fromWhere.push(fromTown[i]);
    }
}
return fromWhere;
};

//allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');

//assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])
