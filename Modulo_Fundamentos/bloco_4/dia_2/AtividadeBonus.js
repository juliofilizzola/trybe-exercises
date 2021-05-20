// Atividade bônus

let number = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

// for (let index = 1; index < number.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < number.length; secondIndex += 1) {
//     if (number[index] < number[secondIndex]) {
//       let position = number[index];
//       number[index] = number[secondIndex];
//       number[secondIndex] = position;
//     }
//   }
// }

// console.log(number);

for (let index = 1; index < number.length; index += 1) {
  for (let secondIndex = 0; secondIndex < number.length; secondIndex += 1) {
    if (number[index] > number[secondIndex]) {
      let position = number[index];
      number[index] = number[secondIndex];
      number[secondIndex] = position;
    }
  }
}

console.log(number);


let total = [];

for(let index = 0; index< number.length; index += 1){
  if(number[index + 1]){ 
    total.push(number[index] * number[index + 1]);
  }
  else {
    total.push(number[index * 2]);
  }
}


console.log(total);
