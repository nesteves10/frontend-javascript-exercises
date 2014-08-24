module.exports.reversePlusOne = function(myArray){
  myArray.reverse();
  myArray.unshift(1);
  return myArray;
};

module.exports.plusesEverywhere = function(myArray){
   var values = '';
   values = myArray.join("+");
   return values;
};


module.exports.arrayQuantityPlusOne = function(myArray){
 return myArray.length + 1;
};