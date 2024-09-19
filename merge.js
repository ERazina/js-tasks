const arr = [[1,4,5],[1,3,4],[2,6]];


function merge (a) {
    console.log(a.flat().sort((x, y) => x - y));
}

merge(arr);