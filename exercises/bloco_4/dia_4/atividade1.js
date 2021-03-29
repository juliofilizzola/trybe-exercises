//Atividade 1

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log('Bem Vinda ' + info.personagem);

// atividade 2

info['Recorrente'] = 'Sim';

console.log(info);

// atividade 3

for (let keys in info){
  console.log(keys)
};

// atividade 4

for (let keys in info){
  console.log(info[keys])
}

//atividade 5

let info2 = {
  personagem: 'Pato Donald',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  Recorrente: 'Sim'
};


for (let keys in info){
  if(info[keys]=== info.Recorrente && info[keys] === 'Sim' && info2[keys] === 'Sim'){
    console.log('Ambos Recorrentes');
  } else {
    console.log( info[keys] + ' e ' + info2[keys]);
  };
}