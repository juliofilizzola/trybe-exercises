import React, { Component } from 'react'
import Combo from './Combo';
import Input from './Input';
import States from '../States'

export default class Fieldset extends Component {
  render() {

    return (
      <fieldset>
        <legend>
           Nome
        </legend>
        <Input/>
        <Combo state={States} />
      </fieldset>
    )
  }
}
