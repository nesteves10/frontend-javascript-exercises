var checkLock = function(first,second,third,fourth){
  if(first === 3 || first === 5 || first === 7){
    if(second === 2){
      if(third >= 5 && third <= 100){
        if(fourth < 9 || fourth > 20){
            return 'correct';
          }  
}
  }
  }
  
return "incorrect";
};

checkLock(5,2,45,1);