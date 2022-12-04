const outter = () => {
  const number = 10;
  return () => console.log(number);
};
//because outter() is basicly inner function
//so we are storing value of inner function to variable and then invoking it
const inner = outter();
inner();

const ofn = (x, y) => {
  return () => console.log(x / y);
};

const inf = ofn(10, 5);
inf();

const outside = (x, y, z) => {
  return () => console.log(x + y + z);
};

const inside = outside(10, 20, 30);
inside();

const closureout = name => {
  const uppercase = name.toUpperCase();
  return () => {
    console.log(uppercase);
    return uppercase;
  };
};

const closureinside = closureout("peter");
closureinside();

////////////////////////////////////////////
const ihavethisfn = number => number * 2;
const receiveNumAndMultiply = num => {
  return ihavethisfn(num);
};

console.log(receiveNumAndMultiply(4));
///////////////////////////////////////////

const toupper = name => {
  return name.toUpperCase();
};
const greetImportantPerson = name => {
  return `Hello ${toupper(name)}`;
};

console.log(greetImportantPerson("Thomas"));
