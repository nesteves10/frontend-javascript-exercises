module.exports.addItem = function(item, myArray){
  if(myArray.indexOf(item) === -1){
  myArray.push(item);
  console.log(myArray);
  
}
return myArray;
};

module.exports.reverseSortedList = function(myArray){
  myArray.sort();
  return myArray.reverse();
};