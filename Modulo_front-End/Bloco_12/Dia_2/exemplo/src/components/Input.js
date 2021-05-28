import React, { Component } from 'react'

export default class Input extends Component {
  const {value, handleChange} = this.props;
  render() {
    return (
      <input
        type="number"
        name="idade"
        value={this.state.numeroFavorito}
        onChange={handleChange}
      />
    )
  }
}
