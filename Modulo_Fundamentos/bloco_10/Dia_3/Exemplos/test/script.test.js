const div = require('../src/script');

describe('Teste mocks "Falso positivo"', () => {
  it('Função recebe true', () => {
    expect(div()).toBe(true); // Não garantimos o retorno certo!
  })
})