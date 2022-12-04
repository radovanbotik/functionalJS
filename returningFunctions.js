// const bigbox = () => () => console.log("hello");

const double = x => x * 2;
const triple = x => x * 3;
const quadruple = x => x * 4;

//1.fn that takes number as argument
//2.this fn returns another fn that takes number as argument aswell
// and multiply its own argument by whatever number we passed into
//outter function

const doitall = n => x => x * n;

const newdouble = doitall(2);
const newtriple = doitall(3);
const newquadruple = doitall(4);

newdouble(4); //exp 8
newtriple(4); //exp 12
newquadruple(4); //exp 16

console.log(newdouble(4), newtriple(4), newquadruple(4));

//write a function that double the puppies
//write a function that triple the puppies

const outterfunction = numberofpuppies => multiplier =>
  numberofpuppies * multiplier;

//number of puppies i have
const innerfunction = outterfunction(6);

//number of puppies i want
const doublemypuppies = innerfunction(2);
const triplemypuppies = innerfunction(3);
const quadruplemypuppies = innerfunction(4);
console.log({ doublemypuppies, triplemypuppies, quadruplemypuppies });
