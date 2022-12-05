const workers = [
  {
    name: "John Don",
    age: 47,
    position: "developer",
    salary: 100000,
  },
  {
    name: "Marky Mark",
    age: 57,
    position: "developer",
    salary: 10000,
  },
  {
    name: "Nick Cage",
    age: 65,
    position: "actor",
    salary: 2000,
  },
  {
    name: "Lisa Simpson",
    age: 10,
    position: "character",
    salary: 10000,
  },
  {
    name: "Fat Nick",
    age: 25,
    position: "mob",
    salary: 200000,
  },
];

//compare developer salary to other positions salaries

const developers = workers.filter(entry => entry.position === "developer");
const nondevelopers = workers.filter(entry => entry.position !== "developer");

const developersaverage =
  developers.reduce((total, developer) => developer.salary + total, 0) /
  developers.length;

const nondevelopersaverage =
  nondevelopers.reduce((total, developer) => developer.salary + total, 0) /
  nondevelopers.length;

const sortsalaries = [developersaverage, nondevelopersaverage].sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});
console.log({ nondevelopersaverage, developersaverage });
console.log({ sortsalaries });
