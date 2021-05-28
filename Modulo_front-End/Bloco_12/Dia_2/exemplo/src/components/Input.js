import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <input
        type="number"
        name="idade"
        value={this.state.numeroFavorito}
        onChange={this.handleChange}
      />
    )
  }
}
