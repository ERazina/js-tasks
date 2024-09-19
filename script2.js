console.log("begin");
const arr1 = [
  10000,
  1,
  2,
  3,
  4,
  5,
  "apple",
  "fruit",
  "APPLE",
  "cost",
  100,
  1000,
];

const filterArr = arr1.filter((item) => typeof item === "string");
console.log(filterArr);
console.log(arr1);

const sortedArr = arr1.sort();

console.log(sortedArr);
const arr2 = [
    1,
    1,
    2,
    3,
    4,
    5,
    3,
    2,
  ];
const sumArr = arr2.reduce((prev, curr) => prev + curr, 0);

console.log(sumArr);
// let a = JSON.stringify(sumArr);
// let b = JSON.parse(a);

// console.log(a)
// console.log(b)
