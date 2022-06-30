/* A function which returns reversed string */

const greetings = "Bangladesh";
// console.log(greetings.length);

function reverseString(str) {
  let reversed = "";
  for (const char of str) {
    // console.log(char);
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverseString(greetings));
