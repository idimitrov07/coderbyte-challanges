function LetterChanges(str) {
  var alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
  var newString = "";
  var strArray = str.split("");
  for(var i = 0; i < strArray.length; i++) {
    var index = alphabet.indexOf(strArray[i]);
    //newString += alphabet[index + 1];
    if (index !== -1) {
      if ( index !== 25) {
        var letter = "";
        if (["a", "e", "i", "o", "u"].indexOf(alphabet[index + 1]) > -1 ) {
          letter = alphabet[index + 1].toUpperCase();
        } else {
          letter = alphabet[index + 1];
        }
        newString += letter;
      } else {
        newString += "A";
      }
    } else {
      newString += strArray[i];
    }

  }

  return newString;
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());
