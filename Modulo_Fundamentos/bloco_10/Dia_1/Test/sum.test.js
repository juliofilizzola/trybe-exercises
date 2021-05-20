const sum = (a, b) => a + b;

test('sums two values', () => { // test está com dois parametros, um é o nome do teste e o outro uma função0 callback
  expect(sum(2, 3)).toEqual(5); // a função expect chama a função a ser testada com parametros e o que ele espera.
});

it('Xablau test', () => { // aqui criei uma função ao qual desse erro.
  expect(sum(2,3)).toEqual(5);
});