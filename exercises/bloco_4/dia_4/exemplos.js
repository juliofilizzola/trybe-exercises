// exemplos de objeto.

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
};

// pratica

console.log('A jogadora '+ player.name + ' ' + player.lastName + ' ' + 'tem' + ' ' + player.age + ' ' + 'anos de idade.');

player['bestInTheWorlds'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora '+ player.name + ' ' + player.lastName + ' ' + 'foi eleiita a melhor do mundo por 6 vezes, em ' + player.bestInTheWorlds);

console.log('A jogadora '+ player.name + ' ' + player.lastName + ' ' +  'possui ' + player.medals.golden + ' de Ouro e '+ player.medals.silver + ' de prata.' );


// For in


let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge' 
} 

for(let key in names){
  console.log('Olá, ' + names[key])
};

// outro exemplo de for in

