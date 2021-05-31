import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    const {func} = this.props;
    return (
      <>
      <label>
        Seu Nome: 
        <input name='nome' type="text" onChange={func} placeholder="Nome" required/>
      </label> 
      <label>
        Seu E-mail: 
        <input name='email' type="text" onChange={func} placeholder="E-Mail" required/>
      </label> 
      <label>
        Seu CPF: 
        <input name='cpf' type="number" onChange={func} placeholder="CPF" required/>
      </label>
      <label>
        Seu Endereço: 
        <input name='endereco' type="text" onChange={func} placeholder="Endereço" 
        required/>
      </label>
      <label>
        Sua Cidade: 
        <input name='city' type="text" onChange={func} placeholder="Cidade" required/>
      </label>
      <label>
        Casa 
        <input name='type' type="radio" onChange={func} value="casa" placeholder="Nome"required/>
      </label>
      <label>
        Apartamento 
        <input name='type' type="Casa" onChange={func} value="Apartamento" placeholder="Nome" required/>
      </label>
      </>
    )
  }
}
