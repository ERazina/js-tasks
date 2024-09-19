// Задача: Последовательное выполнение промисов У тебя есть три асинхронные функции: first(), second(), third(). Они возвращают промисы, которые разрешаются через случайное время. Напиши код, который вызывает эти функции последовательно (первая завершается, затем запускается вторая и так далее) и выводит результат каждого вызова.

const first = (src) => {
    return new Promise((resolve, reject) => {
       const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error('скрипт не загрузился'));
        document.head.appendChild(script);
    })
}

first('src').then(() => console.log('Скрипт загружен'))