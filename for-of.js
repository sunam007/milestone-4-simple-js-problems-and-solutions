const numbers = [1, 2, 3, 4, 3, 5, 6, 7, 7, 7, 8, 9, 2, 2, 3, 3, 0];

function removeDuplicate(numbers) {
  const unique = [];
  for (const num of numbers) {
    if (unique.indexOf(num) == -1) {
      unique.push(num);
    }
  }
  return unique;
}

console.log(removeDuplicate(numbers));
