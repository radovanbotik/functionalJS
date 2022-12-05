const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slicednumbers = numbers.slice(1, 3);
console.log(slicednumbers);

const nums = [1, 2, 5];
const numscopy = nums.slice().reverse();
console.log({ numscopy, nums });
