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