import React, { Component } from 'react'
import Fieldset from './Fieldset';
import Fildset from './Fildset';
import Input from './Input';


export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      endereco: '',
      cpf: '',
      city: '',
      estado: '',
      type: '',
      email: '',

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
        <Input func={this.changeState} />
        <Fildset/>
      </form>
    )
  }
}
