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

// Setima.

console.log('.........Setima........')

var valor = 50;

if (valor >= 90){
  console.log('A');
}
else if(valor >= 80){
  console.log('B');
}
else if (valor >= 70){
  console.log('C');
}
else if (valor >= 60){
  console.log('D');
}
else if (valor >= 50) {
  console.log('E');
}
else if (valor > 50) {
  console.log('F');
}
else {
  console.log('Valor Invalido!')
}

// oitava

console.log('.........Oitava........')

let num1 = 2;
let num2 = 6;
let num3 = 8;

if (num1, num2, num3 % 2 === 0){
  console.log(true);
}
else {
  console.log(false);
}

// Nona 

console.log('.........Nona........')
let num1 = 2;
let num2 = 5;
let num3 = 8;

if (num1, num2, num3 % 2 !== 0){
  console.log(true);
}
else {
  console.log(false);
}

// Decima 

console.log('.........Decima........')

let valorP = 50;
let valorV = 60;
let valorCustoTotal = valorP + valorV;
let lucro = valorP - valorV;

var desconto = lucro*20/100
if(desconto >= 0){
  console.log(desconto)
}
else {
  console.log('valor invalodo');
}
// incompleto

// Decima primeira

console.log('.........Decima Primeira........')

let salarioBruto = 1.500
let alicotaA = salarioBruto *(8/100)
let alicotaB = salarioBruto *(9/100)
let alicotaC = salarioBruto *(11/100)

if(salarioBruto = 1.55694){
  console.log(alicotaA);
}
else if (salarioBruto >= 1.55695 && salarioBruto <= 2.59492){
  console.log(alicotaB)
}
else if (salarioBruto >= 2.59493 && salarioBruto <= 5.18982){
  console.log(alicotaC)
}
// não consegui.. 

