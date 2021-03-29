// 1
let names = 'Renner';

function verificapali (names){
  let reverse = names.split('').reverse().join('');
  if(reverse === names){
    return true;
  } else {
    return false;
  }
}

console.log(verificapali('merda'))
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