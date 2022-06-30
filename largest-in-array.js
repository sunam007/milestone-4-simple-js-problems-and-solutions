function findLargest(numbers) {
  let largest = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

const randomInt = [3, 45, 22, 13, 56, 77, 89, 9, 343];
const largestNumber = findLargest(randomInt);
console.log(largestNumber);
