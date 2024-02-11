function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3));

// demo 2
const listPerson = [
  { id: 1, name: "Dog" },
  { id: 2, name: "Cat" },
  { id: 3, name: "Chicken" },
];
const listPerson2 = [
  { id: 3, name: "Fish" },
  { id: 4, name: "Birds" },
  { id: 5, name: "Bear" },
];

const getInfo = (prop) => (obj) => obj[prop];

const getDynamicInfo = getInfo("id");

const getInfoUser = listPerson2.map(getDynamicInfo);

console.log(getInfoUser);
