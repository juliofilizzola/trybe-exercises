const getUserName = require('../src/Atividade2');

it( 'test de id', () => {
  expect.assertions(1);
  return getUserName('4').then((r) => {
    expect(r).toBe('Mark');
  });
});
