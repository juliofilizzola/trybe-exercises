// atividade 1

const fatorial = n => {
  let resp = 1;

  for (let index = 2; index <= n; index += 1){
    resp *= index;
  }
  return resp;
}

console.log(fatorial(8));

// atividade 2

const word = frase => {

  let palavras = frase.split(" ");
  let maxLenght = 0;
  let bigFor = "";
  
  for (const word of palavras) {
    if (word.length > maxLenght) {
      maxLenght = word.length;
      bigFor = word;
    }
  }
  return bigFor;
}

console.log(word("Antonio foi no banheiro e não xaasasdasdblausabemosee o que aconteceu"));

// atividade 4

let fraseTrybe = 'Trybe x aqui!';
let skills = ['Git', 'HTML', 'CSS'];

const toReplace = string => string.replace(/x/i, 'Xablau');

console.log(toReplace(fraseTrybe));

const concat = string => `${toReplace(fraseTrybe)}Minhas cinco principais habilidades são: ${string.toString()}`;
console.log(concat(skills))