// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;

// const combine = fn => fn(4, 5);

// const addResult = combine(add);
// console.log(addResult);
// const subtractResult = combine(subtract);
// console.log(subtractResult);

const numberOfAnimals = 20;
const numberOfPeople = 4;

const animalsPerPerson = (x, y) => x / y;
const livingOrganismsCount = (x, y) => x + y;

const calculate = fn => fn(numberOfAnimals, numberOfPeople);

const result = calculate(animalsPerPerson);
const result2 = calculate(livingOrganismsCount);
console.log({ result, result2 });

const cars = 2;
const seats = 4;

const countSpace = (x, y) => x * y;

const init = fn => fn(cars, seats);

const space = init(countSpace);
console.log({ space });

const arg1 = 5;
const arg2 = 10;
const bigone = fn => fn(arg1, arg2);
const smallone = (x, y) => x + y;
const getresult = bigone(smallone);
console.log({ getresult });

const constWeHave1 = 5;
const constWeHave2 = 14;

const add = (x, y) => x + y;
const divide = (x, y) => x + y;

const funcThatTakesInFunc = fnWeDontHave =>
  fnWeDontHave(constWeHave1, constWeHave2);

const resultAdd = funcThatTakesInFunc(add);
const resultDivide = funcThatTakesInFunc(divide);
const resultMax = funcThatTakesInFunc(Math.max);
const resultMin = funcThatTakesInFunc(Math.min);

console.log({ resultAdd, resultDivide, resultMax, resultMin });
