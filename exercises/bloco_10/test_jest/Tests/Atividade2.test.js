const encode = require('../Atividade/Atividade2');
// const decode = require('../Atividade/Atividade2B');

describe( 'Test do xablu', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('Test do Encode e decode são funções', () => {
    // expect(typeof encode).toEqual('function');
    expect(() => encode()).toEqual('function');
  })
})