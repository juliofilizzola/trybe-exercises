const resultFinal = (result) => console.log(result);

const funcSoma = (num1, num2, callback) => {
  let soma = num1 + num2;
  callback(soma);
}

funcSoma(12, 3, resultFinal)

//Aqui vimos um claro exemplo de callback.