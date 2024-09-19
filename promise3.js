// Задача: Параллельное выполнение промисов У тебя есть массив промисов promisesArray. Используй методы работы с промисами, чтобы выполнить их параллельно и вывести результат их выполнения, когда они все завершатся.

const loadScripts = (arr) => {
    // return new Promise((res, rej) => {
    //     resolve = Promise.all(arr);
    //     rej = new Error('ошибка')
    // })

    return Promise.all(arr.map((promise) => {
        return new Promise((res, rej) => {
            const script = document.createElement('script');
            script.src = promise;
            script.onload = () => res(script);
            script.onerror = () => rej(new Error("ошибка загрузки скрипта"));
            document.head.appendChild(script);
        })
    }))
};


const n = ['src', 'npm', 'mmvb'];
loadScripts(n)