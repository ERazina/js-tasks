// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }

async function loadJson (url) {
    const response = await fetch(url);
    if(response.status === 200){
        return await response.json();
    }
    else{
        throw new Error(response.status)
    }
}
  
  loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404

    async function wait() {
        await new Promise(resolve => setTimeout(resolve, 1000));
      
        return 10;
      }
      
      function f() {
        wait.then((res) => res);
      }

      