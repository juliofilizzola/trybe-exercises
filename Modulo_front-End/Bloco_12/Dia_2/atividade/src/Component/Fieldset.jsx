import React, { Component } from 'react'
import Combo from './Combo';
import Input from './Input';
import States from '../States'

export default class Fieldset extends Component {
constructor() {
  super();

 
  render() {
      const {func} = this.props;
    return (
      <fieldset>
        
        <Input func={func}/>
        <Combo state={States} />
      </fieldset>
    )
  }
}
