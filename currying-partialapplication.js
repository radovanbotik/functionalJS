const add = (x, y, z) => x + y + z;
const addPartial = x => (y, z) => add(x, y, z);
const add5 = addPartial(5);
const sum = add5(10, 20);

console.log({ sum }); //35

//currying
const add1 = (x, y, z) => x + y + z;
const addPartial1 = x => y => z => add(x, y, z);
const addedx = addPartial1(5);
const addedxy = addedx(6);
const addedxyz = addedxy(7);
console.log(addedxyz);
// or alternative

const result = addPartial(5)(6)(7);
