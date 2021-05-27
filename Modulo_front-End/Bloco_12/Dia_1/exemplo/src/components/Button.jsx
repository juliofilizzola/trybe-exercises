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
    this.handleClick2 = this.handleClick2.bind(this);
    this.state = {
      numerosDeCliques: 0
    }
  }

  handleClick2() {
    this.setState((estadoBefore, _props) => ({
      numerosDeCliques: estadoBefore.numerosDeCliques + 1
    }))
  } 

  render() {
    console.log(this);
    return (
      <>
      <button onClick={handleClick}>Meu botão</button>
      <button onClick={this.handleClick2}>{this.state.numerosDeCliques}</button>
      <button onClick={handleClick3}>Meu botão 3</button>

      </>
    ) 
  }
}

export default button;