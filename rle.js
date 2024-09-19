const a = "AAAABCCBDDD"; //4ab2cb3d

function rle(str) {
    const strArr = str.split('');
    let res = '';
    let counter = 1;
    strArr.forEach((el, i) => {
        if(el === strArr[i + 1]){
            counter ++;
        }
        else{
            if(counter > 1){
                res = res + counter + el;
            }
            else {
                res = res + el;
            }
            counter = 1;
        }

    })
    console.log(res);
    return res;
}

rle(a);
