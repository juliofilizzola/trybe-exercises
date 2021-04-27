const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Primeira atividade

const setTurn = (obj, k, valor) => {
  obj[k] = valor;
  return lesson2
}

console.log(setTurn(lesson2, 'turno', 'manha'));

//segunda atividade 

console.log('----------------------')

const setKeys = (ob) => Object.keys(ob);

console.log(setKeys(lesson));
console.log(setKeys(lesson2));
console.log(setKeys(lesson));

