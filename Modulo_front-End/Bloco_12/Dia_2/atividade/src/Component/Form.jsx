import React, { Component } from 'react'
import Fieldset from './Fieldset';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      idade: 0,
      endereco: '',
      cpf: '',
      city: '',
      estado: '',
      tipo: '',

    }
  }
  render() {
    return (
      <form>
        <Fieldset/>
      </form>
    )
  }
}
