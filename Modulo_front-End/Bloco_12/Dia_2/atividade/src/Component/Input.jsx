import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <>
      <label>
        Seu Nome: 
        <input name='name' type="text" placeholder="Nome"/>
      </label> 
      <label>
        Seu E-mail: 
        <input name='email' type="text" placeholder="E-Mail"/>
      </label> 
      <label>
        Seu CPF: 
        <input name='cpf' type="number" placeholder="CPF"/>
      </label>
      <label>
        Seu Endereço: 
        <input name='endereco' type="text" placeholder="Endereço"/>
      </label>
      <label>
        Sua Cidade: 
        <input name='city' type="text" placeholder="Cidade"/>
      </label>
      <label>
        Casa 
        <input name='type' type="radio" placeholder="Nome"/>
      </label>
      <label>
        Apartamento 
        <input name='type' type="Casa" placeholder="Nome"/>
      </label>
      </>
    )
  }
}
