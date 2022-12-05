const countdown = x => {
  if (x < 0) return;
  console.log(x);
  countdown(x - 1);
};

countdown(10);

const countup = (x, limit) => {
  if (x > limit) return;
  console.log(x);
  countup(x + 1, limit);
};

countup(1, 100);

const multiply = (x, maxlimit) => {
  if (x > maxlimit) return;
  console.log(x);
  multiply(x * 2, maxlimit);
};

multiply(2, 2000);
