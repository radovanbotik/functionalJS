const numbers = [1, 2, 4, 6, 8];
const areOnlyEven = numbers.every(number => number % 2 === 0);
const areSomeEven = numbers.some(number => number % 2 === 0);

console.log({ areOnlyEven, areSomeEven });

const employees = [
  {
    name: "John Don",
    salary: 10000,
  },
  {
    name: "Peter Prick",
    salary: 20000,
  },
  {
    name: "Tempa T",
    salary: 5000,
  },
  {
    name: "Nick Stick",
    salary: 30000,
  },
];

const salaryAbove10000 = employees.some(employee => employee.salary >= 10000);
console.log({ salaryAbove10000 });

const formValues = ["john", "don", "new york", ""];
const isFormValid = formValues.every(field => !!field);
console.log({ isFormValid });
