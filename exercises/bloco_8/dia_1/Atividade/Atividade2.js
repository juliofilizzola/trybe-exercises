const checked = (myn, number) => myn === number;

const sortNumber = (myn, nsorte) => {
  const number = Math.round(Math.random()* 5);
  return nsorte(myn, number) ? "Pabéns, acertou!" : "se fudeu!"
};

console.log(sortNumber(3, checked));