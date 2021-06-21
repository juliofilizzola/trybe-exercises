import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se há um input de email na tela', () => {
  const { getByLabelText } = render(<App />);
  //acessar os elementos da minha tela 
  const linkElement = getByLabelText(/email/i);
  // interagir com eles  (caso seja necessario.)
  expect(linkElement).toBeInTheDocument();
  // verifica se é renderizado.
  expect(linkElement.type).toBe('text')
  // verificando o tipo do item renderizado. 
  
});
