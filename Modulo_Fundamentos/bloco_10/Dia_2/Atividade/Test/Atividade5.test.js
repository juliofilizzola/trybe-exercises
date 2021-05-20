beforeEach(() => console.log('1 - beforeEach 1 - 4')); // Primeiro // quarto
afterEach(() => console.log('1 - afterEach 3 - 8')); // Terceiro

test('', () => console.log('1 - test 2')); // Segundo

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach 5')); // Quarto
  afterEach(() => console.log('2 - afterEach 3 - 7')); // Sexto

  test('', () => console.log('2 - test 6')); // Quinto
});