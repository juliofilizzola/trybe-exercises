import React, { Component } from 'react'
import Input from './Input';


export default class extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      numeroFavorito: 0,
      vaiComparecer: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
              <textarea name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
         
          <Input value={this.handleChange}/>
        </form>
      </div>
    )
  }
}
