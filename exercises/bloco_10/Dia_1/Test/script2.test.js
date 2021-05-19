const numeros = require('../Exemplos/script2')

describe('Requisito 1 teste', () => {
  it('Exemplo', () => {
    expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});

describe('Requisito 2', () => {
  it('Exemplo espero false', () => {
    expect(false).toEqual(numeros([1, 2, '3', 4, 5]));
  });
});

describe('Requisito 3', () => {
  it('Exemplo espero false', () => {
    expect(false).toEqual(numeros([' ']));
  });
});