/* // Fibonacci series array = [0,1,1,2,3,5,8,13,21,34,55]
var fibo = [0, 1];
for (i = 2; i < 15; i++) {
  // ith = (i-1)th + (i-2)th
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo); */

// Fibonacci series with function

/* function fibonacciSeries(nth) {
  if (typeof nth != "number") {
    return console.log(
      "Please input a positive integer number greater than or equal to 2"
    );
  }
  fibo = [0, 1];
  for (i = 2; i < nth; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(fibonacciSeries(9)); */

// fibonacci using recursive function

function fibonacciSeries(n) {
  if (n == 0) {
    return [0];
  }
  if (n == 1) {
    return [0, 1];
  }

  var fibo = fibonacciSeries(n - 1);
  fibo[n] = fibo[n - 1] + fibo[n - 2];

  return fibo;
}

var nthNum = 1;
console.log(fibonacciSeries(nthNum));
