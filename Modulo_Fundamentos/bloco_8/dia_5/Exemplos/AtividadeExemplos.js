// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Maça', 'Mamão', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Uva', 'Amora', 'Abacate'];

const fruitSalad = (fruit, additional) => [...fruit,...additional];


console.log(fruitSalad(specialFruit, additionalItens));