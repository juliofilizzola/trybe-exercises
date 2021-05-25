import React, { Component } from 'react'


export default class Pokemon extends Component {
  render() {
    const {im, alt} = this.props
    return (
      <div >
        <img src={im} alt={alt} />;
      </div>
    )
  }
}

 
