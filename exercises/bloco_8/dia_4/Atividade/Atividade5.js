
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.join('').split('').reduce((word, value) => {
  if(value === 'a' ||value === 'A') return word + 1;
  return word
}, 0);

// Jean me ajudou nessa questão! 

console.log(containsA());


assert.deepStrictEqual(containsA(), 20);