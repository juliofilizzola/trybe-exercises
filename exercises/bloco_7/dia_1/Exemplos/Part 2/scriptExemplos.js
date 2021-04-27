// forma bruta de criar strings 

const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

// forma mais fácil, criada apartir do ES6

const myName = "Isabella"
console.log(`Welcome ${myName}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')