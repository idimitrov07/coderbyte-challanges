function TimeConvert(num) {
  var hours = parseInt(num / 60);
  var minutes = num % 60;
  var time = hours + ":" + minutes;

  // code goes here
  return time;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());
