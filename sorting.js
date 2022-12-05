const names = ["john", "peter", "susan", "lisa", "marc"];
const sortAlphabetically = names.slice().sort();
console.log({ sortAlphabetically });

const numbers = [1, 2, 500, 25, 33];
const sortnumbers = numbers.slice().sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  if (a === b) return 0;
});
console.log({ sortnumbers });

const nums = [1, 500, 222, 4000, 367];
