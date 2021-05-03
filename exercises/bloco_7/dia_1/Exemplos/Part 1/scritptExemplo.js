function userInfo() {
  const userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();
console.log(userEmail);

// aqui vai alguns exemplos 

function idade() {
  for(var idade = 78;  idade <= 100; idade += 1) {
    console.log(idade);
  }

  console.log(idade);
 
  
}

idade();

// o mais recomendado para esses casos é usar let, pois podemos reatribuir o seu valor, mas não podemos chamar ela fora do escopo de bloco.
// Não utilize mais o Var. Só const e let!

// if (true) {
//   // inicio do escopo do if
//   var userAge = "20";
//   console.log(userAge); // 20
//   // fim do escopo do if
// }
// console.log(userAge); // 20
if (true) {
  // inicio do escopo do if
  const userAge = "24";
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20


var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas


const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

let favoriteTechnology = "Machine learning";
favoriteTechnology = "Facial recognition";
console.log(favoriteTechnology); // Facial recognition


// const em relação a um objeto

const userInfo = {
  name: "Cláudio",
  id: "5489-2",
  email: "claudio@email.com"
};
userInfo.name = "João"

console.log(userInfo) // { name: "João", id: "5483-2", email: "claudio@email.com }


const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro