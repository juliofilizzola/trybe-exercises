const script = require('../src/script');

describe('Teste"Falso positivo"', () => {
  it('Função recebe true', () => {
   expect(script.divisivelPorDois()).toBe(true); // Não garantimos o retorno certo!
  });
});

describe('Teste Mock', () => {
  script.divisivelPorDois();
  it('Função é chamada', () => {
    expect(script.divisivelPorDois).toHaveBeenCalled();
  });
  script.divisivelPorDois = jest.fn().mockReturnValue(true);
  it('Se a Função retorna true', () => {
    expect(script.divisivelPorDois()).toBe(true);
  });


});
// describe('Teste de função false', () => {
//   script.divisivelPorDois = jest.fn().mockReturnValue(false);
//   it('Se a função retorna false', () => {
//     expect(script.divisivelPorDois()).toBe(false);
//   })
// })