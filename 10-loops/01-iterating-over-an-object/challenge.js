module.exports.getKeys = function(obj){
  var myArray = [];
  for(var property in obj){
    myArray.push(property);
 
  }
  return myArray;
};

module.exports.getValues = function(obj){
  var myArray = [];
  for(var property in obj){
    myArray.push(obj[property]);
  }
  return myArray;
};

module.exports.objectToArray = function(obj){
  var myArray = [];
  for(var property in obj){
    myArray.push([property] + " is " + obj[property]);

  }
  return myArray;
};