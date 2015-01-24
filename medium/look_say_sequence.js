function LookSaySequence(num) {

  var numArr = num.toString().split("").map(function(t){return parseInt(t)});
  var newArray = [];
  for(var i = 0; i < numArr.length; i++){
    var counter = 0;
    for(var j = i; j < numArr.length; j++){
      if(numArr[i] == numArr[j]){
        counter++;
        if(counter > 1){
          numArr.splice(i, 1);
        }
      } else {
        break;
      }
    }
    newArray.push(counter);
    newArray.push(numArr[i]);
  }
  return newArray.join("");

}

// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LookSaySequence(readline());
