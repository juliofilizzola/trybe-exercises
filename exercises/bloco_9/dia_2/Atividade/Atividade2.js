
const promises = () => {
  const myPromises = new Promise((resolve, reject) => {
    myArray = Array.from(
      {length: 10},
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum =myArray.map(number => number * number)
    .reduce((sum, number) => sum + number);

    sum < 8000 ? resolve(sum) : rejects(sum);
  });

  myPromises
    .then((sum) => console.log(`é isso aí ${sum}`))
    .catch((sum) => console.log(`Errou abestado! ${sum}`));
}

promises();