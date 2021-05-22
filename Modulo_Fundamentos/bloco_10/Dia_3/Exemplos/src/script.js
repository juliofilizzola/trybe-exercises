// Alguns exemplos de mock

/* 
Mockar é um termo que usamos, 
para definir o ato de simular o 
comportamento das funções, 
nos teste, em relação a algumas 
situações podemos ter um falso positivo 
sendo assim, simulamos.



*/

const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;


console.log(divisivelPorDois());

module.exports = divisivelPorDois;