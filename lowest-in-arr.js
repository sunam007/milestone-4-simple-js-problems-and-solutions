function findLargest(numbers) {
  let smallest = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}

const randomInt = [3, 23, 45, 22, 13, 56, 77, 89, 9, 343];
const lowestNumber = findLargest(randomInt);
console.log(largestNumber);
