import { render } from '@testing-library/react';
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
});

test('teste de botões ', () => {
   const { getByTestId } = render(<App />);
   const button = getByTestId('id-send');
   expect(button).toBeInTheDocument();
   expect(button).toHaveValue('Enviar');
});

it('Verifica que, ao  inserir um email e clcciar em "enviar, o email apareça na tela', () => {
  const { getByTestId, getByLabelText } = render(<App />);
  const emailImput = getByLabelText('Email');
  const sendButton = getByTestId('id-send');
  const userEmail = getByTestId('id-user-email');
})