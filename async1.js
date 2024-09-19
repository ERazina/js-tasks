const delay = (ms) => {
    return new Promise((res, rej) => {
        setTimeout(() => res(1), ms);
    })
}

delay(4000).then(() => console.log(1));


async function getData () {
    try{
        console.log('starting');
        const url = 'https://jsonplaceholder.typicode.com/todos/1-';
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch(e){
        console.log(e)
    }


}

delay(3000).then(() => getData());

