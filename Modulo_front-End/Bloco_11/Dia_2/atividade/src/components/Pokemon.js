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
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  // Aqui criamos itens que vai ser ser requeridos e também o tipo que vai receber
  pokemon: PropTypes.shape({
    name: PropTypes.string, // Name tem que ser String
    type: PropTypes.string, // Type tem que ser String
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number // Value tem que ser string
    }),
    image: PropTypes.string, // Image tem que ser String
  }).isRequired, // Todos são requeridos, ou seja, tem que enviar todos.
};

export default Pokemon;