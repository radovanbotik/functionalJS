//Trying to do more or 2 things => should refactor

const divide = (x, y) => {
  if (y === 0) {
    console.log("trying to divide by 0");
    return;
  }
  return x / y;
};

//Split dividing and checking

const multiply = (x, y) => x * y;

//fn represents the function we want to call if  given criteria is met.

const check =
  fn =>
  //we are returning function here
  (...args) => {
    //checking args
    //checking if the second argument isnt zero
    if (args[1] === 0) {
      console.log("trying to multipy by 0");
      return;
    }
    //if it passes we will call fn we passed in called with all the arguments
    return fn(...args);
  };

const validateMultiply = check(multiply);
console.log(validateMultiply(2, 0));
