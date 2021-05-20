const getListAnimals = require('../Exemplos/script2');

test('Testando com async/await', async () => {
  expect.assertions(2);
  const listDogs = await getListAnimals('Dog');
  expect(listDogs[0].name).toEqual('Dorminhoco');
  expect(listDogs[1].name).toEqual('Soneca');
});

test('Testando com async/await, testando o reject', async () => {
  expect.assertions(1);
  try {
    await getListAnimals('Lion');
  } catch (error) {
    expect(error).toEqual({ error: "Não possui esse tipo de animal." })
  }
});