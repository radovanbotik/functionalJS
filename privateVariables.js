const person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;
  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    setJob: newJob => (_job = newJob),
  };
};

const rado = person({ name: "rado", age: 29, job: "developer" });
const name = rado.getName();
const age = rado.getAge();
const job = rado.getJob();
rado.setJob("policeman");
console.log(rado.setJob("policeman"));

const outter = obj => {
  const { story1, story2 } = obj;
  const _secret1 = story1;
  let _secret2 = story2;
  return {
    getter1: () => _secret1,
    getter2: () => _secret2,

    setSecret2: modifiedSecret => (_secret2 = modifiedSecret),
  };
};

const secrets = {
  story1: "i am retarded",
  story2: "i am trying though",
};

const knowmydeepsecret = outter(secrets).getter1();
console.log(knowmydeepsecret);

const knowmydeepsecret2 = outter(secrets).getter2();
console.log(knowmydeepsecret2);

console.log(outter(secrets).setSecret2("and I will do it"));
