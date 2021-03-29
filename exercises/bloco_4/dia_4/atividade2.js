// 1
let names = 'Renner';

function verificaai( names){
  let arrayP =  names.split('');
  let epali =  true;
  for(let pa in arrayP){
    if(arrayP[pa] !== names[(names.length - 1) - pa]){
      epali = false;
    }
  }
  return epali;
}
connsole.log(verificaai(arara))
//2 

let number = [2, 3, 6, 7, 10, 1];
let max = number.reduce(function(a, b){
  return Math.max(a,b)
})

console.log(max)