function LongestWord(sen) {
  sen = sen.replace(/[^a-zA-Z0-9 ]/g, "");
  var senArray = sen.split(" ");
  var len = 0;
  var longestWord = "";
  for(var i = 0; i < senArray.length; i ++) {
    if (senArray[i].length > len ) {
      len = senArray[i].length;
      longestWord = senArray[i];
    }
  }
  return longestWord;    
}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());
