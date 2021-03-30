// 1
let names = 'renner';

function verificapali (names){
  let reverse = names.split('').reverse().join('');
  if(reverse === names){
    return true;
  } else {
    return false;
  }
}

console.log(verificapali(names))
//2 

let number = [2, 3, 6, 7, 10, 1];
let max = number.reduce(function(a, b){
  return Math.max(a,b)
})

console.log(max)

//atividade 3

let array = [2, 4, 6, 7, 10, 0, -3];
let min = array.reduce(function(a, b){
  return Math.min(a,b)
})

console.log(min)

// atividade 4 

let nameList = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 


for(let key in nameList){
  console.log(nameList[key].length);
};

function contador (nameList) {
  var maxP = nameList[0];
  for (let keys in nameList){
    if(maxP.length < nameList[keys].length){
      maxP = nameList[keys];
    };
  };
  return maxP;
};

console.log(contador (nameList));

// Atividade 5

// let numeros = [2, 3, 2, 5, 8, 2, 3];

// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }
// console.log(maisRepetido(numeros));

// atividade 6

let n = 5;

function contar (n){
  let total = 0;
  for(let index = 1; index <= n; index +=1){
    total = total + index
  }
  return total;
}

console.log(contar(n))

//7

let string_word = 'trybe';
let string_ending = 'be';

function verificaNumero1 (string_word , string_ending) {
  Palavra = string_word.split('');
  fimDaPalavra = string_ending.split('')

  if(Palavra > fimDaPalavra){
    console.log(Palavra + fimDaPalavra)
  }

}
 