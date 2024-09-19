function loadScript(src, cb) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = () => cb(script);
  document.head.appendChild(script);
}

function locadScript(src) {
  return new Promise((res, rej) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = res(script);
    script.onerror = rej(new Error("Ошибка загрузки"));

    document.append.head(script);
  });
}

const promise = locadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
);
promise.then(() => {
//   script(alert("Загружен"));
//   error(alert("Ошибка загрузки"));
});

function delay(ms) {
  return new Promise(res => setTimeout(res, ms))
}

delay(1000).then(() => console.log("Выполнилось через 1 секунды"));
