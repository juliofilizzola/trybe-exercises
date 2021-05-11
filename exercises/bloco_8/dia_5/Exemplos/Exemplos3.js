let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares ] = numerosPares

console.log(numerosPares); // [6, 8, 10, 12]

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [comida, animal, bebida];

console.log(comida, animal, bebida); // arroz gato água