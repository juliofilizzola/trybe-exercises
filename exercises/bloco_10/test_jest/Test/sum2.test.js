const sum = require('../test_jest/Exemplos/script');

test('Soma Xablau!', () => {
  expect(sum(2, 3)).toBe(5);
});