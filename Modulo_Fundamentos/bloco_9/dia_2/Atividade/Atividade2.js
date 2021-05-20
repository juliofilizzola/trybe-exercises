
const promises = () => {
  const myPromises = new Promise((resolve, reject) => {
    myArray = Array.from(
      {length: 10},
      () => Math.floor(Math.random() * 50) + 1
    );
    const sum =myArray.map(number => number * number)
    .reduce((sum, number) => sum + number);

    if(sum < 8000) {
      resolve(sum)
    } 
    reject(sum);
  });

  myPromises
    .then((sum) => console.log(`é isso aí ${sum}`))
    .catch((sum) => console.log(`Errou abestado! ${sum}`));
}

promises();

// feito baseado no vídeo do gabarito;