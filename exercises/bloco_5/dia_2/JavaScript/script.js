// Atividad 1
function addText (text, tagname) {
  let bodyintenstx = document.createElement(tagname);
  bodyintenstx.innerHTML = text;
  bodyintenstx.id = 'title'
  bodyintenstx.className = 'text_main';
  document.body.appendChild(bodyintenstx);

}

addText('Exercício 5.2 - JavaScript DOM', 'h1');

function divCreat () {
  let addDiv = document.createElement('div');
  addDiv.className = 'main-content';
  document.body.appendChild(addDiv);

  let addDiv2 = document.createElement('div');
  addDiv2.className = 'center-content';
  addDiv.appendChild(addDiv2);
  addDiv2.id = 'xablau'

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

  let list = document.createElement('ul');
  divRight.appendChild(list);
  let arraylists = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez' ]
  for (let index in arraylists) {
  let arrli = document.createElement('li');
  arrli.className = 'listinha';
  arrli.innerHTML = arraylists[index];
  list.appendChild(arrli)
  }

  let text1 = document.createElement('h3');
  addDiv2.appendChild(text1);
  text1.className = 'description';

  let text2 = document.createElement('h3');
  addDiv2.appendChild(text2);
  text2.className = 'description';

  let text3 = document.createElement('h3');
  addDiv2.appendChild(text3);
  text3.className = 'description';

  addDiv.removeChild(divLeft );

  divRight.style.marginRight = 'Auto';
  divRight.style.marginLeft = 'Auto';
  addDiv2.style.backgroundColor =  'green'

  list.lastChild.remove();
  list.lastChild.remove();

}

divCreat();

