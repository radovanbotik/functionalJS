const personalData = {
  name: "rado",
  age: 29,
};

const workData = {
  position: "developer",
  field: "frontend",
};

const allData = {
  ...personalData,
  ...workData,
};

const nameAndWorkData = {
  name: personalData.name,
  ...workData,
};

console.log(allData);
console.log(nameAndWorkData);

//////////////////////////////

const cat = { organic: true, alive: true };
const rock = { organic: false, alive: false };

const catAndRock = { ...cat, ...rock };
console.log(catAndRock);

/////////////////////////////

const animal = { species: "cat", age: 8 };
const update = { age: 9 };
const updatedAnimal = { ...animal, ...update };

console.log(updatedAnimal);

/////////////////////////////////

const animals = ["cat", "dog", "mouse"];
const extendedAnimals = ["zebra", ...animals, "turtle"];
console.log(extendedAnimals);

const color = "yellow";
const spreadcolor = [...color];
console.log(spreadcolor);
