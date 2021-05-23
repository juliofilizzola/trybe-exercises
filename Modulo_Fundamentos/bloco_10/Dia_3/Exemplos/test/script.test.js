const script = require('../src/script');

// describe('Teste"Falso positivo"', () => {
//   it('Função recebe true', () => {
//    expect(script.divisivelPorDois()).toBe(true); // Não garantimos o retorno certo!
//   });
// });

describe('Teste Mock', () => {
  script.divisivelPorDois = jest.fn().mockReturnValue(true)
                                    .mockReturnValueOnce(false);
  script.divisivelPorDois();
  it('Função é chamada', () => {
    expect(script.divisivelPorDois).toHaveBeenCalled();
  });
  it('Se a Função retorna true', () => {
    expect(script.divisivelPorDois()).toBe(true);
  });


  it('Se a função retorna false', () => {
    expect(script.divisivelPorDois()).toBe(false);
  })

});
