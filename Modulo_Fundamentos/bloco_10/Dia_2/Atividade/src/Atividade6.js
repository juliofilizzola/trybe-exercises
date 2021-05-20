const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.find((animal) => animal.name === name);
      if (arrayAnimals) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.find((animal) => animal.age === age);
      if (listAnimals) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 100);
  })
);

const getListAnimals = (nome) => (
  findAnimalsByType(nome).then(list => list)
);

const getAnimal = (age) => findAnimalByAge(age).then(list => list)

module.exports = { getListAnimals, getAnimal}