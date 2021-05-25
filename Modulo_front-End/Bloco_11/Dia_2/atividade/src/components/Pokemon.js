import React, { Component } from 'react'

class Pokemon extends Component {
  render() {
       return (
     <div>
       <div>
        <h1></h1>
        <h2></h2>
        <h3></h3>
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
