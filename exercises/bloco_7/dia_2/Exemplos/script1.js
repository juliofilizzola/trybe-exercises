const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

customer.lastname = 'Xablau';

console.log(customer);

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
const lastName = 'Ferreira';
customer[newKey] = lastName;
newKey = 'fullName';
const fullName = `${customer.firstName} ${customer.lastName}`;
customer[newKey] = fullName;
console.log(customer);

// atividade de fixação

const car = {
  marca: 'Fiat',
  pais : 'Italia'
};

const addObject = (ob, key, val) => {
  ob.key = val;
  return car;
}


console.log(addObject(car, 'modelo', 'Palio'));

