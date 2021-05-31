import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    return (
      <fieldset>
        <legend>Campo de texto:</legend>
        <textarea placeholder='Resumo do Currículo' maxLength="1000" required/>
        <textarea placeholder='Digite Seu cargo' maxLength="40" required/>

      </fieldset>
    )
  }
}
