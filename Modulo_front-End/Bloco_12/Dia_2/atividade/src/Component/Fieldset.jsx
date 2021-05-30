import React, { Component } from 'react'
import Combo from './Combo';
import Input from './Input';

export default class Fieldset extends Component {
  render() {
    return (
      <fieldset>
        <legend>
           <h1>olá</h1>
        </legend>
        <Input/>
        <Combo/>
      </fieldset>
    )
  }
}
