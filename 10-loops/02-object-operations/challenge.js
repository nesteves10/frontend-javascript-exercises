module.exports.copy = function(obj){
  var obj2 = {};
  for(var property in obj){
    obj2[property] = obj[property];
  }
  return obj2;
};

module.exports.extend = function(dest,src){
  for(var property in src){
    dest[property] = src[property];
  }
  return dest;
};

module.exports.hasElems = function(obj, myArray){ 
  for(var x = 0; x < myArray.length; x++){
    if (!(myArray[x] in obj))
      {
         return false;
      }     
  }
  return true;
};