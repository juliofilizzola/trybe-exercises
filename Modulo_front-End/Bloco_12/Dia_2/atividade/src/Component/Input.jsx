import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <>
      <label>
        Seu Nome: 
        <input type="text" placeholder="Nome"/>
      </label> 
      <label>
        Seu E-mail: 
        <input type="text" placeholder="E-Mail"/>
      </label> 
      <label>
        Seu CPF: 
        <input type="number" placeholder="CPF"/>
      </label>
      <label>
        Seu Endereço: 
        <input type="text" placeholder="Endereço"/>
      </label>
      <label>
        Sua Cidade: 
        <input type="text" placeholder="Cidade"/>
      </label>
      <label>
        Casa 
        <input type="radio" placeholder="Nome"/>
      </label>
      <label>
        Apartamento 
        <input type="Casa" placeholder="Nome"/>
      </label>
      </>
    )
  }
}
