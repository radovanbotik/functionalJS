const map = (arr, func) => {
  let results = [];
  for (i = 0; i < arr.length; i++) {
    results.push(func(arr[i]));
  }
  return results;
};

console.log(map([2, 4, 6], x => x * 2));

const mapreduce = (arr, func) => arr.reduce((acc, x) => [...acc, func(x)], []);

console.log(mapreduce([2, 4, 6], x => x * 2));
