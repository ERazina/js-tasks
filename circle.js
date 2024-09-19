showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });


  const showCircle = (param1, param2, param3) => {
    return new Promise((res, rej) => {
        const div = document.createElement('div');
        div.style.width = `${param3}px`;
        div.style.height = `${param3}px`;
        div.style.left = `${param1 - param3 / 2}px`;
        div.style.top = `${param2 - param3 / 2}px`;
        div.style.position = 'absolute';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = 'red';
        body.appendChild(div);
        () => res(div);
    })
  }