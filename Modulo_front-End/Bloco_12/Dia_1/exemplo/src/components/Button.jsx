import React from 'react';

function handleClick() {
  console.log('Clicou no botão!')
}

function handleClick3() {
  console.log('ACHOU')
}
class button extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */

  constructor () {
    super()
    this.handleClick2 = this.handleClick2.bind(this)
  }

  handleClick2() {
    console.log(this);
  } 

  render() {
   
    return (
      <>
      <button onClick={handleClick}>Meu botão</button>
      <button onClick={this.handleClick2}>Meu botão 2</button>
      <button onClick={handleClick3}>Meu botão 3</button>

      </>
    ) 
  }
}

export default button;