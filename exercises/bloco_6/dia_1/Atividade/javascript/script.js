const fist = document.querySelector('#input-Estado');

const statesOfBr = [ 'Selecione um Estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal',
'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará',
'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul',
'Rondônia', 'Roraima', 'Santa Catarina','São Paulo', 'Sergipe', 'Tocantins'];

function states(Estados) {
  console.log(fist)
  for( let index = 0; index < Estados.length; index += 1){
    const input = document.createElement('option');
    input.innerText = Estados[index];
    input.value = Estados[index]
    fist.appendChild(input)
  }
};

states(statesOfBr);