const getUserName = require('../src/Atividade2');


it ('test de sucesso', async () => {
  expect.assertions(1);
  const data = await getUserName(4);
  expect(data).toEqual('Mark');
})



it('test de erro', async () => {
  expect.assertions(1);
  try {
   await getUserName('52');
  } catch (error) {
    expect(error).toEqual({ error: 'User with 52 not found.' })
  }
})