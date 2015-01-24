function NumberEncoding(str) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  str = str.toLowerCase();
  var strArray = str.split("");
  var newString = "";
  for(var i = 0; i < strArray.length; i++){
    if(alphabet.indexOf(strArray[i]) != -1){
      newString += (alphabet.indexOf(strArray[i]) + 1).toString();
    } else {
      newString += strArray[i];
    }
  }


  // code goes here
  return newString;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
NumberEncoding(readline());
