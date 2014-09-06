module.exports.stream = function(conditionalFn, actionFn){
  if(conditionalFn() === false){

    return true;
  }
<<<<<<< HEAD
  var count = 10;

  do {
    actionFn();
    count--;
  }
while (conditionalFn() > 0);
};

module.exports.sumNumbers = function(myArray){
  var sum = 0;
  var i = 0;
  while (i < myArray.length) {
    sum = sum + myArray[i];
    i++;
  }
  return sum;
=======

>>>>>>> 7b3141f7d586a739059e2c403260033b2cb7f25c
  var count = 0;

while (count < 10){
  actionFn();
    // console.log(count);
    count++;
    !conditionalFn();
}
};

module.exports.sumNumbers = function(myArray) {
 var sum = 0;
 var i = 0;
 while(i < myArray.length){
   sum = sum + myArray[i];
   i++;
 }
 return sum;
};

