const newEmployees = (createName) => {
  const employees = {
    id1: createName('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: createName('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: createName('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};



const emailCreat = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return `${email}@trybe.com`;
}

console.log(newEmployees(emailCreat));