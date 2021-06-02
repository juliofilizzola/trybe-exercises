import React, { Component } from 'react'

export default class Combo extends Component {
  render() {
    const { state, func } = this.props
    

    return (
      <div>
        <h3>Seu Estado:</h3>
        <select
        name='estado'
        required
        defaultValue=""
        onChange={ func}>
          <option value="">Selecione</option>
          {state.map((value, index) => <option key={index}>{value}</option>)}
        </select>
      </div>
    )
  }
}
