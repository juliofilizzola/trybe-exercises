import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render () {
    const { name, type, averageWeight, image } = this.props.pokemon; 
    // fazemos algumas variaveís com a propriedade this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
      
      </div>
    );
  }
}



export default Pokemon;