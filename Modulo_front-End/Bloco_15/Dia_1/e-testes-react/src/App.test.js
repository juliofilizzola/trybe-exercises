import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se há um input de email na tela', () => {
  const { getByLabelText } = render(<App />);
  //acessar os elementos da minha tela 
  const linkElement = getByLabelText(/email/i);
  // interagir com eles  (caso seja necessario.)
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.type).toBe('text')
});
