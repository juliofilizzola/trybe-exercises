//1

let n = 5;
let espaco = '';
let quest = '*';

for (let index = 0; index < n; index += 1){
  espaco = espaco + quest;
  // console.log(espaco)


  // if (index <= n){
  //   console.log(espaco)
  // } else {
  //   console.log('cab')
  // }
};

for (let index = 0; index < n; index += 1) {
  console.log(espaco)
};


// 2

// declarar uma variavel para servir de base

// let size = 11;
// let symbol = '*';
// let inputline = '';

// for(let index = 0; index <= size; index += 1){
//   console.log(inputline);
//   inputline = inputline + symbol;
// }


// 3


let size = 5;
let symbol = '*';
let inputline = '';
let imputPosition = size;

for(let index = 0; index <= size; index += 1){
  for(let cindex = 0; cindex < size; cindex += 1){
    if(cindex < imputPosition){
      inputline = inputline + ' ';
    } else {
      inputline = inputline + symbol
    }
  }
  console.log(inputline);
  inputline = '';
  imputPosition -= 1;
}

