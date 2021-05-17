const sum = require('../Atividade/Atividade1');

describe('Atividade 1', () => {
  it('Test A', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('Test B', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Test C', () => {
    expect(() => sum(4, '5')).toThrow();
  });
  
  it('Test D', () => {
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});