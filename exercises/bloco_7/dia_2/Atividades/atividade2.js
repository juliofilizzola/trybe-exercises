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

const setKeys = ob => Object.keys(ob);

console.log(setKeys(lesson1));
console.log(setKeys(lesson2));
console.log(setKeys(lesson3));

//terceira atividade

const lengthObjs = ob => Object.keys(ob).length;

console.log(lengthObjs(lesson1));
console.log(lengthObjs(lesson2));
console.log(lengthObjs(lesson3));

//Quarta Atividade

const valueOb = ob => Object.values(ob);

console.log(valueOb(lesson1));
console.log(valueOb(lesson2));
console.log(valueOb(lesson3));

// Quinta Atividade

const clone = () => Object.assign({}, {lesson1, lesson2, lesson3});

console.log(clone());

const getNumber = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (let index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
}

console.log(getNumber(clone()));

