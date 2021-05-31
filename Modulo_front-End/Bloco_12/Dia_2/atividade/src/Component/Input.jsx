import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const {func} = this.props;
    return (
      <>
      <label>
        Seu Nome: 
        <input name='nome' type="text" onChange={func} maxLength="40" placeholder="Nome" required/>
      </label> 
      <label>
        Seu E-mail: 
        <input name='email' type="text" onChange={func} maxLength="50" placeholder="E-Mail" required/>
      </label> 
      <label>
        Seu CPF: 
        <input name='cpf' type="number" onChange={func} maxLength="11" placeholder="CPF" required/>
      </label>
      <label>
        Seu Endereço: 
        <input name='endereco' type="text" onChange={func} maxLength="200" placeholder="Endereço" 
        required/>
      </label>
      <label>
        Sua Cidade: 
        <input name='city' type="text" onChange={func} maxLength="28" placeholder="Cidade" required/>
      </label>
      <label>
        Casa 
        <input name='type' type="radio" onChange={func} value="Casa" placeholder="Nome"required/>
      </label>
      <label>
        Apartamento 
        <input name='type' type="radio" onChange={func} value="Apartamento" placeholder="Nome" required/>
      </label>
      </>
    )
  }
}
