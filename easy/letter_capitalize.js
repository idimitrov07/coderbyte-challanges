function LetterCapitalize(str) {

  // code goes here
  var strArray = str.split(" ");
  for(var i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
  }
  return strArray.join(" ");

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());
