        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */


  function mainColor () {
    let main = document.querySelectorAll('.main-content');
    return main[0].style.backgroundColor = 'rgb(76,164,109)';
  }
  mainColor();
   function centerColor () {
    let centerColor =  document.querySelectorAll('.center-content');
    return centerColor[0].style.backgroundColor = 'white';
   }
   centerColor();
   function text1 () {
    let text = document.getElementsByTagName('p')[1];
    text.innerText = 'Independente Financeiramemnte'
   }
   text1();
function corrigir () {
  let text1 = document.getElementsByClassName('title')[0];
  text1.innerText =  'Exerci'
}

corrigir();

function maius () {
  let paragraf = document.getElementsByTagName('p')[0];
  paragraf.innerHTML = paragraf.innerHTML.toUpperCase();
 
};

maius();
 
function prints () {
  let impri = document.getElementsByTagName('p');
  for (let index = 0; index < impri.length; index += 1){
    console.log(impri[index].innerHTML);
  }
}

prints();