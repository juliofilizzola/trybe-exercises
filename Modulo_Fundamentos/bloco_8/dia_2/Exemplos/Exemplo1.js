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

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

emailListInData.forEach(email => console.log(`O email ${email} esta cadastrado em nosso banco de dados!`));

// Use o método forEach chamando a callback showEmailList para apresentar os emails.

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

// a função for ech pode executar a função desde que você mande o indentificador dela. não preciasa manda com o chamado dela. 
