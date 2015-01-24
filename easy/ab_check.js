function ABCheck(str) {
  var strArray = str.split("a");
  var bool = false;
  for(var i = 0; i < strArray.length; i++){
    if(strArray[i].charAt(3) === "b" ||
    strArray[i].charAt(strArray[i].length - 4) === "b"){
      bool = true;
    }
  }

  return bool;

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());
