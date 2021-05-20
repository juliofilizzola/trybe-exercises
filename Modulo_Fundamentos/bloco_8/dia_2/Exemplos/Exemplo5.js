const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.sort();
// console.log(numbers + "------------"); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
// Como pode notar, a forma como ela organiza os elementos do array não é tão intuitiva. 
// Isso ocorre, pois ela distribui sempre por ordem alfabética . No caso, quando há elementos 
// como números, a sort coloca de acordo com a ordem alfabética dos códigos desse elemento 
// na tabela de caracteres unicode!

numbers.sort((a, b) => a - b);
console.log(numbers);

// outro exemplo para ficar mais claro.

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points); // [1, 5, 10, 25, 40, 100]
points.sort((a, b) => b - a); // aqui revertemos a logica, para que seja inversa a ordenação.
console.log(points); 