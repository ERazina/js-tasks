function get(obj, path) {
  const pathArr = path.split(".");

  let res = Object.assign({}, obj);
  for(let i of pathArr){
    if(res[i] === undefined){
        return undefined;
    }
    else {
        res = res[i]
    }
  }

  console.log(res)
  return res;

}

const obj1 = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

get(obj1, "a.b");
