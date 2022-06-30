/* for (i = 1; i < 50; i++) {
  //   console.log(i);
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizzBuzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
} */

// hacker rank write this code as a function

function fizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

const num = fizzBuzz(105);
