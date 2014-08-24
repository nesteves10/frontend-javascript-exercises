module.exports.newArray = function(one,two,three,four){
  return [one,two,three,four];
};

module.exports.firstAndLast = function(myArray){
  var newArray = [];
  newArray[0] = myArray.shift();
  newArray[newArray.length] = myArray.pop();
  return newArray;
};