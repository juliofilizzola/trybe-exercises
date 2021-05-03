const arrayOfValues = ['josé', 'xblau', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.some((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// outro Exemplos
const meuArray = [2, 7, 8, 9];

meuArray.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  } else {
    console.log(`${elemento} Não é divísivel por 2!`);
  }
});

meuArray.find(element => {
  if(element % 7 === 0) console.log(`${element} é XABLAU`);
});