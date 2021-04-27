function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// atividade 1
const testingScope1 =  escopo => escopo ?  'Não devo ser utilizada fora do meu escopo (if)' : 'Não devo ser utilizada fora meu escopo (else)';

console.log(testingScope1(false));

//atividade 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const printNumber = number => `Os numeros ${number.sort((a, b) => a - b)} se encontram de forma crescente`;

console.log(oddsAndEvens);

console.log(printNumber(oddsAndEvens));