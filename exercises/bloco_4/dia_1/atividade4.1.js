// primeira atividade.
console.log('.........primeiro........')
var a = 10;
var b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// segundo
console.log('.........segundo........')

var maxValor = Math.max(a, b)
console.log(maxValor)

// terceiro
console.log('.........terceiro........')

var um = 50;
var dois = 5;
var tres = 10;

var mValor = Math.max(um, dois, tres)

console.log(mValor)

// quarto

console.log('.........Quarto........')

var valor;

if(valor > 0) {
  console.log("positivo")
}
else if (valor < 0){
  console.log("negativo")

}
else{
  console.log('indeterminado')
}

// quinto
console.log('.........Quinto........')

var A = 60;
var B = 70;
var C = 60;

if(A+B+C == 180) {
  console.log(true)
}
else if (A+B+C != 180) {
  console.log(false)
}
else {
  console.log('erro no xablau')
}

switch(A,B,C){
  case A+B+C ==180:
    console.log(true)
    break;
  case A+B+C !== 180:
    console.log(false)
    break
  default:
    console.log('xabaluzinho')
    break
}

// Sexta 

console.log('.........Sexta........')

var xadrez = "Biichop"
var nome1 = xadrez.toLowerCase('bichop')
if (nome1 === 'bichop'){
  console.log("lateralmente")

} else {
  console.log('não é essa peça!')
}