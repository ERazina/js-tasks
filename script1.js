let a;
const fetchData = async () => {
  try {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new Error('ERROR!')
    };
    const data = await response.json();

    a = data;
  } catch (err) {
    console.log(err);
  }
};

// fetchData();

const main = async () => {
  await fetchData();
  console.log(a);
};

main();

console.log(a)
