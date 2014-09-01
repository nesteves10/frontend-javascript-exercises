module.exports.sumNumbers = function(myArray){
  var sum = 0;
  for(var x = 0; x < myArray.length; x++){
    sum += myArray[x];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(inputString){
  var str = inputString.toLowerCase();
  var myArray = str.split(",");
  return myArray;
};

module.exports.addIndex = function(myArray){
  var index = [];
  for (var x = 0; x < myArray.length; x++){
    index[x] = x + " is " + myArray[x];
    // console.log(index);
  }
    return index;
};
