const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
}; // aqui verificamos se o numero é par 

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
}; // aqui verificamos se o numero é impar

repeat(3, isEven); // Testa quais números serão pares;
repeat(3, isOdd); // Testa quais números serão ímpares;

// chamando a função de loop e dando como parametro uma função que verifica se o number é impar ou par
// sendo assim podemos reutilizar uma função sem ter que copiar ele ou modificar o escopo da mesma.
