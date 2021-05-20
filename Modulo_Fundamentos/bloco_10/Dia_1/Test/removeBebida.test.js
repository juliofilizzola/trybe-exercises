const removeBebida = require('../Exemplos/script3');

describe('Remover Sabor de bebida', () => {
  it('Remover água', () => {
    const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'agua'));
  });
  
  it('Remover garapa', () => {
    const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(['coca-cola', 'sukita', 'agua', 'suco de laranja', 'groselha']).toEqual(removeBebida(bebidas, 'garapa'));
  });
  
  it('remover groselha caso exista', () => {
    const bebidas = ['coca-cola', 'sukita', 'agua', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  });
});