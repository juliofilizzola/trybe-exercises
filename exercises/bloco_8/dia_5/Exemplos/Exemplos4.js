const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'xablau' } = person;

console.log(nationality);