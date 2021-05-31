import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    const { handleMouseEnter } = this.props
    return (
      <fieldset>
        <legend>Campo de texto:</legend>
        <textarea namme="Office" placeholder='Resumo do Currículo' maxLength="1000" required/>
        <textarea name="Office" placeholder='Digite Seu cargo' onMouseEnter={handleMouseEnter} maxLength="40" required/>
        <textarea placeholder='Descrição do cargo' maxLength="500" required/>
      </fieldset>
    )
  }
}
