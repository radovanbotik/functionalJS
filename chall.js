const animals = [
  "cat",
  "dog",
  "cat",
  "cat",
  "dog",
  "dog",
  "mouse",
  "mouse",
  "dog",
  "mouse",
  "dog",
];

const tallyanimals = ani => {
  const uniquevalues = Array.from(new Set(ani));
  const res = uniquevalues.map(species => ({
    [species]: ani.filter(animal => animal === species).length,
  }));
  return {};
};

console.log(tallyanimals(animals));

const tanimals = animals => {
  return animals.reduce(
    (total, elem) => ({
      ...total,
      [elem]: elem ? total[elem] + 1 : 1,
    }),
    {}
  );
};
// we are returning object from reduce
// we also have to set initial value to emptry obj
// ...total represents whatever we have in obj so far
//[elem]: elem ? total[elem] + 1 : 1,
// if elem(animal)key ? elem(animal)key exist increase count by 1 otherwise if it doesnt initialize it with 1
