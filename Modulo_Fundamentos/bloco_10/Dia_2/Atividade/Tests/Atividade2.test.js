const getUserName = require('../src/Atividade2');

it( 'test de id', () => {
  expect.assertions(1);
  return getUserName('4').then((r) => {
    expect(r).toBe('Mark');
  });
});

it('test de erro', () =>{
  expect.assertions(1);
  return getUserName('52').catch((error) => expect(error).toEqual({ error: 'User with 52 not found.' }))
})
