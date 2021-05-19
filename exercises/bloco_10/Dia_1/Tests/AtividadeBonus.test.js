// exercise-bonus.test.js

const searchEmployee = require('../Atividade/AtividadeBonus');

describe('Testa a função searchEmployee', () => {
  it('Testa se searchEmployee é uma função', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Testa se searchEmployee retorna o fistName', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });

  it('Testa se searchEmployee retorna o lastName', () => {
    expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
  });

  it('Testa se searchEmployee retorna um array ', () => {
 
    expect(searchEmployee('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
  });

  it('Testa se um erro com a mensagem "ID não identificada" é retornado quando a ID não existir', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrow();
  });

  it('Testa a mensagem do erro para ID inexistente', () => {
    expect(() => { searchEmployee('1256-8', 'specialities') }).toThrowError(new Error("ID não foi achada!"));
  });
  it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
    expect(() => { searchEmployee() }).toThrow();
  });
  it('Testa a mensagem do erro para informação inexistente', () => {
    expect(() => { searchEmployee('4678-2', 'shift') }).toThrowError(new Error("Nada encotrado"));
  });
});