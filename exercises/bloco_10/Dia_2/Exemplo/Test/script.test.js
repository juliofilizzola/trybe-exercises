test("Não deveria passar!", () => { // Falso positivo, por conta do setTimeout
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
  }, 500);
});

test("Não deveria passar!", done => { // por conta da função callback
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!')
    done();
  }, 500);
});