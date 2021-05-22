const script = require('../src/script');

describe('Teste"Falso positivo"', () => {
  it('Função recebe true', () => {
   expect(script.divisivelPorDois()).toBe(true); // Não garantimos o retorno certo!
  });
});

describe('Teste Mock', () => {
  it('Função é chamada', () => {
    script.divisivelPorDois = jest.fn().mockReturnValue(true);
    script.divisivelPorDois();
    expect(script.divisivelPorDois).toHaveBeenCalled();
    expect(script.divisivelPorDois()).toBe(true);
  });
});