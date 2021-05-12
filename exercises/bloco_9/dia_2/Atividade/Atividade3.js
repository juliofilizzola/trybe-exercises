const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => { // FAZENDO UM PROMISES
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1 // FAZEMOS UMA ARRAY ALEATORIAMENTE, COM UM TAMANHO DE 10 ITENS
    );
    const sum = myArray.map(number => number * number)
    .reduce((number, acc) => number + acc, 0);// SOMAMOS ESSES NUMEROS AO QUADRADO E RETORNAMOS UM VALOR;

    (sum < 8000) ? resolve(sum) : reject(); // FAZEMOS UMA COMPARAÇÃO, SE TRUE = CHECKED; FALSE = REJEITADO/ ERRO
  });

  myPromise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))// COM O RESOLVE, FAZEMOS UMA SOMA COM OS NUMEROS DESSA NOVA ARRAY.
    .then(array => array.reduce((number, acc) => number + acc, 0))// DEPOIS SOMAREMOS A ARRAY E DEPOIS RETORNARIAMOS UMA SOMA.
    .catch(() =>
      console.log('É mais de oito mil! Essa promise deve estar quebrada!') // REJECT (MENSAGEM DE ERRO.);
    );
};

fetchPromise();