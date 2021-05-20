const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dv')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .then((thisjoke) => console.log(thisjoke))
    .catch((err) => console.log('errou!' + err));
}

sendJokeToFriend("Anna");