const makeAdder = (x) => {
  return function (y) {
    return x + y;
  };
};

const add5 = makeAdder(5);
console.log(add5(2)); // Выведет: 7

const add10 = makeAdder(10);
console.log(add10(3)); // Выведет: 13

const greeting = (greeting) => {
  return function (name) {
    return greeting + " " + name;
  };
};

const greet = greeting("Привет!");
const name = greet("Элина");

const createStepCounter = (step) => {
  let count = 0;
  return function () {
    count = count + step;
    return count;
  };
};

const step = createStepCounter(5);
step(2);
step(3);

const factorial = () => {
  const count = 0;
  return function (n) {
    return count + n;
  };
};
const fact = factorial();
console.log(fact(5));

const limitedCounter = (maxCalls, step) => {
  let count = 0;
  let calls = 0;
  return function () {
    if (calls < maxCalls) {
      calls = calls + 1;
      return (count = count + step);
    } else {
      return "Лимит достигнут";
    }
  };
};

const counter = limitedCounter(3, 2);
console.log(counter()); // Выведет: 2
console.log(counter()); // Выведет: 4
console.log(counter()); // Выведет: 6
console.log(counter()); // Выведет: "Лимит достигнут"

// Rememberer

const remebmerer = (n) => {
  const rememberedValues = [];

  return function (m) {
    if (arguments.length === 0) {
      return rememberedValues;
    } else {
      rememberedValues.push(m);
    }
  };
};

const rememberLast3 = remember(3);
rememberLast3(1);
rememberLast3(2);
rememberLast3(3);
console.log(rememberLast3()); // Выведет: [1, 2, 3]
rememberLast3(4);
console.log(rememberLast3()); // Выведет: [2, 3, 4]

const uniqueIdGenerator = () => {
  const id = 0;
  return function () {
      return id += 1;
  };
};

const getId = uniqueIdGenerator();
console.log(getId()); // Выведет: 1
console.log(getId()); // Выведет: 2
console.log(getId()); // Выведет: 3
