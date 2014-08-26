module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
  var course = {
    title: courseTitle,
    duration: courseDuration,
    students: courseStudents
  };
  console.log(course);
  return(course);
};

module.exports.addProperty = function(object, newProp, newValue){
  if(!object.hasOwnProperty(newProp)){
    object[newProp] = newValue;
    console.log(object);
  }
  
      return object;

};

module.exports.formLetter = function(letter){
  var rec = letter.recipient;
  var sen = letter.sender;
  var message = letter.msg;
  return "Hello " + rec + ",\n\n" + message + "\n\nSincerely,\n" + sen;
};

module.exports.canIGet = function(item, money){
  var apple = {
    'MacBook Air': 999,
    'MacBook Pro': 1299,
    'Mac Pro': 2499,
    'Apple Sticker': 1
  };
  return apple[item] <= money;
};