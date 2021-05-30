import React, { Component } from 'react'

export default class Combo extends Component {
  render() {
    const { state } = this.props

    return (
      <div>
        <select>
          {state.map((value, index) => <option key={index}>{value}</option>)}
        </select>
      </div>
    )
  }
}
