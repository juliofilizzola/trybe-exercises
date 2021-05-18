const{ encode, decode }= require('../Atividade/Atividade2');

// const decode = require('../Atividade/Atividade2B');

describe( 'Test Encode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  })
  it('Encode retorna 1', () => {
    expect(encode('ana')).toEqual('1n1');
  })
  it('Encode retorna 2', () => {
    expect(encode('e')).toEqual('2');
  });
  it('Encode retorna 3', () => {
    expect(encode('i')).toEqual('3');
  });
});

describe( 'Test decode', () => {
  it('a função Decode é definida', () => {
    expect(decode).toBeDefined();
  });
  it('Decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  it('Decode retorna a', () => {
    expect(decode('1n1')).toEqual('ana');
  });
  it('decode retorna e', () => {
    expect(decode('2')).toEqual('e');
  });
  it('Encode retorna i', () => {
    expect(decode('3')).toEqual('i');
  });
});