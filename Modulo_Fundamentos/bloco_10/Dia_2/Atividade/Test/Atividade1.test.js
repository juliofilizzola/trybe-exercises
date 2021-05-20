const uppercase = require('../src/Atividade1')

it('test da Atividade 1' , (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});