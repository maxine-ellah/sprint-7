MINIMUM

var min = function(x, y) {
  var num = Math.min(x, y);
  return num;
};

RECURSION

function isEven(number) {
  if (number < 0) {
      number = number+2
    return isEven(number) ;
    }
  if (number === 0) {
      return true;
  } 
    else if (number === 1) {
       return false;
  } 
    
    else {
    number = number-2
    return isEven(number) ;
  }
}

BEAN COUNTING

function countBs(word){
  var counter = 0
  for (var i=0; i<word.length; i++) {
    if (word.charAt(i) == "B"){
    counter = counter + 1
    }
    }
  return counter
}