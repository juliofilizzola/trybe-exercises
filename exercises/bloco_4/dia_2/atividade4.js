let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // 1
// for (index = 0; index < numbers.length; index += 1){
//   console.log(index)
// }

//2

let soma = 0;

// for (let i in numbers){
//     soma += numbers[i]
//     console.log(soma)
// }
// for (let index =0; index <numbers.length; index += 1 ){
//   soma += numbers[index]
//   console.log(soma)
// }

// var total = numbers.reduce((total, numbers) => total + numbers, 0)
// console.log(total)
//3

// let media = 0;
for (let index =0; index <numbers.length; index += 1 ){
 soma += numbers[index]
}
let mediaTotal = soma / numbers.length
console.log(mediaTotal)

if(mediaTotal > 20){
  console.log('Valor Maior do que 20')
}
else {
  console.log('Valor menor ou igual a 20')
}
 

//5
let menor = 0;
for (let index =0; index <numbers.length; index += 1 ){
  if(numbers[index]>menor){
    menor =numbers[index]
  }
}

console.log(menor)

//6
let result = 0;
for (let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0){
    result += 1;
  }
   
}

if (result === 0 ){ 
  console.log('Nenhum valor ímpar encontrado.');
  
}else {
  console.log(result);
}


