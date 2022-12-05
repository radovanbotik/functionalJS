const numbers = [1, 2, 3, 4, 5, 6];
const evennumbers = numbers.filter(number => number % 2 === 0);

console.log(evennumbers);

const words = ["cat", "table", "chair", "earth", "rock"];
const wordsLessThan4Chars = words.filter(word => word.length < 5);
console.log(wordsLessThan4Chars);

//hoc
// function testForLength (length) {
//     returns function (word) {
//         returns word.length < length
//     }
// }
const items = [
  "pen",
  "chair",
  "table",
  "book",
  "fridge",
  "television",
  "smartphone",
];
const testForLength = length => word => word.length > length;
const isMoreThan4 = testForLength(4);
const moreThan4 = items.filter(isMoreThan4);
console.log(moreThan4);

///////////////////////////////////////////////////////////

const people = ["john", "peter", "susan", "marc", "leo"];
const firstCharTest = char => person => person.charAt(0) === char;
const isCharacterP = firstCharTest("p");
//isCharacterP is basicly just person => person.charAt(0) === 'p'
const startsWithP = people.filter(isCharacterP);
console.log(startsWithP);

/////simplified/////////

const drinks = ["beer", "vodka", "rum", "cognac", "water", "whiskey", "coke"];
const initCharHOC = initChar => drink => drink.charAt(0) === initChar;
const initwithW = drinks.filter(initCharHOC("w"));
console.log(initwithW);
