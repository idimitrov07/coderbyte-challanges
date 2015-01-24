function SimpleSymbols(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var strArray = str.split("");
  var output = false;
  if (alphabet.indexOf(strArray[0].toLowerCase()) === -1 && alphabet.indexOf(strArray[strArray.length - 1].toLowerCase()) === -1) {
    for(var i = 0; i < strArray.length - 2; i++) {
      if (strArray[i] === "+") {
        if (alphabet.indexOf(strArray[i + 1].toLowerCase()) !== -1 &&
        strArray[i + 2] === "+") {
          output = true;
        } else {
          break;
        }
      }
    }
  }
  // code goes here
  return output;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());
