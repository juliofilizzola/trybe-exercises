import React, { Component } from 'react'
import Combo from './Combo';
import Input from './Input';
import States from '../States'

export default class Fieldset extends Component {
constructor() {
  super();

  this.state = {
    counterMouserEnter: false,
  }
}


handleMouseEnter() {
  if(this.state.counterMouserEnter === false) {
    alert('Preencha isso, seu arrombado!')
  }
}
  render() {
      const {func} = this.props;
    return (
      <fieldset>
        <legend>
          Seus Dados:
        </legend>
        <Input func={func}/>
        <Combo state={States} />
      </fieldset>
    )
  }
}
