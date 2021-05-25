import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
       return (
     <div>
       <div>
        <h1> {name} </h1>
        <h2> {type} </h2>
        <h3> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`} </h3>
       </div>
       <img src={image} alt={`${name} sprite`} />
     </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
