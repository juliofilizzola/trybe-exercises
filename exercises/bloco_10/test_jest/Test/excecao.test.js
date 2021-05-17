const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();// verificamos se ouve o erro 
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => multiplyByTwo() ).toThrowError(new Error('number é indefinido')); 
  // verificamos se o erro foi new Error('number é indefinido'), capiturando ele com o .toThrowError
});