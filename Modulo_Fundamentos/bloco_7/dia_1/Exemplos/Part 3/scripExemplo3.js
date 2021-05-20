// const printName = () => {
//   const myName = "Lucas";
//   return myName;
// }
// console.log(printName());


const printName = () => "Lucas";
console.log(printName()); // Simplificado por ter só um argumento na função

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));  // sem parenteses por ter só um parâmetro.

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));// quando temos mais de um parâmetro, temos que colocar o parenteses.
