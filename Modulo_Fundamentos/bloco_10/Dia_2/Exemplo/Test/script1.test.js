const SumNumber = require('../Exemplos/script1')

test('Testando SumNumbers, soma 5 mais 10', done => {
  SumNumber(5, 10, (result) => {
    expect(result).toBe(15);
    done();
  });
})
