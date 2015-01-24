function FirstFactorial(num) {

  // code goes here
  var newNum = num;
  var i = 0;
  for (i = num - 1; i >= 1; i--) {
    newNum *= i;
  }
  return newNum;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
