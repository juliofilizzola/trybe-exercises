import { getRoles, render, screen } from '@testing-library/react';
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

test('verifica se há botões na tela.', () => {
  const { getAllByRole } = render(<App/>);
  const button = getAllByRole('button');
  // expect(button).toBeInTheDocument(); como existe 2 botões ele não consegue destinguir e dar erro 
  // modo correto 
  expect(button.length).toBe(2)
})
