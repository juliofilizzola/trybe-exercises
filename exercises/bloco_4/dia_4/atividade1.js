//Atividade 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem Vinda ' + info.personagem);

// atividade 2

info['Recorrente'] = 'sim';

console.log(info);

// atividade 3

for (let keys in info){
  console.log(keys)
};

// atividade 4

for (let keys in info){
  console.log(info[keys])
}

//