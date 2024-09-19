async function get(url) {
  let response = await fetch(url);
  let data;

  async function retry() {
    let counter = 5;
    while (counter !== 0 && response.status !== 200) {
      response = await fetch(url);
      counter--;
    }
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error("Error");
    }
  }

  if (response.status === 200) {
    data = await response.json();
  } else {
    data = await retry();
  }
  return data;
}
