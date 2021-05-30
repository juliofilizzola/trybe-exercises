import React, { Component } from 'react'
import Fieldset from './Fieldset';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      idade: 0,
      endereco: '',

    }
  }
  render() {
    return (
      <Fieldset/>
    )
  }
}
