const listNames = ['Maria', 'Manuila', 'Jorige', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false
console.log(verifyFirstLetter('M', listNames));
console.log(verifyFirstLetter('W', listNames));

//Nessa função ele vai verificar se pelo menos um nome dessa Array começa com uma letra determinada.


const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => Object.values(studentGrades).every((grade) => grade === 'Aprovado') ? 'Foi Muito bom, Aprovado!' : 'Infelizmente você foi reprovado';

console.log(verifyGrades(grades));