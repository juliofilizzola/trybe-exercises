const{ encode, decode } = require('../Atividade/Atividade2');

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
  it('Encode retorna 4', () => {
    expect(encode('o')).toEqual('4');
  });
  test('Encode retorna 5', () => {
    expect(encode('u')).toEqual('5')
  })
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
  it('Decode retorna e', () => {
    expect(decode('2')).toEqual('e');
  });
  it('Decode retorna i', () => {
    expect(decode('3')).toEqual('i');
  });
  it('Decode retorna o', () => {
    expect(decode('4')).toEqual('o');
  });
  it('Decode Retorna u', () =>{
    expect(decode('5')).toEqual('u')
  })
});
