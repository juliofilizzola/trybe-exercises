import React, { Component } from 'react'
import Fieldset from './Fieldset';
import Fildset from './Fildset';


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

    this.changeState = this.changeState.bind(this);
  }

  changeState({target}) {
    let {name, value} = target;
    if(this.setState.name === "name") {
      value = value.toUppercase;
    }

    this.setState({
      [name]: value,
    })

  }


  render() {
    return (
      <form>
        <Fieldset />
        <Fildset/>
      </form>
    )
  }
}
