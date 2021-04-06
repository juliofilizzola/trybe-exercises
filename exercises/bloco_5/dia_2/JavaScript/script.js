function addh1 () {
  let text = 'Exercício 5.2 - JavaScript DOM ';
  let bodyintenstx = document.createElement('h1');
  bodyintenstx.innerHTML = text;
  bodyintenstx.className = 'text_main';
  document.body.appendChild(bodyintenstx);
}

addh1();

function divCreat () {
  let addDiv = document.createElement('div');
  addh1.className = 'main-content';
  document.body.appendChild(addDiv);

  let addDiv2 = document.createElement('div');
  addDiv2.className = 'center-content';
  addDiv.appendChild(addDiv2);

  let addP = document.createElement('p');
  addDiv2.appendChild(addP);

  let divLeft = document.createElement('div');
  divLeft.className = 'left-content';
  addDiv.appendChild(divLeft);
  
  let divRight = document.createElement('div');
  divRight.className = 'right-content';
  addDiv.appendChild(divRight);

  let creaImage = document.createElement('img');
  creaImage.src = 'https://picsum.photos/200';
  creaImage.className = 'small-image';
  divLeft.appendChild(creaImage);
}

divCreat();

