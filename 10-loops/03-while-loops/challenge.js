module.exports.stream = function(conditionalFn, actionFn){
  if(conditionalFn() === false){

    return true;
  }
  var count = 0;

  // do {
  //   actionFn();
  //   console.log(count);
  //   count++;
  //   conditionalFn();
  // }
while (count < 10){
  actionFn();
    console.log(count);
    count++;
    !conditionalFn();
}
};

module.exports.sumNumbers = undefined;

