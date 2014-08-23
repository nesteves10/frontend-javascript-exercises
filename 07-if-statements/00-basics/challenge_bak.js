module.exports.favoriteNumber = function(favNum,guess){
  if(guess > favNum){
    return "Too high";
  }
  else if(guess < favNum){
    return "Too low";
  }
  else{
    return "You got it!";
  }
};

module.exports.checkLock = function(first,second,third,fourth){
  if(first === 3 || first === 5 || first === 7){
    return "correct";
  }
  else if (!(first === 3 && first === 5 && first === 7)){
    return "incorrect";
  }
  else if(second === 2){
    return "correct";
  }
  else if(!(second === 2)){
    return "incorrect";
  }
  else if(third >= 5 && third <= 100){
    return 'correct';
  }
  else if(!(third >= 5 || third <= 100)){
    return 'incorrect';
  }
  else if(fourth < 9 || fourth > 20){
    return "correct";
  }
  else if(!(fourth < 9 && fourth > 20)){
    return "incorrect";
  }

};

module.exports.canIGet = undefined;

