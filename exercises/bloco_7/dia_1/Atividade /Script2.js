// atividade 1

const fatorial = n => {
  let resp = 1;

  for (let index = 2; index <= n; index += 1){
    resp *= index;
  }
  return resp;
}

console.log(fatorial(8));