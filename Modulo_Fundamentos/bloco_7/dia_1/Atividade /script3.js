const buttom = document.getElementById('buttom');
let click = 0
buttom.addEventListener('click', (event) => {
  buttom.innerHTML = click += 1
})