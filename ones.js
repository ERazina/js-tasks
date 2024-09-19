const arr1 = [2, 2, 3, 4, 6, 1];

const ifOnes = (arr, k) => {
  // пройдемся по массиву и создадим объект ключ; count
  const countMap = arr.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});

  // console.log(countMap);

  // console.log(countMap.filter(item => item === 1))

  const a = arr.filter((item) => countMap[item] === k);

  return a[0];
};

const n = ifOnes(arr1, 2);
// console.log(n);

const sum = arr1.reduce((acc, elem) => {
  return acc + elem;
});
// console.log(sum);

// Найти максимум в массиве
function max(arr) {
  const max1 = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
  }, arr[0]);

  return max1;
  // console.log(max)
}

console.log(max(arr1));

const min = arr1.reduce((acc, curr) => {
  return curr < acc ? curr : acc;
}, arr1[0]);

console.log(min);

const numbers = [10, 5, 8, 3, 7, 6];

const multiply = numbers.reduce((acc, curr) => {
  return acc * curr;
}, numbers[0]);

console.log(multiply);

const min1 = numbers.reduce((acc, curr) => {
  return curr < acc ? curr : acc;
});

console.log(min1);

const str = "hello world";

const newArr = str.split("");

const letters = newArr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(letters);

const numbers1 = [1, 2, 2, 3, 4, 4, 5];

const nums = numbers1.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

const filtered = numbers1.filter((item) => nums[item] === 1);

console.log(filtered)

const sentences = ['Hello world', 'This is a test', 'Reduce is powerful'];

const combineSent = sentences.join(' ');

console.log(combineSent)

const sent = combineSent.split(' ');

console.log(sent)

console.log(sent.length);

// const arr12 = sent.reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
// }, {});

// console.log(arr12)

