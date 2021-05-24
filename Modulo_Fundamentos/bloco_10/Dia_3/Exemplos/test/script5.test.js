const som = require('../src/script5');



describe('tests de fixação', () => {
  it('Somar', () => {
    som.somar = jest.fn().mockImplementation((a, b) => a + b);
    expect(som.somar(1,3)).toBe(4);
  })
  it('multiply', () => {
    som.multiplicar = jest.fn().mockReturnValue(10);
    expect(som.multiplicar()).toBe(10);
  })
})