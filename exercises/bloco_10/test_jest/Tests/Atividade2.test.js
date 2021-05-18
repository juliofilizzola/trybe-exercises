const{ encode, decode }= require('../Atividade/Atividade2');

// const decode = require('../Atividade/Atividade2B');

describe( 'Test Encode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  })
});


describe( 'Test decode', () => {
  it('a função Decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('Decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  })
})