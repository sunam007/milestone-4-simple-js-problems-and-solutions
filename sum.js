const numbers = [21, 33, 24, 26, 13, 41];

function sumOfAges(numArray) {
  var sum = 0;
  for (i = 0; i < numArray.length; i++) {
    sum = sum + numArray[i];
  }
  return sum;
}

var result = sumOfAges(numbers);
console.log(result);
