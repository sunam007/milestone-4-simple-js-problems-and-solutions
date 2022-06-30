const names = [
  "abul",
  "kabul",
  "habul",
  "redbul",
  "istambul",
  "babul",
  "abul",
  "muhibul",
  "mokbul",
  "babul",
];

function removeDuplicate(names) {
  const unique = [];
  // for (i = 0; i < names.length; i++) {
  //   const element = names[i];
  //   console.log(element);
  // }
  for (const element of names) {
    console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}

console.log(removeDuplicate(names));
