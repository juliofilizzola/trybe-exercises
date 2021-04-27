const fist = document.querySelector('#input-Estado');

const statesOfBr = [ 'Selecione um Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará',
'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul',
'Rondônia', 'Roraima', 'Santa Catarina','São Paulo', 'Sergipe', 'Tocantins'];

function states(Estados) {
  for (let index = 0; index < Estados.length; index += 1) {
    const input = document.createElement('option');
    input.innerText = Estados[index];
    input.value = Estados[index];
    fist.appendChild(input);
  }
};

states(statesOfBr);

const del = document.querySelector('#delete');
const forms = document.querySelector('#formu');
const nameInput = document.querySelector('#name-completed');
const emailInput = document.querySelector('#e-mai');
const cpfInput = document.querySelector('#CPF');
const enderecoInput = document.querySelector('#ende');
const cityInput = document.querySelector('#city');
const stadeInput = document.querySelector('#input-Estado');
const resumoInput = document.querySelector('#textA');
const cargoInput = document.querySelector('#Cargo');
const DcargoInput = document.querySelector('#DScarog');
const dataInput = document.querySelector('#data');


const enviar = document.querySelector('#enviar');

function save(event) {
  event.preventDefault();
  localStorage.setItem('Email', emailInput.value);
  localStorage.setItem('CPF', cpfInput.value);
  localStorage.setItem('endereço', enderecoInput.value);
  localStorage.setItem('Cidade', cityInput.value);
  localStorage.setItem('Estado', stadeInput.value);
  localStorage.setItem('Resumo do CV', resumoInput.value);
  localStorage.setItem('Cargo', cargoInput.value);
  localStorage.setItem('Descrição do Cargo', DcargoInput.value);
  localStorage.setItem('Data', dataInput.value);
}

enviar.addEventListener('click', save);


function clearAll() {
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    resumoInput.value = '';
  }
}

del.addEventListener('click', clearAll);
