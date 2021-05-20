const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(5, console.log);

// Aqui mandamos o console.log como um parametro da função,
// para que o retorno seja o que esperavamos, uma impressão no terminal.


// outro exemplo 
const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

// nesse exemplo usamos um for para percorer o parametro number, e no action, Mandamos uma função ao qual verifica (aparti de um if), se o count (do for que estamos mandando como paramentro) é dividido por 2;